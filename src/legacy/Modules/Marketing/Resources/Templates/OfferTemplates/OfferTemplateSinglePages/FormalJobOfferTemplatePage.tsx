import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Typography, Chip, Grow, Stack } from '@mui/material';
import { StyledActionButton } from 'Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import { IsSmScreen } from 'helpers/hooks';
import React, { useState } from 'react';
import { ShContainer } from '@smoothhiring/smooth-ui';
import { ShPaper } from '@smoothhiring/smooth-ui';
import { PrimaryWordpressThemeColor } from '@smoothhiring/smooth-ui';
import { jobOfferTemplateData } from '../OfferTemplateConstants';
import { OfferTemplatePreviewFields } from '../OfferTemplatePreviewFields';
import { ResourceOtherSimilarResourcesSideContainer } from 'Modules/Marketing/Resources/ResourceOtherSimilarResourcesSideContainer';
import { GenerateFormalJobOfferDocument, generateFormalJobOfferPreviewContent } from '../OfferLetterWordDocConstants';
import { ResourceCTA } from '../../../ResourceCTA';

const JobOfferTemplatePage = () => {
  const [salary, setSalary] = useState(jobOfferTemplateData.salary);
  const [startDate, setStartDate] = useState(jobOfferTemplateData.startDate);
  const [companyName, setCompanyName] = useState(jobOfferTemplateData.companyName);
  const [candidateName, setCandidateName] = useState(jobOfferTemplateData.candidateName);
  const [jobTitle, setJobTitle] = useState(jobOfferTemplateData.jobTitle);
  const [employmentType, setEmploymentType] = useState(jobOfferTemplateData.employmentType);
  const [employmentHours, setEmploymentHours] = useState(jobOfferTemplateData.employmentHours);
  const [department, setDepartment] = useState(jobOfferTemplateData.department);
  const [bonusPrograms, setBonusPrograms] = useState(jobOfferTemplateData.bonusPrograms);
  const [vacationDays, setVacationDays] = useState(jobOfferTemplateData.vacationDays);
  const [contractDuration, setContractDuration] = useState(jobOfferTemplateData.contractDuration);
  const [employmentAgreement, setEmploymentAgreement] = useState(jobOfferTemplateData.employmentAgreement);
  const [responseDate, setResponseDate] = useState(jobOfferTemplateData.responseDate);
  const [managerName, setManagerName] = useState(jobOfferTemplateData.managerName);
  const [contactDetails, setContactDetails] = useState(jobOfferTemplateData.contactDetails);
  const [yourName, setYourName] = useState(jobOfferTemplateData.yourName);
  const [signature, setSignature] = useState(jobOfferTemplateData.signature);
  const [benefits, setBenefits] = useState<string[]>(jobOfferTemplateData.benefits);
  const isSmScreen = IsSmScreen();

  const handleAddBenefit = (newBenefit: string) => {
    if (newBenefit.trim() !== '') {
      setBenefits([...benefits, newBenefit.trim()]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newBenefit = (e.target as HTMLInputElement).value.trim();
      handleAddBenefit(newBenefit);
      (e.target as HTMLInputElement).value = '';
    }
  };

  const handleDeleteBenefit = (index: number) => {
    const updatedBenefits = [...benefits];
    updatedBenefits.splice(index, 1);
    setBenefits(updatedBenefits);
  };

  const handleDownload = async () => {
    try {
      const doc = GenerateFormalJobOfferDocument({
        companyName: jobOfferTemplateData.companyName,
        candidateName: jobOfferTemplateData.candidateName,
        jobTitle: jobOfferTemplateData.jobTitle,
        employmentType: jobOfferTemplateData.employmentType,
        employmentHours: jobOfferTemplateData.employmentHours,
        department: jobOfferTemplateData.department,
        salary: jobOfferTemplateData.salary,
        vacationDays: jobOfferTemplateData.vacationDays,
        bonusPrograms: jobOfferTemplateData.bonusPrograms,
        startDate: jobOfferTemplateData.startDate,
        contractDuration: jobOfferTemplateData.contractDuration,
        employmentAgreement: jobOfferTemplateData.employmentAgreement,
        responseDate: jobOfferTemplateData.responseDate,
        managerName: jobOfferTemplateData.managerName,
        contactDetails: jobOfferTemplateData.contactDetails,
        yourName: jobOfferTemplateData.yourName,
        signature: jobOfferTemplateData.signature,
        benefits: jobOfferTemplateData.benefits,
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, 'formal_job_offer_template.docx');
    } catch (error) {}
  };

  return (
    <>
      <ShContainer maxWidth='xl' height='100%' margin='auto'>
        <Stack paddingTop={4} paddingBottom={2}>
          <ShPaper variant='outlined'>
            <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
              <Stack padding={isSmScreen ? 2 : 5}>
                <Typography textAlign='center' gutterBottom variant='body2' fontWeight={700} color={PrimaryWordpressThemeColor}>
                  HR Resources | Crafted by Industry Experts
                </Typography>
                <Typography
                  textAlign='center'
                  gutterBottom
                  fontWeight={700}
                  variant={isSmScreen ? 'h6' : 'h4'}
                >
                  Formal Job Offer Template
                </Typography>
                <Typography textAlign='center' variant={isSmScreen ? 'body2' : 'body1'}>
                  These templates simplify the creation of compelling job offers, ensuring your hiring process is streamlined and efficient. Customize the details such as salary, start date, benefits, and more. Download the finalized offer as a Word document for easy distribution.
                </Typography>
                <Stack paddingTop={3} justifyContent='center' paddingBottom={1} direction={isSmScreen ? 'column' : 'row'} spacing={1}>
                  <Chip icon={<VerifiedIcon />} label='Customizable Offers' color='primary' variant='outlined' />
                  <Chip icon={<VerifiedIcon />} label='Easy Download' color='primary' variant='outlined' />
                  <Chip icon={<VerifiedIcon />} label='Professional Format' color='primary' variant='outlined' />
                  <Chip icon={<PlaylistAddIcon />} label='Efficient Hiring' color='primary' />
                </Stack>
              </Stack>
            </Grow>
          </ShPaper>
        </Stack>
        <OfferTemplatePreviewFields
          isSmScreen={isSmScreen}
          salary={salary}
          startDate={startDate}
          companyName={companyName}
          candidateName={candidateName}
          jobTitle={jobTitle}
          employmentHours={employmentHours}
          department={department}
          bonusPrograms={bonusPrograms}
          responseDate={responseDate}
          employmentType={employmentType}
          vacationDays={vacationDays}
          contractDuration={contractDuration}
          employmentAgreement={employmentAgreement}
          managerName={managerName}
          contactDetails={contactDetails}
          yourName={yourName}
          signature={signature}
          benefits={benefits}
          setSalary={setSalary}
          setStartDate={setStartDate}
          setCompanyName={setCompanyName}
          setCandidateName={setCandidateName}
          setJobTitle={setJobTitle}
          setEmploymentHours={setEmploymentHours}
          setDepartment={setDepartment}
          setBonusPrograms={setBonusPrograms}
          setResponseDate={setResponseDate}
          setEmploymentType={setEmploymentType}
          setVacationDays={setVacationDays}
          setContractDuration={setContractDuration}
          setEmploymentAgreement={setEmploymentAgreement}
          setManagerName={setManagerName}
          setContactDetails={setContactDetails}
          setYourName={setYourName}
          setSignature={setSignature}
          handleKeyDown={handleKeyDown}
          handleDeleteBenefit={handleDeleteBenefit}
        />

        <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
          <Stack padding={isSmScreen ? 0 : 3} paddingBottom={10} spacing={2} maxWidth='950px' margin='auto'>
            <ShPaper variant='outlined'>
              <Stack padding={2} direction='row' spacing={3} justifyContent='space-between'>
                <StyledActionButton onClick={handleDownload} variant='contained' color='primary' size='small' download>
                  Download (.docx)
                </StyledActionButton>
                <Chip color='success' label='Live Preview' />
              </Stack>
              <Stack padding={2} direction={'column'} spacing={3}>
                {generateFormalJobOfferPreviewContent({
                  companyName: companyName,
                  candidateName: candidateName,
                  jobTitle: jobTitle,
                  employmentType: employmentType,
                  employmentHours: employmentHours,
                  department: department,
                  salary: salary,
                  vacationDays: vacationDays,
                  bonusPrograms: bonusPrograms,
                  startDate: startDate,
                  contractDuration: contractDuration,
                  employmentAgreement: employmentAgreement,
                  responseDate: responseDate,
                  managerName: managerName,
                  contactDetails: contactDetails,
                  yourName: yourName,
                  signature: signature,
                  benefits: benefits,
                })}
              </Stack>
            </ShPaper>
          </Stack>
        </Grow>
        <Stack maxWidth={'md'} margin='auto' padding={3} paddingBottom={4}>
          <ResourceOtherSimilarResourcesSideContainer />
        </Stack>
        <ResourceCTA title='No candidates yet? Post your job to 100+ boards!' />
      </ShContainer>
    </>
  );
};

export default JobOfferTemplatePage;
