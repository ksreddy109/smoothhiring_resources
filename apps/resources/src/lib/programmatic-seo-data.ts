import fs from "node:fs";
import path from "node:path";

export type ProgrammaticSeoIndustryPage = {
  kind: "industry";
  slug: string;
  urlPath: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  industryName: string;
  typicalRoles: string;
  mainChallenge: string;
};

export type ProgrammaticSeoUseCasePage = {
  kind: "usecase";
  slug: string;
  urlPath: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  usecaseName: string;
  usecaseDesc: string;
  businessSize: string;
};

export type ProgrammaticSeoPage = ProgrammaticSeoIndustryPage | ProgrammaticSeoUseCasePage;

const DATA_DIR = path.join(process.cwd(), "data", "programmatic-seo");

/** Public path on smoothhiring.com (CloudFront routes `/resources*` to S3). */
export function programmaticPublicPath(slug: string): string {
  return `/resources/${slug}/`;
}

/** Parse a single CSV row respecting quoted fields. */
function parseCsvRow(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (ch === "," && !inQuotes) {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += ch;
  }
  out.push(cur);
  return out;
}

function readCsvFile(filename: string): Record<string, string>[] {
  const filePath = path.join(DATA_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8").trim();
  const lines = raw.split(/\r?\n/);
  const header = parseCsvRow(lines[0]);
  return lines.slice(1).filter(Boolean).map((line) => {
    const cols = parseCsvRow(line);
    const row: Record<string, string> = {};
    header.forEach((key, i) => {
      row[key] = cols[i] ?? "";
    });
    return row;
  });
}

function loadPages(): ProgrammaticSeoPage[] {
  const industry = readCsvFile("sh_industry_pages.csv").map((row): ProgrammaticSeoIndustryPage => ({
    kind: "industry",
    slug: row.slug,
    urlPath: row.url_path,
    metaTitle: row.meta_title,
    metaDesc: row.meta_desc,
    h1: row.h1,
    industryName: row.industry_name,
    typicalRoles: row.typical_roles,
    mainChallenge: row.main_challenge,
  }));

  const usecase = readCsvFile("sh_usecase_pages.csv").map((row): ProgrammaticSeoUseCasePage => ({
    kind: "usecase",
    slug: row.slug,
    urlPath: row.url_path,
    metaTitle: row.meta_title,
    metaDesc: row.meta_desc,
    h1: row.h1,
    usecaseName: row.usecase_name,
    usecaseDesc: row.usecase_desc,
    businessSize: row.business_size,
  }));

  return [...industry, ...usecase];
}

let cache: ProgrammaticSeoPage[] | null = null;

export function getAllProgrammaticSeoPages(): ProgrammaticSeoPage[] {
  if (!cache) cache = loadPages();
  return cache;
}

export function getProgrammaticSeoPageBySlug(slug: string): ProgrammaticSeoPage | undefined {
  return getAllProgrammaticSeoPages().find((p) => p.slug === slug);
}

export function allProgrammaticSeoSlugs(): string[] {
  return getAllProgrammaticSeoPages().map((p) => p.slug);
}
