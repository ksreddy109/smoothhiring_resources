import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  alpha,
  styled,
} from '@mui/material';
import { ResourceHeroBody, ResourceHeroTitle, ShPaper } from '@/integrations/smooth-hiring-ui';

/** Hero title — lighter than default ResourceHeroTitle (700). */
export const MarketingHeroTitle = styled(ResourceHeroTitle)({
  fontWeight: 500,
}) as typeof ResourceHeroTitle;

/** Full-width content below hero on generator pages (no extra horizontal gutter). */
export const MarketingFlushContainer = styled(Container)({
  paddingLeft: 0,
  paddingRight: 0,
});

/** Wraps eyebrow icons at 12px without sx on SvgIcon. */
export const MarketingIconWrap = styled(Box)({
  display: 'inline-flex',
  lineHeight: 0,
  '& .MuiSvgIcon-root': {
    fontSize: '0.75rem',
  },
});

export const MarketingIconWrapMd = styled(MarketingIconWrap)({
  '& .MuiSvgIcon-root': {
    fontSize: '1.125rem',
  },
});

export const MarketingHeroPaper = styled(ShPaper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.grey[50],
  borderColor: theme.palette.divider,
  overflow: 'hidden',
}));

export const MarketingHeroInner = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(2),
  maxWidth: 720,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: theme.spacing(4, 2.5),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6, 4),
  },
}));

export const MarketingHeroDescription = styled(ResourceHeroBody)({
  maxWidth: 560,
});

export const MarketingHeroFootnote = styled(Typography)(({ theme }) => ({
  maxWidth: 480,
  lineHeight: 1.5,
  color: theme.palette.text.secondary,
}));

export const MarketingHeroSearchRow = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  width: '100%',
  maxWidth: 520,
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const MarketingSectionRoot = styled('section', {
  shouldForwardProp: (prop) => prop !== 'sectionPy',
})<{ sectionPy?: number }>(({ theme, sectionPy = 5 }) => ({
  paddingTop: theme.spacing(sectionPy),
  paddingBottom: theme.spacing(sectionPy),
}));

export const MarketingSectionHeader = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
  maxWidth: 640,
}));

export const MarketingStatPaper = styled(ShPaper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 1.5,
  overflow: 'hidden',
  marginBottom: theme.spacing(2),
}));

export const MarketingStatGrid = styled(Grid)({});

export const MarketingStatCell = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  textAlign: 'center',
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.up('sm')]: {
    borderBottom: 'none',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  '&:last-child': {
    borderRight: 'none',
    borderBottom: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    '&:nth-of-type(odd)': {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    '&:nth-last-of-type(-n+2)': {
      borderBottom: 'none',
    },
  },
}));

export const MarketingStatValue = styled('p')(({ theme }) => ({
  margin: 0,
  fontSize: '1.5rem',
  fontWeight: 500,
  letterSpacing: '-0.02em',
  color: theme.palette.primary.main,
  lineHeight: 1.1,
}));

export const MarketingStatLabel = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  color: theme.palette.text.secondary,
}));

export const MarketingLinkCardBody = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  justifyContent: 'space-between',
  gap: theme.spacing(1.5),
}));

export const MarketingLinkCardIconBox = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  width: 36,
  height: 36,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.action.hover,
  color: theme.palette.primary.main,
}));

export const MarketingLinkCardFooter = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  fontWeight: 500,
  color: theme.palette.primary.main,
  '& .MuiSvgIcon-root': {
    fontSize: '1rem',
  },
}));

export const MarketingLinkArrow = styled(ArrowForwardIcon)({
  fontSize: '1rem',
});

export const MarketingToolCardRoot = styled(Stack)({
  flex: 1,
  minWidth: 0,
  height: '100%',
});

export const MarketingToolCardBody = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3.5),
  height: '100%',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
}));

export const MarketingToolCardIcon = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  width: 44,
  height: 44,
  borderRadius: theme.shape.borderRadius * 1.25,
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
}));

export const MarketingToolCardTitle = styled(Typography)({
  fontSize: '1.125rem',
  fontWeight: 500,
}) as typeof Typography;

export const MarketingFeatureList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  gap: theme.spacing(0.75),
}));

export const MarketingFeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'flex-start',
}));

export const MarketingFeatureBullet = styled(Box)(({ theme }) => ({
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  flexShrink: 0,
  marginTop: theme.spacing(0.85),
}));

export const MarketingToolCardButtonRow = styled(Box)({
  alignSelf: 'flex-start',
});

export const MarketingCtaSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
}));

export const MarketingCardPadding = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  gap: theme.spacing(1.25),
}));

export const MarketingCardTitle = styled(Typography)({
  fontSize: '1.25rem',
  fontWeight: 500,
}) as typeof Typography;

export const MarketingCardActionRow = styled(Box)(({ theme }) => ({
  alignSelf: 'flex-start',
  marginTop: theme.spacing(0.5),
}));
