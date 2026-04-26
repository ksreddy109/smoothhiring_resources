import { Box, Stack, styled } from '@mui/material';
import {
  ResourceCTAStack,
} from '@/integrations/smooth-hiring-ui';

export const ResourcesHomeHeroSection = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

export const ResourcesHomeHeroContent = styled(Stack)(() => ({
  justifyContent: 'center',
}));

export const ResourcesHomeHeroChipRow = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(1),
  justifyContent: 'center',
  gap: theme.spacing(1),
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const ResourcesHomeSectionHeader = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  gap: theme.spacing(1),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

export const ResourcesHomeToolCards = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  padding: 0,
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const ResourcesHomeCardBody = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(2),
  height: '100%',
}));

export const ResourcesHomeCardDescWrap = styled(Box)(() => ({
  maxWidth: 300,
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const ResourcesHomePromoCards = styled(ResourceCTAStack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'stretch',
  marginTop: theme.spacing(4),
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const ResourcesHomePromoCard = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  height: '100%',
}));

export const ResourcesHomePromoCardIcon = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

export const ResourcesHomePromoCardActions = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));
