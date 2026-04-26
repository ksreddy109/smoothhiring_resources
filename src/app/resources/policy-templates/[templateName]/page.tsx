import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POLICY_TEMPLATE_SLUGS } from "@/lib/resources-data";

type Params = { templateName: string };

const toTitle = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export function generateStaticParams() {
  return POLICY_TEMPLATE_SLUGS.map((templateName) => ({ templateName }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const exists = POLICY_TEMPLATE_SLUGS.includes(params.templateName);
  if (!exists) {
    return {};
  }
  const policyName = toTitle(params.templateName);
  return {
    title: `${policyName} Template`,
    description: `Use the ${policyName} template to standardize HR operations and policy communication.`,
    alternates: {
      canonical: `/resources/policy-templates/${params.templateName}`,
    },
  };
}

export default function PolicyTemplateDetailPage({ params }: { params: Params }) {
  if (!POLICY_TEMPLATE_SLUGS.includes(params.templateName)) {
    notFound();
  }

  const policyName = toTitle(params.templateName);
  return (
    <main className="container">
      <article className="detail">
        <p className="chip">Policy Template</p>
        <h1>{policyName} Template</h1>
        <p>Use this template as a baseline and adapt language to your legal and HR requirements.</p>
        <Link className="link" href="/resources/policy-templates">
          Back to policy templates
        </Link>
      </article>
    </main>
  );
}
