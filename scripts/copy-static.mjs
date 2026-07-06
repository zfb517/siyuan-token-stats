import { copyFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const distDir = resolve(root, "dist");
await mkdir(distDir, { recursive: true });

const staticFiles = ["plugin.json", "README.md", "icon.png"];
for (const file of staticFiles) {
  try {
    await copyFile(resolve(root, file), resolve(distDir, file));
    console.log(`[copy] ${file}`);
  } catch {
    console.warn(`[skip] ${file} not found`);
  }
}
console.log("Static files copied to dist/");
