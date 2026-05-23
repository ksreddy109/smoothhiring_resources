"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Grid, Stack, Typography } from "@mui/material";
import type { ProgrammaticSeoPage as ProgrammaticSeoPageData } from "@/lib/programmatic-seo-data";
import {
  EXPLORE_SMOOTH_HIRING,
  EXPLORE_SMOOTH_HIRING_DETAILS,
  HIRE_BEST_CANDIDATES,
  HIRE_BEST_CANDIDATES_DETAILS,
  SHSignUpLink,
} from "@/lib/resources-constants";
import { ResourceCTA } from "@/components/resources/ResourceCTA";
import { MarketingHero, MarketingPage } from "@/components/resources/layout";
import { ResourceHeroCtaButtons } from "@/components/resources/layout";
import {
  ProgrammaticBottomStack,
  ProgrammaticContentGrid,
  ProgrammaticFeatureIconWrap,
  ProgrammaticFeatureRow,
  ProgrammaticFeaturesList,
  ProgrammaticFeaturesPaper,
} from "./ProgrammaticSeoPage.styled";

const FEATURES = [
  "Post to 100+ job boards from one place",
  "AI-powered candidate ranking and screening",
  "Structured interviews and assessment workflows",
  "Pipeline management built for growing teams",
];

type Props = {
  page: ProgrammaticSeoPageData;
  h1?: string;
  subheadline?: string;
};

export function ProgrammaticSeoPage({ page, h1, subheadline }: Props) {
  const headline = h1 ?? page.h1;
  const heroSubtext = subheadline ?? page.metaDesc;
  const eyebrow = page.kind === "industry" ? "Industry hiring software" : "ATS by use case";
  const focusLabel = page.kind === "industry" ? page.industryName : page.usecaseName;
  const focusDetail =
    page.kind === "industry"
      ? `Typical roles: ${page.typicalRoles}. Top hiring challenge: ${page.mainChallenge}.`
      : `${page.usecaseDesc}. Ideal for teams with ${page.businessSize}.`;

  return (
    <MarketingPage maxWidth="lg">
      <MarketingHero eyebrow={eyebrow} title={headline} description={heroSubtext}>
        <ResourceHeroCtaButtons
          primaryVariant="green"
          primary={{
            href: SHSignUpLink,
            label: 'Start hiring free',
            endIcon: <ArrowForwardIcon />,
          }}
          secondary={{
            href: '/resources/',
            label: 'Browse hiring resources',
          }}
        />
      </MarketingHero>

      <ProgrammaticContentGrid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Stack spacing={2}>
            <Typography variant="h5" component="h2">
              Built for {focusLabel}
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
              {focusDetail}
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
              {EXPLORE_SMOOTH_HIRING_DETAILS}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <ProgrammaticFeaturesPaper variant="outlined">
            <Typography variant="subtitle1" gutterBottom>
              What you get with SmoothHiring
            </Typography>
            <ProgrammaticFeaturesList component="ul">
              {FEATURES.map((text) => (
                <ProgrammaticFeatureRow key={text} component="li">
                  <ProgrammaticFeatureIconWrap>
                    <CheckCircleOutlineIcon color="primary" fontSize="small" />
                  </ProgrammaticFeatureIconWrap>
                  <Typography variant="body2">{text}</Typography>
                </ProgrammaticFeatureRow>
              ))}
            </ProgrammaticFeaturesList>
          </ProgrammaticFeaturesPaper>
        </Grid>
      </ProgrammaticContentGrid>

      <ProgrammaticBottomStack spacing={2}>
        <Typography variant="h5" component="h2">
          {HIRE_BEST_CANDIDATES}
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth={720} lineHeight={1.7}>
          {HIRE_BEST_CANDIDATES_DETAILS}
        </Typography>
      </ProgrammaticBottomStack>

      <ResourceCTA
        title={`Ready to hire in ${focusLabel}?`}
        subtitle={EXPLORE_SMOOTH_HIRING}
        buttonText="Try SmoothHiring free"
      />
    </MarketingPage>
  );
}
