'use client';

import type { ElementType } from 'react';
import { Chip } from '@mui/material';
import { StrongFitIcon } from '@/components/resources/icons/StrongFitIcon';
import { MarketingIconWrap } from './layout.styled';

type Props = {
  label: string;
  icon?: ElementType;
  /** ATS Strong Signal / Strong Fit chip (outlined + green check badge icon). */
  variant?: 'default' | 'strongFit';
};

export function MarketingEyebrow({ label, icon: Icon, variant = 'default' }: Props) {
  if (variant === 'strongFit') {
    return (
      <Chip
        size="small"
        label={label}
        variant="outlined"
        color="default"
        icon={<StrongFitIcon fontSize="small" aria-hidden />}
      />
    );
  }

  return (
    <Chip
      size="small"
      label={label}
      variant="outlined"
      color="default"
      icon={
        Icon ? (
          <MarketingIconWrap>
            <Icon fontSize="inherit" aria-hidden />
          </MarketingIconWrap>
        ) : undefined
      }
    />
  );
}
