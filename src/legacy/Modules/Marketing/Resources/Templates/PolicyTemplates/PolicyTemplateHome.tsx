import { Box, Grid, Grow, InputLabel, MenuItem, Select, Stack, Typography, styled } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { IsSmScreen } from 'helpers/hooks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { StyledActionButton } from 'Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles';
import { ResourceCTA } from '../../ResourceCTA';
import { ResourceFormControl, ResourceHeroBody, ResourceHeroTitle, ResourceSectionSubtitle } from '@smoothhiring/smooth-ui';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { ShContainer } from '@smoothhiring/smooth-ui';
import { ShPaper } from '@smoothhiring/smooth-ui';

const SearchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  minWidth: 330,
  [theme.breakpoints.down('sm')]: {
    minWidth: '100%',
  },
}));

const CategoryHeading = styled(ResourceSectionSubtitle)(({ theme }) => ({
  paddingInline: theme.spacing(1),
  paddingBottom: theme.spacing(2),
}));

export const PolicyTemplateHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const isSmScreen = IsSmScreen();
  const [CompanyPolicies, setCompanyPolicies] = useState<Record<string, string[]>>({});

  useEffect(() => {
    import('./PolicyTemplateConstants').then(mod => {
      setCompanyPolicies(mod.CompanyPolicies);
    });
  }, []);

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

  const filteredPolicyTemplates = Object.entries(CompanyPolicies)
    .map(([category, policyDesc]) => {
      const filteredPolicies = policyDesc.filter(policyDesc => policyDesc.toLowerCase().includes(searchQuery));
      return { category, descriptions: filteredPolicies };
    })
    .filter(({ category, descriptions }) => descriptions.length > 0 && (selectedCategory === '' || category === selectedCategory));

  const sortedPolicyTemplates = filteredPolicyTemplates.sort((a, b) => a.category.localeCompare(b.category));

  const handleButtonClick = (description: string) => {
    const formattedTemplateTitle = description
      .toLowerCase()
      .replace(/[\s()]/g, '')
      .replace(/-/g, '');
    navigate(`${formattedTemplateTitle}`);
  };

  return (
    <>
      <Helmet>
        <title>Free HR Policy Templates | SmoothHiring</title>
        <meta name='description' content='Enjoy free HR Policy templates to streamline the mundane parts of your buisness. Download professionally crafted policy templates for free at SmoothHiring' />
      </Helmet>
      <ShContainer maxWidth='xl'>
        <ShPaper variant='outlined'>
          <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
            <Stack padding={isSmScreen ? 2 : 5} marginBottom={4} marginTop={4}>
              <ResourceSectionSubtitle variant='body2' textAlign='center' gutterBottom>
                HR Templates | Company Policies
              </ResourceSectionSubtitle>
              <ResourceHeroTitle component='h1' gutterBottom>
                HR Company Policy Templates
              </ResourceHeroTitle>
              <ResourceHeroBody>
                Our extensive collection of company policies is designed to provide clarity, ensure compliance, and foster a positive workplace culture. With over 100 meticulously crafted templates, our policies cover a wide range of topics crucial to modern businesses. These templates are developed to help you establish clear guidelines, maintain consistency, and ensure that all employees
                understand their roles and responsibilities.
              </ResourceHeroBody>
            </Stack>
          </Grow>
        </ShPaper>
        <Stack direction={isSmScreen ? 'column' : 'row'} spacing={3} marginBottom={4}>
          <SearchBox>
            <ShTextFieldV2 label='Search Company Policy Templates' variant='outlined' value={searchQuery} onChange={handleSearchChange} fullWidth size='medium' />
          </SearchBox>
          <ResourceFormControl variant='outlined'>
            <InputLabel id='category-select-label'>Filter by Category</InputLabel>
            <Select labelId='category-select-label' id='category-select' value={selectedCategory} onChange={handleCategoryChange} label='Filter by Category'>
              <MenuItem value=''>All Categories</MenuItem>
              {Object.keys(CompanyPolicies).map(category => (
                <MenuItem key={category} value={category}>
                  {category.split('_').join(' ')}
                </MenuItem>
              ))}
            </Select>
          </ResourceFormControl>
        </Stack>
        {sortedPolicyTemplates.map(({ category, descriptions }) => (
          <Box key={category} marginBottom={5}>
            <CategoryHeading variant='h6' gutterBottom>
              {category.split('_').join(' ')}
            </CategoryHeading>
            <Grid container spacing={1.5}>
              {descriptions.map((description, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <StyledActionButton color='inherit' onClick={() => handleButtonClick(description)}>
                    <Typography textAlign='left' variant='body2'>
                      {truncateText(description, 40)}
                    </Typography>
                  </StyledActionButton>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
        <ShContainer maxWidth='lg'>
          <ResourceCTA />
        </ShContainer>
      </ShContainer>
    </>
  );
};

export default PolicyTemplateHome;
