import type { Metadata } from "next";
import { allResourceCatchAllPathParams } from "@/lib/resources-data";
import { buildResourcePageMetadata } from "@/lib/seo-metadata";
import { ResourcesClientLoader } from "../ResourcesClientLoader";

export const dynamic = "force-static";

export function generateStaticParams() {
  return allResourceCatchAllPathParams();
}

type PageProps = {
  params: Promise<{ path?: string[] }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { path: pathParam } = await params;
  const path = pathParam ?? [];
  return buildResourcePageMetadata(path);
}

export default function ResourcesClientHost() {
  return <ResourcesClientLoader />;
}
