/* eslint-disable */
import { Typography } from '@mui/material';
import { Document, Paragraph, TextRun } from 'docx';
export const TEMPLATE_TYPE: 'formal' | 'auto' | 'informal' = 'formal';

export interface JobInterviewProps {
  companyName: string;
  candidateName: string;
  jobTitle: string;
  department: string;
  contactDetails: string;
  yourName: string;
  signature: string;
}
/*
 * Word Docs & Their Preview Contents MUST Match
 */

// Formal Invitation Letter Template Preview & Docx
export const GenerateInterviewLetterPreview = (props: JobInterviewProps) => {
  const { companyName, candidateName, jobTitle, department, yourName, signature } = props;
  return (
    <>
      <Typography variant='body1'>
        <strong>{companyName}</strong> Interview Letter
      </Typography>
      <Typography gutterBottom variant='body1'>
        Dear <strong>{candidateName}</strong>,
      </Typography>
      <Typography gutterBottom variant='body1'>
        Thank you for your interest in the <strong>{jobTitle}</strong> position at <strong>{companyName}</strong>. We appreciate the time and effort you put into your application and the opportunity to learn more about your qualifications and experiences.
      </Typography>
      <Typography gutterBottom variant='body1'>
        Interview
      </Typography>
      <Typography gutterBottom variant='body1'>
        Interivew <strong>{companyName}</strong>Interview{' '}
      </Typography>
      <Typography gutterBottom variant='body1'>
        Interview
      </Typography>
      <Typography gutterBottom variant='body1'>
        Best regards,
      </Typography>
      <Typography gutterBottom variant='body1'>
        <strong>{yourName}</strong>
      </Typography>
      <Typography gutterBottom variant='body1'>
        <strong>{signature}</strong>
      </Typography>
    </>
  );
};
export const GenerateInterviewLetterDocument = (props: JobInterviewProps): Document => {
  const { companyName, candidateName, jobTitle, department, yourName, signature } = props;

  return new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [new TextRun({ text: `${companyName} Interview Letter from ${companyName}`, bold: true })],
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
                text: `Thank you for your interest in the ${jobTitle} position at ${companyName}. We appreciate the time and effort you put into your application and the opportunity to learn more about your qualifications and experiences.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Interview`, break: 1 })],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Interview ${companyName} Interview.`, break: 1 })],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Thank you once again for your interest in joining our team. We wish you the best of luck in your job search and future professional endeavors.`,
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

// Rejection Letter Informal Template Preview & Docx
export const GenerateInformalInterviewLetterPreview = (props: JobInterviewProps) => {
  const { companyName, candidateName, jobTitle, department, yourName, signature } = props;
  return (
    <>
      <Typography variant='body1'>
        <strong>{companyName}</strong> Rejection Letter
      </Typography>
      <Typography gutterBottom variant='body1'>
        Hi <strong>{candidateName}</strong>,
      </Typography>
      <Typography gutterBottom variant='body1'>
        Thanks so much for applying for the <strong>{jobTitle}</strong> position at <strong>{companyName}</strong>. We really enjoyed getting to know you through your application.
      </Typography>
      <Typography gutterBottom variant='body1'>
        Interview
      </Typography>
      <Typography gutterBottom variant='body1'>
        Interview
      </Typography>
      <Typography gutterBottom variant='body1'>
        Wishing you all the best in your job search and future endeavors.
      </Typography>
      <Typography gutterBottom variant='body1'>
        Thank you again for your interest in <strong>{companyName}</strong> . If you have any questions or would like feedback on your application, please do not hesitate to reach out.
      </Typography>
      <Typography gutterBottom variant='body1'>
        Best regards,
      </Typography>
      <Typography gutterBottom variant='body1'>
        <strong>{yourName}</strong>
      </Typography>
      <Typography gutterBottom variant='body1'>
        <strong>{companyName}</strong>
      </Typography>
      <Typography gutterBottom variant='body1'>
        <strong>{signature}</strong>
      </Typography>
    </>
  );
};
export const GenerateInformalInterviewLetterDocument = (props: JobInterviewProps): Document => {
  const { companyName, candidateName, jobTitle, department, yourName, signature } = props;

  return new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [new TextRun({ text: `${companyName} Interview Letter from ${companyName}`, bold: true })],
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
                text: `Thanks so much for applying for the ${jobTitle} position at ${companyName}. We really enjoyed getting to know you through your application.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Interview`, break: 1 })],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Interview`, break: 1 })],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Wishing you all the best in your job search and future endeavors.`, break: 1 })],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Thank you again for your interest in  ${companyName}. If you have any questions or would like feedback on your application, please do not hesitate to reach out.`,
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
            children: [new TextRun({ text: `${companyName}`, bold: true, break: 1 })],
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

// Rejection Letter Auto Template Preview & Docx
export const GenerateAutoInterviewLetterPreview = (props: JobInterviewProps) => {
  const { companyName, candidateName, jobTitle, department, yourName, signature } = props;
  return (
    <>
      <Typography variant='body1'>
        <strong>{companyName}</strong> Rejection Letter
      </Typography>
      <Typography gutterBottom variant='body1'>
        Dear <strong>{candidateName}</strong>,
      </Typography>
      <Typography gutterBottom variant='body1'>
        Thank you for your interest in the <strong>{jobTitle}</strong> position at <strong>{companyName}</strong> and for taking the time to apply. We appreciate your enthusiasm in wanting to join our team.
      </Typography>
      <Typography gutterBottom variant='body1'>
        Interview
      </Typography>
      <Typography gutterBottom variant='body1'>
        Interview
      </Typography>
      <Typography gutterBottom variant='body1'>
        We wish you the best of luck in your job search and in all your future endeavors.
      </Typography>
      <Typography gutterBottom variant='body1'>
        Thank you once again for your interest in <strong>{companyName}</strong>.
      </Typography>
      <Typography gutterBottom variant='body1'>
        Best regards,
      </Typography>
      <Typography gutterBottom variant='body1'>
        <strong>{yourName}</strong>
      </Typography>
      <Typography gutterBottom variant='body1'>
        <strong>{signature}</strong>
      </Typography>
    </>
  );
};
export const GenerateAutoInterviewLetterDocument = (props: JobInterviewProps): Document => {
  const { companyName, candidateName, jobTitle, department, yourName, signature } = props;

  return new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [new TextRun({ text: `${companyName}Auto Interview Letter from ${companyName}`, bold: true })],
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
                text: `Thank you for your interest in the ${jobTitle} position at ${companyName} and for taking the time to apply. We appreciate your enthusiasm in wanting to join our team.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Interview`, break: 1 })],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Interview`, break: 1 })],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `We wish you the best of luck in your job search and in all your future endeavors.`,
                break: 1,
              }),
            ],
            spacing: {
              after: 200,
            },
          }),
          new Paragraph({
            children: [new TextRun({ text: `Thank you once again for your interest in ${companyName}.`, break: 1 })],
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
