import { GenerateInterviewLetterDocument, GenerateInterviewLetterPreview, GenerateInformalInterviewLetterDocument, GenerateInformalInterviewLetterPreview, GenerateAutoInterviewLetterDocument, GenerateAutoInterviewLetterPreview, JobInterviewProps } from 'Modules/Marketing/Resources/Templates/InterviewTemplates/InterviewLetterPairsConstants';
import { Document } from 'docx';

type TemplateTypes = 'formal' | 'informal' | 'auto';

export const templateFunctions: Record<
  TemplateTypes,
  {
    generateDocument: (props: JobInterviewProps) => Document;
    generatePreviewContent: (props: JobInterviewProps) => JSX.Element;
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
