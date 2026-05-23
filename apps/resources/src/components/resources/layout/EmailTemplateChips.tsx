'use client';

import type { Theme } from '@mui/material';
import { alpha, useTheme } from '@mui/material';
import { ShChip, ShGreen } from '@/integrations/smooth-hiring-ui';

type CategoryChipColor = 'primary' | 'success' | 'default';

function getCategoryChipStyle(theme: Theme, color: CategoryChipColor) {
  if (color === 'success') {
    return {
      bgColor: alpha(ShGreen, 0.12),
      textColor: ShGreen,
      borderColor: alpha(ShGreen, 0.35),
    };
  }

  if (color === 'default') {
    return {
      bgColor: theme.palette.grey[100],
      textColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
    };
  }

  const primary = theme.palette.primary.main;
  return {
    bgColor: alpha(primary, 0.08),
    textColor: primary,
    borderColor: alpha(primary, 0.25),
  };
}

type EmailCategoryChipProps = {
  label: string;
  color: CategoryChipColor;
};

export function EmailCategoryChip({ label, color }: EmailCategoryChipProps) {
  const theme = useTheme();

  return (
    <ShChip
      label={label}
      size="small"
      customSize="xs"
      hideBoxShadow
      borderRadius="6px"
      {...getCategoryChipStyle(theme, color)}
    />
  );
}

export function EmailFeatureChip({ label }: { label: string }) {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <ShChip
      label={label}
      size="small"
      customSize="xs"
      hideBoxShadow
      borderRadius="6px"
      bgColor="transparent"
      textColor={primary}
      borderColor={alpha(primary, 0.35)}
    />
  );
}
