export type EmailTemplateHubSection = 'outreach' | 'application' | 'decision' | 'onboarding';

export type EmailTemplateDefinition = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  hubSection: EmailTemplateHubSection;
  /** Link to an existing template hub instead of only this page */
  dedicatedHubPath?: string;
  subjectLine: string;
  bodyParagraphs: string[];
};

const base = (slug: string, title: string, intro: string, subject: string, body: string[]): EmailTemplateDefinition => ({
  slug,
  title,
  h1: title,
  metaDescription: `${title}. Free recruiting email template from SmoothHiring — copy, customize, and send in seconds.`,
  intro,
  hubSection: 'outreach',
  subjectLine: subject,
  bodyParagraphs: body,
});

export const emailTemplateCatalog: EmailTemplateDefinition[] = [
  {
    ...base(
      'candidate-outreach-email',
      'Candidate Outreach Email Template',
      'Reach passive candidates with a concise cold recruiting email that explains the role and includes one clear call to action.',
      'Interested in a [Job Title] role at [Company Name]',
      [
        'Hi [First Name],',
        'I came across your background and thought you could be a strong fit for our [Job Title] opening at [Company Name]. The role focuses on [one-sentence pitch], and we are building a team that [brief culture or mission hook].',
        'If you are open to a quick conversation, reply with a time that works or book directly here: [scheduling link]. Happy to share more about the team and scope.',
        'Best,',
        '[Your Name]',
        '[Title] | [Company Name]',
      ]
    ),
    hubSection: 'outreach',
  },
  {
    ...base(
      'linkedin-recruiting-email',
      'LinkedIn Recruiting Email Template',
      'A short InMail-style recruiting email for passive candidates on LinkedIn — personal, specific, and easy to reply to.',
      'Quick question about your experience with [Skill]',
      [
        'Hi [First Name],',
        'I am recruiting for a [Job Title] at [Company Name] and your experience with [specific skill/project] stood out.',
        'Would you be open to a 15-minute chat this week to see if the role could be a fit? No pressure if timing is not right.',
        'Thanks,',
        '[Your Name]',
      ]
    ),
    hubSection: 'outreach',
  },
  {
    ...base(
      'employee-referral-request-email',
      'Employee Referral Request Email Template',
      'Ask your team for quality referrals with a forwardable email that explains the role and how to submit candidates.',
      'Referral request: [Job Title] at [Company Name]',
      [
        'Hi team,',
        'We are hiring a [Job Title] and would appreciate your help finding great people in your network.',
        'If you know someone who would be a strong fit, please reply with their name and email or submit through [referral link]. Referral bonus: [details if applicable].',
        'Thank you,',
        '[Your Name]',
      ]
    ),
    hubSection: 'outreach',
  },
  {
    ...base(
      'talent-pool-re-engagement-email',
      'Talent Pool Re-Engagement Email Template',
      'Re-engage past applicants or silver medalists when a new role opens — warm, personal, and easy to reply to.',
      'New [Job Title] opening at [Company Name]',
      [
        'Hi [First Name],',
        'We spoke previously about opportunities at [Company Name], and a new [Job Title] role is now open that may align with your background.',
        'If you are interested, I would love to reconnect for a brief call. You can reply here or pick a time: [scheduling link].',
        'Best,',
        '[Your Name]',
      ]
    ),
    hubSection: 'outreach',
  },
  {
    ...base(
      'application-received-email',
      'Application Received Email Template',
      'Acknowledge every applicant quickly with a professional application received email.',
      'We received your application for [Job Title]',
      [
        'Hi [First Name],',
        'Thank you for applying for the [Job Title] position at [Company Name]. We have received your application and our team is reviewing it.',
        'If your experience is a match, we will reach out within [timeframe] with next steps. We appreciate your interest in joining us.',
        'Best regards,',
        '[Your Name]',
        'Talent Team | [Company Name]',
      ]
    ),
    hubSection: 'application',
  },
  {
    slug: 'interview-invitation-email',
    title: 'Interview Invitation Email Template',
    h1: 'Interview Invitation Email Template',
    metaDescription:
      'Free interview invitation email templates for phone, video, panel, and in-person interviews. Invite candidates professionally and schedule faster.',
    intro:
      'Use our dedicated interview invitation template library for phone screens, video calls, panels, and in-person interviews — or start with the sample below.',
    hubSection: 'application',
    dedicatedHubPath: '/resources/interview-letter-templates/',
    subjectLine: 'Interview invitation — [Job Title] at [Company Name]',
    bodyParagraphs: [
      'Hi [First Name],',
      'Congratulations — we would like to invite you to interview for the [Job Title] role at [Company Name].',
      'Format: [Phone / Video / In-person / Panel]',
      'Proposed times: [Option 1] · [Option 2] · [Option 3] (or use this link to self-schedule: [link])',
      'Duration: ~[45] minutes with [Interviewer Name, Title].',
      'Please confirm which time works best, or suggest alternatives. We look forward to speaking with you.',
      'Best,',
      '[Your Name]',
    ],
  },
  {
    ...base(
      'interview-confirmation-email',
      'Interview Confirmation Email Template',
      'Confirm date, time, format, and logistics after a candidate accepts your interview invitation.',
      'Confirmed: Interview for [Job Title] on [Date]',
      [
        'Hi [First Name],',
        'This email confirms your interview for the [Job Title] role at [Company Name].',
        'Date & time: [Day, Date, Time, Timezone]',
        'Format: [Video link / Address / Phone number]',
        'Interviewers: [Names and titles]',
        'Please arrive/join five minutes early. Reply if you need to reschedule.',
        'Thank you,',
        '[Your Name]',
      ]
    ),
    hubSection: 'application',
  },
  {
    ...base(
      'interview-reminder-email',
      'Interview Reminder Email Template',
      'Reduce no-shows with a friendly reminder sent before the scheduled interview.',
      'Reminder: Interview tomorrow for [Job Title]',
      [
        'Hi [First Name],',
        'A quick reminder about your upcoming interview for the [Job Title] role at [Company Name].',
        'When: [Date and time, timezone]',
        'Where: [Link or address]',
        'Who you will meet: [Interviewer names]',
        'If anything changes, reply to this email. We look forward to meeting you.',
        'Best,',
        '[Your Name]',
      ]
    ),
    hubSection: 'application',
  },
  {
    ...base(
      'interview-reschedule-email',
      'Interview Reschedule Email Template',
      'Reschedule an interview professionally while keeping the candidate engaged.',
      'Rescheduling your interview for [Job Title]',
      [
        'Hi [First Name],',
        'We need to reschedule your interview for the [Job Title] position at [Company Name]. We apologize for the inconvenience.',
        'Please share a few times that work over the next [X] business days, or use this link to pick a new slot: [scheduling link].',
        'Thank you for your flexibility.',
        'Best,',
        '[Your Name]',
      ]
    ),
    hubSection: 'application',
  },
  {
    ...base(
      'assessment-task-invite-email',
      'Assessment / Task Invite Email Template',
      'Invite candidates to complete a skills assessment or take-home exercise with clear instructions and deadline.',
      'Next step: [Assessment name] for [Job Title]',
      [
        'Hi [First Name],',
        'Thank you for your interest in the [Job Title] role at [Company Name]. The next step is a [assessment type] so we can learn more about your skills.',
        'Please complete it by [deadline] using this link: [link]. Estimated time: [30–60] minutes.',
        'If you have questions or need an extension, reply to this email.',
        'Best,',
        '[Your Name]',
      ]
    ),
    hubSection: 'application',
  },
  {
    slug: 'job-offer-email',
    title: 'Job Offer Email Template',
    h1: 'Job Offer Email Template',
    metaDescription:
      'Free job offer email and offer letter templates to extend offers clearly and close candidates faster.',
    intro:
      'Send a short offer email first, then follow with a full offer letter. Browse our offer letter templates for the complete document.',
    hubSection: 'decision',
    dedicatedHubPath: '/resources/offer-letter-templates/',
    subjectLine: 'Job offer — [Job Title] at [Company Name]',
    bodyParagraphs: [
      'Hi [First Name],',
      'We are pleased to offer you the position of [Job Title] at [Company Name], reporting to [Manager Name].',
      'Start date: [Date]. Compensation: [Salary/rate] per [year/hour], plus [bonus/equity if applicable].',
      'Your formal offer letter is attached / linked here: [link]. Please sign and return by [expiration date].',
      'Congratulations — we are excited about the possibility of you joining the team.',
      'Best,',
      '[Your Name]',
    ],
  },
  {
    slug: 'candidate-rejection-email',
    title: 'Candidate Rejection Email Template',
    h1: 'Candidate Rejection Email Template',
    metaDescription:
      'Free candidate rejection email and letter templates for every stage of hiring — professional, kind, and ready to send.',
    intro:
      'Browse rejection templates by hiring stage and situation, or use the sample below for a clear, respectful decline.',
    hubSection: 'decision',
    dedicatedHubPath: '/resources/rejection-letter-templates/',
    subjectLine: 'Update on your application for [Job Title]',
    bodyParagraphs: [
      'Hi [First Name],',
      'Thank you for your interest in the [Job Title] role at [Company Name] and for the time you invested in our process.',
      'After careful consideration, we have decided to move forward with other candidates whose experience more closely matches our current needs.',
      'We appreciate your interest and wish you success in your search. We encourage you to apply for future openings that fit your background.',
      'Best regards,',
      '[Your Name]',
    ],
  },
  {
    ...base(
      'candidate-follow-up-email',
      'Candidate Follow-Up Email Template',
      'Follow up after interviews or applications with a clear, courteous message and next steps.',
      'Following up on your [Job Title] application',
      [
        'Hi [First Name],',
        'I wanted to follow up on your application for the [Job Title] role at [Company Name].',
        'Our team is still reviewing candidates and we expect to have an update by [date]. Thank you for your patience.',
        'If your situation has changed or you have questions, feel free to reply.',
        'Best,',
        '[Your Name]',
      ]
    ),
    hubSection: 'decision',
  },
  {
    ...base(
      'reference-request-email',
      'Reference Request Email Template',
      'Request references from candidates with a structured, professional email.',
      'Reference request for [Candidate Name]',
      [
        'Hi [First Name],',
        'As a next step for the [Job Title] role at [Company Name], please provide [2–3] professional references we may contact.',
        'Include each reference’s name, relationship, email, and phone number. If you prefer, reply with availability for a brief reference check call.',
        'Thank you,',
        '[Your Name]',
      ]
    ),
    hubSection: 'decision',
  },
  {
    ...base(
      'onboarding-welcome-email',
      'Onboarding Welcome Email Template',
      'Welcome new hires before day one with role, start date, and what to expect in week one.',
      'Welcome to [Company Name] — [Job Title]',
      [
        'Hi [First Name],',
        'Welcome to [Company Name]! We are excited you are joining as [Job Title] starting [Start Date].',
        'Your manager [Name] will reach out before day one. Please complete any pre-boarding tasks here: [link].',
        'If you have questions before your start date, reply to this email.',
        'See you soon,',
        '[Your Name]',
      ]
    ),
    hubSection: 'onboarding',
  },
  {
    ...base(
      'first-day-onboarding-email',
      'First-Day Onboarding Email Template',
      'Send practical first-day details — where to go, who to meet, and what to bring.',
      'Your first day at [Company Name] — [Start Date]',
      [
        'Hi [First Name],',
        'We are looking forward to your first day on [Date].',
        'Arrival: [Time] at [Address / remote login instructions]. Ask for [Contact Name] at reception / join via [link].',
        'What to bring: [ID, laptop, documents, etc.]. Dress code: [casual/business].',
        'Your schedule for the morning includes [orientation, team intro, etc.].',
        'See you Monday,',
        '[Your Name]',
      ]
    ),
    hubSection: 'onboarding',
  },
];

