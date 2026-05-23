'use client';

import type { ElementType } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Stack, Typography } from '@mui/material';
import { ResourceCardWrapper, ShButton, ShGreenBtn, ShPaper } from '@/integrations/smooth-hiring-ui';
import { ResourceLink } from '@/components/resources/ResourceLink';
import {
  MarketingFeatureBullet,
  MarketingFeatureItem,
  MarketingFeatureList,
  MarketingToolCardBody,
  MarketingToolCardButtonRow,
  MarketingToolCardIcon,
  MarketingToolCardRoot,
  MarketingToolCardTitle,
} from './layout.styled';

type Props = {
  title: string;
  description: string;
  href: string;
  buttonText: string;
  variant?: 'primary' | 'success';
  icon: ElementType;
  features: string[];
};

export function MarketingToolCard({
  title,
  description,
  href,
  buttonText,
  variant = 'primary',
  icon: Icon,
  features,
}: Props) {
  const Btn = variant === 'success' ? ShGreenBtn : ShButton;

  return (
    <MarketingToolCardRoot>
      <ResourceCardWrapper>
        <ShPaper variant="outlined" height="100%" noPadding>
          <MarketingToolCardBody>
            <Stack gap={2}>
              <MarketingToolCardIcon>
                <Icon fontSize="small" aria-hidden />
              </MarketingToolCardIcon>
              <MarketingToolCardTitle variant="h3" component="h3">
                {title}
              </MarketingToolCardTitle>
              <Typography variant="body2" color="text.secondary" lineHeight={1.65}>
                {description}
              </Typography>
              <MarketingFeatureList component="ul">
                {features.map((f) => (
                  <MarketingFeatureItem key={f} component="li">
                    <MarketingFeatureBullet />
                    <Typography variant="body2" color="text.secondary">
                      {f}
                    </Typography>
                  </MarketingFeatureItem>
                ))}
              </MarketingFeatureList>
            </Stack>
            <MarketingToolCardButtonRow>
          <Btn
            component={ResourceLink}
            href={href}
            variant="contained"
            size="medium"
            disableElevation
            endIcon={<ArrowForwardIcon fontSize="small" />}
          >
                {buttonText}
              </Btn>
            </MarketingToolCardButtonRow>
          </MarketingToolCardBody>
        </ShPaper>
      </ResourceCardWrapper>
    </MarketingToolCardRoot>
  );
}
