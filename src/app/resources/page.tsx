import type { Metadata } from "next";
import Link from "next/link";
import { RESOURCE_ITEMS } from "@/lib/resources-data";

export const metadata: Metadata = {
  title: "Recruiting Resources Library",
  description: "Explore free AI hiring tools, job description templates, offer templates, and policy resources.",
  alternates: {
    canonical: "/resources",
  },
};

export default function ResourcesHomePage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Free HR resources</p>
        <h1>Recruiting Resources Library</h1>
        <p>
          Practical templates and AI generators to help your team move faster from sourcing to hiring.
        </p>
      </section>
      <section className="grid">
        {RESOURCE_ITEMS.map((item) => (
          <article key={item.slug} className="card">
            <p className="chip">{item.category === "generator" ? "AI Tool" : "Template"}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link href={`/resources/${item.slug}`} className="link">
              Open resource
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
