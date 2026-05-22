/** URL helpers for routes under `/resources/`. */

/** Safe URL segment from a template title (no slashes or parens). */
export function templateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[()/]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function pathKey(path: string[]): string {
  return path.join("/");
}

export function resourcePath(path: string[]): string {
  return path.length ? `/resources/${path.join("/")}/` : "/resources/";
}

export function parseResourcePath(path: string[]): {
  segments: string[];
  category?: string;
  slug?: string;
} {
  const segments = path.filter(Boolean);
  return {
    segments,
    category: segments[0],
    slug: segments[1],
  };
}
