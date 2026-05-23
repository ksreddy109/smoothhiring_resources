import { Stack, Typography, styled } from '@mui/material';
import { ShGreenBtn, ShPaper } from '@/integrations/smooth-hiring-ui';

export const ResourceCtaPaper = styled(ShPaper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.grey[50],
  padding: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4.5),
  },
}));

export const ResourceCtaRow = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(3),
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export const ResourceCtaCopy = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
  maxWidth: 560,
}));

export const ResourceCtaTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 500,
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
})) as typeof Typography;

export const ResourceCtaButton = styled(ShGreenBtn)({
  whiteSpace: 'nowrap',
  flexShrink: 0,
});
