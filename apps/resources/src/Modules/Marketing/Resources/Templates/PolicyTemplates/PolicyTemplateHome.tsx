import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { ResourceTemplateCardButton } from '@smoothhiring/smooth-ui';
import { ResourceLink } from '@/components/resources/ResourceLink';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { templateSlugFromTitle } from '@/lib/resources/paths';
import {
  policyCategoryToSectionId,
  policyFeaturedSections,
} from '@/lib/marketing-data/PolicyHubConstants';
import { loadAllPolicyTemplates, resolveListLabelToPolicySlug } from '@/lib/policy-template-slug';
import {
  MarketingHero,
  MarketingLinkCard,
  MarketingPage,
  MarketingSection,
} from '@/components/resources/layout';
import type { PolicyTemplate } from 'Modules/Marketing/Resources/Templates/TemplateModel';
import {
  POLICY_HOW_TO_WRITE_AND_IMPLEMENT,
  POLICY_TEMPLATES_INTRO,
  POLICY_TEMPLATES_TITLE,
  POLICY_WHAT_IS_HR_POLICY,
} from '../../ResourcesConstants';
import { ResourceCTA } from '../../ResourceCTA';
import {
  ResourceTemplateCategoryBlock,
  ResourceTemplateCategoryHeading,
  ResourceTemplateFilterControl,
  ResourceTemplateFilterToolbar,
  ResourceTemplateSearchBox,
} from 'Modules/Marketing/Resources/ResourceTemplatePages.styled';

const PolicyTemplateCardLink = ResourceTemplateCardButton.withComponent(ResourceLink);

export const PolicyTemplateHome = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSection, setSelectedSection] = useState<string>('');
  const [CompanyPolicies, setCompanyPolicies] = useState<Record<string, string[]>>({});
  const [allPolicyTemplates, setAllPolicyTemplates] = useState<PolicyTemplate[]>([]);

  useEffect(() => {
    import('./PolicyTemplateConstants').then((mod) => {
      setCompanyPolicies(mod.CompanyPolicies);
    });
  }, []);

  useEffect(() => {
    void loadAllPolicyTemplates().then(setAllPolicyTemplates);
  }, []);

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSection(event.target.value);
  };

  const policySlugByLabel = useMemo(() => {
    const map = new Map<string, string>();
    if (allPolicyTemplates.length === 0) return map;
    for (const list of Object.values(CompanyPolicies)) {
      for (const label of list) {
        map.set(
          label,
          resolveListLabelToPolicySlug(label, allPolicyTemplates) ?? templateSlugFromTitle(label)
        );
      }
    }
    for (const section of policyFeaturedSections) {
      for (const { listLabel } of section.policies) {
        if (!map.has(listLabel)) {
          map.set(
            listLabel,
            resolveListLabelToPolicySlug(listLabel, allPolicyTemplates) ?? templateSlugFromTitle(listLabel)
          );
        }
      }
    }
    return map;
  }, [CompanyPolicies, allPolicyTemplates]);

  const policyHref = (listLabel: string) =>
    `/resources/policy-templates/${policySlugByLabel.get(listLabel) ?? templateSlugFromTitle(listLabel)}/`;

  const filteredPolicyTemplates = useMemo(() => {
    return Object.entries(CompanyPolicies)
      .map(([category, policyDesc]) => {
        const sectionId = policyCategoryToSectionId[category] ?? category;
        const filteredPolicies = policyDesc.filter((p) => p.toLowerCase().includes(searchQuery));
        return { category, sectionId, descriptions: filteredPolicies };
      })
      .filter(
        ({ descriptions, sectionId }) =>
          descriptions.length > 0 && (selectedSection === '' || sectionId === selectedSection)
      )
      .sort((a, b) => a.category.localeCompare(b.category));
  }, [CompanyPolicies, searchQuery, selectedSection]);

  return (
    <MarketingPage maxWidth='xl'>
      <MarketingHero
        eyebrow={{ label: 'HR Templates', icon: GavelOutlinedIcon }}
        title={POLICY_TEMPLATES_TITLE}
        description={POLICY_TEMPLATES_INTRO}
      />

      {policyFeaturedSections.map((section) => (
        <MarketingSection
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          py={4}
        >
          <Grid container spacing={2}>
            {section.policies.map((policy) => (
              <Grid item xs={12} sm={6} md={4} key={policy.listLabel}>
                <MarketingLinkCard
                  href={policyHref(policy.listLabel)}
                  title={policy.cardTitle}
                  description='Free HR policy example — download and customize for your company.'
                  linkLabel='View template'
                />
              </Grid>
            ))}
          </Grid>
        </MarketingSection>
      ))}

      <MarketingSection
        id='all-policy-templates'
        title='Browse All HR Policy Templates'
        description='Search 100+ free company policy templates by topic or filter by category.'
        py={4}
      >
        <ResourceTemplateFilterToolbar>
          <ResourceTemplateSearchBox>
            <ShTextFieldV2
              label='Search Company Policy Templates'
              variant='outlined'
              value={searchQuery}
              onChange={handleSearchChange}
              fullWidth
              size='small'
            />
          </ResourceTemplateSearchBox>
          <ResourceTemplateFilterControl>
            <TextField
              select
              fullWidth
              value={selectedSection}
              onChange={handleSectionChange}
              size='small'
              SelectProps={{
                displayEmpty: true,
                renderValue: (value: unknown) => {
                  if (!value) return 'Filter by Category';
                  const match = policyFeaturedSections.find((s) => s.id === value);
                  return match?.title ?? String(value);
                },
              }}
            >
              <MenuItem value=''>Filter by Category</MenuItem>
              {policyFeaturedSections.map((section) => (
                <MenuItem key={section.id} value={section.id}>
                  {section.title}
                </MenuItem>
              ))}
            </TextField>
          </ResourceTemplateFilterControl>
        </ResourceTemplateFilterToolbar>

        {filteredPolicyTemplates.map(({ category, descriptions }) => (
          <ResourceTemplateCategoryBlock key={category}>
            <ResourceTemplateCategoryHeading variant='h6' gutterBottom>
              {category.split('_').join(' ')}
            </ResourceTemplateCategoryHeading>
            <Grid container spacing={1.5}>
              {descriptions.map((description, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <PolicyTemplateCardLink color='inherit' href={policyHref(description)}>
                    {truncateText(description, 40)}
                  </PolicyTemplateCardLink>
                </Grid>
              ))}
            </Grid>
          </ResourceTemplateCategoryBlock>
        ))}
      </MarketingSection>

      <Box paddingY={4} paddingX={{ xs: 0, sm: 1 }}>
        <Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
          What Is an HR Policy
        </Typography>
        <Typography variant='body1' color='text.secondary' paragraph>
          {POLICY_WHAT_IS_HR_POLICY}
        </Typography>

        <Typography variant='h5' component='h2' gutterBottom fontWeight={600} marginTop={4}>
          How to Write and Implement an HR Policy
        </Typography>
        <Typography variant='body1' color='text.secondary' paragraph>
          {POLICY_HOW_TO_WRITE_AND_IMPLEMENT}
        </Typography>
      </Box>

      <ResourceCTA />
    </MarketingPage>
  );
};

export default PolicyTemplateHome;
