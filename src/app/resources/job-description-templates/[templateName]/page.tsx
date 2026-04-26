import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JOB_TEMPLATE_SLUGS } from "@/lib/resources-data";

type Params = { templateName: string };

const toTitle = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export function generateStaticParams() {
  return JOB_TEMPLATE_SLUGS.map((templateName) => ({ templateName }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const exists = JOB_TEMPLATE_SLUGS.includes(params.templateName);
  if (!exists) {
    return {};
  }
  const role = toTitle(params.templateName);
  return {
    title: `${role} Job Description Template`,
    description: `Use the ${role} template to create clear requirements, responsibilities, and qualification sections.`,
    alternates: {
      canonical: `/resources/job-description-templates/${params.templateName}`,
    },
  };
}

export default function JobDescriptionTemplateDetailPage({ params }: { params: Params }) {
  if (!JOB_TEMPLATE_SLUGS.includes(params.templateName)) {
    notFound();
  }

  const role = toTitle(params.templateName);
  return (
    <main className="container">
      <article className="detail">
        <p className="chip">Job Description Template</p>
        <h1>{role} Job Description Template</h1>
        <p>Build a complete, publish-ready job description for {role} in minutes.</p>
        <Link className="link" href="/resources/job-description-templates">
          Back to job templates
        </Link>
      </article>
    </main>
  );
}
