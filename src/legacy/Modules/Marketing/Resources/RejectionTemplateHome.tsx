import { Grid, Stack, Typography, styled } from "@mui/material";
import { StyledActionButton } from "Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles";
import { rejectionTemplates } from "Modules/Marketing/Resources/Templates/RejectionTemplates/RejectionTemplateConstants";
import { IsSmScreen } from "helpers/hooks";
import { Link as RouterLink } from "react-router-dom";
import { ShContainer } from "@smoothhiring/smooth-ui";
import { ResourceCardDescription, ResourceSectionStack } from "@smoothhiring/smooth-ui";
import { ShPaper } from "@smoothhiring/smooth-ui";

const TemplateCard = styled(ShPaper)({
  height: '100%',
});

const TemplateDescription = styled(ResourceCardDescription)({
  maxWidth: 'none',
});

export const RejectionTemplateHome = () => {
  const isSmScreen = IsSmScreen();

  return (
    <ShContainer maxWidth="xl" height="100%">
      <ResourceSectionStack maxWidth="85%">
        <Typography variant="h6" gutterBottom>
          Rejection Letter Templates
        </Typography>
        <Grid container spacing={2}>
          {rejectionTemplates.map((template, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <TemplateCard variant="outlined">
                <Stack minHeight={isSmScreen ? 100 : 150} justifyContent="space-between" height="100%" padding={2} spacing={1}>
                  <Typography variant="subtitle1" fontWeight={600} textAlign="left">
                    {template.title}
                  </Typography>
                  <TemplateDescription variant="body2" textAlign="left">
                    {template.description}
                  </TemplateDescription>
                  <StyledActionButton
                    component={RouterLink as any}
                    to={`/resources/rejection-letter-templates${template.path}`}
                    variant="contained"
                    size="small"
                  >
                    View Template
                  </StyledActionButton>
                </Stack>
              </TemplateCard>
            </Grid>
          ))}
        </Grid>
      </ResourceSectionStack>
    </ShContainer>
  );
};

export default RejectionTemplateHome;
