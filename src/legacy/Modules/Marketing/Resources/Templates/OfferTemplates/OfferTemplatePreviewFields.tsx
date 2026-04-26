import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography, Box, Chip, Collapse, Grid, InputAdornment, Stack } from '@mui/material';
import React, { useState } from 'react';
import { ShTextFieldV2 } from '@smoothhiring/smooth-ui';
import { ShContainer } from '@smoothhiring/smooth-ui';
import { ResourceCTASideContainer } from '../../ResourceCTASideContainer';
import { JobOfferFormProps } from '../TemplateModel';

export const OfferTemplatePreviewFields: React.FC<JobOfferFormProps> = ({
  isSmScreen,
  salary,
  startDate,
  companyName,
  candidateName,
  jobTitle,
  employmentHours,
  department,
  bonusPrograms,
  responseDate,
  employmentType,
  vacationDays,
  contractDuration,
  employmentAgreement,
  managerName,
  contactDetails,
  yourName,
  signature,
  benefits,
  setSalary,
  setStartDate,
  setCompanyName,
  setCandidateName,
  setJobTitle,
  setEmploymentHours,
  setDepartment,
  setBonusPrograms,
  setResponseDate,
  setEmploymentType,
  setVacationDays,
  setContractDuration,
  setEmploymentAgreement,
  setManagerName,
  setContactDetails,
  setYourName,
  setSignature,
  handleKeyDown,
  handleDeleteBenefit,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Stack direction={'row'} paddingBottom={1.5}>
      <ResourceCTASideContainer />
      <ShContainer maxWidth='lg' margin={'auto'}>
        <Stack spacing={3}>
          <Stack spacing={2}>
            <Typography variant='h6'>Basic Fields</Typography>
            <Stack spacing={2} direction={isSmScreen ? 'column' : 'row'} justifyContent='flex-start'>
              <ShTextFieldV2 InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }} label='Salary' value={salary} onChange={e => setSalary(e.target.value)} size='small' />
              <ShTextFieldV2 label='Start Date' value={startDate} onChange={e => setStartDate(e.target.value)} size='small' />
              <ShTextFieldV2 label='Company Name' value={companyName} onChange={e => setCompanyName(e.target.value)} size='small' />
              <ShTextFieldV2 label='Candidate Name' value={candidateName} onChange={e => setCandidateName(e.target.value)} size='small' />
              <ShTextFieldV2 label='Job Title' value={jobTitle} onChange={e => setJobTitle(e.target.value)} size='small' />
            </Stack>
          </Stack>
          <Stack spacing={2}>
            <Typography variant='h6'>Add benefits</Typography>
            <ShTextFieldV2 style={{ maxWidth: '350px' }} label='Add Benefits' helperText='Press Enter to add' onKeyDown={handleKeyDown} size='small' />
            <Stack spacing={2} overflow='auto' maxHeight='150px' direction={isSmScreen ? 'column' : 'row'} justifyContent='flex-start'>
              <Grid container spacing={1}>
                {benefits.map((benefit, index) => (
                  <Grid item key={index}>
                    <Chip label={benefit} onDelete={() => handleDeleteBenefit(index)} variant='filled' color='primary' size='small' />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Stack>
          <Stack spacing={2}>
            <Stack direction={isSmScreen ? 'column' : 'row'}>
              <Box onClick={handleExpandClick} display='flex' alignItems='center' style={{ cursor: 'pointer' }}>
                <Typography color='black' variant='h6'>
                  More Options
                </Typography>
                {expanded ? <ExpandLessIcon color='action' /> : <ExpandMoreIcon color='action' />}
              </Box>
            </Stack>
            <Collapse in={expanded} timeout='auto'>
              <Stack>
                <Grid container spacing={2} paddingTop={1}>
                  <Grid item xs={12} sm={6} md={4}>
                    <ShTextFieldV2 label='Employment Hours' value={employmentHours} onChange={e => setEmploymentHours(e.target.value)} size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ShTextFieldV2 label='Department' value={department} onChange={e => setDepartment(e.target.value)} size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ShTextFieldV2 label='Bonus Programs' value={bonusPrograms} onChange={e => setBonusPrograms(e.target.value)} size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ShTextFieldV2 label='Response Date' value={responseDate} onChange={e => setResponseDate(e.target.value)} size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ShTextFieldV2 label='Employment Type' value={employmentType} onChange={e => setEmploymentType(e.target.value)} size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ShTextFieldV2 label='Vacation Days' value={vacationDays} onChange={e => setVacationDays(e.target.value)} size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ShTextFieldV2 label='Contract Duration' value={contractDuration} onChange={e => setContractDuration(e.target.value)} size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ShTextFieldV2 label='Employment Agreement' value={employmentAgreement} onChange={e => setEmploymentAgreement(e.target.value)} size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ShTextFieldV2 label='Manager Name' value={managerName} onChange={e => setManagerName(e.target.value)} size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ShTextFieldV2 label='Contact Details' value={contactDetails} onChange={e => setContactDetails(e.target.value)} size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ShTextFieldV2 label='Your Name' value={yourName} onChange={e => setYourName(e.target.value)} size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <ShTextFieldV2 label='Signature' value={signature} onChange={e => setSignature(e.target.value)} size='small' fullWidth />
                  </Grid>
                </Grid>
              </Stack>
            </Collapse>
          </Stack>
        </Stack>
      </ShContainer>
    </Stack>
  );
};
