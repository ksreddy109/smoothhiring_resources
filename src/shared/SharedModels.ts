import { TFeatures } from 'Modules/Core/AuthV2/AuthModel';
import { SVGProps } from 'react';
import type { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import type { RootState as LegacyRootState } from 'store/state-types';
export type RootState = LegacyRootState;
export type AppDispatch = ThunkDispatch<LegacyRootState, undefined, AnyAction>;

export type TBoolean = 'yes' | 'no';
export type TEnvironment = 'development' | 'production' | 'staging';
export type TApiErrorStatusCode = 500 | 404 | 403 | 410;
export type TApiErrorCode = 'USER_EXIST' | 'Error';

export type ApiState = 'idle' | 'pending' | 'success' | 'failed';
export type CRUD = 'create' | 'read' | 'update' | 'delete';
export type SortOrder = 'asc' | 'desc';
export type TableCellAlign = 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
export type Overflow = 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit' | 'unset';
export type TExcludedSubdomains = 'resources' | 'resources-staging' | 'localhost' | 'app' | 'react-staging' | 'tools' | 'help' | 'help-staging';
export type TJustifyContent = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'safe center' | 'unsafe center';
export type TDisplayType = 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root' | 'none' | 'contents' | 'table' | 'table-row' | 'table-cell';
export type TAlignItems = 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center';

export enum LayoutTypes {
  Table = 'Table',
  List = 'List',
  Pipeline = 'Pipeline',
}
export interface IBaseJson<V = string | number> {
  [key: string]: V;
}

export interface IBaseEntity {
  name: string;
  id: number;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface ICareerSeekerNavLinks {
  icon: SVGProps<SVGSVGElement>;
  title: string;
  subTitle: string;
  path: string;
}

export interface NavLink {
  redirectTo: string;
  label: string;
  feature: TFeatures;
  icon?: React.ReactNode;
}

export interface INavLink extends NavLink {
  subNav?: NavLink[];
}

export interface ISideNav {
  isMiniDrawer?: boolean;
  toggleDrawer?: () => void;
  toggleMiniDrawer?: () => void;
}

export interface IBaseApiResponseStatus {
  message: string;
  statusCode: number;
  timeStamp: string;
  version: string;
}

export interface IBaseResponse<D = any, M = string | undefined, S = IBaseApiResponseStatus, ST = IPaginationParams> {
  message: M;
  data: D;
  status: S;
  stats: ST;
  statusCode: TApiErrorStatusCode;
}

export interface IFailureResponse {
  errorCode: TApiErrorCode;
  message: string;
  statusCode: TApiErrorStatusCode;
}

export interface ILabelValueBase<L = string, V = string> {
  label: L;
  value: V;
}

export interface IPaginationParams {
  count: number;
  firstPage?: boolean;
  lastPage?: boolean;
  requestedPageNumber: number;
  requestedPageSize: number;
  totalElements?: number;
  totalPages: number;
}

export interface ISortParamsBase<OB> {
  orderBy: OB;
  order: SortOrder;
}

export interface ISummaryComponentBase<S> {
  summary: S;
}

export interface IAiCandidateSummaryComponentBase<S> {
  summary: S;
}

export interface ISortBase<SC> {
  sortList: (sortBy: SC, order: SortOrder) => void;
  sortParams: ISortParamsBase<SC>;
}

export interface ITableHeadersBase<C, CID = string> {
  columnName: C;
  columnNameInDb?: CID;
  label: string;
  render?: (row: any) => React.ReactNode;
}

export interface ITableHeadersOptions<H = string> {
  isSortable: boolean;
  order: number;
  hideColumnFor?: H[];
}

// Mui tab panel
export interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export enum JobReviewsStates {
  pending = 'pending',
  approved = 'approved',
  updatesPending = 'updates_pending',
  rejected = 'rejected',
  removed = 'approved_removed_from_list',
}

export interface IPostingSourceLinks {
  name: string;
  link: string;
}

export interface IJobFeatures {
  name: string;
  status: string;
}

export interface IJobBoardLinks {
  linkedin?: string;
  indeed?: string;
  glassdoor?: string;
  monster?: string;
  [key: string]: string | undefined;
}

export interface IFeedBoardExclusions {
  monster: boolean;
  zipalerts: boolean;
}

export interface IJobInfoResponse {
  hiring_coach_name: string | null;
  submitted: string;
  name: string;
  company_name: string;
  id: number;
  sdfc_link: string;
  location: string;
  review_state: string;
  last_approved_date: string;
  companydescription: string;
  employer: {
    id?: number;
    company_name: string;
    employer_code: string;
  };
  state: {
    name_en: string;
  };
  city: string;
  neighbourhood: string;
  postingSourceLinks: IPostingSourceLinks[];
  jobFeatures: IJobFeatures[];
  jobBundles: IJobbundles[];
  code: string;
  sourceJobRole: {
    name: string;
  };
  pixel_tracking: string;
  job_board_links?: IJobBoardLinks;
}
export interface IApprovedJobResponse {
  jobId: number;
  name: string;
}
export interface IJobbundles {
  bundle_id: string;
  base_price: string;
}

export interface IShIcon {
  primaryColor: string;
  secondaryColor: string;
  sx?: object;
}

export interface IAdminNotificationResponse {
  id: number | null;
  message: string;
  isRead: boolean;
  accountId: number | null;
  createdAt?: string;
}

export interface ICandidateSignUp {
  candidateSignUpApiStatus: ApiState;
  candidateSignUpApiResponse?: string;
  candidateSignUpAuthToken?: string;
  candidateJobApplyApiStatus: ApiState;
  candidateJobApplyApiResponse?: string;
  jobApplyApplicationId: number | null;
}
export interface ICandidateSignUpResponse {
  authToken: string;
  message: string;
}

export interface ICandidateJobApplyResponse {
  message: string;
  job_application_id: number;
}

export interface ICandidateJobApplyPayload {
  jobId: string;
  ps: string;
}

export interface IJobRequirementsResponse {
  applicant_requirement_level_id: null | number;
  id: number;
  name: string;
  requirement_category_id: number;
  requirement_level_id: number;
}

export interface IUpdateJobRequirementPayload {
  requirementId: number;
  requirementLevelId: number;
  jobApplicationId: number;
}

export interface IUpdateJobRequirementResponse {
  id: number;
  requirement_id: number;
  requirement_category_id: number;
  candidate_employerjob_id: number;
  applicant_requirement_level_id: number;
  created_at: string;
  updated_at: string;
}

export interface ICandidateDetailsResponse {
  candidate_id: number;
  job_id: number;
  job_application_id: number;
  account_id: number;
  first_name: string;
  last_name: string;
}

/**
 * Strictly typed redirect keys.
 * Environment based redirect keys should be registered in this type */
export type TResourcesRedirectUrlKey =
  | 'resourcesHome'
  | 'aiJobDescription'
  | 'aiInterviewKit'
  | 'jobTemplatesHome'
  | 'jobTemplateDetails'
  | 'policyTemplatesHome'
  | 'policyTemplateDetails'
  | 'offerLetterTemplates'
  | 'generalJobOfferTemplate'
  | 'formalJobOfferTemplate'
  | 'emailTemplates'
  | 'offerLetterTemplatesDetails'
  | 'rejectionLetterTemplate'
  | 'rejectionLetterTemplatesDetails'
  | 'interviewLetterTemplate'
  | 'interviewLetterTemplatesDetails';

export type TResourcesRedirectUrlMap = {
  [key in TResourcesRedirectUrlKey]: string;
};

/**
 * Strictly typed redirect keys.
 * Environment based redirect keys should be registered in this type */
export type TToolsRedirectUrlKey = 'toolsHome';

export type TToolsRedirectUrlMap = {
  [key in TToolsRedirectUrlKey]: string;
};

export interface IShFeatureTile {
  tileLabel: string;
  tileIcon: JSX.Element;
  featureRedirectUrl: string;
  caption?: string;
  chip?: JSX.Element;
  featureName: TFeatures;
}
