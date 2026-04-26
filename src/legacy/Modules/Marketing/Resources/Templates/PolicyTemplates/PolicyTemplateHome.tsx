import { Grid, Grow, MenuItem, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { StyledActionButton } from 'Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles';
import { ResourceCTA } from '../../ResourceCTA';
import { ResourceHeroBody, ResourceHeroTitle, ResourceSectionSubtitle } from '@smoothhiring/smooth-ui';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { ShContainer } from '@smoothhiring/smooth-ui';
import { ShPaper } from '@smoothhiring/smooth-ui';
import { loadAllPolicyTemplates, policyTemplateSlug, resolveListLabelToPolicySlug } from '@/lib/policy-template-slug';
import type { PolicyTemplate } from 'Modules/Marketing/Resources/Templates/TemplateModel';
import {
  ResourceTemplateCategoryBlock,
  ResourceTemplateCategoryHeading,
  ResourceTemplateFilterControl,
  ResourceTemplateFilterToolbar,
  ResourceTemplateListHeroInner,
  ResourceTemplateSearchBox,
} from 'Modules/Marketing/Resources/ResourceTemplatePages.styled';

export const PolicyTemplateHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [CompanyPolicies, setCompanyPolicies] = useState<Record<string, string[]>>({});
  const [allPolicyTemplates, setAllPolicyTemplates] = useState<PolicyTemplate[]>([]);

  useEffect(() => {
    import('./PolicyTemplateConstants').then(mod => {
      setCompanyPolicies(mod.CompanyPolicies);
    });
  }, []);

  useEffect(() => {
    void loadAllPolicyTemplates().then(setAllPolicyTemplates);
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

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  const filteredPolicyTemplates = Object.entries(CompanyPolicies)
    .map(([category, policyDesc]) => {
      const filteredPolicies = policyDesc.filter(policyDesc => policyDesc.toLowerCase().includes(searchQuery));
      return { category, descriptions: filteredPolicies };
    })
    .filter(({ category, descriptions }) => descriptions.length > 0 && (selectedCategory === '' || category === selectedCategory));

  const sortedPolicyTemplates = filteredPolicyTemplates.sort((a, b) => a.category.localeCompare(b.category));

  const handleButtonClick = async (description: string) => {
    const templates = allPolicyTemplates.length > 0 ? allPolicyTemplates : await loadAllPolicyTemplates();
    if (allPolicyTemplates.length === 0) {
      setAllPolicyTemplates(templates);
    }
    const resolved =
      resolveListLabelToPolicySlug(description, templates) ?? policyTemplateSlug(description);
    void navigate(`/resources/policy-templates/${resolved}/`);
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
            <ResourceTemplateListHeroInner>
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
            </ResourceTemplateListHeroInner>
          </Grow>
        </ShPaper>
        <ResourceTemplateFilterToolbar>
          <ResourceTemplateSearchBox>
            <ShTextFieldV2 label='Search Company Policy Templates' variant='outlined' value={searchQuery} onChange={handleSearchChange} fullWidth size='medium' />
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
              {Object.keys(CompanyPolicies).map(category => (
                <MenuItem key={category} value={category}>
                  {category.split('_').join(' ')}
                </MenuItem>
              ))}
            </TextField>
          </ResourceTemplateFilterControl>
        </ResourceTemplateFilterToolbar>
        {sortedPolicyTemplates.map(({ category, descriptions }) => (
          <ResourceTemplateCategoryBlock key={category}>
            <ResourceTemplateCategoryHeading variant='h6' gutterBottom>
              {category.split('_').join(' ')}
            </ResourceTemplateCategoryHeading>
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
          </ResourceTemplateCategoryBlock>
        ))}
        <ResourceCTA />
      </ShContainer>
    </>
  );
};

export default PolicyTemplateHome;
