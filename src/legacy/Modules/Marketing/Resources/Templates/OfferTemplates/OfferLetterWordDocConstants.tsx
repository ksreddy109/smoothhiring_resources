/* eslint-disable */
import { Document, Paragraph, TextRun } from 'docx';
import { ResourceTypography } from '../../Resources.styled';
import { jobOfferTemplateData } from './OfferTemplateConstants';

export const TEMPLATE_TYPE: 'formal' | 'internal' | 'sales' | 'general' = 'formal';

export interface JobOfferProps {
  companyName: string;
  candidateName: string;
  jobTitle: string;
  employmentType: string;
  employmentHours: string;
  department: string;
  salary: string;
  vacationDays: string;
  bonusPrograms: string;
  startDate: string;
  contractDuration: string;
  employmentAgreement: string;
  responseDate: string;
  managerName: string;
  contactDetails: string;
  yourName: string;
  signature: string;
  benefits: string[];
}

/*
 * Word Docs & Their Preview Contents MUST Match
 */
// Formal Job Offer Template Preview & Docx
export const GenerateFormalJobOfferDocument = (props: JobOfferProps): Document => {
  const { companyName, candidateName, jobTitle, employmentType, employmentHours, department, salary, vacationDays, bonusPrograms, startDate, contractDuration, employmentAgreement, responseDate, managerName, contactDetails, yourName, signature, benefits } = props;

  return new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [new TextRun({ text: `${companyName} Job Offer / Job Offer from ${companyName}`, bold: true })],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Dear ${candidateName},`, break: 1 })],
            spacing: {
              after: 100,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `We are thrilled to extend this formal offer of employment to you for the position of ${jobTitle} at ${companyName}. This position is classified as a ${employmentType} role, requiring a commitment of ${employmentHours} hours per week. You will be reporting directly to the head of the ${department} department. Your extensive experience and skills make you an ideal candidate for this position, and we are confident that you will thrive in our dynamic and innovative work environment.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `At ${companyName}, we are committed to fostering a supportive, inclusive, and progressive workplace. We recognize the importance of each team member and are dedicated to ensuring that you have all the resources and support needed to excel in your role. Your responsibilities as ${jobTitle} are integral to our ongoing projects and strategic objectives, and we believe that your contributions will play a key role in driving our success and growth.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `We are offering you an annual gross salary of $${salary}. Additionally, you will receive ${benefits} and ${vacationDays} days of paid vacation per year. This includes health insurance, dental and vision plans, a 401(k) retirement plan with company matching, and generous paid time off policies. You are entitled to ${vacationDays} days of paid vacation per year, which can be used to recharge and spend quality time with your loved ones.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `We also offer a variety of bonus programs, including performance-based bonuses, spot bonuses for exceptional contributions, and annual bonuses tied to company performance. Our bonus programs currently include ${bonusPrograms}. Detailed information regarding these programs and their eligibility criteria will be provided upon your acceptance of this offer.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Your anticipated start date will be ${startDate}. We understand that transitioning to a new role can be a significant life event, and our HR team is dedicated to making this process as smooth as possible. We will provide you with all the necessary paperwork and conduct an orientation session to familiarize you with our policies, procedures, and culture. You will be required to sign a ${contractDuration} contract and adhere to our ${employmentAgreement}, which outlines the terms and conditions of your employment.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `It is important to highlight that ${companyName} operates as an at-will employer. This means that either party may terminate the employment relationship at any time, with or without cause or notice. This policy allows us to maintain a flexible and adaptive workforce, while also providing you with the freedom to pursue other opportunities should your career goals or personal circumstances change. We believe that this approach fosters mutual respect and understanding between the company and its employees.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Please take the time to review the details of this offer carefully. We request that you respond to this offer by ${responseDate}. Should you have any questions or require further clarification, do not hesitate to reach out to me or to ${managerName} at ${contactDetails}. Our team is here to assist you and ensure that you have all the information you need to make an informed decision.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `We are excited about the possibility of you joining our team and contributing to our ongoing success. Your expertise, vision, and enthusiasm are perfectly aligned with our goals, and we look forward to welcoming you to ${companyName}. We are confident that you will find a rewarding and fulfilling career with us, and we are eager to see the positive impact you will have on our organization.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Sincerely,`, break: 1 })],
            spacing: {
              after: 100,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `${yourName}`, bold: true, break: 1 })],
            spacing: {
              after: 100,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `${signature}`, break: 1 })],
          }),
        ],
      },
    ],
  });
};
export const generateFormalJobOfferPreviewContent = (props: JobOfferProps) => {
  const { companyName, candidateName, jobTitle, employmentType, employmentHours, department, salary, vacationDays, bonusPrograms, startDate, contractDuration, employmentAgreement, responseDate, managerName, contactDetails, yourName, signature, benefits } = props;
  return (
    <>
      <ResourceTypography variant='body1'>
        <strong>{companyName}</strong> Job Offer / Job Offer from <strong>{companyName}</strong>
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Dear <strong>{candidateName}</strong>,
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        We are thrilled to extend this formal offer of employment to you for the position of <strong>{jobTitle}</strong> at <strong>{companyName}</strong>. This position is classified as a <strong>{employmentType}</strong> role, requiring a commitment of <strong>{employmentHours}</strong> hours per week. You will be reporting directly to the head of the <strong>{department}</strong> department.
        Your extensive experience and skills make you an ideal candidate for this position, and we are confident that you will thrive in our dynamic and innovative work environment.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        At <strong>{companyName}</strong>, we are committed to fostering a supportive, inclusive, and progressive workplace. We recognize the importance of each team member and are dedicated to ensuring that you have all the resources and support needed to excel in your role. Your responsibilities as <strong>{jobTitle}</strong> are integral to our ongoing projects and strategic objectives, and we
        believe that your contributions will play a key role in driving our success and growth.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        We are offering you an annual gross salary of <strong>${salary}</strong>. In addition to your base salary, we provide a comprehensive benefits package designed to support your health, well-being, and professional development. This includes health insurance, dental and vision plans, a 401(k) retirement plan with company matching, and generous paid time off policies. You are entitled to{' '}
        <strong>{vacationDays}</strong> days of paid vacation per year, which can be used to recharge and spend quality time with your loved ones.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        We also offer a variety of bonus programs, including performance-based bonuses, spot bonuses for exceptional contributions, and annual bonuses tied to company performance. Our bonus programs currently include <strong>{bonusPrograms}</strong>. Detailed information regarding these programs and their eligibility criteria will be provided upon your acceptance of this offer.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Your anticipated start date will be <strong>{startDate}</strong>. We understand that transitioning to a new role can be a significant life event, and our HR team is dedicated to making this process as smooth as possible. We will provide you with all the necessary paperwork and conduct an orientation session to familiarize you with our policies, procedures, and culture. You will be required
        to sign a <strong>{contractDuration}</strong> contract and adhere to our <strong>{employmentAgreement}</strong>, which outlines the terms and conditions of your employment.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        It is important to highlight that <strong>{companyName}</strong> operates as an at-will employer. This means that either party may terminate the employment relationship at any time, with or without cause or notice. This policy allows us to maintain a flexible and adaptive workforce, while also providing you with the freedom to pursue other opportunities should your career goals or personal
        circumstances change. We believe that this approach fosters mutual respect and understanding between the company and its employees.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Please take the time to review the details of this offer carefully. We request that you respond to this offer by <strong>{responseDate}</strong>. Should you have any questions or require further clarification, do not hesitate to reach out to me or to <strong>{managerName}</strong> at <strong>{contactDetails}</strong>. Our team is here to assist you and ensure that you have all the
        information you need to make an informed decision.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        We are excited about the possibility of you joining our team and contributing to our ongoing success. Your expertise, vision, and enthusiasm are perfectly aligned with our goals, and we look forward to welcoming you to <strong>{companyName}</strong>. We are confident that you will find a rewarding and fulfilling career with us, and we are eager to see the positive impact you will have on
        our organization.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Sincerely,
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        <strong>{yourName}</strong>
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        <strong>{signature}</strong>
      </ResourceTypography>
    </>
  );
};

