import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  ({ chromium } = require("C:/Users/John/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright"));
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const reportUrl = pathToFileURL(path.join(root, "report.html")).href;
const output = path.join(root, "report.pdf");
const executablePath = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";

const browser = await chromium.launch({ headless: true, executablePath });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
await page.goto(reportUrl, { waitUntil: "networkidle" });
await page.pdf({
  path: output,
  format: "A4",
  printBackground: true,
  margin: { top: "12mm", right: "10mm", bottom: "12mm", left: "10mm" },
});
await browser.close();

console.log(output);
