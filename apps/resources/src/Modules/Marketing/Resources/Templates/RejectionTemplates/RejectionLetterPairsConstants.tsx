/* eslint-disable */
import { Typography } from '@mui/material';
import { Document, Paragraph, TextRun } from 'docx';
export const TEMPLATE_TYPE: 'formal' | 'auto' | 'informal' = 'formal';

export interface JobRejectionProps {
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

// Formal Rejection Letter Template Preview & Docx
export const GenerateRejectionLetterPreview = (props: JobRejectionProps) => {
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
        Thank you for your interest in the <strong>{jobTitle}</strong> position at <strong>{companyName}</strong>. We appreciate the time and effort you put into your application and the opportunity to learn more about your qualifications and experiences.
      </Typography>
      <Typography gutterBottom variant='body1'>
        This decision was not easy, as we received many impressive applications. While your application was strong, we have decided to proceed with candidates whose skills and experiences more closely align with our current needs and goals.
      </Typography>
      <Typography gutterBottom variant='body1'>
        We encourage you to apply for future openings at <strong>{companyName}</strong> that align with your skills and career aspirations. We will keep your resume on file for potential opportunities and will reach out if a suitable position becomes available.
      </Typography>
      <Typography gutterBottom variant='body1'>
        Thank you once again for your interest in joining our team. We wish you the best of luck in your job search and future professional endeavors.
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
export const GenerateRejectionLetterDocument = (props: JobRejectionProps): Document => {
  const { companyName, candidateName, jobTitle, department, yourName, signature } = props;

  return new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [new TextRun({ text: `${companyName} Rejection Letter from ${companyName}`, bold: true })],
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
            children: [
              new TextRun({
                text: `This decision was not easy, as we received many impressive applications. While your application was strong, we have decided to proceed with candidates whose skills and experiences more closely align with our current needs and goals.`,
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
                text: `We encourage you to apply for future openings at ${companyName} that align with your skills and career aspirations. We will keep your resume on file for potential opportunities and will reach out if a suitable position becomes available.`,
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
export const GenerateInformalRejectionLetterPreview = (props: JobRejectionProps) => {
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
        After careful consideration, we've decided to move forward with other candidates who more closely match what we're looking for at this time. It was a tough decision because we saw a lot of great qualities in your background.
      </Typography>
      <Typography gutterBottom variant='body1'>
        We encourage you to keep an eye on our job openings and apply again if something else catches your eye in the future. We think you have a lot to offer, and we'd love to see you apply for another role that might be a better fit.
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
export const GenerateInformalRejectionLetterDocument = (props: JobRejectionProps): Document => {
  const { companyName, candidateName, jobTitle, department, yourName, signature } = props;

  return new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [new TextRun({ text: `${companyName} Recection Letter from ${companyName}`, bold: true })],
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
            children: [
              new TextRun({
                text: `After careful consideration, we've decided to move forward with other candidates who more closely match what we're looking for at this time. It was a tough decision because we saw a lot of great qualities in your background.`,
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
                text: `We encourage you to keep an eye on our job openings and apply again if something else catches your eye in the future. We think you have a lot to offer, and we'd love to see you apply for another role that might be a better fit.`,
                break: 1,
              }),
            ],
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
export const GenerateAutoRejectionLetterPreview = (props: JobRejectionProps) => {
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
        After careful review of your application, we regret to inform you that we have decided to move forward with other candidates whose qualifications more closely match our requirements for this role.
      </Typography>
      <Typography gutterBottom variant='body1'>
        Please understand that this decision does not reflect your abilities or achievements, but rather the specific needs of this particular position. We encourage you to keep an eye on our careers page for future openings that might better fit your skills and experiences.
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
export const GenerateAutoRejectionLetterDocument = (props: JobRejectionProps): Document => {
  const { companyName, candidateName, jobTitle, department, yourName, signature } = props;

  return new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [new TextRun({ text: `${companyName}Auto Recection Letter from ${companyName}`, bold: true })],
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
            children: [
              new TextRun({
                text: `After careful review of your application, we regret to inform you that we have decided to move forward with other candidates whose qualifications more closely match our requirements for this role.`,
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
                text: `Please understand that this decision does not reflect your abilities or achievements, but rather the specific needs of this particular position. We encourage you to keep an eye on our careers page for future openings that might better fit your skills and experiences.`,
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