export const emailTemplateBySlug = new Map(emailTemplateCatalog.map((e) => [e.slug, e]));

/** Rows for the hub email-type map table */
export type EmailTypeMapRow = {
  sourcing: { label: string; href: string; isDedicatedHub?: boolean };
  interview: { label: string; href: string; isDedicatedHub?: boolean };
  decision: { label: string; href: string; isDedicatedHub?: boolean };
};

export const emailTypeMapRows: EmailTypeMapRow[] = [
  {
    sourcing: { label: 'Candidate outreach / cold email', href: '/resources/email-templates/candidate-outreach-email/' },
    interview: { label: 'Interview invitation email', href: '/resources/interview-letter-templates/', isDedicatedHub: true },
    decision: { label: 'Offer email', href: '/resources/offer-letter-templates/', isDedicatedHub: true },
  },
  {
    sourcing: { label: 'LinkedIn / passive candidate email', href: '/resources/email-templates/linkedin-recruiting-email/' },
    interview: { label: 'Interview confirmation email', href: '/resources/email-templates/interview-confirmation-email/' },
    decision: { label: 'Rejection email', href: '/resources/rejection-letter-templates/', isDedicatedHub: true },
  },
  {
    sourcing: { label: 'Application received / acknowledgement', href: '/resources/email-templates/application-received-email/' },
    interview: { label: 'Interview reschedule email', href: '/resources/email-templates/interview-reschedule-email/' },
    decision: { label: 'Candidate follow-up email', href: '/resources/email-templates/candidate-follow-up-email/' },
  },
  {
    sourcing: { label: 'Referral request email', href: '/resources/email-templates/employee-referral-request-email/' },
    interview: { label: 'Assessment / task invite email', href: '/resources/email-templates/assessment-task-invite-email/' },
    decision: { label: 'Reference request email', href: '/resources/email-templates/reference-request-email/' },
  },
  {
    sourcing: { label: 'Re-engagement (talent pool) email', href: '/resources/email-templates/talent-pool-re-engagement-email/' },
    interview: { label: 'Interview reminder email', href: '/resources/email-templates/interview-reminder-email/' },
    decision: { label: 'Onboarding welcome email', href: '/resources/email-templates/onboarding-welcome-email/' },
  },
];

export function emailHubCardsFromCatalog(): {
  outreach: { title: string; description: string; href: string }[];
  application: { title: string; description: string; href: string }[];
  decision: { title: string; description: string; href: string }[];
  onboarding: { title: string; description: string; href: string }[];
} {
  const section = (s: EmailTemplateHubSection) =>
    emailTemplateCatalog
      .filter((e) => e.hubSection === s)
      .map((e) => ({
        title: e.title,
        description: e.intro,
        href: e.dedicatedHubPath ?? `/resources/email-templates/${e.slug}/`,
      }));

  return {
    outreach: section('outreach'),
    application: section('application'),
    decision: section('decision'),
    onboarding: section('onboarding'),
  };
}
