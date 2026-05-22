import { Chip, Grow, Stack, Tab, Tabs } from '@mui/material';
import { jobInterviewTemplateData } from 'Modules/Marketing/Resources/Templates/InterviewTemplates/InterviewTemplateConstants';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import { IsSmScreen, useAppDispatch } from 'helpers/hooks';
import React, { useEffect, useState } from 'react';
import { ShButton, ShPaper } from '@smoothhiring/smooth-ui';
import { EmployerInterivewTemplatePreviewFields } from './EmployerInterviewTemplatePreviewFields';
import { useResourceParams, useResourceRoute } from '@/lib/resources/route-context';
import { tabDataInterview } from '../EmployerResourcesConstants';
import { setCurrentBreadCrumb } from 'store/slices/app/breadcrumb-slice';
import { templateFunctions } from './EmployerInterviewTemplateMapping';
import { letterTemplateDisplayName, letterTemplateTypeFromSlug, type LetterTemplateType } from '@/lib/letter-template-slug';

const tabValueForType = (type: LetterTemplateType) => (type === 'formal' ? '1' : type === 'informal' ? '2' : '3');

export const EmployerInterviewTemplateSinglePage = () => {
  const { pathname } = useResourceRoute();
  const { interviewLetterName } = useResourceParams<{ interviewLetterName: string }>();
  const [templateType, setTemplateType] = useState<LetterTemplateType>(() => letterTemplateTypeFromSlug(interviewLetterName));
  const { generateDocument, generatePreviewContent } = templateFunctions[templateType];
  const [companyName, setCompanyName] = useState(jobInterviewTemplateData.companyName);
  const [candidateName, setCandidateName] = useState(jobInterviewTemplateData.candidateName);
  const [jobTitle, setJobTitle] = useState(jobInterviewTemplateData.jobTitle);
  const [department, setDepartment] = useState(jobInterviewTemplateData.department);
  const [contactDetails, setContactDetails] = useState(jobInterviewTemplateData.contactDetails);
  const [yourName, setYourName] = useState(jobInterviewTemplateData.yourName);
  const [signature, setSignature] = useState(jobInterviewTemplateData.signature);
  const isSmScreen = IsSmScreen();
  const [tabValue, setTabValue] = useState(() => tabValueForType(templateType));
  const dispatch = useAppDispatch();

  useEffect(() => {
    const next = letterTemplateTypeFromSlug(interviewLetterName);
    setTemplateType(next);
    setTabValue(tabValueForType(next));
  }, [interviewLetterName]);

  useEffect(() => {
    const crumbName = letterTemplateDisplayName(interviewLetterName);
    const bc = {
      pathname,
      breadcrumbs: [
        { displayName: 'Home', href: 'https://smoothhiring.com', isActive: true },
        { displayName: 'Resources', href: '/resources', isActive: true },
        {
          displayName: 'Interview Letter Templates',
          href: '/resources/interview-letter-templates/',
          isActive: true,
        },
        { displayName: crumbName, href: '', isActive: false },
      ],
    };
    dispatch(setCurrentBreadCrumb({ breadcrumb: bc }));
  }, [pathname, interviewLetterName, dispatch]);

  const handleDownload = async () => {
    try {
      const doc = generateDocument({
        companyName: companyName || jobInterviewTemplateData.companyName,
        candidateName: candidateName || jobInterviewTemplateData.candidateName,
        jobTitle: jobTitle || jobInterviewTemplateData.jobTitle,
        department: department || jobInterviewTemplateData.department,
        contactDetails: contactDetails || jobInterviewTemplateData.contactDetails,
        yourName: yourName || jobInterviewTemplateData.yourName,
        signature: signature || jobInterviewTemplateData.signature,
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, 'job_interview_template.docx');
    } catch (error) {}
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
    setTemplateType(newValue === '1' ? 'formal' : newValue === '2' ? 'informal' : 'auto');
  };

  return (
    <>
      <Stack direction='row' justifyContent='space-between' paddingLeft={3}>
        <Stack>
          <Tabs value={tabValue} onChange={handleTabChange} textColor='inherit' indicatorColor='primary' variant='scrollable' scrollButtons='auto'>
            {tabDataInterview.map(tab => (
              <Tab key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </Tabs>
        </Stack>
      </Stack>
      <Stack direction={isSmScreen ? 'column' : 'row'} padding={3}>
        <EmployerInterivewTemplatePreviewFields
          isSmScreen={isSmScreen}
          companyName={companyName}
          candidateName={candidateName}
          jobTitle={jobTitle}
          department={department}
          contactDetails={contactDetails}
          yourName={yourName}
          signature={signature}
          setCompanyName={setCompanyName}
          setCandidateName={setCandidateName}
          setJobTitle={setJobTitle}
          setDepartment={setDepartment}
          setContactDetails={setContactDetails}
          setYourName={setYourName}
          setSignature={setSignature}
        />
        <Grow in timeout={1000} mountOnEnter unmountOnExit>
          <Stack padding={isSmScreen ? 0 : 3} paddingBottom={10} maxWidth='1050px' width='100%'>
            <ShPaper variant='outlined' overflow='auto' height='850px'>
              <Stack padding={2} direction='row' spacing={3} justifyContent='space-between' flexWrap='wrap'>
                <ShButton onClick={handleDownload} variant='contained' color='primary' size='small'>
                  Download (.docx)
                </ShButton>
                <Chip color='success' sx={{ color: 'white', maxWidth: 110 }} label='Live Preview' />
              </Stack>
              <Stack padding={2} direction='column' spacing={3}>
                {generatePreviewContent({
                  companyName,
                  candidateName,
                  jobTitle,
                  department,
                  contactDetails,
                  yourName,
                  signature,
                })}
              </Stack>
            </ShPaper>
          </Stack>
        </Grow>
      </Stack>
    </>
  );
};

export default EmployerInterviewTemplateSinglePage;
