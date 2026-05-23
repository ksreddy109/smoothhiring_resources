'use client';

import { Grid } from '@mui/material';
import {
  MarketingStatCell,
  MarketingStatGrid,
  MarketingStatLabel,
  MarketingStatPaper,
  MarketingStatValue,
} from './layout.styled';

type Stat = { value: string; label: string };

type Props = {
  stats: Stat[];
  'aria-label'?: string;
};

export function MarketingStatStrip({ stats, 'aria-label': ariaLabel }: Props) {
  return (
    <MarketingStatPaper variant="outlined" component="section" aria-label={ariaLabel} noPadding>
      <MarketingStatGrid container>
        {stats.map((s) => (
          <MarketingStatCell item xs={6} sm={3} key={s.label}>
            <MarketingStatValue>{s.value}</MarketingStatValue>
            <MarketingStatLabel variant="body2">{s.label}</MarketingStatLabel>
          </MarketingStatCell>
        ))}
      </MarketingStatGrid>
    </MarketingStatPaper>
  );
}
