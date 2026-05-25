#!/usr/bin/env node
/**
 * Browser hydration check for static export (sample or all pages).
 * Requires: npx playwright install chromium (first run)
 *
 *   node tools/verify-static-hydration.mjs --base-url http://localhost:3001
 *   node tools/verify-static-hydration.mjs --base-url http://localhost:3001 --all
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../apps/resources/out");

const baseIdx = process.argv.indexOf("--base-url");
const baseUrl = baseIdx >= 0 ? process.argv[baseIdx + 1] : "http://localhost:3001";
const checkAll = process.argv.includes("--all");

const ERROR_MARKERS = [
  "This page couldn't load",
  "Application error: a client-side exception",
  "Unhandled Runtime Error",
];

function walkHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) files.push(...walkHtmlFiles(full));
    else if (ent.name === "index.html") files.push(full);
  }
  return files;
}

function fileToUrl(file) {
  const rel = path.relative(outDir, path.dirname(file));
  if (rel === "" || rel === ".") return "/";
  return `/${rel.split(path.sep).join("/")}/`;
}

const allUrls = walkHtmlFiles(outDir).map(fileToUrl).sort();
const sampleUrls = [
  "/",
  "/resources/",
  "/resources/ai-job-description/",
  "/resources/ai-interview-kit/",
  "/resources/job-description-templates/",
  "/resources/job-description-templates/accounts-receivable-clerk-job-description/",
  "/resources/job-description-templates/uxui-designer-job-description/",
  "/resources/offer-letter-templates/",
  "/resources/offer-letter-templates/formal-job-offer-template/",
  "/resources/policy-templates/",
  "/resources/policy-templates/employee-payroll-advance-policy-template/",
  "/resources/rejection-letter-templates/",
  "/resources/rejection-letter-templates/formal-rejection-letter-template/",
  "/resources/interview-letter-templates/",
  "/resources/interview-letter-templates/formal-interview-letter-template/",
  "/resources/email-templates/",
  "/resources/hiring-software-for-healthcare/",
  "/resources/ats-for-small-business/",
];

const urls = checkAll ? allUrls : sampleUrls;

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error("Install playwright: cd smoothhiring_resources && pnpm add -D playwright");
  process.exit(1);
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const failures = [];
let done = 0;

async function expectTemplateNav({ from, clickText, expectUrlIncludes, expectBodyIncludes }) {
  const page = await context.newPage();
  const full = `${baseUrl.replace(/\/$/, "")}${from}`;
  try {
    await page.goto(full, { waitUntil: "networkidle", timeout: 30000 });
    const card = page.getByRole("link", { name: new RegExp(clickText, "i") }).first();
    await card.click();
    await page.waitForTimeout(2500);
    const url = page.url();
    const body = await page.locator("body").innerText();
    if (!url.includes(expectUrlIncludes)) {
      failures.push({ url: from, error: `nav URL expected *${expectUrlIncludes}*, got ${url}` });
    } else if (!body.includes(expectBodyIncludes)) {
      failures.push({ url: from, error: `nav body missing "${expectBodyIncludes}"` });
    }
  } catch (e) {
    failures.push({ url: from, error: String(e) });
  } finally {
    await page.close();
  }
}

for (const url of urls) {
  const page = await context.newPage();
  const full = `${baseUrl.replace(/\/$/, "")}${url === "/" ? "/" : url}`;
  try {
    await page.goto(full, { waitUntil: "domcontentloaded", timeout: 20000 });
    await page.waitForTimeout(1200);
    const body = await page.locator("body").innerText();
    const title = await page.title();
    for (const marker of ERROR_MARKERS) {
      if (body.includes(marker)) {
        failures.push({ url, title, error: marker });
        break;
      }
    }
    if (url === "/resources/not-a-real-slug-xyz/" && !title.includes("404")) {
      failures.push({ url, title, error: "expected 404 title" });
    }
  } catch (e) {
    failures.push({ url, error: String(e) });
  } finally {
    await page.close();
  }
  done++;
  if (done % 50 === 0) console.log(`  ${done}/${urls.length}`);
}

if (!checkAll) {
  await expectTemplateNav({
    from: "/resources/job-description-templates/",
    clickText: "Accounts Receivable Clerk",
    expectUrlIncludes: "accounts-receivable-clerk-job-description",
    expectBodyIncludes: "Accounts Receivable Clerk",
  });
  await expectTemplateNav({
    from: "/resources/policy-templates/",
    clickText: "Employee Payroll Advance",
    expectUrlIncludes: "employee-payroll-advance-policy-template",
    expectBodyIncludes: "Payroll Advance",
  });
}

await browser.close();

if (failures.length) {
  console.log(`\n✗ ${failures.length} hydration failure(s):`);
  failures.slice(0, 20).forEach((f) => console.log(`  ${f.url}: ${f.error ?? ""} (${f.title ?? ""})`));
  process.exit(1);
}

console.log(`\n✓ ${urls.length} page(s) passed browser hydration checks (${checkAll ? "all" : "sample"}).`);
