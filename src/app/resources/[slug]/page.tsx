import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RESOURCE_ITEMS } from "@/lib/resources-data";

type Params = { slug: string };

export function generateStaticParams() {
  return RESOURCE_ITEMS.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const item = RESOURCE_ITEMS.find((entry) => entry.slug === params.slug);
  if (!item) {
    return {};
  }

  return {
    title: item.title,
    description: item.description,
    alternates: {
      canonical: `/resources/${item.slug}`,
    },
    openGraph: {
      title: item.title,
      description: item.description,
      url: `/resources/${item.slug}`,
    },
  };
}

export default function ResourceDetailPage({ params }: { params: Params }) {
  const item = RESOURCE_ITEMS.find((entry) => entry.slug === params.slug);
  if (!item) {
    notFound();
  }

  return (
    <main className="container">
      <article className="detail">
        <p className="chip">{item.category === "generator" ? "AI Tool" : "Template"}</p>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <p>This route is statically generated and optimized for crawlability and indexation.</p>
        <Link className="link" href="/resources">
          Back to resources
        </Link>
      </article>
    </main>
  );
}
