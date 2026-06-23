import path from "node:path";
import fs from "node:fs";
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
const indexUrl = pathToFileURL(path.join(root, "index.html")).href;
const outputDir = path.join(root, "verification");
fs.mkdirSync(outputDir, { recursive: true });
const executablePath = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";

const browser = await chromium.launch({ headless: true, executablePath });
const page = await browser.newPage({ viewport: { width: 417, height: 782 }, deviceScaleFactor: 1 });
await page.goto(indexUrl, { waitUntil: "networkidle" });
await page.screenshot({ path: path.join(outputDir, "home.png"), fullPage: true });
await page.click('[data-tab="checkin"]');
await page.screenshot({ path: path.join(outputDir, "checkin.png"), fullPage: true });
await page.click('[data-tab="services"]');
await page.screenshot({ path: path.join(outputDir, "services-location.png"), fullPage: true });
await page.click('[data-action="close-location"]');
await page.screenshot({ path: path.join(outputDir, "services.png"), fullPage: true });
await page.click('[data-tab="profile"]');
await page.screenshot({ path: path.join(outputDir, "profile.png"), fullPage: true });
await page.click('[data-tab="home"]');
await page.click('[data-route="add-child"]');
await page.screenshot({ path: path.join(outputDir, "add-child.png"), fullPage: true });
await browser.close();

console.log(outputDir);
