import type { Metadata } from "next";
import {
  INTERVIEW_TEMPLATE_SLUGS,
  JOB_TEMPLATE_SLUGS,
  OFFER_TEMPLATE_SLUGS,
  POLICY_TEMPLATE_SLUGS,
  REJECTION_TEMPLATE_SLUGS,
  RESOURCE_ITEMS,
} from "./resources-data";
import { getSiteUrl, sitePath } from "./site";

const ORG = "SmoothHiring";

const DEFAULT_DESC =
  "Free hiring resources, interview kits, and HR templates to help teams hire better and faster.";

const itemBySlug = new Map(RESOURCE_ITEMS.map((i) => [i.slug, i]));

function humanizeSegment(s: string) {
  return s
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function titleFromPath(path: string[]) {
  if (path.length === 0) {
    return "Hiring Resources and Templates";
  }
  if (path.length === 1) {
    const it = itemBySlug.get(path[0]);
    if (it) return it.title;
    if (path[0] === "email-templates") return "Email Templates";
    if (path[0] === "rejection-letter-templates") return "Rejection Letter Templates";
    if (path[0] === "interview-letter-templates") return "Interview Letter Templates";
    return humanizeSegment(path[0]);
  }
  const [a, b] = path;
  if (a === "job-description-templates" && b) {
    if (JOB_TEMPLATE_SLUGS.includes(b)) return `${humanizeSegment(b)} Job Description Template`;
  }
  if (a === "policy-templates" && b) {
    if (POLICY_TEMPLATE_SLUGS.includes(b)) return `${humanizeSegment(b)} HR Policy Template`;
  }
  if (a === "offer-letter-templates" && b) {
    if (OFFER_TEMPLATE_SLUGS.includes(b)) return `${humanizeSegment(b)} Offer Letter Template`;
  }
  if (a === "interview-letter-templates" && b) {
    if (INTERVIEW_TEMPLATE_SLUGS.includes(b)) return `${humanizeSegment(b)} Interview Letter Template`;
  }
  if (a === "rejection-letter-templates" && b) {
    if (REJECTION_TEMPLATE_SLUGS.includes(b)) return `${humanizeSegment(b)} Rejection Letter Template`;
  }
  return path.map(humanizeSegment).join(" | ");
}

function descriptionFromPath(path: string[], title: string) {
  if (path.length === 0) return DEFAULT_DESC;
  if (path.length === 1) {
    const it = itemBySlug.get(path[0]);
    if (it) return it.description;
  }
  return `${title}. Free template from ${ORG}. ${DEFAULT_DESC}`.slice(0, 160);
}

function resourcePathString(path: string[]) {
  return path.length ? `/resources/${path.join("/")}/` : "/resources/";
}

export function buildResourcePageMetadata(path: string[]): Metadata {
  const pathSeg = path ?? [];
  const pageTitle = titleFromPath(pathSeg);
  const desc = descriptionFromPath(pathSeg, pageTitle);
  const pathStr = resourcePathString(pathSeg);
  const url = sitePath(pathStr);
  return {
    title: pageTitle,
    description: desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: pathSeg.length === 0 ? "website" : "article",
      url,
      title: pageTitle,
      description: desc,
      siteName: "SmoothHiring Resources",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: desc,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildWebSiteJsonLd() {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SmoothHiring Resources",
    url: base,
    description: DEFAULT_DESC,
    publisher: {
      "@type": "Organization",
      name: ORG,
      url: "https://www.smoothhiring.com",
    },
    inLanguage: "en-US",
  };
}

