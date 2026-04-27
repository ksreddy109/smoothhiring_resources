import { GenerateRejectionLetterDocument, GenerateRejectionLetterPreview, GenerateInformalRejectionLetterDocument, GenerateInformalRejectionLetterPreview, GenerateAutoRejectionLetterDocument, GenerateAutoRejectionLetterPreview, JobRejectionProps } from 'Modules/Marketing/Resources/Templates/RejectionTemplates/RejectionLetterPairsConstants';
import { Document } from 'docx';

type TemplateTypes = 'formal' | 'informal' | 'auto';

export const templateFunctions: Record<
  TemplateTypes,
  {
    generateDocument: (props: JobRejectionProps) => Document;
    generatePreviewContent: (props: JobRejectionProps) => JSX.Element;
  }
> = {
  formal: {
    generateDocument: GenerateRejectionLetterDocument,
    generatePreviewContent: GenerateRejectionLetterPreview,
  },
  informal: {
    generateDocument: GenerateInformalRejectionLetterDocument,
    generatePreviewContent: GenerateInformalRejectionLetterPreview,
  },
  auto: {
    generateDocument: GenerateAutoRejectionLetterDocument,
    generatePreviewContent: GenerateAutoRejectionLetterPreview,
  },
};
