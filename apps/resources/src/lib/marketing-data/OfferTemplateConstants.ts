export type OfferTemplateCard = {
  title: string;
  description: string;
  path: string;
};

export const offerTemplates: OfferTemplateCard[] = [
  {
    title: 'General Job Offer Template',
    description: 'Versatile structure for various job positions, including job title, salary, benefits, and employment terms.',
    path: '/general-job-offer-template',
  },
  {
    title: 'Formal Job Offer Template',
    description: 'Corporate template with formal language, detailed job responsibilities, compensation, benefits, and policies.',
    path: '/formal-job-offer-template',
  },
  {
    title: 'Informal Job Offer Template',
    description: 'Friendly template for startups, covering job role, salary, and benefits in a relaxed style.',
    path: '/informal-job-offer-template',
  },
  {
    title: 'Internal Job Offer Template',
    description: 'Tailored for promoting current employees, focusing on transition, new responsibilities, and any changes in compensation.',
    path: '/internal-job-offer-template',
  },
  {
    title: 'Sales Job Offer Template',
    description: 'Customized for sales roles, detailing performance incentives, commission structures, and sales targets.',
    path: '/sales-job-offer-template',
  },
];

export const offerTemplatesByEmploymentType: OfferTemplateCard[] = [
  {
    title: 'Full-Time Offer Letter Template',
    description:
      'A complete job offer letter format for full-time hires — salary, benefits, start date, and employment terms.',
    path: '/formal-job-offer-template',
  },
  {
    title: 'Part-Time Offer Letter Template',
    description:
      'An offer letter sample for part-time roles with hours, hourly or prorated pay, and key benefits.',
    path: '/general-job-offer-template',
  },
  {
    title: 'Internship Offer Letter Template',
    description:
      'A professional internship offer letter with duration, stipend or pay, and program expectations.',
    path: '/informal-job-offer-template',
  },
  {
    title: 'Contract / Freelance Offer Letter Template',
    description:
      'An offer letter format for contract and freelance engagements — scope, rate, and term length.',
    path: '/general-job-offer-template',
  },
  {
    title: 'Remote Employee Offer Letter Template',
    description:
      'Extend a remote job offer with location, work arrangement, compensation, and benefits clearly spelled out.',
    path: '/general-job-offer-template',
  },
];

export const offerTemplatesByRole: OfferTemplateCard[] = [
  {
    title: 'Sales Manager Offer Letter Template',
    description:
      'A job offer letter template with commission structure, targets, and sales-specific compensation details.',
    path: '/sales-job-offer-template',
  },
  {
    title: 'Software Engineer Offer Letter Template',
    description:
      'A technical role offer letter example covering title, salary, equity or bonus, and engineering benefits.',
    path: '/general-job-offer-template',
  },
  {
    title: 'Executive / Senior Offer Letter Template',
    description:
      'A formal offer letter sample for leadership roles with detailed terms and corporate language.',
    path: '/formal-job-offer-template',
  },
  {
    title: 'Entry-Level Offer Letter Template',
    description:
      'A welcoming offer letter format for early-career hires — clear role, pay, and growth expectations.',
    path: '/informal-job-offer-template',
  },
  {
    title: 'Hourly / Retail Offer Letter Template',
    description:
      'An offer letter template for hourly and frontline roles with rate, schedule, and benefits summary.',
    path: '/general-job-offer-template',
  },
];

export const jobOfferEmailTemplates: OfferTemplateCard[] = [
  {
    title: 'Job Offer Email Template',
    description:
      'A short-form job offer email template to confirm the offer quickly before sending the full letter.',
    path: '/informal-job-offer-template',
  },
  {
    title: 'Verbal Offer Follow-Up Letter Template',
    description:
      'Put a verbal offer in writing with a concise follow-up letter candidates can review and accept.',
    path: '/informal-job-offer-template',
  },
];

export const jobOfferTemplateData = {
  companyName: 'Sample Company Inc.',
  recruiterName: 'John Doe',
  jobTitle: 'Software Engineer',
  jobDescription: 'We are seeking a talented and motivated Software Engineer to join our team.',
  salary: '70,000', // This will be dynamically filled by the user
  startDate: '05/15/2024', // This will be dynamically filled by the user
  benefits: ['Health insurance', '401(k) matching', 'Flexible work hours', 'Paid time off', 'Life insurance', 'Employee assistance programs', 'Professional development programs', 'Remote work options', 'Performance bonuses', 'Commuter benefits'],
  vacationDays: '20 days', // Number of paid vacation days
  employmentType: 'Full-time', // Employment type (e.g., Full-time, Part-time)
  employmentHours: '40 hours per week', // Weekly working hours
  department: 'Engineering', // Department name
  employmentAgreement: 'Confidentiality, Nondisclosure, Noncompete agreements', // Employment agreements
  atWillMessage: true, // Whether to include the at-will employment message
  bonusPrograms: 'annual bonus program', // Mention bonus programs, if applicable
  compensationDetails: true, // Whether to attach a letter with more details about compensation plan
  contractDuration: '1 year', // Contract duration, if applicable
  responseDate: 'two weeks from the offer date', // Response deadline date
  managerName: 'Jane Smith', // Manager's name for contact
  contactDetails: 'manager@samplecompany.com, +1-234-567-8901', // Contact details for queries
  candidateName: 'Candidate Name', // Placeholder for candidate's name
  yourName: 'Your Name', // Placeholder for your name
  signature: 'Your Signature', // Placeholder for your signature
};
