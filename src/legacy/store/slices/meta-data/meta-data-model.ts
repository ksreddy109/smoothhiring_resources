import { ApiState } from 'shared/SharedModels';

export type TSurveyQuestionType = 'interest' | 'personality' | string;

export interface ICandidateAssessmentMeta {
  skills: {
    [requirementCategoryId: string]: {
      name: string;
      id: number;
    }[];
  };
  survey: {
    [surveyQuestionType: TSurveyQuestionType]: {
      name: string;
      id: number;
    }[];
  };
}

export interface IAssessmentMetaState {
  getCandidateAssessmentMetaStatus?: ApiState;
  getCandidateAssessmentMetaResponse?: string;
  candidateAssessmentMetadata?: ICandidateAssessmentMeta;
}

export interface IIndustry {
  base_industry_id: number;
  cross_industry: boolean;
  id: number;
  industry_translation: { name: string };
  translation_key: string;
}

export interface IJobRole {
  title: string;
  id: number;
  industry: string;
}

export interface IJobRoleAdmin {
  job_title_id: number;
  name: string;
}

export interface IJobsState {
  id: number;
  country_id: number;
  abbreviation: string;
  name_fr: string;
  name_en: string;
  hstrate: string;
  taxtype: string;
}

export interface IJobsMetaState {
  getIndustriesStatus?: ApiState;
  getIndustriesResponse?: string;
  industries: IIndustry[];
  getJobTitlesStatus: ApiState;
  getJobTitlesResponse: string;
  jobTitles: IJobRole[];
  getJobStatesStatus: ApiState;
  getJobStatesResponse: string;
  jobStates: IJobsState[];
  getJobStatesByCountryStatus: ApiState;
  getJobStatesByCountryResponse: string;
  jobStatesByCountry: IJobsState[];
}
