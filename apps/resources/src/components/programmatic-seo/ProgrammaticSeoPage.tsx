"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import type { ProgrammaticSeoPage as ProgrammaticSeoPageData } from "@/lib/programmatic-seo-data";
import {
  EXPLORE_SMOOTH_HIRING,
  EXPLORE_SMOOTH_HIRING_DETAILS,
  HIRE_BEST_CANDIDATES,
  HIRE_BEST_CANDIDATES_DETAILS,
  SHSignUpLink,
} from "@/lib/resources-constants";
import { ResourceCTA } from "@/components/resources/ResourceCTA";
import { TemplateHeroBox, TemplateHeroEyebrow, TemplateHeroInner } from "@/components/resources/Resources.styled";

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
    <>
      <TemplateHeroBox>
        <TemplateHeroInner>
          <TemplateHeroEyebrow>{eyebrow}</TemplateHeroEyebrow>
          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.625rem", sm: "2.125rem" },
              letterSpacing: "-0.02em",
              color: "text.primary",
            }}
          >
            {headline}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, lineHeight: 1.65 }}>
            {heroSubtext}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} gap={1.5} pt={1}>
            <Button
              href={SHSignUpLink}
              component="a"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Start hiring free
            </Button>
            <Button component={Link} href="/resources/" variant="outlined" color="primary" size="large">
              Browse hiring resources
            </Button>
          </Stack>
        </TemplateHeroInner>
      </TemplateHeroBox>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              <Typography variant="h5" component="h2" fontWeight={600}>
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
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                What you get with SmoothHiring
              </Typography>
              <Stack spacing={1.25} component="ul" sx={{ m: 0, pl: 0, listStyle: "none" }}>
                {FEATURES.map((text) => (
                  <Stack key={text} direction="row" spacing={1} alignItems="flex-start" component="li">
                    <CheckCircleOutlineIcon color="primary" fontSize="small" sx={{ mt: 0.25 }} />
                    <Typography variant="body2">{text}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Stack spacing={2} sx={{ mt: 6 }}>
          <Typography variant="h5" component="h2" fontWeight={600}>
            {HIRE_BEST_CANDIDATES}
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth={720} lineHeight={1.7}>
            {HIRE_BEST_CANDIDATES_DETAILS}
          </Typography>
        </Stack>
      </Container>

      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <ResourceCTA
          title={`Ready to hire in ${focusLabel}?`}
          subtitle={EXPLORE_SMOOTH_HIRING}
          buttonText="Try SmoothHiring free"
        />
      </Container>
    </>
  );
}
