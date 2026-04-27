import NearMeIcon from '@mui/icons-material/NearMe';
import { Grid, Grow, MenuItem, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { StyledActionButton } from 'Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles';
import { JobDescriptions as templateDescriptions } from './DescriptionTemplateConstants';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { ShContainer } from '@smoothhiring/smooth-ui';
import { ResourceHeroBody, ResourceHeroTitle, ResourceSectionSubtitle } from '@smoothhiring/smooth-ui';
import { ShPaper } from '@smoothhiring/smooth-ui';
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
  ResourceTemplateListHeroInner,
  ResourceTemplateListHeroWrapper,
  ResourceTemplateSearchBox,
} from 'Modules/Marketing/Resources/ResourceTemplatePages.styled';

export const DescriptionTemplateHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const isVisible = true;

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
      return text;
    }
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
      const filteredDescriptions = descriptions.filter(description => description.toLowerCase().includes(searchQuery));
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
      <ShContainer maxWidth='xl'>
        <ResourceTemplateListHeroWrapper>
          <ShPaper variant='outlined'>
            <Grow in={isVisible} timeout={1000} mountOnEnter unmountOnExit>
              <ResourceTemplateListHeroInner>
                <ResourceSectionSubtitle variant='body2' textAlign='center' gutterBottom>
                  HR Templates | Job descriptions
                </ResourceSectionSubtitle>
                <ResourceHeroTitle component='h1' gutterBottom>
                  Job Description Templates
                </ResourceHeroTitle>
                <ResourceHeroBody>Crafted to enhance visibility and optimize for job board approval and SEO, our library of over 500+ job description templates ensures heightened exposure and expedites the hiring process. Enriched with tailored content, these descriptions attract top-tier candidates and facilitate the influx of qualified applicants.</ResourceHeroBody>

                <ResourceTemplateListHeroCtaRow>
                  <ResourceDescriptionHeroTextField label='Enter Job Title' variant='outlined' size='medium' />
                  <StyledActionButton href={SHSignUpLink} size='large' color='primary' variant='contained' startIcon={<NearMeIcon />}>
                    <Typography>Post this Job</Typography>
                  </StyledActionButton>
                </ResourceTemplateListHeroCtaRow>
              </ResourceTemplateListHeroInner>
            </Grow>
          </ShPaper>
        </ResourceTemplateListHeroWrapper>
        <ResourceTemplateFilterToolbar>
          <ResourceTemplateSearchBox>
            <ShTextFieldV2 label='Search Job Description Templates' variant='outlined' value={searchQuery} onChange={handleSearchChange} fullWidth size='medium' />
          </ResourceTemplateSearchBox>
          <ResourceTemplateFilterControl>
            <TextField
              select
              fullWidth
              value={selectedCategory}
              onChange={handleCategoryChange}
              size='medium'
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
                  <StyledActionButton color='inherit' onClick={() => handleButtonClick(description)}>
                    <Typography textAlign='left' variant='body2'>
                      {truncateText(description, 43)}
                    </Typography>
                  </StyledActionButton>
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
