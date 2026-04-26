import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Collapse, Grid, Stack } from '@mui/material';
import { ResourceTypography } from 'Modules/Marketing/Resources/Resources.styled';
import { JobRejectionFormProps } from 'Modules/Marketing/Resources/Templates/TemplateModel';
import React, { useState } from 'react';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';

export const EmployerRejectionTemplatePreviewFields: React.FC<JobRejectionFormProps> = ({ isSmScreen, companyName, candidateName, jobTitle, department, yourName, signature, setCompanyName, setCandidateName, setJobTitle, setDepartment, setYourName, setSignature }) => {
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Stack direction={'row'}>
      <Stack spacing={3}>
        <Stack spacing={2}>
          <ResourceTypography variant='h6'>Basic Fields</ResourceTypography>
          <ShTextFieldV2 label='Company Name' value={companyName} onChange={e => setCompanyName(e.target.value)} size='small' fullWidth />
          <ShTextFieldV2 label='Candidate Name' value={candidateName} onChange={e => setCandidateName(e.target.value)} size='small' fullWidth />
          <ShTextFieldV2 label='Job Title' value={jobTitle} onChange={e => setJobTitle(e.target.value)} size='small' fullWidth />
        </Stack>
        <Stack spacing={2}>
          <Stack direction={isSmScreen ? 'column' : 'row'}>
            <Box onClick={handleExpandClick} display='flex' alignItems='center' style={{ cursor: 'pointer' }}>
              <ResourceTypography color='black' variant='h6'>
                Options
              </ResourceTypography>
              {expanded ? <ExpandLessIcon color='action' /> : <ExpandMoreIcon color='action' />}
            </Box>
          </Stack>
          <Collapse in={expanded} timeout='auto'>
            <Stack>
              <Grid container spacing={2} paddingTop={1}>
                <Grid item xs={12} sm={6} md={6}>
                  <ShTextFieldV2 label='Department' value={department} onChange={e => setDepartment(e.target.value)} size='small' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <ShTextFieldV2 label='Your Name' value={yourName} onChange={e => setYourName(e.target.value)} size='small' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <ShTextFieldV2 label='Signature' value={signature} onChange={e => setSignature(e.target.value)} size='small' fullWidth />
                </Grid>
              </Grid>
            </Stack>
          </Collapse>
        </Stack>
      </Stack>
    </Stack>
  );
};
