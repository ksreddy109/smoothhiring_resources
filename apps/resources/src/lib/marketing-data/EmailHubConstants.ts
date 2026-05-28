import { emailHubCardsFromCatalog } from './emailTemplateCatalog';

export type RecruitingEmailCard = {
  title: string;
  description: string;
  href: string;
};

const cards = emailHubCardsFromCatalog();

export const recruitingEmailsOutreach = cards.outreach;
export const recruitingEmailsApplicationInterview = cards.application;
export const recruitingEmailsDecisionFollowUp = cards.decision;
export const recruitingEmailsOnboarding = cards.onboarding;
