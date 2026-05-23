'use client';

import type { ReactNode } from 'react';
import { Typography } from '@mui/material';
import { MarketingSectionHeader, MarketingSectionRoot } from './layout.styled';

type Props = {
  id?: string;
  overline?: string;
  title: string;
  description?: string;
  children: ReactNode;
  /** Section vertical padding (theme spacing units) */
  py?: number;
};

export function MarketingSection({ id, overline, title, description, children, py = 5 }: Props) {
  return (
    <MarketingSectionRoot id={id} sectionPy={py}>
      <MarketingSectionHeader>
        {overline ? (
          <Typography variant="overline" color="primary">
            {overline}
          </Typography>
        ) : null}
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
        {description ? (
          <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
            {description}
          </Typography>
        ) : null}
      </MarketingSectionHeader>
      {children}
    </MarketingSectionRoot>
  );
}
