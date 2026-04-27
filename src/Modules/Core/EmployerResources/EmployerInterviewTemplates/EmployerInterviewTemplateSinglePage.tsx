import { Chip, Grow, Stack, Tab, Tabs } from '@mui/material';
import { StyledActionButton } from 'Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles';
import { jobInterviewTemplateData } from 'Modules/Marketing/Resources/Templates/InterviewTemplates/InterviewTemplateConstants';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import { IsSmScreen, useAppDispatch } from 'helpers/hooks';
import React, { useEffect, useState } from 'react';
import { ShPaper } from '@smoothhiring/smooth-ui';
import { EmployerInterivewTemplatePreviewFields } from './EmployerInterviewTemplatePreviewFields';
import { useLocation } from 'react-router-dom';
import { tabDataInterview } from '../EmployerResourcesConstants';
import { setCurrentBreadCrumb } from 'store/slices/app/breadcrumb-slice';
import { templateFunctions } from './EmployerInterviewTemplateMapping';

export const EmployerInterviewTemplateSinglePage = () => {
  const location = useLocation();
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const type = pathParts[pathParts.length - 1].split('-')[0] as 'formal' | 'auto' | 'informal';
    setTemplateType(type);

    switch (type) {
      case 'formal':
        setTabValue('1');
        break;
      case 'informal':
        setTabValue('2');
        break;
      case 'auto':
        setTabValue('3');
        break;
      default:
        setTabValue('1');
        break;
    }
  }, [location.pathname]);
  const [templateType, setTemplateType] = useState<'formal' | 'auto' | 'informal'>('formal');
  const { generateDocument, generatePreviewContent } = templateFunctions[templateType];
  const [companyName, setCompanyName] = useState(jobInterviewTemplateData.companyName);
  const [candidateName, setCandidateName] = useState(jobInterviewTemplateData.candidateName);
  const [jobTitle, setJobTitle] = useState(jobInterviewTemplateData.jobTitle);
  const [department, setDepartment] = useState(jobInterviewTemplateData.department);
  const [contactDetails, setContactDetails] = useState(jobInterviewTemplateData.contactDetails);
  const [yourName, setYourName] = useState(jobInterviewTemplateData.yourName);
  const [signature, setSignature] = useState(jobInterviewTemplateData.signature);
  const isSmScreen = IsSmScreen();
  const [tabValue, setTabValue] = useState('1');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const crumbName =
      location.pathname
        .split('/')
        .pop()
        ?.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ') || '';
    const bc = {
      pathname: location.pathname,
      breadcrumbs: [
        { displayName: 'Home', href: 'https://smoothhiring.com', isActive: true },
        { displayName: 'Resources', href: '/resources', isActive: true },
        {
          displayName: 'Interview Letter Templates',
          href: '/resources/interview-letter-templates',
          isActive: true,
        },
        { displayName: crumbName, href: '', isActive: false },
      ],
    };
    dispatch(setCurrentBreadCrumb({ breadcrumb: bc }));
  });

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

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setTabValue(newValue);
    switch (newValue) {
      case '1':
        setTemplateType('formal');
        break;
      case '2':
        setTemplateType('informal');
        break;
      case '3':
        setTemplateType('auto');
        break;
      default:
        setTemplateType('formal');
        break;
    }
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
        <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
          <Stack padding={isSmScreen ? 0 : 3} paddingBottom={10} maxWidth={'1050px'}>
            <ShPaper variant='outlined' overflow='auto' height='850px'>
              <Stack padding={2} direction={'row'} spacing={3} justifyContent={'space-between'}>
                <StyledActionButton onClick={handleDownload} variant='contained' color='primary' size='small'>
                  {' '}
                  Download (.docx){' '}
                </StyledActionButton>
                <Chip color='success' style={{ color: 'white', maxWidth: '110px' }} label='Live Preview' />
              </Stack>
              <Stack padding={2} direction={'column'} spacing={3}>
                <Stack spacing={3}>
                  {generatePreviewContent({
                    companyName: companyName,
                    candidateName: candidateName,
                    jobTitle: jobTitle,

                    department: department,

                    contactDetails: contactDetails,
                    yourName: yourName,
                    signature: signature,
                  })}
                </Stack>
              </Stack>
            </ShPaper>
          </Stack>
        </Grow>
      </Stack>
    </>
  );
};

export default EmployerInterviewTemplateSinglePage;
