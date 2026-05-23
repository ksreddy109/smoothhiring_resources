import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ResourceTemplateCardButton } from '@smoothhiring/smooth-ui';
import { ResourceCTA } from '../../ResourceCTA';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { loadAllPolicyTemplates, policyTemplateSlug, resolveListLabelToPolicySlug } from '@/lib/policy-template-slug';
import type { PolicyTemplate } from 'Modules/Marketing/Resources/Templates/TemplateModel';
import {
  ResourceTemplateCategoryBlock,
  ResourceTemplateCategoryHeading,
  ResourceTemplateFilterControl,
  ResourceTemplateFilterToolbar,
  ResourceTemplateSearchBox,
} from 'Modules/Marketing/Resources/ResourceTemplatePages.styled';
import { MarketingHero, MarketingPage } from '@/components/resources/layout';

export const PolicyTemplateHome = () => {
  const router = useRouter();
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
    router.push(`/resources/policy-templates/${resolved}/`);
  };

  return (
    <MarketingPage maxWidth='xl'>
      <MarketingHero
        eyebrow={{ label: 'HR Templates', icon: GavelOutlinedIcon }}
        title='HR Company Policy Templates'
        description='100+ HR policy templates covering compensation, leave, workplace conduct, and IT security. Use them as-is or adapt each one to fit your organization.'
      />

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
    </MarketingPage>
  );
};

export default PolicyTemplateHome;
