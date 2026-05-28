import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { ResourceTemplateCardButton, ShGreenBtn } from '@smoothhiring/smooth-ui';
import { ResourceLink } from '@/components/resources/ResourceLink';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { SHSignUpLink } from 'shared/constants';
import { templateSlugFromTitle } from '@/lib/resources/paths';
import {
  jobDescriptionCategoryToSectionId,
  jobDescriptionFeaturedSections,
} from '@/lib/marketing-data/JobDescriptionHubConstants';
import {
  MarketingHero,
  MarketingLinkCard,
  MarketingPage,
  MarketingSection,
} from '@/components/resources/layout';
import {
  JOB_DESCRIPTION_HOW_TO_CUSTOMIZE,
  JOB_DESCRIPTION_TEMPLATES_INTRO,
  JOB_DESCRIPTION_TEMPLATES_TITLE,
  JOB_DESCRIPTION_WHATS_INCLUDED,
} from '../../ResourcesConstants';
import { ResourceCTA } from '../../ResourceCTA';
import { JobDescriptions as templateDescriptions } from './DescriptionTemplateConstants';
import {
  ResourceDescriptionHeroTextField,
  ResourceTemplateCategoryBlock,
  ResourceTemplateCategoryHeading,
  ResourceTemplateFilterControl,
  ResourceTemplateFilterToolbar,
  ResourceTemplateListHeroCtaRow,
  ResourceTemplateSearchBox,
} from 'Modules/Marketing/Resources/ResourceTemplatePages.styled';

const JobTemplateCardLink = ResourceTemplateCardButton.withComponent(ResourceLink);

function toLinkCardTitle(templateTitle: string): string {
  return templateTitle.replace(/Job description/i, 'Job Description Template').replace(/Job Description/i, 'Job Description Template');
}

export const DescriptionTemplateHome = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSection, setSelectedSection] = useState<string>('');

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

  const filteredJobDescriptions = useMemo(() => {
    return Object.entries(templateDescriptions)
      .map(([category, descriptions]) => {
        const sectionId = jobDescriptionCategoryToSectionId[category] ?? category;
        const filteredDescriptions = descriptions.filter((d) => d.toLowerCase().includes(searchQuery));
        return { category, sectionId, descriptions: filteredDescriptions };
      })
      .filter(
        ({ descriptions, sectionId }) =>
          descriptions.length > 0 && (selectedSection === '' || sectionId === selectedSection)
      )
      .sort((a, b) => a.category.localeCompare(b.category));
  }, [searchQuery, selectedSection]);

  return (
    <MarketingPage maxWidth='xl'>
      <MarketingHero
        eyebrow={{ label: 'HR Templates', icon: DescriptionOutlinedIcon }}
        title={JOB_DESCRIPTION_TEMPLATES_TITLE}
        description={JOB_DESCRIPTION_TEMPLATES_INTRO}
      >
        <ResourceTemplateListHeroCtaRow>
          <ResourceDescriptionHeroTextField label='Enter Job Title' variant='outlined' size='small' />
          <ShGreenBtn href={SHSignUpLink} size='medium' disableElevation variant='contained' startIcon={<NearMeIcon />}>
            Post this Job
          </ShGreenBtn>
        </ResourceTemplateListHeroCtaRow>
      </MarketingHero>

      {jobDescriptionFeaturedSections.map((section) => (
        <MarketingSection
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          py={4}
        >
          <Grid container spacing={2}>
            {section.roles.map((role) => (
              <Grid item xs={12} sm={6} md={4} key={role}>
                <MarketingLinkCard
                  href={`/resources/job-description-templates/${templateSlugFromTitle(role)}/`}
                  title={toLinkCardTitle(role)}
                  description='Free job description example — copy, customize, and post.'
                  linkLabel='View template'
                />
              </Grid>
            ))}
          </Grid>
        </MarketingSection>
      ))}

      <MarketingSection
        id='all-job-description-templates'
        title='Browse All Job Description Templates'
        description='Search 100+ free job description templates by role title or filter by department.'
        py={4}
      >
        <ResourceTemplateFilterToolbar>
          <ResourceTemplateSearchBox>
            <ShTextFieldV2
              label='Search Job Description Templates'
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
                  if (!value) return 'Filter by Department';
                  const match = jobDescriptionFeaturedSections.find((s) => s.id === value);
                  return match?.title ?? String(value);
                },
              }}
            >
              <MenuItem value=''>Filter by Department</MenuItem>
              {jobDescriptionFeaturedSections.map((section) => (
                <MenuItem key={section.id} value={section.id}>
                  {section.title}
                </MenuItem>
              ))}
            </TextField>
          </ResourceTemplateFilterControl>
        </ResourceTemplateFilterToolbar>

        {filteredJobDescriptions.map(({ category, descriptions }) => (
          <ResourceTemplateCategoryBlock key={category}>
            <ResourceTemplateCategoryHeading variant='h6' gutterBottom>
              {category.replace(/_/g, ' ')}
            </ResourceTemplateCategoryHeading>
            <Grid container spacing={1.5}>
              {descriptions.map((description, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <JobTemplateCardLink
                    color='inherit'
                    href={`/resources/job-description-templates/${templateSlugFromTitle(description)}/`}
                  >
                    {truncateText(description, 43)}
                  </JobTemplateCardLink>
                </Grid>
              ))}
            </Grid>
          </ResourceTemplateCategoryBlock>
        ))}
      </MarketingSection>

      <Box paddingY={4} paddingX={{ xs: 0, sm: 1 }}>
        <Typography variant='h5' component='h2' gutterBottom fontWeight={600}>
          What&apos;s in a Job Description Template
        </Typography>
        <Typography variant='body1' color='text.secondary' paragraph>
          {JOB_DESCRIPTION_WHATS_INCLUDED}
        </Typography>

        <Typography variant='h5' component='h2' gutterBottom fontWeight={600} marginTop={4}>
          How to Customize a Job Description Template
        </Typography>
        <Typography variant='body1' color='text.secondary' paragraph>
          {JOB_DESCRIPTION_HOW_TO_CUSTOMIZE}
        </Typography>
      </Box>

      <ResourceCTA />
    </MarketingPage>
  );
};

export default DescriptionTemplateHome;
