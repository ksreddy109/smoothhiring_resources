import { SvgIcon, SvgIconProps } from '@mui/material';

export const UseTemplateJobIcon = (props: SvgIconProps) => {
  return (
    <>
      <SvgIcon {...props} viewBox='0 0 25 25' fill='#000000'>
        <g id='template'>
          <g>
            <path d='M8,22H0V2h24v20H8z M2,20h4V7.9H2V20z M8,20h14V8H8V20z M6,6h16V4H2v2H6z' />
            <g transform='translate(9, 8) scale(0.5)'>
              <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
            </g>
          </g>
        </g>
      </SvgIcon>
    </>
  );
};
