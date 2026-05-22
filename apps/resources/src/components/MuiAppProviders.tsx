'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { muiTheme } from '@/theme/mui-theme';

export const MuiAppProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
