import type { CollectionConfig } from 'payload'

export const ResourcePages: CollectionConfig = {
  slug: 'resource-pages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'urlPath', 'pageType', 'status'],
    description:
      'SEO and copy for resources.smoothhiring.com. urlPath matches the path after /resources/ (empty for the hub).',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Internal label and default browser title when SEO title is empty.',
      },
    },
    {
      name: 'urlPath',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description:
          'Path after /resources/ with no leading slash. Examples: "" (hub), "ai-job-description", "job-description-templates/accountant".',
      },
    },
    {
      name: 'pageType',
      type: 'select',
      required: true,
      defaultValue: 'hub',
      options: [
        { label: 'Resources hub', value: 'hub' },
        { label: 'Generator tool', value: 'generator' },
        { label: 'Template category', value: 'template-category' },
        { label: 'Template detail', value: 'template-detail' },
        { label: 'Programmatic SEO', value: 'programmatic' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Short summary for listings and default meta description.',
      },
    },
    {
      name: 'h1',
      type: 'text',
      admin: {
        description: 'Primary on-page heading (overrides auto-generated title when set).',
      },
    },
    {
      name: 'subheadline',
      type: 'textarea',
      admin: {
        description: 'Optional hero subheading below the H1.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        description:
          'Optional body copy. When empty, the site keeps using the built-in React template for this URL.',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      required: true,
    },
  ],
}
