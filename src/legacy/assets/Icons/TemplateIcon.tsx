import { SvgIcon, SvgIconProps } from '@mui/material';

export const TemplateIcon = (props: SvgIconProps) => {
  return (
    <>
      <SvgIcon {...props} viewBox='0 0 25 25' fill='#000000'>
        <g id='template'>
          <g>
            <path d='M8,22H0V2h24v20H8z M2,20h4V7.9H2V20z M8,20h14V8H8V20z M6,6h16V4H2v2H6z' />
          </g>
        </g>
      </SvgIcon>
    </>
  );
};
