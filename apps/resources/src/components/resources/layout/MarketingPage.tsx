'use client';

import type { ReactNode } from 'react';
import { ShContainer } from '@/integrations/smooth-hiring-ui';

type Props = {
  children: ReactNode;
  maxWidth?: 'lg' | 'xl' | false;
};

/** Standard page width and vertical rhythm for marketing/resource routes. */
export function MarketingPage({ children, maxWidth = 'lg' }: Props) {
  return (
    <ShContainer maxWidth={maxWidth} margin="auto">
      {children}
    </ShContainer>
  );
}
