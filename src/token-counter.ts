/**
 * Token 估算器
 * 当 API 响应不包含 usage 字段时，用启发式算法粗略估算 token 数量。
 *
 * 估算规则（基于 GPT tokenizer 的经验值）：
 * - 英文：约 4 个字符 ≈ 1 token（即每词约 1.3 token）
 * - 中文：约 1.5 token/字（折中取值：GPT-4o≈1.2、Claude/老GPT≈1.5-1.7、国产模型≈0.6-1.0，
 *   统一一套系数无法按模型细分，取中位偏保守，宁可略高不明显低估）
 * - 代码/符号：约 4 个字符 ≈ 1 token
 * 说明：仅用于 API 响应缺失 usage 字段时的兜底估算；有真实 usage 时始终以真实值为准。
 */

/** 图像输入的兜底估算 token 数（近似 OpenAI「low」档经验值）；精确值以 API usage 为准 */
const MULTIMODAL_IMAGE_TOKENS_ESTIMATE = 765;

export class TokenCounter {
  /**
   * 估算文本的 token 数量
   */
  estimate(text: string): number {
    if (!text) return 0;

    const chineseChars = (text.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length;
    const cjkPunctuation = (text.match(/[\u3000-\u303f\uff00-\uffef]/g) || []).length;
    const englishWords = (text.match(/[a-zA-Z]+/g) || []).length;

    // 估算英文单词占用的字符数（平均每词约 4 字符）
    const englishCharEstimate = englishWords * 4;
    // 剩余非中文非英文的字符数（符号、数字、空格等）
    const otherChars = Math.max(0, text.length - chineseChars - cjkPunctuation - englishCharEstimate);

    // 中文 ≈ 1.5 token/字，中文标点 ≈ 0.75 token/字，英文单词 ≈ 1.3 token/词，符号 ≈ 0.25 token/字符
    const estimate = Math.ceil(
      chineseChars * 1.5 +
      cjkPunctuation * 0.75 +
      englishWords * 1.3 +
      otherChars * 0.25
    );

    return Math.max(0, estimate);
  }

  /**
   * 判断 messages 是否包含图像/音频等多模态输入部分。
   * 这些部分无法按文本精确估算 token，若最终回退到启发式估算会导致输入被严重低估，
   * 调用方据此在记录上标记 multimodalEstimated 提示用户。
   */
  hasMultimodal(messages: any[]): boolean {
    if (!Array.isArray(messages)) return false;
    const walk = (content: any): boolean => {
      if (typeof content === "string") return false;
      if (Array.isArray(content)) return content.some(walk);
      if (!content || typeof content !== "object") return false;
      if (content.image_url || content.input_audio || content.file || content.audio) return true;
      // 思源 / 部分厂商的 attachments / files 字段
      if (Array.isArray(content.content)) return content.content.some(walk);
      return false;
    };
    for (const msg of messages) {
      if (typeof msg === "string") continue;
      if (walk(msg?.content)) return true;
      if (Array.isArray(msg?.tool_calls)) {
        for (const tc of msg.tool_calls) {
          if (tc?.function?.arguments) {
            try {
              const args = typeof tc.function.arguments === "string" ? JSON.parse(tc.function.arguments) : tc.function.arguments;
              if (walk(args)) return true;
            } catch {
              // 参数非 JSON，忽略
            }
          }
        }
      }
    }
    return false;
  }

  /**
   * 从 OpenAI 格式的 messages 数组估算输入 token
   */
  estimateFromMessages(messages: any[]): number {
    if (!Array.isArray(messages)) return 0;
    let total = 0;
    for (const msg of messages) {
      if (typeof msg === "string") {
        total += this.estimate(msg) + 4; // 每条消息约 4 token 开销
      } else if (msg?.content) {
        if (typeof msg.content === "string") {
          total += this.estimate(msg.content) + 4;
        } else if (Array.isArray(msg.content)) {
          for (const part of msg.content) {
            if (typeof part === "string") {
              total += this.estimate(part);
            } else if (part?.text) {
              total += this.estimate(part.text);
            } else if (part?.image_url) {
              // 图像：无法获知分辨率/清晰度，按 OpenAI「low」档经验值粗略计入，避免完全漏算；
              // 实际精确值以 API usage 为准（有 usage 时不走此估算路径）
              total += MULTIMODAL_IMAGE_TOKENS_ESTIMATE;
            }
            // 音频/文件：无时长或页数信息，无法估算，保持 0（由上层 multimodalEstimated 标记提示）
          }
          total += 4;
        }
      }
      // tool_calls：函数名 + 参数（JSON 字符串）的 token 估算，漏算会导致含工具调用的请求少估
      if (Array.isArray(msg.tool_calls)) {
        for (const tc of msg.tool_calls) {
          if (tc?.function?.name) total += this.estimate(tc.function.name) + 1;
          if (typeof tc?.function?.arguments === "string") {
            total += this.estimate(tc.function.arguments);
          }
        }
        total += 4; // tool 消息固定开销
      }
      if (msg?.role) total += 1; // role 字段约 1 token
    }
    return total;
  }

  /**
   * 从响应文本估算输出 token
   */
  estimateFromText(text: string): number {
    return this.estimate(text);
  }
}
