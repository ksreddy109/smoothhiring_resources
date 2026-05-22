import { GenerateInterviewLetterDocument, GenerateInterviewLetterPreview, GenerateInformalInterviewLetterDocument, GenerateInformalInterviewLetterPreview, GenerateAutoInterviewLetterDocument, GenerateAutoInterviewLetterPreview, JobInterviewProps } from 'Modules/Marketing/Resources/Templates/InterviewTemplates/InterviewLetterPairsConstants';
import { Document } from 'docx';
import type { ReactElement } from 'react';

type TemplateTypes = 'formal' | 'informal' | 'auto';

export const templateFunctions: Record<
  TemplateTypes,
  {
    generateDocument: (props: JobInterviewProps) => Document;
    generatePreviewContent: (props: JobInterviewProps) => ReactElement;
  }
> = {
  formal: {
    generateDocument: GenerateInterviewLetterDocument,
    generatePreviewContent: GenerateInterviewLetterPreview,
  },
  informal: {
    generateDocument: GenerateInformalInterviewLetterDocument,
    generatePreviewContent: GenerateInformalInterviewLetterPreview,
  },
  auto: {
    generateDocument: GenerateAutoInterviewLetterDocument,
    generatePreviewContent: GenerateAutoInterviewLetterPreview,
  },
};
