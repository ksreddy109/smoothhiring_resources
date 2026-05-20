import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ResourceTemplateCardButton, ShButton } from '@smoothhiring/smooth-ui';
import { JobDescriptions as templateDescriptions } from './DescriptionTemplateConstants';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { ShContainer } from '@smoothhiring/smooth-ui';
import { SHSignUpLink } from 'shared/constants';
import { getResourcesRedirect } from 'shared/utils';
import { ResourceCTA } from '../../ResourceCTA';
import {
  ResourceDescriptionHeroTextField,
  ResourceTemplateCategoryBlock,
  ResourceTemplateCategoryHeading,
  ResourceTemplateFilterControl,
  ResourceTemplateFilterToolbar,
  ResourceTemplateListHeroCtaRow,
  ResourceTemplateSearchBox,
} from 'Modules/Marketing/Resources/ResourceTemplatePages.styled';
import { TemplateHeroEyebrow, TemplateHeroInner, TemplateHeroBox } from 'components/resources/Resources.styled';

export const DescriptionTemplateHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  const filteredJobDescriptions = Object.entries(templateDescriptions)
    .map(([category, descriptions]) => {
      const filteredDescriptions = descriptions.filter(d => d.toLowerCase().includes(searchQuery));
      return { category, descriptions: filteredDescriptions };
    })
    .filter(({ category, descriptions }) => descriptions.length > 0 && (selectedCategory === '' || category === selectedCategory));

  const sortedJobDescriptions = filteredJobDescriptions.sort((a, b) => a.category.localeCompare(b.category));

  const handleButtonClick = (description: string) => {
    const formattedTemplateTitle = description.toLowerCase().replace(/ /g, '-');
    navigate(`${getResourcesRedirect('jobTemplatesHome')}/${formattedTemplateTitle}`);
  };

  return (
    <>
      <Helmet>
        <title>Free Job Description Templates | SmoothHiring</title>
        <meta name='description' content="Get customizable job description templates to help you hire more quickly. Use SmoothHiring's assistance to create compelling job advertisements." />
      </Helmet>

      <TemplateHeroBox>
        <TemplateHeroInner>
          <TemplateHeroEyebrow>
            <DescriptionOutlinedIcon sx={{ fontSize: '0.75rem' }} />
            HR Templates
          </TemplateHeroEyebrow>
          <Typography
            component='h1'
            sx={{ fontWeight: 700, fontSize: { xs: '1.625rem', sm: '2.125rem' }, letterSpacing: '-0.02em', color: 'text.primary' }}
          >
            Job Description Templates
          </Typography>
          <Typography variant='body1' color='text.secondary' sx={{ maxWidth: 560, lineHeight: 1.65 }}>
            500+ templates across every industry and role type. Each one is written to perform well on job boards and attract qualified candidates.
          </Typography>
          <ResourceTemplateListHeroCtaRow>
            <ResourceDescriptionHeroTextField label='Enter Job Title' variant='outlined' size='small' />
            <ShButton href={SHSignUpLink} size='large' color='primary' variant='contained' startIcon={<NearMeIcon />} extraLarge>
              Post this Job
            </ShButton>
          </ResourceTemplateListHeroCtaRow>
        </TemplateHeroInner>
      </TemplateHeroBox>

      <ShContainer maxWidth='xl'>
        <ResourceTemplateFilterToolbar>
          <ResourceTemplateSearchBox>
            <ShTextFieldV2 label='Search Job Description Templates' variant='outlined' value={searchQuery} onChange={handleSearchChange} fullWidth size='small' />
          </ResourceTemplateSearchBox>
          <ResourceTemplateFilterControl>
            <TextField
              select
              fullWidth
              value={selectedCategory}
              onChange={handleCategoryChange}
              size='small'
              SelectProps={{
                displayEmpty: true,
                renderValue: (value: unknown) => (value ? String(value) : 'Filter by Category'),
              }}
            >
              <MenuItem value=''>Filter by Category</MenuItem>
              {Object.keys(templateDescriptions).map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
          </ResourceTemplateFilterControl>
        </ResourceTemplateFilterToolbar>

        {sortedJobDescriptions.map(({ category, descriptions }) => (
          <ResourceTemplateCategoryBlock key={category}>
            <ResourceTemplateCategoryHeading variant='h6' gutterBottom>
              {category.replace('_', ' ')}
            </ResourceTemplateCategoryHeading>
            <Grid container spacing={1.5}>
              {descriptions.map((description, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <ResourceTemplateCardButton color='inherit' onClick={() => handleButtonClick(description)}>
                    {truncateText(description, 43)}
                  </ResourceTemplateCardButton>
                </Grid>
              ))}
            </Grid>
          </ResourceTemplateCategoryBlock>
        ))}
        <ResourceCTA />
      </ShContainer>
    </>
  );
};

export default DescriptionTemplateHome;
