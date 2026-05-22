import { Box, Stack, styled } from '@mui/material';
import { ResourceCTAStack } from '@/integrations/smooth-hiring-ui';

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HomeHeroBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(155deg, #eef4ff 0%, #f3fdf0 100%)',
  borderRadius: 16,
  border: `1px solid ${theme.palette.divider}`,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const HomeHeroInner = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(6, 4),
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 2.5),
    gap: theme.spacing(1.5),
  },
}));

export const HomeHeroEyebrow = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  backgroundColor: 'rgba(65, 126, 227, 0.1)',
  color: theme.palette.primary.main,
  borderRadius: 100,
  padding: theme.spacing(0.4, 1.25),
  fontSize: '0.6875rem',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
}));

export const HomeHeroActions = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(1.5),
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

// ─── Stats ────────────────────────────────────────────────────────────────────

export const HomeStatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 12,
  overflow: 'hidden',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const HomeStatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2.5, 1.5),
  gap: theme.spacing(0.25),
  borderRight: `1px solid ${theme.palette.divider}`,
  '&:last-child': { borderRight: 'none' },
  [theme.breakpoints.down('sm')]: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:nth-of-type(2n)': { borderRight: 'none' },
    '&:nth-of-type(3), &:nth-of-type(4)': { borderBottom: 'none' },
  },
}));

// ─── Section header ───────────────────────────────────────────────────────────

export const SectionHeader = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  marginBottom: theme.spacing(1.5),
  paddingTop: theme.spacing(0.5),
}));

// ─── Tool cards ───────────────────────────────────────────────────────────────

export const ToolCardsRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const ToolCardBody = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  gap: theme.spacing(1.5),
  height: '100%',
  justifyContent: 'space-between',
}));

export const ToolIconBox = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: 10,
  backgroundColor: 'rgba(65, 126, 227, 0.1)',
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}));

export const FeatureList = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(0.5),
  paddingTop: theme.spacing(0.5),
}));

export const FeatureRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  fontSize: '0.8125rem',
  color: theme.palette.text.secondary,
  '& .dot': {
    width: 5,
    height: 5,
    borderRadius: '50%',
    backgroundColor: theme.palette.success.main,
    flexShrink: 0,
  },
}));

// ─── Template cards ───────────────────────────────────────────────────────────

export const TemplateCardsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: { gridTemplateColumns: 'repeat(2, 1fr)' },
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
}));

export const TemplateCardAnchor = styled('a')({
  textDecoration: 'none',
  display: 'block',
  height: '100%',
});

export const TemplateCardBox = styled(Box)(({ theme }) => ({
  height: '100%',
  borderRadius: 12,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: '#fff',
  cursor: 'pointer',
  transition: 'box-shadow 0.18s ease, transform 0.18s ease, border-color 0.18s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    borderColor: theme.palette.primary.light,
    boxShadow: '0 4px 16px rgba(65,126,227,0.1)',
  },
}));

export const TemplateCardContent = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2.5),
  gap: theme.spacing(0.75),
  height: '100%',
  justifyContent: 'space-between',
}));

export const TemplateIconBox = styled(Box)(({ theme }) => ({
  width: 34,
  height: 34,
  borderRadius: 8,
  backgroundColor: 'rgba(65, 126, 227, 0.08)',
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(0.5),
  flexShrink: 0,
}));

// ─── CTA promo cards ─────────────────────────────────────────────────────────

export const PromoCards = styled(ResourceCTAStack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2),
  alignItems: 'stretch',
  [theme.breakpoints.down('md')]: { flexDirection: 'column' },
}));

export const PromoCardBody = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  gap: theme.spacing(1),
  height: '100%',
}));
