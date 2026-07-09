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
            }
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
