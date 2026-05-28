import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { EmployerApiEndpoints } from 'shared/ApiEndpoints';
import httpAdapterInstance from '../../../configs/HttpAdapterConfig';
import { IBaseResponse } from '../../../shared/SharedModels';
import { DefaultAPIErrorMsg } from '../../../shared/constants';
import { IAiApplicantSuggestions, IAiInterviewQuestions, IAiJApplicantSuggestionsPayload, IAiJobDescriptionAndInterviewKitPayload, IAiKeywordPrediction, IAiSalaryPrediction, IResourcesState } from './app-model';

const initialResourcesState: IResourcesState = {
  aiJobDescription: '',
  getAiJobDescResponse: '',
  getAiJobDescStatus: 'idle',
  aiInterviewQuestions: undefined,
  getAiInterviewQuestionsResponse: '',
  getAiInterviewQuestionsStatus: 'idle',
  aiSalaryPrediction: null,
  getAiSalaryPredictionResponse: '',
  getAiSalaryPredictionStatus: 'idle',
  aiKeywordPredictions: [],
  getAiKeywordPrediction: '',
  getAiKeywordPredictionStatus: 'idle',
  aiApplicantSuggestions: [],
  getAiApplicantSuggestionsResponse: '',
  getAiApplicantSuggestionsStatus: 'idle',
};
function buildRoleIndustryQuery({ role, industry, jobCompany }: IAiJobDescriptionAndInterviewKitPayload): string {
  const params = new URLSearchParams({ role: role.trim() });
  if (industry?.trim()) params.set('industry', industry.trim());
  if (jobCompany?.trim()) params.set('company', jobCompany.trim());
  return params.toString();
}

export const getAiJobDescriptionByTitle = createAsyncThunk<{ description: string }, IAiJobDescriptionAndInterviewKitPayload, { rejectValue: IBaseResponse }>('getAiJobDescriptionByTitle', async (payload, { rejectWithValue }) => {
  const query = buildRoleIndustryQuery(payload);
  return await httpAdapterInstance
    .get(`${EmployerApiEndpoints.AI_JOB_DESCRIPTION}?${query}`)
    .then(
      (
        response: AxiosResponse<{
          description: string;
        }>
      ) => response?.data
    )
    .catch(error => {
      return rejectWithValue(error.response?.data ?? { message: DefaultAPIErrorMsg });
    });
});

export const getAiInterviewQuestions = createAsyncThunk<IAiInterviewQuestions, IAiJobDescriptionAndInterviewKitPayload, { rejectValue: IBaseResponse }>('getAiInterviewQuestions', async (payload, { rejectWithValue }) => {
  const query = buildRoleIndustryQuery(payload);
  return await httpAdapterInstance
    .get(`${EmployerApiEndpoints.AI_INTERVIEW_QUESTIONS}?${query}`)
    .then((response: AxiosResponse<IAiInterviewQuestions>) => response?.data)
    .catch(error => {
      return rejectWithValue(error.response?.data ?? { message: DefaultAPIErrorMsg });
    });
});

export const getAiSalaryPrediction = createAsyncThunk<IAiSalaryPrediction, IAiJobDescriptionAndInterviewKitPayload, { rejectValue: IBaseResponse }>('getAiSalaryPrediction', async ({ role, industry, experience, city, postalcode }, { rejectWithValue }) => {
  return await httpAdapterInstance
    .get(`${EmployerApiEndpoints.AI_SALARY_PREDICTION}?role=${role}&industry=${industry}&experience=${experience}&city=${city}&postalcode=${postalcode}`)
    .then((response: AxiosResponse<IAiSalaryPrediction>) => response?.data)
    .catch(error => {
      throw rejectWithValue(error.response.data);
    });
});

export const getAiKeywordsPrediction = createAsyncThunk<IAiKeywordPrediction, IAiJobDescriptionAndInterviewKitPayload, { rejectValue: IBaseResponse }>('getAiKeywordsPrediction', async ({ role }, { rejectWithValue }) => {
  return await httpAdapterInstance
    .get(`${EmployerApiEndpoints.AI_KEYWORD_GEN}?role=${role}`)
    .then((response: AxiosResponse<IAiKeywordPrediction>) => response?.data)
    .catch(error => {
      throw rejectWithValue(error.response.data);
    });
});

