import { ApiState, TApiErrorStatusCode } from 'shared/SharedModels';
import { IIndustry } from '../meta-data/meta-data-model';

export type TAccountType = 'admin' | 'candidate' | 'employer' | 'owner' | 'recruiter' | 'hiring_manager' | 'observer';

export type TAccountDashboard = 'admin' | 'employer' | 'candidate';

export type TSocialLoginProvider = 'google' | 'facebook' | 'linkedin' | 'outlook' | 'indeed';

export type TAppContext = 'employer' | 'admin' | 'candidate_survey' | 'candidate_apply_job';

export type TLogoutType = 'auto' | 'user';

export interface IAccountExistsResponse {
  exists: boolean;
  firstname: string;
  email: string;
  last_name: string;
  signup_source: TSocialLoginProvider;
}

export interface IAccountLoginPayload {
  email: string;
  password: string;
}

export interface ITwoStepAuthQuestion {
  question: string;
  question_id: number;
}

export interface IAccountAccess {
  dashboard?: TAccountDashboard;
  role?: TAccountType;
}

export interface IAccountLoginInfo {
  last_sign_in_ip?: string;
  last_sign_in_at?: string;
  lat?: string;
  long?: string;
  last_login_devise?: string;
}

export interface IAccountLoginResponse extends IAccountLoginInfo {
  id?: number;
  email?: string;
  remember_created_at?: string;
  sign_in_count?: number;
  current_sign_in_at?: string;
  current_sign_in_ip?: string;
  role_id?: number;
  ats_api_key?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  applicant_notifications?: true;
  marketo_id?: string;
  sfdc_account_id?: string;
  sfdc_contact_id?: string;
  ip?: string;
  opted_in_at?: string;
  opted_in_country?: string;
  profile_pic?: string;
  linkedin?: string;
  github?: string;
  video?: string;
  other?: string;
  consumed_timestep?: string;
  otp_required_for_login?: string;
  email_varification?: boolean;
  security_varification?: boolean;
  auth_question_id?: number;
  country?: ICountry;
  deleted_at?: string;
  signup_source?: TSocialLoginProvider;
  employer_id?: number;
  token?: string;
  refreshToken?: {
    token?: string;
    expires_in?: string;
  };
  access?: IAccountAccess;
  question?: ITwoStepAuthQuestion;
  showTwoStepAuthWindow?: boolean;
  candidate?: {
    id?: number;
  };
  user?: IAccountLoginResponse;
}

export interface ILoginFailedResponse {
  errorCode: string;
  invalidEmail: false;
  invalidPassword: true;
  message: string;
  signup_source: TSocialLoginProvider;
  statusCode: number;
}

export interface ITwoStepAuth {
  authQuestionId?: number;
  emailVerification?: boolean;
  securityVerification?: boolean;
  showTwoStepAuthWindow?: boolean;
  twoStepAuthQuestion?: ITwoStepAuthQuestion;
}

export interface IAuthState {
  accountId?: number;
  accountLoginStatus: ApiState;
  accountLoginResponseMsg?: string;
  socialSignUpSource?: TSocialLoginProvider;
  accountLoginInfo?: IAccountLoginInfo;
  isRememberMe: boolean;
  isAccountLoggedIn: boolean;
  logoutType?: TLogoutType;
  accountAuthToken?: string;
  email?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  accountAccess: IAccountAccess;
  checkIfAccountExistsStatus?: ApiState;
  checkIfAccountExistsResponse?: IAccountExistsResponse;
  checkIfAccountExistsResponseMsg?: string;
  employerId?: number;
  loggedInPage?: TAppContext;
  currentAppContext: TAppContext;
  candidateId?: number;
  twoStepAuth: ITwoStepAuth;
  accountCountry?: ICountry;
  getOTPVerificationStatus?: ApiState;
  getOTPVerificationToken?: string;
  getOTPVerificationMessage?: string;
  postOTPVerificationStatus?: ApiState;
  postOTPVerificationToken?: string;
  postOTPVerificationMessage?: string;
}

export interface IUserSocialSignUp {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
  signup_source?: TSocialLoginProvider;
}

export interface ISocialLoginToApplyJobNavParams {
  postingSource: string;
  authToken: string;
}

