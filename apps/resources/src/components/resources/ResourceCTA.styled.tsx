import { Stack, Typography, styled } from '@mui/material';
import { ShPaper } from '@/integrations/smooth-hiring-ui';
import { ResourceMarketingCtaButton } from './resource-buttons.styled';

export const ResourceCtaPaper = styled(ShPaper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.grey[50],
  padding: theme.spacing(2.5, 2),
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4.5),
  },
}));

/** Use `direction={{ xs: 'column', sm: 'row' }}` on the component — MUI applies it via inline flex (reliable on mobile). */
export const ResourceCtaRow = styled(Stack)(({ theme }) => ({
  width: '100%',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(3),
  },
}));

export const ResourceCtaCopy = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(0.75),
  width: '100%',
  maxWidth: '100%',
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(1),
    maxWidth: 560,
  },
}));

export const ResourceCtaTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 500,
  lineHeight: 1.35,
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
})) as typeof Typography;

export const ResourceCtaButton = ResourceMarketingCtaButton;