export const getAiApplicantSuggestions = createAsyncThunk<IAiApplicantSuggestions, IAiJApplicantSuggestionsPayload, { rejectValue: IBaseResponse }>('getAiApplicantSuggestions', async ({ applicantList }, { rejectWithValue }) => {
  return await httpAdapterInstance
    .post(`${EmployerApiEndpoints.AI_APPLICANT_SUGGESTIONS}`, { applicantList })
    .then((response: AxiosResponse<IAiApplicantSuggestions>) => response?.data)
    .catch(error => {
      throw rejectWithValue(error.response.data);
    });
});

const resourcesSlice = createSlice({
  name: 'resourcesSlice',
  initialState: initialResourcesState,
  reducers: {
    resetResourcesApiState: state => {
      state.getAiJobDescResponse = '';
      state.getAiJobDescStatus = 'idle';
      state.getAiInterviewQuestionsResponse = '';
      state.getAiInterviewQuestionsStatus = 'idle';
      state.getAiSalaryPredictionResponse = '';
      state.getAiSalaryPredictionStatus = 'idle';
    },
  },
  extraReducers: builder => {
    // get ai job description
    builder.addCase(getAiJobDescriptionByTitle.pending, state => {
      state.getAiJobDescStatus = 'pending';
    });
    builder.addCase(getAiJobDescriptionByTitle.fulfilled, (state, action) => {
      state.getAiJobDescStatus = 'success';
      state.aiJobDescription = action.payload.description;
    });
    builder.addCase(getAiJobDescriptionByTitle.rejected, (state, action) => {
      state.getAiJobDescStatus = 'failed';
      state.getAiJobDescResponse = action?.payload?.message ?? DefaultAPIErrorMsg;
    });
    // get ai interview questions

    builder.addCase(getAiInterviewQuestions.pending, state => {
      state.getAiInterviewQuestionsStatus = 'pending';
    });
    builder.addCase(getAiInterviewQuestions.fulfilled, (state, action) => {
      state.getAiInterviewQuestionsStatus = 'success';
      state.aiInterviewQuestions = action.payload;
    });
    builder.addCase(getAiInterviewQuestions.rejected, (state, action) => {
      state.getAiInterviewQuestionsStatus = 'failed';
      state.getAiInterviewQuestionsResponse = action?.payload?.message ?? DefaultAPIErrorMsg;
    });

    // AI salary prediction
    builder.addCase(getAiSalaryPrediction.pending, state => {
      state.getAiSalaryPredictionStatus = 'pending';
    });
    builder.addCase(getAiSalaryPrediction.fulfilled, (state, action) => {
      state.getAiSalaryPredictionStatus = 'success';
      state.aiSalaryPrediction = action.payload;
    });
    builder.addCase(getAiSalaryPrediction.rejected, (state, action) => {
      state.getAiSalaryPredictionStatus = 'failed';
      state.getAiSalaryPredictionResponse = action?.payload?.message ?? DefaultAPIErrorMsg;
    });

    // AI keyword prediction
    builder.addCase(getAiKeywordsPrediction.pending, state => {
      state.getAiKeywordPredictionStatus = 'pending';
    });
    builder.addCase(getAiKeywordsPrediction.fulfilled, (state, action) => {
      state.getAiKeywordPredictionStatus = 'success';
      state.aiKeywordPredictions = action.payload.keywords;
    });
    builder.addCase(getAiKeywordsPrediction.rejected, (state, action) => {
      state.getAiKeywordPredictionStatus = 'failed';
      state.getAiSalaryPredictionResponse = action?.payload?.message ?? DefaultAPIErrorMsg;
    });

    // AI Applicant Suggestions
    builder.addCase(getAiApplicantSuggestions.pending, state => {
      state.getAiApplicantSuggestionsStatus = 'pending';
    });
    builder.addCase(getAiApplicantSuggestions.fulfilled, (state, action) => {
      state.getAiApplicantSuggestionsStatus = 'success';
      state.aiApplicantSuggestions = action.payload.topApplicants;
    });
    builder.addCase(getAiApplicantSuggestions.rejected, (state, action) => {
      state.getAiApplicantSuggestionsStatus = 'failed';
      state.getAiApplicantSuggestionsResponse = action?.payload?.message ?? DefaultAPIErrorMsg;
    });
  },
});
export const { resetResourcesApiState } = resourcesSlice.actions;
export default resourcesSlice;
