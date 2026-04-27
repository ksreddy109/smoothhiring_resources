// Import all job description template constant modules
// export const requireDescriptionTemplateContext = (require as any).context('./JobDescriptionTemplates/DescriptionTemplatePageConstants', false, /\.ts$/);
// export const requireEmailTemplateContext = (require as any).context('./JobDescriptionTemplates/EmailTemplates', false, /\.ts$/);

export interface JobDescription {
  title: string;
  jobRole: string;
  preRead: string;
  sections: {
    heading: string;
    paragraph?: string;
    paragraphs?: string[];
  }[];
}

export interface PolicyTemplate {
  title: string;
  policyBlurb: string;
  preRead: string;
  sections: {
    heading: string;
    paragraph?: string;
    paragraphs?: string[];
  }[];
}

export interface JobDescriptions {
  [key: string]: JobDescription;
}

export interface PolicyTemplates {
  [key: string]: PolicyTemplate;
}

export interface JobOfferFormProps {
  isSmScreen: boolean;
  salary: string;
  startDate: string;
  companyName: string;
  candidateName: string;
  jobTitle: string;
  employmentHours: string;
  department: string;
  bonusPrograms: string;
  responseDate: string;
  employmentType: string;
  vacationDays: string;
  contractDuration: string;
  employmentAgreement: string;
  managerName: string;
  contactDetails: string;
  yourName: string;
  signature: string;
  benefits: string[];
  setSalary: (value: string) => void;
  setStartDate: (value: string) => void;
  setCompanyName: (value: string) => void;
  setCandidateName: (value: string) => void;
  setJobTitle: (value: string) => void;
  setEmploymentHours: (value: string) => void;
  setDepartment: (value: string) => void;
  setBonusPrograms: (value: string) => void;
  setResponseDate: (value: string) => void;
  setEmploymentType: (value: string) => void;
  setVacationDays: (value: string) => void;
  setContractDuration: (value: string) => void;
  setEmploymentAgreement: (value: string) => void;
  setManagerName: (value: string) => void;
  setContactDetails: (value: string) => void;
  setYourName: (value: string) => void;
  setSignature: (value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleDeleteBenefit: (index: number) => void;
}

export interface JobRejectionFormProps {
  isSmScreen: boolean;
  companyName: string;
  candidateName: string;
  jobTitle: string;
  department: string;
  contactDetails: string;
  yourName: string;
  signature: string;
  setCompanyName: (value: string) => void;
  setCandidateName: (value: string) => void;
  setDepartment: (value: string) => void;
  setContactDetails: (value: string) => void;
  setJobTitle: (value: string) => void;
  setYourName: (value: string) => void;
  setSignature: (value: string) => void;
}

export interface JobInterviewFormProps {
  isSmScreen: boolean;
  companyName: string;
  candidateName: string;
  jobTitle: string;
  department: string;
  contactDetails: string;
  yourName: string;
  signature: string;
  setCompanyName: (value: string) => void;
  setCandidateName: (value: string) => void;
  setDepartment: (value: string) => void;
  setContactDetails: (value: string) => void;
  setJobTitle: (value: string) => void;
  setYourName: (value: string) => void;
  setSignature: (value: string) => void;
}
