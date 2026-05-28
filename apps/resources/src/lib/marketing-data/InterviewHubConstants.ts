export type InterviewTemplateCard = {
  title: string;
  description: string;
  path: string;
};

export const interviewTemplatesByType: InterviewTemplateCard[] = [
  {
    title: 'Phone Interview Invitation Email Template',
    description:
      'Invite candidates to a phone screen with a clear, professional interview invitation email.',
    path: '/informal-interview-letter-template',
  },
  {
    title: 'Video Interview Invitation Email Template',
    description:
      'Send a video interview invitation with meeting details, duration, and who the candidate will meet.',
    path: '/informal-interview-letter-template',
  },
  {
    title: 'In-Person Interview Invitation Email Template',
    description:
      'A formal invitation to interview email for on-site interviews — location, time, and check-in details.',
    path: '/formal-interview-letter-template',
  },
  {
    title: 'Panel Interview Invitation Email Template',
    description:
      'Invite candidates to a panel interview with interviewer names, format, and what to expect.',
    path: '/formal-interview-letter-template',
  },
  {
    title: 'One-Way Interview Invitation Email Template',
    description:
      'An async or one-way video interview invitation candidates can complete on their schedule.',
    path: '/auto-interview-templates',
  },
];

export const interviewTemplatesByStage: InterviewTemplateCard[] = [
  {
    title: 'First-Round Interview Invitation Email Template',
    description:
      'A warm first-round interview invitation email to move qualified applicants into your pipeline.',
    path: '/informal-interview-letter-template',
  },
  {
    title: 'Second-Round Interview Invitation Email Template',
    description:
      'Invite finalists to a second-round interview with clear next-step details and scheduling options.',
    path: '/formal-interview-letter-template',
  },
  {
    title: 'Final Interview Invitation Email Template',
    description:
      'A professional final-round interview invitation letter for leadership or team interviews.',
    path: '/formal-interview-letter-template',
  },
];

export const interviewRelatedEmailTemplates: InterviewTemplateCard[] = [
  {
    title: 'Self-Scheduling Interview Invitation Email Template',
    description:
      'Let candidates pick a time with a self-scheduling interview invitation email template.',
    path: '/auto-interview-templates',
  },
  {
    title: 'Interview Reschedule Email Template',
    description:
      'Reschedule an interview professionally while keeping the candidate engaged and informed.',
    path: '/informal-interview-letter-template',
  },
  {
    title: 'Interview Confirmation Email Template',
    description:
      'Confirm date, time, format, and logistics after a candidate accepts your interview invitation.',
    path: '/formal-interview-letter-template',
  },
];
