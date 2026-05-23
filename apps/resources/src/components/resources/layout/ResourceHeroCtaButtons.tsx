'use client';

import type { ReactNode } from 'react';
import { ShBlueBtn, ShButton, ShGreenBtn } from '@/integrations/smooth-hiring-ui';
import { ResourceLink } from '@/components/resources/ResourceLink';
import { ResourceMarketingCtaRow } from '@/components/resources/resource-buttons.styled';

type CtaProps = {
  href: string;
  label: string;
  endIcon?: ReactNode;
};

type Props = {
  primary: CtaProps;
  secondary: CtaProps;
  /** Use green primary CTA (post job). Default is brand blue (ShBlueBtn). */
  primaryVariant?: 'blue' | 'green';
};

const sharedButtonProps = {
  size: 'medium' as const,
  disableElevation: true,
};

function linkComponent(href: string) {
  return href.startsWith('http') ? 'a' : ResourceLink;
}

/**
 * Paired hero CTAs with matched height — ShBlueBtn/ShGreenBtn + outlined ShButton (ATS / smooth-ui).
 */
export function ResourceHeroCtaButtons({
  primary,
  secondary,
  primaryVariant = 'blue',
}: Props) {
  const PrimaryBtn = primaryVariant === 'green' ? ShGreenBtn : ShBlueBtn;

  return (
    <ResourceMarketingCtaRow>
      <PrimaryBtn
        component={linkComponent(primary.href)}
        href={primary.href}
        variant="contained"
        endIcon={primary.endIcon}
        {...sharedButtonProps}
      >
        {primary.label}
      </PrimaryBtn>
      <ShButton
        component={linkComponent(secondary.href)}
        href={secondary.href}
        variant="outlined"
        color="primary"
        endIcon={secondary.endIcon}
        {...sharedButtonProps}
      >
        {secondary.label}
      </ShButton>
    </ResourceMarketingCtaRow>
  );
}
