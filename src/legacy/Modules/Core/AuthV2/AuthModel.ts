import { TAccountType, TAppContext, TSocialLoginProvider } from 'store/slices/auth-v2/auth-v2-model';

export interface IAccountLoginFormMeta {
  emailTouched: boolean;
  passwordTouched: boolean;
  emailError: string | null;
  passwordError: string | null;
}

export interface ISocialLoginProps {
  buttonType: 'icon' | 'button';
  usedIn: TAppContext;
  forwardedRef?: any;
  isSignUp?: boolean;
  loginProvider?: TSocialLoginProvider;
}

export interface ILoginProps {
  isShowSocialLogin?: boolean;
  emailAutoFill?: string;
  usedIn: TAppContext;
  getIsForgotPassword?: (isForgotPassword: boolean) => void;
}

export interface IResetPasswordForm {
  email: string;
  emailTouched: boolean;
  emailError: string | null;
}

export interface ITwoStepAuthDialogProps {
  isAuthDialogOpen: boolean;
  onAuthDialogClose: (isAuthenticated: boolean) => void;
  usedIn: TAppContext;
}

export interface ISocialActionItems extends Partial<ISocialLoginProps> {
  handleGetRedirect: (provider: TSocialLoginProvider) => void;
  hideIndeedForEmployer?: boolean;
}

export interface ISocialLoader {
  authProvider?: TSocialLoginProvider;
}

export type TFeatures =
  | 'Create Job'
  | 'View Jobs'
  | 'Settings'
  | 'Applicants List'
  | 'Applicant Profile'
  | 'Interviews'
  | 'Calendar'
  | 'Account Information'
  | 'Company Details'
  | 'Analytics'
  | 'Manage Users'
  | 'Security'
  | 'Branding'
  | 'Start Hiring'
  | 'Stop Hiring'
  | 'Edit Job'
  | 'Delete Job'
  | 'Re-post Job'
  | 'Draft Jobs'
  | 'Expired Jobs'
  | 'All Job Count'
  | 'Resources'
  | 'Dashboard'
  | 'Template Jobs'
  | 'Create Template Job'
  | 'Use Template Job'
  | 'Help'
  | 'Tools And Automation'
  | 'Automation'
  | 'Tools'
  | 'Templates'
  | 'Rejection Notification Template'
  | 'Offer Letter Template'
  | 'Interview Invitation Template'
  | 'Auto Reject'
  | 'Auto Reject Criteria'
  | 'Reminders'
  | 'Interview Reminders'
  | 'Notifications'
  | 'Employee Insights'
  | 'Application Received Template'
  | 'Repost an existing job'
  | 'Continue from saved job'
  | 'Create a New Job'
  | 'Careers Page Customization'
  | 'Questionnaire Templates'
  | 'Hiring Pipeline'
  | 'View Careers Page'
  | 'Create'
  // | 'CreateTask'
  | 'Publish to Careers Page'
  | 'View Assigned Applicants'
  | 'Release History'
  | 'Email Campaigns'
  | 'Email Inbox'
  | 'JobBoards'
  | 'Assessments'
  | 'Assessment Results'
  | 'My Assessment Templates'
  | 'Assessment Library'
  | 'Video Assessments'
  | 'Scorecard Templates'
  | 'Scorecards';

export type TFeaturesMap = {
  [key in TFeatures]: { visibility: 'hidden' | 'disabled' };
};

export type TRoleAccessMap = {
  [key in TAccountType]: { paths: string[]; featureMap?: Partial<TFeaturesMap> };
};

export type TDynamicRouteParams = 'jobId' | 'applicantId';

export type TSocialProvidersMap = {
  [key in TSocialLoginProvider]: string;
};

export interface ISocialProvider {
  displayName: string;
  socialProviderKey: TSocialLoginProvider;
}