// General Job Offer Template Preview & Docx
export const GenerateGeneralJobOfferDocument = (props: JobOfferProps): Document => {
  const { companyName, candidateName, jobTitle, employmentType, employmentHours, department, salary, vacationDays, bonusPrograms, startDate, contractDuration, employmentAgreement, responseDate, managerName, contactDetails, yourName, signature, benefits } = props;
  return new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [new TextRun(`[${companyName}] Job Offer / Job Offer from ${companyName}`)],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun(`Dear ${candidateName},`)],
            spacing: {
              after: 100,
            },
          }),
          new Paragraph({
            children: [new TextRun(`We are delighted to extend to you an offer for the position of ${jobTitle} at ${companyName}. This is a ${employmentType} role with ${employmentHours} and you will report directly to the head of the ${department} department.`)],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun(`Please note that ${companyName} operates as an at-will employer, which means either party may terminate the employment relationship at any time, with or without cause or notice.`)],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun(`We are offering you an annual gross salary of $${salary} along with ${bonusPrograms}. Additionally, you will receive ${benefits} and ${vacationDays} days of paid vacation per year.`)],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun(`Your expected start date is ${startDate}. You will be required to sign a ${contractDuration} contract and ${employmentAgreement} upon joining.`)],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun(`We kindly request your response by ${responseDate}. Please feel free to contact me or ${managerName} via email or phone (${contactDetails}) if you have any questions. We look forward to welcoming you to our team.`)],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun(`Best regards,`)],
            spacing: {
              after: 100,
            },
          }),
          new Paragraph({
            children: [new TextRun(`${yourName}`)],
            spacing: {
              after: 100,
            },
          }),
          new Paragraph({
            children: [new TextRun(`${signature}`)],
          }),
        ],
      },
    ],
  });
};
export const generateGeneralJobOfferPreviewContent = (props: JobOfferProps) => {
  const { companyName, candidateName, jobTitle, employmentType, employmentHours, department, salary, vacationDays, bonusPrograms, startDate, contractDuration, employmentAgreement, responseDate, managerName, contactDetails, yourName, signature, benefits } = props;
  return (
    <>
      <ResourceTypography variant='body1'>
        <strong>{companyName}</strong> Job Offer / Job Offer from <strong>{companyName}</strong>
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Dear <strong>{candidateName}</strong>,
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        We are delighted to extend to you an offer for the position of <strong>{jobTitle}</strong> at <strong>{companyName}</strong>. This is a <strong>{employmentType}</strong> role with <strong>{employmentHours}</strong> and you will report directly to the head of the <strong>{department}</strong> department.{' '}
      </ResourceTypography>
      {true && (
        <ResourceTypography paddingTop={2} variant='body1'>
          Please note that <strong>{companyName}</strong> operates as an at-will employer, which means either party may terminate the employment relationship at any time, with or without cause or notice.
        </ResourceTypography>
      )}
      <ResourceTypography gutterBottom variant='body1'>
        We are offering you an annual gross salary of $<strong>{salary}</strong> along with <strong>{bonusPrograms}</strong>. Additionally, you will receive <strong>{benefits.join(', ')}</strong> and <strong>{vacationDays}</strong> days of paid vacation per year.
      </ResourceTypography>
      {jobOfferTemplateData.compensationDetails && <ResourceTypography variant='body1'>I am attaching a letter with more details about your compensation plan.</ResourceTypography>}
      <ResourceTypography gutterBottom variant='body1'>
        Your expected start date is <strong>{startDate}</strong>. You will be required to sign a <strong>{contractDuration} </strong> contract and <strong>{employmentAgreement} </strong> upon joining.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        We kindly request your response by <strong>{responseDate}</strong>. Please feel free to contact me or <strong>{managerName}</strong> via email or phone <strong>({contactDetails})</strong> if you have any questions. We look forward to welcoming you to our team.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Best regards,
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        <strong>{yourName}</strong>
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        <strong>{signature}</strong>
      </ResourceTypography>
    </>
  );
};

