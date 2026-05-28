import { CompanyPolicies } from './PolicyTemplateConstants';

export type PolicyFeaturedItem = {
  /** SEO-friendly link text shown on the card. */
  cardTitle: string;
  /** Label from `CompanyPolicies` lists — used for slug resolution. */
  listLabel: string;
};

export type PolicyFeaturedSection = {
  id: string;
  title: string;
  description: string;
  categories: (keyof typeof CompanyPolicies)[];
  policies: PolicyFeaturedItem[];
};

export const policyFeaturedSections: PolicyFeaturedSection[] = [
  {
    id: 'leave-time-off',
    title: 'Leave & Time-Off Policies',
    description:
      'Free HR policy templates for PTO, sick leave, parental leave, vacation, and bereavement.',
    categories: ['Leave_Time_Off_Policies'],
    policies: [
      {
        cardTitle: 'PTO Policy Template',
        listLabel: 'Employee PTO And Vacation Request Policy Template',
      },
      {
        cardTitle: 'Sick Leave Policy Template',
        listLabel: 'Sample Company Sick Leave Policy Template',
      },
      {
        cardTitle: 'Parental Leave Policy Template',
        listLabel: 'Employee Parental Leave Policy Template',
      },
      {
        cardTitle: 'Vacation Policy Template',
        listLabel: 'Unlimited Vacation Policy Template',
      },
      {
        cardTitle: 'Bereavement Leave Policy Template',
        listLabel: 'Employee Bereavement Leave Policy Template',
      },
    ],
  },
  {
    id: 'conduct-workplace',
    title: 'Conduct & Workplace Policies',
    description:
      'Company policy templates for conduct, harassment prevention, EEO, attendance, and social media.',
    categories: ['Conduct_Ethics_Policies'],
    policies: [
      {
        cardTitle: 'Code of Conduct Policy Template',
        listLabel: 'Code Of Conduct For Employees Template',
      },
      {
        cardTitle: 'Anti-Harassment Policy Template',
        listLabel: 'Workplace Harassment Prevention Policy Template',
      },
      {
        cardTitle: 'Equal Opportunity (EEO) Policy Template',
        listLabel: 'Employee Anti Discrimination And Equal Opportunity Policy Template',
      },
      {
        cardTitle: 'Disciplinary Policy Template',
        listLabel: 'Progressive Discipline And Conduct Policy Template',
      },
      {
        cardTitle: 'Attendance Policy Template',
        listLabel: 'Employee Attendance And Punctuality Policy Template',
      },
      {
        cardTitle: 'Social Media Policy Template',
        listLabel: 'Employee Social Media Conduct Policy Template',
      },
    ],
  },
  {
    id: 'work-arrangement',
    title: 'Work Arrangement Policies',
    description:
      'HR policy examples for remote work, work from home, dress code, and device use.',
    categories: ['Technology_IT_Policies', 'Miscellaneous_Policies'],
    policies: [
      {
        cardTitle: 'Remote Work Policy Template',
        listLabel: 'Employee Remote Work Policy Template',
      },
      {
        cardTitle: 'Work From Home Policy Template',
        listLabel: 'Work From Home Policy Template',
      },
      {
        cardTitle: 'Dress Code Policy Template',
        listLabel: 'Employee Uniform And Dress Code Policy Template',
      },
      {
        cardTitle: 'BYOD Policy Template',
        listLabel: 'Acceptable Use Policy Template',
      },
    ],
  },
  {
    id: 'health-safety-other',
    title: 'Health, Safety & Other Policies',
    description:
      'Workplace policy templates for health and safety, travel and expenses, and overtime.',
    categories: ['Health_Safety_Policies', 'Compensation_Benefits_Policies', 'Miscellaneous_Policies'],
    policies: [
      {
        cardTitle: 'Health & Safety Policy Template',
        listLabel: 'Workplace Safety And Health Policy Template',
      },
      {
        cardTitle: 'Travel & Expense Policy Template',
        listLabel: 'Employee Travel And Expense Reimbursement Policy Template',
      },
      {
        cardTitle: 'Overtime Policy Template',
        listLabel: 'Sample Time And Attendance Policy Template',
      },
    ],
  },
];

export const policyCategoryToSectionId: Record<string, string> = {
  Leave_Time_Off_Policies: 'leave-time-off',
  Conduct_Ethics_Policies: 'conduct-workplace',
  Technology_IT_Policies: 'work-arrangement',
  Miscellaneous_Policies: 'work-arrangement',
  Health_Safety_Policies: 'health-safety-other',
  Compensation_Benefits_Policies: 'health-safety-other',
  Recruitment_Onboarding_Policies: 'conduct-workplace',
};
