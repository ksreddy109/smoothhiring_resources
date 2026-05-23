import { styled } from '@mui/material';
import { ResourceHeroCtaRow } from '@/integrations/smooth-hiring-ui';

/** Matched-height hero CTAs (medium = 36px min in smooth-ui button metrics). */
export const ResourceMarketingCtaRow = styled(ResourceHeroCtaRow)(({ theme }) => ({
  '& .MuiButton-root': {
    boxSizing: 'border-box',
    minHeight: 36,
    height: 36,
    lineHeight: 1.43,
    fontSize: theme.typography.button.fontSize,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minHeight: 40,
      height: 40,
    },
  },
}));

/** Side-by-side actions (template detail, AI tool results). */
export const ResourceMarketingActionRow = styled(ResourceHeroCtaRow)(({ theme }) => ({
  gap: theme.spacing(2),
  alignItems: 'center',
  '& .MuiButton-root': {
    boxSizing: 'border-box',
    minHeight: 36,
    height: 36,
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    '& .MuiButton-root': {
      width: '100%',
      minHeight: 40,
      height: 40,
    },
  },
}));
