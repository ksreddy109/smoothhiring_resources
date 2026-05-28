export type RejectionTemplateCard = {
  title: string;
  description: string;
  path: string;
};

export const rejectionTemplates: RejectionTemplateCard[] = [
  {
    title: 'Formal Rejection Letter Template',
    description: 'Customized for formally rejecting applicants',
    path: '/formal-rejection-letter-template',
  },
  {
    title: 'Informal Rejection Letter Template',
    description: 'Customized for informally rejecting applicants',
    path: '/informal-rejection-letter-template',
  },
  {
    title: 'Auto Rejection Letter Template',
    description: 'Customized for auto rejecting applicants',
    path: '/auto-rejection-templates',
  },
];

export const rejectionTemplatesByStage: RejectionTemplateCard[] = [
  {
    title: 'Rejection Email After Applying',
    description:
      'A polite, prompt candidate rejection email for applicants who were not selected for an interview.',
    path: '/auto-rejection-after-applying',
  },
  {
    title: 'Rejection Email After Phone Screen',
    description:
      'A respectful job rejection email template for candidates who completed an initial phone screen.',
    path: '/informal-rejection-after-phone-screen',
  },
  {
    title: 'Rejection Email After Interview',
    description:
      'A professional rejection letter template for candidates who interviewed but were not selected.',
    path: '/formal-rejection-after-interview',
  },
  {
    title: 'Rejection Email After Final Interview',
    description:
      'A thoughtful final-round rejection email that thanks candidates for their time and closes the loop.',
    path: '/formal-rejection-after-final-interview',
  },
];

export const rejectionTemplatesBySituation: RejectionTemplateCard[] = [
  {
    title: 'Silver Medalist Rejection Email',
    description:
      'Decline a strong runner-up while keeping the door open for future roles at your company.',
    path: '/formal-silver-medalist-rejection',
  },
  {
    title: 'Internal Candidate Rejection Email',
    description:
      'Reject an internal applicant with clarity and respect — without damaging morale or relationships.',
    path: '/informal-internal-candidate-rejection',
  },
  {
    title: 'Talent Pool Invitation Rejection Email',
    description:
      'Say no to the current role while inviting qualified candidates to stay connected for future openings.',
    path: '/formal-talent-pool-rejection',
  },
];

export const jobRejectionTemplateData = {
  companyName: 'Sample Company Inc.',
  recruiterName: 'John Doe',
  jobTitle: 'Software Engineer',
  department: 'Engineering',
  contactDetails: 'manager@samplecompany.com, +1-234-567-8901',
  candidateName: 'Candidate Name',
  yourName: 'Your Name',
  signature: 'Your Signature',
};
