'use client';

import type { ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';
import { ResourceCardWrapper, ShPaper } from '@/integrations/smooth-hiring-ui';
import {
  MarketingLinkArrow,
  MarketingLinkCardBody,
  MarketingLinkCardFooter,
  MarketingLinkCardIconBox,
  MarketingLinkCardRoot,
} from './layout.styled';

type Props = {
  href: string;
  title: string;
  description: string;
  icon?: ReactNode;
  linkLabel?: string;
};

export function MarketingLinkCard({
  href,
  title,
  description,
  icon,
  linkLabel = 'View',
}: Props) {
  return (
    <MarketingLinkCardRoot href={href}>
      <ResourceCardWrapper>
        <ShPaper variant="outlined" cursor="pointer" transElevateOnHover height="100%" noPadding>
          <MarketingLinkCardBody>
            <Stack gap={1}>
              {icon ? <MarketingLinkCardIconBox>{icon}</MarketingLinkCardIconBox> : null}
              <Typography variant="subtitle1" component="h3" color="text.primary">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" lineHeight={1.55}>
                {description}
              </Typography>
            </Stack>
            <MarketingLinkCardFooter variant="body2">
              {linkLabel}
              <MarketingLinkArrow aria-hidden />
            </MarketingLinkCardFooter>
          </MarketingLinkCardBody>
        </ShPaper>
      </ResourceCardWrapper>
    </MarketingLinkCardRoot>
  );
}
