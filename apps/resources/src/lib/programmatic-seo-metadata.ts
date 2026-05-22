/** @deprecated Use `@/lib/resources/metadata` */
export { buildResourceRouteMetadata as buildProgrammaticSeoMetadata } from "./resources/metadata";

export async function getProgrammaticPageCopy(
  slug: string,
  page: { h1: string; metaDesc: string }
) {
  const { getResourcePageCopy } = await import("./resources/metadata");
  const cms = await getResourcePageCopy([slug]);
  return {
    h1: cms?.h1 ?? page.h1,
    subheadline: cms?.subheadline,
  };
}
