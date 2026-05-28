import { Skeleton } from '@mui/material';
import dynamic from 'next/dynamic';
import { type Dispatch, type SetStateAction } from 'react';
import { ResourceAiToolResultBody } from '@/integrations/smooth-hiring-ui';
import 'react-quill/dist/quill.snow.css';

const ShReactQuill = dynamic(
  () => import('@smoothhiring/smooth-ui').then(mod => mod.ShReactQuill),
  {
    ssr: false,
    loading: () => <Skeleton variant='rounded' height={280} animation='wave' />,
  }
);

type AiJobDescriptionEditorProps = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

export const AiJobDescriptionEditor = ({ value, onChange }: AiJobDescriptionEditorProps) => {
  return (
    <ResourceAiToolResultBody>
      <ShReactQuill quillEditorValue={value} setQuillEditorValue={onChange} />
    </ResourceAiToolResultBody>
  );
};

export default AiJobDescriptionEditor;
