import NearMeIcon from '@mui/icons-material/NearMe';
import { Box, Grid, Grow, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { IsSmScreen } from 'helpers/hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { StyledActionButton } from 'Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles';
import { JobDescriptions as templateDescriptions } from './DescriptionTemplateConstants';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { ShContainer } from '@smoothhiring/smooth-ui';
import { ResourceFormControl, ResourceHeroBody, ResourceHeroTitle, ResourceSectionSubtitle } from '@smoothhiring/smooth-ui';
import { ShPaper } from '@smoothhiring/smooth-ui';
import { SHSignUpLink } from 'shared/constants';
import { getResourcesRedirect } from 'shared/utils';
import { ResourceCTA } from '../../ResourceCTA';

export const DescriptionTemplateHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const isVisible = true;
  const isSmScreen = IsSmScreen();

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value as string);
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
      <ShContainer maxWidth='xl' height='100%' margin='auto'>
        <Stack marginBottom={4} marginTop={4}>
          <ShPaper variant='outlined'>
            <Grow in={isVisible} timeout={1000} mountOnEnter unmountOnExit>
              <Stack>
                <ResourceSectionSubtitle variant='body2' textAlign='center' gutterBottom>
                  HR Templates | Job descriptions
                </ResourceSectionSubtitle>
                <ResourceHeroTitle component='h1' gutterBottom>
                  Job Description Templates
                </ResourceHeroTitle>
                <ResourceHeroBody>Crafted to enhance visibility and optimize for job board approval and SEO, our library of over 500+ job description templates ensures heightened exposure and expedites the hiring process. Enriched with tailored content, these descriptions attract top-tier candidates and facilitate the influx of qualified applicants.</ResourceHeroBody>

                <Stack justifyContent='center' margin={5} spacing={2} direction={isSmScreen ? 'column' : 'row'}>
                  <ShTextFieldV2 label='Enter Job Title' variant='outlined' size='medium' sx={{ minWidth: { xs: 200 }, maxWidth: { md: 500 }, width: { lg: 700 } }} />
                  <StyledActionButton href={SHSignUpLink} size='large' color='primary' variant='contained' startIcon={<NearMeIcon />}>
                    <Typography minWidth='max-content'>Post this Job</Typography>
                  </StyledActionButton>
                </Stack>
              </Stack>
            </Grow>
          </ShPaper>
        </Stack>
        <Stack direction={isSmScreen ? 'column' : 'row'} spacing={3} marginBottom={4}>
          <Box display='flex' sx={{ minWidth: { xs: '100%', sm: 330 } }}>
            <ShTextFieldV2 label='Search Job Description Templates' variant='outlined' value={searchQuery} onChange={handleSearchChange} fullWidth size='medium' />
          </Box>
          <ResourceFormControl variant='outlined'>
            <InputLabel id='category-select-label'>Filter by Category</InputLabel>
            <Select labelId='category-select-label' id='category-select' value={selectedCategory} onChange={handleCategoryChange} label='Filter by Category'>
              <MenuItem value=''>All Categories</MenuItem>
              {Object.keys(templateDescriptions).map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </ResourceFormControl>
        </Stack>

        {sortedJobDescriptions.map(({ category, descriptions }) => (
          <Box key={category} marginBottom={5}>
            <ResourceSectionSubtitle variant='h6' gutterBottom sx={{ px: 1, pb: 2 }}>
              {category.replace('_', ' ')}
            </ResourceSectionSubtitle>
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
          </Box>
        ))}
        <ResourceCTA />
      </ShContainer>
    </>
  );
};

export default DescriptionTemplateHome;
