import { SvgIcon, SvgIconProps } from '@mui/material';

export const UnavailableIcon = (props: SvgIconProps) => {
  return (
    <>
      <SvgIcon {...props} viewBox='0 0 25 25'>
        <path d='M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z' fill='#9E9E9E' fillOpacity='0.5' />
        <path d='M7.5 7.5L17.5 17.5M17.5 7.5L7.5 17.5' stroke='#FFFFFF' strokeWidth='2' strokeLinecap='round' />
      </SvgIcon>
    </>
  );
};
