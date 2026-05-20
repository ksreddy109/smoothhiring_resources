import { Chip, Grow, Stack, Tab, Tabs } from '@mui/material';
import { StyledActionButton } from 'Modules/Core/Applicants/ApplicantsList/ApplicantsToolBar.styles';
import { jobRejectionTemplateData } from 'Modules/Marketing/Resources/Templates/RejectionTemplates/RejectionTemplateConstants';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import { IsSmScreen, useAppDispatch } from 'helpers/hooks';
import React, { useEffect, useState } from 'react';
import { ShButton, ShPaper } from '@smoothhiring/smooth-ui';
import { EmployerRejectionTemplatePreviewFields } from './EmployerRejectionTemplatePreviewFields';
import { useLocation, useParams } from 'react-router-dom';
import { tabDataRejection } from '../EmployerResourcesConstants';
import { setCurrentBreadCrumb } from 'store/slices/app/breadcrumb-slice';
import { templateFunctions } from './EmployerRejectionTemplateMapping';
import { letterTemplateDisplayName, letterTemplateTypeFromSlug, type LetterTemplateType } from '@/lib/letter-template-slug';

const tabValueForType = (type: LetterTemplateType) => (type === 'formal' ? '1' : type === 'informal' ? '2' : '3');

export const EmployerRejectionTemplateSinglePage = () => {
  const location = useLocation();
  const { rejectionLetterName } = useParams<{ rejectionLetterName: string }>();
  const [templateType, setTemplateType] = useState<LetterTemplateType>(() => letterTemplateTypeFromSlug(rejectionLetterName));
  const { generateDocument, generatePreviewContent } = templateFunctions[templateType];
  const [companyName, setCompanyName] = useState(jobRejectionTemplateData.companyName);
  const [candidateName, setCandidateName] = useState(jobRejectionTemplateData.candidateName);
  const [jobTitle, setJobTitle] = useState(jobRejectionTemplateData.jobTitle);
  const [department, setDepartment] = useState(jobRejectionTemplateData.department);
  const [contactDetails, setContactDetails] = useState(jobRejectionTemplateData.contactDetails);
  const [yourName, setYourName] = useState(jobRejectionTemplateData.yourName);
  const [signature, setSignature] = useState(jobRejectionTemplateData.signature);
  const isSmScreen = IsSmScreen();
  const [tabValue, setTabValue] = useState(() => tabValueForType(templateType));
  const dispatch = useAppDispatch();

  useEffect(() => {
    const next = letterTemplateTypeFromSlug(rejectionLetterName);
    setTemplateType(next);
    setTabValue(tabValueForType(next));
  }, [rejectionLetterName]);

  useEffect(() => {
    const crumbName = letterTemplateDisplayName(rejectionLetterName);
    const bc = {
      pathname: location.pathname,
      breadcrumbs: [
        { displayName: 'Home', href: 'https://smoothhiring.com', isActive: true },
        { displayName: 'Resources', href: '/resources', isActive: true },
        {
          displayName: 'Rejection Letter Templates',
          href: '/resources/rejection-letter-templates/',
          isActive: true,
        },
        { displayName: crumbName, href: '', isActive: false },
      ],
    };
    dispatch(setCurrentBreadCrumb({ breadcrumb: bc }));
  }, [location.pathname, rejectionLetterName, dispatch]);

  const handleDownload = async () => {
    try {
      const doc = generateDocument({
        companyName: companyName || jobRejectionTemplateData.companyName,
        candidateName: candidateName || jobRejectionTemplateData.candidateName,
        jobTitle: jobTitle || jobRejectionTemplateData.jobTitle,
        department: department || jobRejectionTemplateData.department,
        contactDetails: contactDetails || jobRejectionTemplateData.contactDetails,
        yourName: yourName || jobRejectionTemplateData.yourName,
        signature: signature || jobRejectionTemplateData.signature,
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, 'job_rejection_template.docx');
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
            {tabDataRejection.map(tab => (
              <Tab key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </Tabs>
        </Stack>
      </Stack>
      <Stack direction={isSmScreen ? 'column' : 'row'} padding={3}>
        <EmployerRejectionTemplatePreviewFields
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

export default EmployerRejectionTemplateSinglePage;
