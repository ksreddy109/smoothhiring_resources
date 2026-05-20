import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ResourceTemplateCardButton } from '@smoothhiring/smooth-ui';
import { ResourceCTA } from '../../ResourceCTA';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { ShContainer } from '@smoothhiring/smooth-ui';
import { loadAllPolicyTemplates, policyTemplateSlug, resolveListLabelToPolicySlug } from '@/lib/policy-template-slug';
import type { PolicyTemplate } from 'Modules/Marketing/Resources/Templates/TemplateModel';
import {
  ResourceTemplateCategoryBlock,
  ResourceTemplateCategoryHeading,
  ResourceTemplateFilterControl,
  ResourceTemplateFilterToolbar,
  ResourceTemplateSearchBox,
} from 'Modules/Marketing/Resources/ResourceTemplatePages.styled';
import { TemplateHeroEyebrow, TemplateHeroInner, TemplateHeroBox } from 'components/resources/Resources.styled';

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
    if (text.length <= maxLength) return text;
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
      const filteredPolicies = policyDesc.filter(p => p.toLowerCase().includes(searchQuery));
      return { category, descriptions: filteredPolicies };
    })
    .filter(({ category, descriptions }) => descriptions.length > 0 && (selectedCategory === '' || category === selectedCategory));

  const sortedPolicyTemplates = filteredPolicyTemplates.sort((a, b) => a.category.localeCompare(b.category));

  const handleButtonClick = async (description: string) => {
    const templates = allPolicyTemplates.length > 0 ? allPolicyTemplates : await loadAllPolicyTemplates();
    if (allPolicyTemplates.length === 0) setAllPolicyTemplates(templates);
    const resolved = resolveListLabelToPolicySlug(description, templates) ?? policyTemplateSlug(description);
    void navigate(`/resources/policy-templates/${resolved}/`);
  };

  return (
    <>
      <Helmet>
        <title>Free HR Policy Templates | SmoothHiring</title>
        <meta name='description' content='Enjoy free HR Policy templates to streamline the mundane parts of your business. Download professionally crafted policy templates for free at SmoothHiring' />
      </Helmet>

      <TemplateHeroBox>
        <TemplateHeroInner>
          <TemplateHeroEyebrow>
            <GavelOutlinedIcon sx={{ fontSize: '0.75rem' }} />
            HR Templates
          </TemplateHeroEyebrow>
          <Typography
            component='h1'
            sx={{ fontWeight: 700, fontSize: { xs: '1.625rem', sm: '2.125rem' }, letterSpacing: '-0.02em', color: 'text.primary' }}
          >
            HR Company Policy Templates
          </Typography>
          <Typography variant='body1' color='text.secondary' sx={{ maxWidth: 560, lineHeight: 1.65 }}>
            100+ HR policy templates covering compensation, leave, workplace conduct, and IT security. Use them as-is or adapt each one to fit your organization.
          </Typography>
        </TemplateHeroInner>
      </TemplateHeroBox>

      <ShContainer maxWidth='xl'>
        <ResourceTemplateFilterToolbar>
          <ResourceTemplateSearchBox>
            <ShTextFieldV2 label='Search Company Policy Templates' variant='outlined' value={searchQuery} onChange={handleSearchChange} fullWidth size='small' />
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
                  <ResourceTemplateCardButton color='inherit' onClick={() => handleButtonClick(description)}>
                    {truncateText(description, 40)}
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

export default PolicyTemplateHome;
