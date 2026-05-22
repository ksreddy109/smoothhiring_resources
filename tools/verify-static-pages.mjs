#!/usr/bin/env node
/**
 * Validates every static HTML page in apps/resources/out after `pnpm build`.
 * Usage: node tools/verify-static-pages.mjs [--base-url http://localhost:3001]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../apps/resources/out");

const baseUrl = process.argv.includes("--base-url")
  ? process.argv[process.argv.indexOf("--base-url") + 1]
  : null;

const FAIL_PATTERNS = [
  /This page couldn\x27t load/i,
  /Application error: a client-side exception/i,
  /Unhandled Runtime Error/i,
];

const MIN_BYTES = 500;

function walkHtmlFiles(dir, base = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) files.push(...walkHtmlFiles(full, base));
    else if (ent.name === "index.html") files.push(full);
  }
  return files;
}

function fileToUrl(file) {
  const rel = path.relative(outDir, path.dirname(file));
  if (rel === "" || rel === ".") return "/";
  return `/${rel.split(path.sep).join("/")}/`;
}

function validateHtml(file) {
  const html = fs.readFileSync(file, "utf8");
  const issues = [];
  if (html.length < MIN_BYTES) issues.push(`too small (${html.length} bytes)`);
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim();
  if (!title) issues.push("missing <title>");
  for (const re of FAIL_PATTERNS) {
    if (re.test(html)) issues.push(`matched ${re}`);
  }
  return { title, issues };
}

async function fetchCheck(url) {
  const res = await fetch(url, { redirect: "follow" });
  const html = await res.text();
  const issues = [];
  if (res.status !== 200) issues.push(`HTTP ${res.status}`);
  if (html.length < MIN_BYTES) issues.push(`too small (${html.length} bytes)`);
  for (const re of FAIL_PATTERNS) {
    if (re.test(html)) issues.push(`matched ${re}`);
  }
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim();
  if (!title) issues.push("missing <title>");
  return { status: res.status, title, issues };
}

if (!fs.existsSync(outDir)) {
  console.error(`Missing ${outDir}. Run: pnpm build:resources`);
  process.exit(1);
}

const htmlFiles = walkHtmlFiles(outDir).sort();
const resourcePages = htmlFiles.filter((f) => fileToUrl(f).startsWith("/resources/"));
const otherPages = htmlFiles.filter((f) => !fileToUrl(f).startsWith("/resources/"));

console.log(`Found ${htmlFiles.length} index.html files (${resourcePages.length} under /resources/)`);

const failures = [];

for (const file of htmlFiles) {
  const url = fileToUrl(file);
  const { title, issues } = validateHtml(file);
  if (issues.length) failures.push({ url, file, title, issues, phase: "disk" });
}

if (baseUrl) {
  console.log(`\nHTTP checks against ${baseUrl} ...`);
  const urls = htmlFiles.map(fileToUrl);
  const unique = [...new Set(urls)];

  let i = 0;
  for (const url of unique) {
    const full = `${baseUrl.replace(/\/$/, "")}${url === "/" ? "/" : url}`;
    try {
      const { status, title, issues } = await fetchCheck(full);
      if (issues.length) failures.push({ url, title, issues: [`HTTP ${status}`, ...issues], phase: "http" });
    } catch (e) {
      failures.push({ url, issues: [String(e)], phase: "http" });
    }
    i++;
    if (i % 100 === 0) process.stdout.write(`  ${i}/${unique.length}\n`);
  }
}

if (failures.length === 0) {
  console.log("\n✓ All pages passed static validation.");
  process.exit(0);
}

console.log(`\n✗ ${failures.length} failure(s):\n`);
for (const f of failures.slice(0, 30)) {
  console.log(`  ${f.url} [${f.phase}]`);
  console.log(`    title: ${f.title ?? "(none)"}`);
  for (const issue of f.issues) console.log(`    - ${issue}`);
}
if (failures.length > 30) console.log(`  ... and ${failures.length - 30} more`);
process.exit(1);