export interface ISocialLoginState {
  getSocialLoginRedirectUrlStatus?: ApiState;
  getSocialLoginRedirectUrlResponse?: string;
  getCandidateSocialSignUpRedirectUrlStatus?: ApiState;
  getCandidateSocialSignUpRedirectUrlResponse?: string;
  getSocialLoginProfileStatus?: ApiState;
  getSocialLoginProfileResponse?: string;
  getSocialLoginProfileStatusCode?: TApiErrorStatusCode;
  socialLoginRedirectUrl?: string;
  candidateSocialLoginRedirectUrl?: string;
  employerSocialProfileStatus?: ApiState;
  employerSocialProfileResponse?: string;
  signUpWithCandidateSocialProfileStatus?: ApiState;
  signUpWithCandidateSocialProfileResponse?: string;
  candidateSignUpPayload?: IAccountLoginResponse;
  employerSocialPayload?: IAccountLoginResponse;
  socialSignUpProfile?: IUserSocialSignUp;
  socialLoginToApplyJobNavParams?: ISocialLoginToApplyJobNavParams;
}

export interface ITwoStepAuthState {
  deviceAuthApiStatus?: ApiState;
  deviceAuthApiResponse?: string;
  sendSecurityCodeApiStatus?: ApiState;
  sendSecurityCodeApiResponse?: string;
  validateSecurityCodeApiStatus?: ApiState;
  validateSecurityCodeApiResponse?: string;
  twoStepAuthLoginResponse?: IAccountLoginResponse;
}

export interface ISecurityAnswerPayload {
  question_id: number;
  auth_answer: string;
}

export interface ITwoStepAuthLoginResponse {
  applicant_notifications: boolean;
  access: IAccountAccess;
  current_sign_in_at: string;
  current_sign_in_ip: string;
  email: string;
  email_varification: boolean;
  first_name: string;
  middle_name: string;
  id: number;
  ip: string;
  last_login_devise: string;
  last_name: string;
  last_sign_in_at: string;
  last_sign_in_ip: string;
  opted_in_at: string;
  opted_in_country: string;
  security_varification: boolean;
  sign_in_count: number;
  token: string;
}

export interface IGetResetPasswordPayload {
  email: string;
}

export interface IResetPasswordPayload {
  password: string;
  confirmPassword: string;
}
export interface IPasswordState {
  getPasswordResetResponse?: string;
  resetPasswordResponse?: string;
  resetPassValidations: { message: string }[];
  getPasswordResetStatus: ApiState;
  resettingPassword: ApiState;
}

export interface ICountry {
  id: number;
  name: string;
  abbreviation: 'US' | 'CA';
}

export interface IReferenceSources {
  createdAt: string;
  created_at: string;
  id: number;
  source: string;
  ui_order: number;
  updatedAt: string;
  updated_at: string;
}

export interface IEmployerSignUpPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password?: string;
  company_name: string;
  phone_area: string;
  phone_number: string;
  country_id: number;
  industry_id: number;
  // num_employees: string;
  // how_do_you_know: string;
  signup_source?: TSocialLoginProvider;
  free_trail_signup?: boolean;
  license_key?: string;
  license_status?: string;
  license_tier?: string;
  website?: string;
}

export interface ISignUpEmployerState {
  industries?: IIndustry[];
  employerCountries?: ICountry[];
  referenceSources?: IReferenceSources[];
  employerCountriesApiStatus?: ApiState;
  getSourcesApiStatus?: ApiState;
  signUpEmployerApiStatus?: ApiState;
  signUpEmployerApiResponse?: string;
  websiteCheckStatus: ApiState;
  websiteCheckResult: IWebsiteVerification;
}

export interface ICandidateSocialSignUpPayload {
  provider: TSocialLoginProvider;
  postingSource: string;
  jobCode: string;
  payload?: {
    oauth_code: string;
    codeVerifier?: string;
  };
}

export interface IAccountEmailVerification {
  token: string;
}

export interface IAccountEmailVerificationPayload {
  email: string;
  otp: string;
  token: string;
}

export interface IWebsiteVerification {
  url: string;
  domain: string;
  isHttps: boolean;
  domainAgeYears: string;
  isBlacklisted: boolean;
  suspicionLevel: string;
  reasons: string[];
}