// Informal Job Offer Template Preview & Docx
export const GenerateInformalJobOfferDocument = (props: JobOfferProps): Document => {
  const { companyName, candidateName, jobTitle, employmentType, employmentHours, department, salary, vacationDays, bonusPrograms, startDate, contractDuration, employmentAgreement, responseDate, managerName, contactDetails, yourName, signature, benefits } = props;

  return new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [new TextRun({ text: `${companyName} Job Offer`, bold: true })],
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Hey ${candidateName},`, bold: true })],
            spacing: { after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `We're thrilled to offer you the position of ${jobTitle} at ${companyName}! This is a ${employmentType} role, where you'll be working ${employmentHours} hours a week, reporting directly to our head of ${department}.`,
                break: 1,
              }),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `At ${companyName}, we value a fun and supportive work environment. Your role as ${jobTitle} is key to our ongoing success. We can't wait to have your skills, experience, and enthusiasm on board!`,
                break: 1,
              }),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `You'll be earning an annual gross salary of ${salary}. Plus, we offer some great benefits: ${benefits.join(', ')}. You'll get ${vacationDays} days of paid vacation each year. You'll also be part of our awesome bonus programs, including ${bonusPrograms}. We'll share more details on these once you accept the offer.`,
                break: 1,
              }),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `We're hoping you can start on ${startDate}. Our HR team will help with all the necessary paperwork and make sure you have a smooth start. You'll be signing a ${contractDuration} contract and will need to agree to our ${employmentAgreement}.`,
                break: 1,
              }),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Just a heads up, ${companyName} is an at-will employer. This means you or we can end the employment at any time, with or without a reason or notice. It's all about keeping things flexible for both of us.`,
                break: 1,
              }),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Take your time to review everything. Please get back to us by ${responseDate}. If you have any questions or need more info, just reach out to me or ${managerName} at ${contactDetails}. We're here to help!`,
                break: 1,
              }),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `We can't wait to have you join our team and contribute to our success. Your expertise and vision are just what we need at ${companyName}.`,
                break: 1,
              }),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Best,`, break: 1 })],
            spacing: { after: 100 },
          }),
          new Paragraph({
            children: [new TextRun({ text: `${yourName}`, bold: true, break: 1 })],
            spacing: { after: 100 },
          }),
          new Paragraph({
            children: [new TextRun({ text: `${signature}`, break: 1 })],
          }),
        ],
      },
    ],
  });
};
export const generateInformalJobOfferPreviewContent = (props: JobOfferProps) => {
  const { companyName, candidateName, jobTitle, employmentType, employmentHours, department, salary, vacationDays, bonusPrograms, startDate, contractDuration, employmentAgreement, responseDate, managerName, contactDetails, yourName, signature, benefits } = props;
  return (
    <>
      <ResourceTypography variant='body1'>
        <strong>{companyName}</strong> Job Offer
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Hey <strong>{candidateName}</strong>,
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        We're thrilled to offer you the position of <strong>{jobTitle}</strong> at <strong>{companyName}</strong>! This is a <strong>{employmentType}</strong> role, where you'll be working <strong>{employmentHours}</strong> hours a week, reporting directly to our head of <strong>{department}</strong>.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        At <strong>{companyName}</strong>, we value a fun and supportive work environment. Your role as <strong>{jobTitle}</strong> is key to our ongoing success. We can't wait to have your skills, experience, and enthusiasm on board!
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        You'll be earning an annual gross salary of <strong>${salary}</strong>. Plus, we offer some great benefits: <strong>{benefits.join(', ')}</strong>, and you'll get <strong>{vacationDays}</strong> days of paid vacation each year. You'll also be part of our awesome bonus programs, including <strong>{bonusPrograms}</strong>. We'll share more details on these once you accept the offer.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        We're hoping you can start on <strong>{startDate}</strong>. Our HR team will help with all the necessary paperwork and make sure you have a smooth start. You'll be signing a <strong>{contractDuration}</strong> contract and will need to agree to our <strong>{employmentAgreement}</strong>.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Just a heads up, <strong>{companyName}</strong> is an at-will employer. This means you or we can end the employment at any time, with or without a reason or notice. It's all about keeping things flexible for both of us.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Take your time to review everything. Please get back to us by <strong>{responseDate}</strong>. If you have any questions or need more info, just reach out to me or <strong>{managerName}</strong> at <strong>{contactDetails}</strong>. We're here to help!
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        We can't wait to have you join our team and contribute to our success. Your expertise and vision are just what we need at <strong>{companyName}</strong>.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Best,
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        <strong>{yourName}</strong>
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        <strong>{signature}</strong>
      </ResourceTypography>
    </>
  );
};

// Internal Job Offer Template Preview & Docx
export const GenerateInternalJobOfferDocument = (props: JobOfferProps): Document => {
  const { companyName, candidateName, jobTitle, employmentType, employmentHours, department, salary, vacationDays, bonusPrograms, startDate, contractDuration, employmentAgreement, responseDate, managerName, contactDetails, yourName, signature, benefits } = props;

  return new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `${companyName} Internal Job Offer / Internal Job Offer from ${companyName}`,
                bold: true,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Hi ${candidateName},`, break: 1 })],
            spacing: {
              after: 100,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `We're excited to offer you a new position within ${companyName}! We recognize your hard work and dedication, and we believe that your skills make you a perfect fit for the ${jobTitle} role in the ${department} department.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `This position is classified as a ${employmentType} role, requiring a commitment of ${employmentHours} hours per week. You will continue to report to ${managerName}. We're confident that you'll thrive in this new role and continue to make significant contributions to our team.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `We're pleased to offer you an annual gross salary of $${salary}. In addition to your base salary, you will continue to receive our comprehensive benefits package, including ${benefits.join(', ')}. You will also remain eligible for our bonus programs, which currently include ${bonusPrograms}.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Your new role will start on ${startDate}. Our HR team will assist you with the transition, ensuring that you have all the necessary information and support. You'll be required to sign an updated ${contractDuration} contract and adhere to our ${employmentAgreement}.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `As a reminder, ${companyName} operates as an at-will employer, which means that either party may terminate the employment relationship at any time, with or without cause or notice.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Please review the details of this offer carefully and let us know your decision by ${responseDate}. If you have any questions or need further information, feel free to reach out to ${managerName} at ${contactDetails}.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `We are excited about the potential impact you will continue to have in your new role. We look forward to seeing you thrive and grow with ${companyName}.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Best regards,`, break: 1 })],
            spacing: {
              after: 100,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `${yourName}`, bold: true, break: 1 })],
            spacing: {
              after: 100,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `${signature}`, break: 1 })],
          }),
        ],
      },
    ],
  });
};
export const generateInternalJobOfferPreviewContent = (props: JobOfferProps) => {
  const { companyName, candidateName, jobTitle, employmentType, employmentHours, department, salary, vacationDays, bonusPrograms, startDate, contractDuration, employmentAgreement, responseDate, managerName, contactDetails, yourName, signature, benefits } = props;
  return (
    <>
      <ResourceTypography variant='body1'>
        <strong>{companyName}</strong> Internal Job Offer
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Hi <strong>{candidateName}</strong>,
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        We're excited to offer you a new position within <strong>{companyName}</strong>! We recognize your hard work and dedication, and we believe that your skills make you a perfect fit for the <strong>{jobTitle}</strong> role in the <strong>{department}</strong> department.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        This is a <strong>{employmentType}</strong> role, requiring a commitment of <strong>{employmentHours}</strong> hours per week. You will continue to report to <strong>{managerName}</strong>. We're confident that you'll thrive in this new role and continue to make significant contributions to our team.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        We're pleased to offer you an annual gross salary of <strong>${salary}</strong>. In addition to your base salary, you will continue to receive our comprehensive benefits package, including <strong>{benefits.join(', ')}</strong>. You will also remain eligible for our bonus programs, which currently include <strong>{bonusPrograms}</strong>.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Your new role will start on <strong>{startDate}</strong>. Our HR team will assist you with the transition, ensuring that you have all the necessary information and support. You'll be required to sign an updated <strong>{contractDuration}</strong> contract and adhere to our <strong>{employmentAgreement}</strong>.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        As a reminder, <strong>{companyName}</strong> operates as an at-will employer, which means that either party may terminate the employment relationship at any time, with or without cause or notice.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Please review the details of this offer carefully and let us know your decision by <strong>{responseDate}</strong>. If you have any questions or need further information, feel free to reach out to <strong>{managerName}</strong> at <strong>{contactDetails}</strong>.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        We are excited about the potential impact you will continue to have in your new role. We look forward to seeing you thrive and grow with <strong>{companyName}</strong>.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Best regards,
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        <strong>{yourName}</strong>
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        <strong>{signature}</strong>
      </ResourceTypography>
    </>
  );
};

