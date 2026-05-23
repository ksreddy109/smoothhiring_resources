'use client';

import type { ElementType, ReactNode } from 'react';
import { MarketingEyebrow } from './MarketingEyebrow';
import {
  MarketingHeroDescription,
  MarketingHeroInner,
  MarketingHeroPaper,
  MarketingHeroTitle,
} from './layout.styled';

export type MarketingHeroEyebrowProp =
  | string
  | { label: string; icon?: ElementType; variant?: 'default' | 'strongFit' }
  | ReactNode;

type Props = {
  eyebrow?: MarketingHeroEyebrowProp;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

function renderEyebrow(eyebrow: MarketingHeroEyebrowProp): ReactNode {
  if (typeof eyebrow === 'string') {
    return <MarketingEyebrow label={eyebrow} />;
  }
  if (eyebrow !== null && typeof eyebrow === 'object' && 'label' in eyebrow && typeof (eyebrow as { label: string }).label === 'string') {
    const { label, icon, variant } = eyebrow as {
      label: string;
      icon?: ElementType;
      variant?: 'default' | 'strongFit';
    };
    return <MarketingEyebrow label={label} icon={icon} variant={variant} />;
  }
  return eyebrow as ReactNode;
}

/** Shared hero band for hub, template lists, generators, and programmatic pages. */
export function MarketingHero({ eyebrow, title, description, children }: Props) {
  return (
    <MarketingHeroPaper variant="outlined">
      <MarketingHeroInner>
        {eyebrow != null ? renderEyebrow(eyebrow) : null}

        {typeof title === 'string' ? (
          <MarketingHeroTitle component="h1" variant="h4">
            {title}
          </MarketingHeroTitle>
        ) : (
          title
        )}

        {description ? (
          typeof description === 'string' ? (
            <MarketingHeroDescription>{description}</MarketingHeroDescription>
          ) : (
            description
          )
        ) : null}

        {children}
      </MarketingHeroInner>
    </MarketingHeroPaper>
  );
}
