import { Box, Grid, Stack, styled } from '@mui/material';
import { ShPaper } from '@/integrations/smooth-hiring-ui';

export const ProgrammaticContentGrid = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export const ProgrammaticFeaturesPaper = styled(ShPaper)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
}));

export const ProgrammaticFeaturesList = styled(Box)(({ theme }) => ({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.25),
}));

export const ProgrammaticFeatureRow = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: 8,
});

export const ProgrammaticFeatureIconWrap = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(0.25),
  display: 'flex',
}));

export const ProgrammaticBottomStack = styled(Stack)(({ theme }) => ({
  paddingBottom: theme.spacing(4),
}));