// Sales Job Offer Template Preview & Docx
export const GenerateSalesJobOfferDocument = (props: JobOfferProps): Document => {
  const { companyName, candidateName, jobTitle, employmentType, employmentHours, department, salary, vacationDays, bonusPrograms, startDate, contractDuration, employmentAgreement, responseDate, managerName, contactDetails, yourName, signature, benefits } = props;

  return new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [new TextRun({ text: `${companyName} Sales Job Offer / Sales Job Offer from ${companyName}`, bold: true })],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Dear ${candidateName},`, break: 1 })],
            spacing: {
              after: 100,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Congratulations! We are thrilled to offer you the position of ${jobTitle} at ${companyName}. As part of our sales team, your role will be crucial in driving revenue growth and expanding our market presence.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `This position is classified as a ${employmentType} role, with a strong focus on achieving sales targets. You will report directly to the sales manager and collaborate closely with our marketing and product teams. Your extensive experience and proven track record in sales make you an ideal fit for this role, and we are confident that you will contribute significantly to our success.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `We are offering you a competitive compensation package, including a base salary of $${salary} per year. Additionally, you will have the opportunity to earn substantial commissions based on your sales performance. Our commission structure is designed to reward top performers, and we are confident that your skills will lead to exceptional results.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `In addition to financial rewards, we provide comprehensive benefits, including ${benefits.join(', ')}, to support your well-being and professional growth. You will also have access to ongoing training and development opportunities to enhance your sales skills and career progression within ${companyName}.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Your start date is scheduled for ${startDate}. We understand the importance of a smooth transition and will ensure that you receive the necessary support and resources to hit the ground running. You will be required to sign a ${contractDuration} contract and adhere to our ${employmentAgreement}, which outlines the terms and conditions of your employment with ${companyName}.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `As a sales role at ${companyName}, performance is key. We operate on an at-will employment basis, providing flexibility for both parties to adapt to changing circumstances. This approach fosters a dynamic and results-driven culture where success is recognized and rewarded.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Please take the time to review this offer carefully. We kindly request your response by ${responseDate}. If you have any questions or require further information, please do not hesitate to contact me or our HR department at ${contactDetails}. We are here to support you throughout this process and beyond.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `We are excited about the possibility of you joining our sales team at ${companyName}. Your drive, passion, and expertise will be instrumental in achieving our ambitious goals and driving growth. We look forward to welcoming you aboard and supporting your success in this exciting role.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Best regards,`, break: 1 })],
            spacing: {
              after: 100,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `${yourName}`, bold: true, break: 1 })],
            spacing: {
              after: 100,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `${signature}`, break: 1 })],
          }),
        ],
      },
    ],
  });
};
export const generateSalesJobOfferPreviewContent = (props: JobOfferProps) => {
  const { companyName, candidateName, jobTitle, employmentType, employmentHours, department, salary, vacationDays, bonusPrograms, startDate, contractDuration, employmentAgreement, responseDate, managerName, contactDetails, yourName, signature, benefits } = props;
  return (
    <>
      <ResourceTypography variant='body1'>
        <strong>{companyName}</strong> Sales Job Offer
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Dear <strong>{candidateName}</strong>,
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Congratulations! We are thrilled to offer you the position of <strong>{jobTitle}</strong> at <strong>{companyName}</strong>. As part of our sales team, your role will be crucial in driving revenue growth and expanding our market presence.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        This is a <strong>{employmentType}</strong> role, with a strong focus on achieving sales targets. You will report directly to the sales manager and collaborate closely with our marketing and product teams. Your extensive experience and proven track record in sales make you an ideal fit for this role, and we are confident that you will contribute significantly to our success.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        We are offering you a competitive compensation package, including a base salary of <strong>${salary}</strong> per year. Additionally, you will have the opportunity to earn substantial commissions based on your sales performance. Our commission structure is designed to reward top performers, and we are confident that your skills will lead to exceptional results.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        In addition to financial rewards, we provide comprehensive benefits, including <strong>{benefits.join(', ')}</strong>, to support your well-being and professional growth. You will also have access to ongoing training and development opportunities to enhance your sales skills and career progression within <strong>{companyName}</strong>.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Your start date is scheduled for <strong>{startDate}</strong>. We understand the importance of a smooth transition and will ensure that you receive the necessary support and resources to hit the ground running. You will be required to sign a <strong>{contractDuration}</strong> contract and adhere to our <strong>{employmentAgreement}</strong>, which outlines the terms and conditions of your
        employment with <strong>{companyName}</strong>.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        As a sales role at <strong>{companyName}</strong>, performance is key. We operate on an at-will employment basis, providing flexibility for both parties to adapt to changing circumstances. This approach fosters a dynamic and results-driven culture where success is recognized and rewarded.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Please take the time to review this offer carefully. We kindly request your response by <strong>{responseDate}</strong>. If you have any questions or require further information, please do not hesitate to contact me or our HR department at <strong>{contactDetails}</strong>. We are here to support you throughout this process and beyond.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        We are excited about the possibility of you joining our sales team at <strong>{companyName}</strong>. Your drive, passion, and expertise will be instrumental in achieving our ambitious goals and driving growth. We look forward to welcoming you aboard and supporting your success in this exciting role.
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        Best regards,
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        <strong>{yourName}</strong>
      </ResourceTypography>
      <ResourceTypography gutterBottom variant='body1'>
        <strong>{signature}</strong>
      </ResourceTypography>
    </>
  );
};
