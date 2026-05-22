import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceRouteClient } from "@/app/resources/ResourceRouteClient";
import {
  buildResourceRouteMetadata,
  loadProgrammaticCopy,
} from "@/lib/resources/metadata";
import { getProgrammaticSeoPageBySlug } from "@/lib/programmatic-seo-data";
import {
  allResourceStaticPaths,
  resolveResourcePage,
} from "@/lib/resources/page-registry";

export const dynamic = "force-static";

export function generateStaticParams() {
  return allResourceStaticPaths();
}

type PageProps = {
  params: Promise<{ path?: string[] }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { path: pathParam } = await params;
  const path = pathParam ?? [];
  const page = resolveResourcePage(path);
  if (!page) {
    return { title: "Not Found" };
  }
  return buildResourceRouteMetadata(path);
}

export default async function ResourceRoutePage({ params }: PageProps) {
  const { path: pathParam } = await params;
  const path = pathParam ?? [];
  const page = resolveResourcePage(path);

  if (!page) {
    notFound();
  }

  const programmaticPage =
    page.kind === "programmatic" ? getProgrammaticSeoPageBySlug(path[0]) : undefined;
  if (page.kind === "programmatic" && !programmaticPage) {
    notFound();
  }

  const programmaticCopy =
    page.kind === "programmatic" ? await loadProgrammaticCopy(path) : undefined;

  return (
    <ResourceRouteClient
      page={page}
      programmaticCopy={programmaticCopy}
      programmaticPage={programmaticPage}
    />
  );
}
