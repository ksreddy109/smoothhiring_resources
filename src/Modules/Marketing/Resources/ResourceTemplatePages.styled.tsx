import { Box, Stack, styled } from '@mui/material';
import { ResourceHeroCtaRow, ResourceSectionSubtitle, ShTextFieldV2 } from '@smoothhiring/smooth-ui';

export const ResourceTemplateSearchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: '1 1 0',
  minWidth: 0,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    flex: '1 1 100%',
  },
}));

export const ResourceTemplateCategoryHeading = styled(ResourceSectionSubtitle)(({ theme }) => ({
  paddingInline: theme.spacing(1),
  paddingBottom: theme.spacing(2),
}));

export const ResourceDescriptionHeroTextField = styled(ShTextFieldV2)({
  width: '100%',
  maxWidth: 720,
});

export const ResourceTemplateListHeroWrapper = styled(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginTop: 0,
}));

export const ResourceTemplateListHeroInner = styled(Stack)(({ theme }) => ({
  marginTop: 0,
  marginBottom: theme.spacing(2),
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(1),
  },
}));

export const ResourceTemplateListHeroCtaRow = ResourceHeroCtaRow;

export const ResourceTemplateFilterToolbar = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}));

export const ResourceTemplateFilterControl = styled(Box)(({ theme }) => ({
  flex: '0 0 320px',
  minWidth: 200,
  maxWidth: 420,
  [theme.breakpoints.down('sm')]: {
    flex: '1 1 100%',
    maxWidth: 'none',
  },
}));

export const ResourceTemplateCategoryBlock = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));
