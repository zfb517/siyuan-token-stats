/**
 * Generate icon.png for the SiYuan plugin
 * 128x128 transparent PNG with coin outline + ascending bar chart
 */
import { writeFileSync } from "node:fs";
import { deflateSync } from "node:zlib";

const SIZE = 128;

// RGBA pixel buffer
const pixels = new Uint8Array(SIZE * SIZE * 4);

// Helper: set pixel with alpha blending
function setPixel(x, y, r, g, b, a) {
  if (x < 0 || x >= SIZE || y < 0 || y >= SIZE) return;
  const idx = (y * SIZE + x) * 4;
  const alpha = a / 255;
  const oldR = pixels[idx];
  const oldG = pixels[idx + 1];
  const oldB = pixels[idx + 2];
  const oldA = pixels[idx + 3] / 255;
  const outA = alpha + oldA * (1 - alpha);
  if (outA === 0) return;
  pixels[idx] = Math.round((r * alpha + oldR * oldA * (1 - alpha)) / outA);
  pixels[idx + 1] = Math.round((g * alpha + oldG * oldA * (1 - alpha)) / outA);
  pixels[idx + 2] = Math.round((b * alpha + oldB * oldA * (1 - alpha)) / outA);
  pixels[idx + 3] = Math.round(outA * 255);
}

// Draw anti-aliased line (horizontal/vertical aware)
function fillRect(x0, y0, x1, y1, r, g, b, a) {
  for (let y = Math.floor(y0); y <= Math.ceil(y1); y++) {
    for (let x = Math.floor(x0); x <= Math.ceil(x1); x++) {
      const cx = Math.max(x0, Math.min(x, x1));
      const cy = Math.max(y0, Math.min(y, y1));
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      let alpha = a;
      if (dist > 0.5) alpha = a * Math.max(0, 1 - (dist - 0.5));
      setPixel(x, y, r, g, b, alpha);
    }
  }
}

// Draw filled circle outline
function strokeCircle(cx, cy, radius, thickness, r, g, b, a) {
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      const diff = Math.abs(dist - radius);
      if (diff < thickness / 2) {
        const alpha = a * (1 - diff / (thickness / 2));
        setPixel(x, y, r, g, b, alpha);
      } else if (diff < thickness / 2 + 1) {
        const alpha = a * (thickness / 2 + 1 - diff) * 0.5;
        setPixel(x, y, r, g, b, alpha);
      }
    }
  }
}

// Draw filled rounded rect
function fillRoundedRect(x0, y0, w, h, radius, r, g, b, a) {
  for (let y = y0; y < y0 + h; y++) {
    for (let x = x0; x < x0 + w; x++) {
      // Check corners for rounding
      let inside = true;
      const corners = [
        [x0 + radius, y0 + radius],
        [x0 + w - radius, y0 + radius],
        [x0 + radius, y0 + h - radius],
        [x0 + w - radius, y0 + h - radius],
      ];
      for (const [cx, cy] of corners) {
        const inCornerX = (x < x0 + radius && x >= x0) || (x > x0 + w - radius - 1 && x < x0 + w);
        const inCornerY = (y < y0 + radius && y >= y0) || (y > y0 + h - radius - 1 && y < y0 + h);
        if (inCornerX && inCornerY) {
          const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
          if (dist > radius) {
            inside = false;
            break;
          }
        }
      }
      if (inside) {
        // Anti-alias edges
        let edgeAlpha = a;
        const edgeDist = Math.min(x - x0, y - y0, x0 + w - 1 - x, y0 + h - 1 - y);
        if (edgeDist < 1) edgeAlpha = a * (edgeDist + 0.5);
        setPixel(x, y, r, g, b, edgeAlpha);
      }
    }
  }
}

// === Draw the icon ===

// Colors
const ringR = 70, ringG = 130, ringB = 200;     // Blue ring
const innerR = 70, innerG = 130, innerB = 200;  // Inner circle (will use lower alpha)
const bar1R = 100, bar1G = 160, bar1B = 210;    // Light blue
const bar2R = 70, bar2G = 130, bar2B = 200;     // Medium blue
const bar3R = 40, bar3G = 100, bar3B = 170;     // Dark blue

// Outer ring (coin outline) - radius 52, thickness 5, centered at (64,64)
strokeCircle(64, 64, 52, 5, ringR, ringG, ringB, 255);

// Inner decorative circle - radius 40, thin, semi-transparent
strokeCircle(64, 64, 40, 1.5, innerR, innerG, innerB, 60);

// Three ascending bars (bottom aligned at y=88)
// Bar 1 (shortest)
fillRoundedRect(38, 64, 14, 24, 2, bar1R, bar1G, bar1B, 255);
// Bar 2 (medium)
fillRoundedRect(57, 50, 14, 38, 2, bar2R, bar2G, bar2B, 255);
// Bar 3 (tallest)
fillRoundedRect(76, 36, 14, 52, 2, bar3R, bar3G, bar3B, 255);

// === Encode PNG ===

// PNG signature
const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

// IHDR chunk
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(SIZE, 0);  // width
ihdr.writeUInt32BE(SIZE, 4);  // height
ihdr[8] = 8;   // bit depth
ihdr[9] = 6;   // color type (RGBA)
ihdr[10] = 0;  // compression
ihdr[11] = 0;  // filter
ihdr[12] = 0;  // interlace

// IDAT chunk - raw image data with filter byte per row
const rawData = Buffer.alloc(SIZE * (1 + SIZE * 4));
let offset = 0;
for (let y = 0; y < SIZE; y++) {
  rawData[offset++] = 0; // filter type: None
  for (let x = 0; x < SIZE; x++) {
    const idx = (y * SIZE + x) * 4;
    rawData[offset++] = pixels[idx];
    rawData[offset++] = pixels[idx + 1];
    rawData[offset++] = pixels[idx + 2];
    rawData[offset++] = pixels[idx + 3];
  }
}
const compressed = deflateSync(rawData, { level: 9 });

// IEND chunk (empty data)
const iend = Buffer.alloc(0);

// CRC32
const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xEDB88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  }
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  const crcData = Buffer.concat([typeBuf, data]);
  crcBuf.writeUInt32BE(crc32(crcData), 0);
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

const png = Buffer.concat([
  sig,
  makeChunk("IHDR", ihdr),
  makeChunk("IDAT", compressed),
  makeChunk("IEND", iend),
]);

const outPath = new URL("../icon.png", import.meta.url);
writeFileSync(outPath, png);
console.log(`icon.png generated: ${png.length} bytes`);
