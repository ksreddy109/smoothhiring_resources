import type { JobDescriptions } from './DescriptionTemplateConstants';

/** Featured roles for the job description templates hub (titles must exist in JobDescriptions). */
export type JobDescriptionFeaturedSection = {
  id: string;
  title: string;
  description: string;
  /** Keys from `JobDescriptions` used when rendering the full catalog under this section. */
  categories: (keyof typeof JobDescriptions)[];
  roles: string[];
};

export const jobDescriptionFeaturedSections: JobDescriptionFeaturedSection[] = [
  {
    id: 'sales-marketing',
    title: 'Sales & Marketing Job Descriptions',
    description:
      'Job description templates and examples for sales, business development, and marketing roles.',
    categories: ['Sales', 'Marketing'],
    roles: [
      'Sales Manager Job description',
      'Account Executive Job description',
      'Marketing Manager Job description',
      'Sales Representative Job description',
      'Digital Marketing Specialist Job description',
      'Social Media Manager Job description',
    ],
  },
  {
    id: 'technology-engineering',
    title: 'Technology & Engineering Job Descriptions',
    description:
      'Free job description examples for software, data, infrastructure, and technical support roles.',
    categories: ['IT'],
    roles: [
      'Software Engineer Job description',
      'Data Analyst Job description',
      'DevOps Engineer Job description',
      'Product Manager Job description',
      'Software Tester Job description',
      'IT Support Specialist Job description',
    ],
  },
  {
    id: 'operations-admin',
    title: 'Operations & Admin Job Descriptions',
    description:
      'Templates for operations, project coordination, and administrative positions.',
    categories: ['Administrative'],
    roles: [
      'IT Project Manager Job description',
      'Sales Operations Manager Job description',
      'Administrative Assistant Job description',
      'Office Manager Job description',
      'Executive Assistant Job description',
      'Project Administrator Job description',
    ],
  },
  {
    id: 'customer-support',
    title: 'Customer & Support Job Descriptions',
    description:
      'Job description templates for customer-facing and support teams.',
    categories: ['Sales'],
    roles: [
      'Customer Service Representative Job description',
      'Sales Support Specialist Job description',
      'Technical Support Engineer Job description',
      'Customer Success Manager Job description',
      'Help Desk Technician Job description',
      'Inside Sales Representative Job description',
    ],
  },
  {
    id: 'hr-finance',
    title: 'HR & Finance Job Descriptions',
    description:
      'Hiring-ready templates for human resources, recruiting, and finance roles.',
    categories: ['Human_Resources', 'Finance', 'Accounting'],
    roles: [
      'HR Manager Job description',
      'Recruitment Specialist Job description',
      'Senior Accountant Job Description',
      'Financial Analyst Job description',
      'Payroll Administrator Job description',
      'Talent Acquisition Specialist Job description',
    ],
  },
];

/** Maps legacy `JobDescriptions` category keys to hub section ids for the full catalog. */
export const jobDescriptionCategoryToSectionId: Record<string, string> = {
  Sales: 'sales-marketing',
  Marketing: 'sales-marketing',
  IT: 'technology-engineering',
  Administrative: 'operations-admin',
  Human_Resources: 'hr-finance',
  Finance: 'hr-finance',
  Accounting: 'hr-finance',
  Education: 'hr-finance',
  Healthcare: 'operations-admin',
  Law: 'hr-finance',
};
