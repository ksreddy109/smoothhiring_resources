"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { ProgrammaticSeoPage } from "@/components/programmatic-seo/ProgrammaticSeoPage";
import type { ProgrammaticSeoPage as ProgrammaticSeoPageData } from "@/lib/programmatic-seo-data";
import type { ResourcePageDefinition } from "@/lib/resources/page-registry";
import { ResourceRouteProvider } from "@/lib/resources/route-context";
import { ResourcesShell } from "./ResourcesShell";

const AiJobDescriptionPage = dynamic(
  () => import("Modules/Marketing/Resources/AiJobDescriptionPage").then((m) => m.AiJobDescriptionPage),
  { loading: () => null, ssr: false }
);
const AiInterviewQuestionsPage = dynamic(
  () =>
    import("Modules/Marketing/Resources/AiInterviewQuestionsPage").then(
      (m) => m.AiInterviewQuestionsPage
    ),
  { loading: () => null, ssr: false }
);
const DescriptionTemplateHome = dynamic(
  () =>
    import("Modules/Marketing/Resources/Templates/JobDescriptionTemplates/DescriptionTemplateHome").then(
      (m) => m.DescriptionTemplateHome
    ),
  { loading: () => null, ssr: false }
);
const DescriptionTemplatePage = dynamic(
  () =>
    import("Modules/Marketing/Resources/Templates/JobDescriptionTemplates/DescriptionTemplatePage").then(
      (m) => m.DescriptionTemplatePage
    ),
  { loading: () => null, ssr: false }
);
const PolicyTemplateHome = dynamic(
  () =>
    import("Modules/Marketing/Resources/Templates/PolicyTemplates/PolicyTemplateHome").then(
      (m) => m.PolicyTemplateHome
    ),
  { loading: () => null, ssr: false }
);
const PolicyTemplatePage = dynamic(
  () =>
    import("Modules/Marketing/Resources/Templates/PolicyTemplates/PolicyTemplatePage").then(
      (m) => m.PolicyTemplatePage
    ),
  { loading: () => null, ssr: false }
);
const OfferTemplateHome = dynamic(
  () =>
    import("Modules/Marketing/Resources/Templates/OfferTemplates/OfferTemplateHome").then(
      (m) => m.OfferTemplateHome
    ),
  { loading: () => null, ssr: false }
);
const GeneralJobOfferTemplatePage = dynamic(
  () =>
    import("Modules/Marketing/Resources/Templates/OfferTemplates/OfferTemplateSinglePages/GeneralJobOfferTemplatePage"),
  { loading: () => null, ssr: false }
);
const FormalJobOfferTemplatePage = dynamic(
  () =>
    import("Modules/Marketing/Resources/Templates/OfferTemplates/OfferTemplateSinglePages/FormalJobOfferTemplatePage"),
  { loading: () => null, ssr: false }
);
const InformalJobOfferTemplatePage = dynamic(
  () =>
    import("Modules/Marketing/Resources/Templates/OfferTemplates/OfferTemplateSinglePages/InformalJobOfferTemplatePage"),
  { loading: () => null, ssr: false }
);
const InternalJobOfferTemplatePage = dynamic(
  () =>
    import("Modules/Marketing/Resources/Templates/OfferTemplates/OfferTemplateSinglePages/InternalJobOfferTemplatePage"),
  { loading: () => null, ssr: false }
);
const SalesJobOfferTemplatePage = dynamic(
  () =>
    import("Modules/Marketing/Resources/Templates/OfferTemplates/OfferTemplateSinglePages/SalesJobOfferTemplatePage"),
  { loading: () => null, ssr: false }
);
const RejectionTemplateHome = dynamic(
  () => import("Modules/Marketing/Resources/RejectionTemplateHome").then((m) => m.RejectionTemplateHome),
  { loading: () => null, ssr: false }
);
const InterviewTemplateHome = dynamic(
  () => import("Modules/Marketing/Resources/InterviewTemplateHome").then((m) => m.InterviewTemplateHome),
  { loading: () => null, ssr: false }
);
const EmailTemplatesPage = dynamic(
  () => import("Modules/Marketing/Resources/EmailTemplatesPage").then((m) => m.EmailTemplatesPage),
  { loading: () => null, ssr: false }
);
const EmployerRejectionTemplateSinglePage = dynamic(
  () =>
    import("Modules/Core/EmployerResources/EmployerRejectionTemplates/EmployerRejectionTemplateSinglePage").then(
      (m) => m.EmployerRejectionTemplateSinglePage
    ),
  { loading: () => null, ssr: false }
);
const EmployerInterviewTemplateSinglePage = dynamic(
  () =>
    import("Modules/Core/EmployerResources/EmployerInterviewTemplates/EmployerInterviewTemplateSinglePage").then(
      (m) => m.EmployerInterviewTemplateSinglePage
    ),
  { loading: () => null, ssr: false }
);
const ResourcesHomeContent = dynamic(
  () => import("./ResourcesHomeContent").then((m) => m.ResourcesHomeContent),
  { loading: () => null, ssr: false }
);

const PAGE_COMPONENTS: Record<string, ComponentType> = {
  hub: ResourcesHomeContent,
  "generator:ai-job-description": AiJobDescriptionPage,
  "generator:ai-interview-kit": AiInterviewQuestionsPage,
  "template-hub:job-description": DescriptionTemplateHome,
  "template-hub:offer": OfferTemplateHome,
  "template-hub:policy": PolicyTemplateHome,
  "template-hub:rejection": RejectionTemplateHome,
  "template-hub:interview": InterviewTemplateHome,
  "template-hub:email": EmailTemplatesPage,
  "detail:job-description": DescriptionTemplatePage,
  "detail:policy": PolicyTemplatePage,
  "detail:interview": EmployerInterviewTemplateSinglePage,
  "detail:rejection": EmployerRejectionTemplateSinglePage,
  "offer:general-job-offer-template": GeneralJobOfferTemplatePage,
  "offer:formal-job-offer-template": FormalJobOfferTemplatePage,
  "offer:informal-job-offer-template": InformalJobOfferTemplatePage,
  "offer:internal-job-offer-template": InternalJobOfferTemplatePage,
  "offer:sales-job-offer-template": SalesJobOfferTemplatePage,
};

type Props = {
  page: ResourcePageDefinition;
  programmaticCopy?: { h1: string; subheadline?: string };
  programmaticPage?: ProgrammaticSeoPageData;
};

function PageBody({ page, programmaticCopy, programmaticPage }: Props) {
  if (page.kind === "programmatic") {
    if (!programmaticPage) return null;
    return (
      <ProgrammaticSeoPage
        page={programmaticPage}
        h1={programmaticCopy?.h1 ?? programmaticPage.h1}
        subheadline={programmaticCopy?.subheadline}
      />
    );
  }

  const Component = PAGE_COMPONENTS[page.pageKey];
  if (!Component) return null;
  return <Component />;
}

export function ResourcePageRenderer({
  page,
  programmaticCopy,
  programmaticPage,
}: Props) {
  return (
    <ResourceRouteProvider path={page.path} page={page}>
      <ResourcesShell>
        <PageBody
          page={page}
          programmaticCopy={programmaticCopy}
          programmaticPage={programmaticPage}
        />
      </ResourcesShell>
    </ResourceRouteProvider>
  );
}
