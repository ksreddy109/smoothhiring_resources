import { type Theme, styled } from '@mui/material';
import { ResourceHeroCtaRow, ShGreenBtn } from '@/integrations/smooth-hiring-ui';

const mobileMarketingButton = {
  width: '100%',
  flex: 'none',
  alignSelf: 'stretch',
  minHeight: 40,
  height: 40,
  maxHeight: 40,
  padding: '8px 16px',
  lineHeight: 1.25,
  whiteSpace: 'normal',
  boxSizing: 'border-box',
} as const;

const mobileRowChildren = {
  flex: 'none',
  maxWidth: 'none',
} as const;

const desktopButtonBase = {
  boxSizing: 'border-box' as const,
  minHeight: 36,
  height: 36,
  lineHeight: 1.43,
};

/** Matched-height hero CTAs (medium = 36px on desktop). */
export const ResourceMarketingCtaRow = styled(ResourceHeroCtaRow)(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down('sm')]: {
    '& > *': mobileRowChildren,
  },
  '& .MuiButton-root': {
    ...desktopButtonBase,
    [theme.breakpoints.down('sm')]: mobileMarketingButton,
  },
}));

/** Side-by-side actions (template detail, AI tool results). */
export const ResourceMarketingActionRow = styled(ResourceHeroCtaRow)(({ theme }: { theme: Theme }) => ({
  gap: theme.spacing(2),
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    '& > *': mobileRowChildren,
  },
  '& .MuiButton-root': {
    ...desktopButtonBase,
    [theme.breakpoints.down('sm')]: mobileMarketingButton,
  },
}));

/** Bottom-of-page CTA primary button. */
export const ResourceMarketingCtaButton = styled(ShGreenBtn)(({ theme }: { theme: Theme }) => ({
  ...desktopButtonBase,
  flexShrink: 0,
  maxWidth: '100%',
  [theme.breakpoints.down('sm')]: mobileMarketingButton,
  [theme.breakpoints.up('sm')]: {
    whiteSpace: 'nowrap',
    width: 'auto',
  },
}));
