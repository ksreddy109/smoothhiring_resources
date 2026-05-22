import { AlertColor } from '@mui/material';
import { ApiState, TBoolean } from '../../../shared/SharedModels';
import { IAccountLoginResponse, TAccountType } from '../auth-v2/auth-v2-model';

export type TThemeMode = 'dark' | 'light' | 'system_default';

export type TBreadcrumbNavigation = 'active_jobs' | 'draft_jobs' | 'expired_jobs' | 'dashboard' | 'active_jobs_applicants' | 'expired_jobs_applicants' | 'template_jobs' | 'internal_jobs';

export interface IAppTheme {
  curTheme: TThemeMode;
  mode: TThemeMode;
}

export interface INotificationSlice {
  open: boolean;
  type: AlertColor;
  message: string;
  timeout: number;
  persistent?: boolean;
}

export interface IAiJobDescriptionAndInterviewKitPayload {
  role: string;
  industry?: string;
  jobCompany?: string;
  experience?: string;
  city?: string;
  postalcode?: string;
}

export interface IAiJApplicantSuggestionsPayload {
  applicantList: IAiApplicantData[];
}
export interface IAiApplicantData {
  candidateId: number;
  commentTotal: number;
  matchType: string;
  resumeScore: number;
  rating: number;
}

export interface IResourcesState {
  aiJobDescription: string;
  getAiJobDescResponse: string;
  getAiJobDescStatus: ApiState;
  aiInterviewQuestions: IAiInterviewQuestions | undefined;
  getAiInterviewQuestionsResponse: string;
  getAiInterviewQuestionsStatus: ApiState;
  aiSalaryPrediction: IAiSalaryPrediction | null;
  getAiSalaryPredictionResponse: string;
  getAiSalaryPredictionStatus: ApiState;
  aiApplicantSuggestions: number[];
  getAiApplicantSuggestionsResponse: string;
  getAiApplicantSuggestionsStatus: ApiState;
  aiKeywordPredictions: [];
  getAiKeywordPrediction: '';
  getAiKeywordPredictionStatus: ApiState;
}

export interface IQuestionAnswerPair {
  question: string;
  answer: string;
}

export interface IQuestionAnswerPair {
  question: string;
  answer: string;
}

export interface IAiInterviewQuestions {
  description: { questions: IQuestionAnswerPair[] };
}

export interface IAiSalaryPrediction {
  salary_prediction: {
    lowEnd: number;
    highEnd: number;
    currency: string;
  };
}

export interface IAiKeywordPrediction {
  keywords: [];
}

export interface IAiApplicantSuggestions {
  topApplicants: [];
}

export interface IAppInfoState {
  isFaqOpen: boolean;
  isWelcomeAcknowledged?: TBoolean;
  isWelcomeCreateJobAcknowledged?: TBoolean;
}

export interface IBreadcrumb {
  href: string;
  isActive: boolean;
  displayName: string;
}

export interface IBreadcrumbDictionary {
  pathname: string;
  breadcrumbs: IBreadcrumb[];
}

export interface IBreadcrumbLabelRegistry {
  [key: number | string]: string;
}

export interface IBreadcrumbState {
  breadcrumbNavFrom?: TBreadcrumbNavigation;
  currentBreadcrumb?: IBreadcrumbDictionary;
  availableBreadcrumbs: IBreadcrumbDictionary[];
  breadcrumbLabelRegistry?: IBreadcrumbLabelRegistry;
}

export interface IModuleSwitchState {
  getEmployerAccountLoginStatus?: ApiState;
  getEmployerAccountLoginResponse?: string;
  employerAccountLogin?: IAccountLoginResponse;
  getAdminAccountLoginStatus?: ApiState;
  getAdminAccountLoginResponse?: string;
  adminAccountLogin?: IAccountLoginResponse;
  navigatedFrom?: TAccountType;
  navigateBackUrl?: string;
}
