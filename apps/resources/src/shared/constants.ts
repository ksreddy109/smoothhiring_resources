import { ILabelValueBase, TExcludedSubdomains, TResourcesRedirectUrlMap, TToolsRedirectUrlMap } from 'shared/SharedModels';

// Regex
// Regex to find if string has HTML.
export const HtmlRegex = /<\/?[a-z][\s\S]*>/i;
// Email validation
export const EmailRegEx = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// Salary
export const SalaryRegEx = /^(?:\d+|\d*\.\d+|\d+k)(?:\s*-\s*(?:\d+|\d*\.\d+|\d+k))?$/;

// Password validation
export const CharacterSpace = /\s/;
export const OneAlphabet = /[a-zA-z]/;
export const OneNumeric = /[0-9]/;
export const OneSpecialCharacter = /[!@#$%^&*()_+{}[\]:;<>,.?~\\|/]/;

export const NumberOnlyRegEx = /^[0-9\b]+$/;

export const PageSizes = [10, 15, 20, 100, 1000];
export const DefaultPageSize = 20;
export const KeyCodes = { Space: 'Space', Enter: 'Enter' };
export const DefaultAPIErrorMsg = 'Something went wrong, please try again.';
export const DefaultAPISuccessMsg = 'Success';
export const LovNoMatchesText = 'No matches found';

export const BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;

export const EmployerHomeUrl = '/employer/dashboard';
export const AdminHomeUrl = '/admin';

export const AdminBreadcrumbNames = {
  admin: 'Admin',
  'admin-dashboard': 'Dashboard',
  jobs: 'Jobs',
  pending: 'Pending Jobs',
  approved: 'Approved Jobs',
  rejected: 'Rejected Jobs',
  removed: 'Removed Jobs',
  'xml-feeds': 'XML Feeds',
  'job-reviews': 'Job Reviews',
  'score-categories': 'Score Categories',
  'create-role': 'Create Role',
  employers: 'Employers',
  accounts: 'Accounts',
  admins: 'Administrators',
  employer: 'Employer Account Control',
  candidate: 'Candidate Account Control',
  reset: 'Reset Customer Password',
  'candidate-reset': 'Reset Candidate Password',
  delete: 'Delete Candidate Account',
  reset_password: 'Reset Customer Password',
  delete_account: 'Delete Candidate Account',
  'pricing-groups': 'Pricing Groups',
  bundles: 'Bundles',
  subscriptions: 'Subscriptions',
  plans: 'Plans',
  features: 'Features',
  'plan-features': 'Plan Features',
  edit: 'Job Edit',
};

export const ApiStates = {
  idle: 'idle',
  pending: 'pending',
  success: 'success',
  failed: 'failed',
};

export const UserAccess = {
  employer: 'employer',
  admin: 'admin',
  candidate: 'candidate',
};

export const FrequentlyAskedQuestions: ILabelValueBase[] = [
  {
    label: 'Does SmoothHiring charge for every person I hire?',
    value: `No – we charge you per job posted, per 30 day period. When you post a job, you can hire as many people as you want who apply to the position.`,
  },
  // {
  //     label: 'How do I create Smoothhiring Account',
  //     value: `Simple! Just register at`,
  //     link: 'https://react-staging.smoothhiring.com/sign-up'
  // },
  // {
  //     label: 'Will I be charged for creating an account?',
  //     value: `No, it is free to create an account – you are not charged until you decide to post a job with us.`
  // }
  {
    label: 'How are candidates ranked?',
    value: `<p class="MuiTypography-root MuiTypography-body2 css-135b46w-MuiTypography-root">A candidate’s Fit score is determined based on their survey results and their answers to any prescreening questions you set.There are four different scores:</p>
        <ul>
        <li class="MuiTypography-root MuiTypography-body2 css-135b46w-MuiTypography-root"><span style="color: #74C059;">Strong Fit</span>: Candidates meet or exceed at least 18/20 traits (including all 5 Critical Traits), and all minimum skill and experience requirements.</li>
        <li class="MuiTypography-root MuiTypography-body2 css-135b46w-MuiTypography-root"><span style="color: #74C059;">Fit</span>: Candidates meet or exceed at least 14/20 traits (including at least 3 Critical Traits), and all minimum skill and experience requirements.</li>
        <li class="MuiTypography-root MuiTypography-body2 css-135b46w-MuiTypography-root"><span style="color: #CCA300;">Weak Fit</span>: Candidates don’t meet 14/20 traits, 3 Critical Traits, and/or don’t meet all minimum skill and experience requirements.</li>
        <li class="MuiTypography-root MuiTypography-body2 css-135b46w-MuiTypography-root"><span style="color: #F00;">Distortion</span>: The candidate’s survey results are inconclusive, either because they answered inconsistently or dishonesty.They will have the chance to take the survey one more time.</li>
        </ul>`,
  },
  {
    label: 'What do I receive for each applicant?',
    value: `
            <div>
                <style>
                    .custom-list-item {
                        font-size: 14px;
                    }
                </style>
                <p class="MuiTypography-root MuiTypography-body2 css-135b46w-MuiTypography-root">For every candidate who applies, you will receive their Hiring Guide. This includes:</p>
                <ul>
                    <li class="custom-list-item">Their Fingerprint (based on their survey results).</li>
                    <li class="custom-list-item">Their resume.</li>
                    <li class="custom-list-item">Customized interview questions based on their lowest scores.</li>
                </ul>
            </div>
        `,
  },
  {
    label: 'How do I add other users to my company’s account?',
    value: `Click the ‘Settings’ button in the top right corner, and then click the ‘Access Levels’ tab. Click the ‘Add New User’ button, and enter the information for the person you’d like to add to the account. You’ll also need to assign them an access level: Administrator, Recruiter, Hiring Manager or Observer. There can be only one Owner of the account.`,
  },
  {
    label: 'I have my own job description – how do I use it?',
    value: `Click ‘Create New Job’ and follow the steps on each page. Once you get to the ‘Preview’ page, click the ‘I want to edit this job description’ button and copy & paste your job description into the text box.`,
  },
  {
    label: 'Read More',
    value: `
            <a href="https://smoothhiring.com/frequently-asked-questions/" style="text-decoration: none;">
                <p class="MuiTypography-root MuiTypography-body2 css-135b46w-MuiTypography-root">
                    Read our full FAQ ->
                </p>
             </a>
    `,
  },
];

/**
 * Array of subdomains that are excluded. This is to avoid making employer details API call with subdomain */
export const ExcludedSubdomains: TExcludedSubdomains[] = ['app', 'localhost', 'react-staging', 'resources', 'resources-staging', 'tools', 'help', 'help-staging'];

/**
 * Redirect urls map for Production
 */
export const ResourcesRedirectUrlMap: TResourcesRedirectUrlMap = {
  aiJobDescription: '/resources/ai-job-description/',
  aiInterviewKit: '/resources/ai-interview-kit/',
  jobTemplatesHome: '/resources/job-description-templates/',
  jobTemplateDetails: '/resources/job-description-templates/:templateName/',
  policyTemplatesHome: '/resources/policy-templates/',
  policyTemplateDetails: '/resources/policy-templates/:templateName/',
  resourcesHome: '/resources/',
  offerLetterTemplates: '/resources/offer-letter-templates/',
  generalJobOfferTemplate: '/resources/offer-letter-templates/general-job-offer-template/',
  formalJobOfferTemplate: '/resources/offer-letter-templates/formal-job-offer-template/',
  rejectionLetterTemplate: '/resources/rejection-letter-templates/',
  rejectionLetterTemplatesDetails: 'rejection-letter-templates/:rejectionLetterName/',
  interviewLetterTemplate: '/resources/interview-letter-templates/',
  interviewLetterTemplatesDetails: 'interview-letter-templates/:interviewLetterName/',
  emailTemplates: '/resources/email-templates/',

  // TODO ADD TO MARKETING
  offerLetterTemplatesDetails: '/resources/offer-letter-templates/:offerTemplateName/',
};

export const EmployerResourcesRedirectUrlMap: TResourcesRedirectUrlMap = {
  aiJobDescription: 'ai-job-description-generator',
  aiInterviewKit: 'ai-interview-kit',
  jobTemplatesHome: 'job-description-templates',
  jobTemplateDetails: 'job-description-templates/:templateName',
  policyTemplatesHome: 'policy-templates',
  policyTemplateDetails: 'policy-templates/:templateName',
  resourcesHome: 'resources',
  offerLetterTemplates: 'offer-letter-templates',
  offerLetterTemplatesDetails: 'offer-letter-templates/:offerTemplateName',
  emailTemplates: '/resources/email-templates',

  rejectionLetterTemplate: 'rejection-letter-templates',
  rejectionLetterTemplatesDetails: 'rejection-letter-templates/:rejectionLetterName',

  interviewLetterTemplate: 'interview-letter-templates',
  interviewLetterTemplatesDetails: 'interview-letter-templates/:interviewLetterName',

  // TO DO - REMOVE FROM EMPLOYER
  generalJobOfferTemplate: 'offer-letter-templates/general-job-offer-template',
  formalJobOfferTemplate: 'offer-letter-templates/formal-job-offer-template',
};

/**
 * Redirect urls map for Production
 */
export const ToolsRedirectUrlMap: TToolsRedirectUrlMap = {
  toolsHome: '/tools',
};

export const SHSignUpLink = 'https://app.smoothhiring.com/accounts/login';

export const ratingLookup: { [index: number]: string } = {
  1: 'Very Poor',
  2: 'Poor',
  3: 'Average',
  4: 'Good',
  5: 'Excellent',
};
