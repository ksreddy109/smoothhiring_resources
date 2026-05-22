/**
 * @deprecated Import from `@/lib/resources/page-registry` instead.
 * Re-exports kept for existing imports during migration.
 */
export {
  RESOURCE_HUB_ITEMS as RESOURCE_ITEMS,
  allResourceStaticPaths as allResourceCatchAllPathParams,
  getResourcePageRegistry,
  resolveResourcePage,
} from "./resources/page-registry";

export type { ResourcePageKind as ResourceCategory } from "./resources/page-registry";

export { getSiteUrl as SITE_URL } from "./site";
