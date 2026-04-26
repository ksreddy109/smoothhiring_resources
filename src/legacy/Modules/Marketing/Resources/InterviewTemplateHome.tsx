import { Grid, Stack, Typography } from "@mui/material";
import { StyledActionButton } from "Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles";
import { interviewTemplates } from "Modules/Marketing/Resources/Templates/InterviewTemplates/InterviewTemplateConstants";
import { IsSmScreen } from "helpers/hooks";
import { Link as RouterLink } from "react-router-dom";
import { ShContainer } from "@smoothhiring/smooth-ui";
import { ShPaper } from "@smoothhiring/smooth-ui";

export const InterviewTemplateHome = () => {
  const isSmScreen = IsSmScreen();

  return (
    <ShContainer maxWidth="xl" height="100%">
      <Stack paddingTop={4} maxWidth="85%">
        <Typography variant="h6" paddingBottom={3} paddingLeft={1}>
          Interview Letter Templates
        </Typography>
        <Grid container spacing={2}>
          {interviewTemplates.map((template, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ShPaper flex={0.5} variant="outlined" height="100%">
                <Stack minHeight={isSmScreen ? "100px" : "150px"} justifyContent="space-between" height="100%" padding={1} spacing={0.5}>
                  <Typography textAlign="left" fontWeight="bold" fontSize={isSmScreen ? 15 : 17}>
                    {template.title}
                  </Typography>
                  <Typography textAlign="left" color="gray" variant="caption" fontSize={isSmScreen ? 11 : 12}>
                    {template.description}
                  </Typography>
                  <StyledActionButton
                    component={RouterLink as any}
                    to={`/resources/interview-letter-templates${template.path}`}
                    variant="contained"
                    size="small"
                  >
                    View Template
                  </StyledActionButton>
                </Stack>
              </ShPaper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ShContainer>
  );
};

export default InterviewTemplateHome;
