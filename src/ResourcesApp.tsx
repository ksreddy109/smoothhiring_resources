"use client";

import GeneralJobOfferTemplatePage from "Modules/Marketing/Resources/Templates/OfferTemplates/OfferTemplateSinglePages/GeneralJobOfferTemplatePage";
import FormalJobOfferTemplatePage from "Modules/Marketing/Resources/Templates/OfferTemplates/OfferTemplateSinglePages/FormalJobOfferTemplatePage";
import InformalJobOfferTemplatePage from "Modules/Marketing/Resources/Templates/OfferTemplates/OfferTemplateSinglePages/InformalJobOfferTemplatePage";
import InternalJobOfferTemplatePage from "Modules/Marketing/Resources/Templates/OfferTemplates/OfferTemplateSinglePages/InternalJobOfferTemplatePage";
import SalesJobOfferTemplatePage from "Modules/Marketing/Resources/Templates/OfferTemplates/OfferTemplateSinglePages/SalesJobOfferTemplatePage";
import { OfferTemplateHome } from "Modules/Marketing/Resources/Templates/OfferTemplates/OfferTemplateHome";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "store";
import { ResourcesWrapper } from "Modules/Marketing/Resources/ResourcesWrapper";
import { ResourcesHome } from "Modules/Marketing/Resources/ResourceHome";
import { AiJobDescriptionPage } from "Modules/Marketing/Resources/AiJobDescriptionPage";
import { AiInterviewQuestionsPage } from "Modules/Marketing/Resources/AiInterviewQuestionsPage";
import { DescriptionTemplateHome } from "Modules/Marketing/Resources/Templates/JobDescriptionTemplates/DescriptionTemplateHome";
import { DescriptionTemplatePage } from "Modules/Marketing/Resources/Templates/JobDescriptionTemplates/DescriptionTemplatePage";
import { PolicyTemplateHome } from "Modules/Marketing/Resources/Templates/PolicyTemplates/PolicyTemplateHome";
import { PolicyTemplatePage } from "Modules/Marketing/Resources/Templates/PolicyTemplates/PolicyTemplatePage";
import { RejectionTemplateHome } from "Modules/Marketing/Resources/RejectionTemplateHome";
import { InterviewTemplateHome } from "Modules/Marketing/Resources/InterviewTemplateHome";
import { EmailTemplatesPage } from "Modules/Marketing/Resources/EmailTemplatesPage";
import { EmployerRejectionTemplateSinglePage } from "Modules/Core/EmployerResources/EmployerRejectionTemplates/EmployerRejectionTemplateSinglePage";
import { EmployerInterviewTemplateSinglePage } from "Modules/Core/EmployerResources/EmployerInterviewTemplates/EmployerInterviewTemplateSinglePage";
import { TrailingSlashRedirect } from "@/components/TrailingSlashRedirect";

export default function ResourcesApp() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter>
          <TrailingSlashRedirect />
          <Routes>
            <Route path="/resources" element={<ResourcesWrapper />}>
              <Route index element={<ResourcesHome />} />
              <Route path="ai-job-description" element={<AiJobDescriptionPage />} />
              <Route path="ai-interview-kit" element={<AiInterviewQuestionsPage />} />
              <Route path="job-description-templates" element={<DescriptionTemplateHome />} />
              <Route path="job-description-templates/:templateName" element={<DescriptionTemplatePage />} />
              <Route path="policy-templates" element={<PolicyTemplateHome />} />
              <Route path="policy-templates/:templateName" element={<PolicyTemplatePage />} />
              <Route path="offer-letter-templates" element={<OfferTemplateHome />} />
              <Route path="offer-letter-templates/general-job-offer-template" element={<GeneralJobOfferTemplatePage />} />
              <Route path="offer-letter-templates/formal-job-offer-template" element={<FormalJobOfferTemplatePage />} />
              <Route path="offer-letter-templates/informal-job-offer-template" element={<InformalJobOfferTemplatePage />} />
              <Route path="offer-letter-templates/internal-job-offer-template" element={<InternalJobOfferTemplatePage />} />
              <Route path="offer-letter-templates/sales-job-offer-template" element={<SalesJobOfferTemplatePage />} />
              <Route path="rejection-letter-templates" element={<RejectionTemplateHome />} />
              <Route
                path="rejection-letter-templates/:rejectionLetterName"
                element={<EmployerRejectionTemplateSinglePage />}
              />
              <Route path="interview-letter-templates" element={<InterviewTemplateHome />} />
              <Route
                path="interview-letter-templates/:interviewLetterName"
                element={<EmployerInterviewTemplateSinglePage />}
              />
              <Route path="email-templates" element={<EmailTemplatesPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  );
}
