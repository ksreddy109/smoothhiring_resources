import * as React from 'react';

interface CreateJobIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

const CreateJobIcon: React.FC<CreateJobIconProps> = ({ color = '#417ee3', size = 32, ...props }) => (
  <svg fill={color} width={size} height={size} viewBox='-2.4 -2.4 28.80 28.80' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g id='SVGRepo_bgCarrier' strokeWidth='0' />
    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
    <g id='SVGRepo_iconCarrier'>
      <path id='secondary-fill' d='M17.44,8.22A5.49,5.49,0,0,1,14,9.91c0-.47-.26-4,1.5-6.1L16,4l.19-.72L18,4l.47-1.82.5-.09C19,2.57,19.23,6.18,17.44,8.22Z' style={{ fill: color, strokeWidth: 2.5 }} />
      <path id='secondary-stroke' d='M12,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V12' style={{ fill: 'none', stroke: color, strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2.5 }} />
      <path id='primary-stroke' d='M19.44,8.22C17.53,10.41,14,10,14,10s-.39-4,1.53-6.18a3.49,3.49,0,0,1,.56-.53L18,4l.47-1.82A8.19,8.19,0,0,1,21,2S21.36,6,19.44,8.22ZM14,10l-2,2' style={{ fill: 'none', stroke: color, strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2.5 }} />
    </g>
  </svg>
);

export default CreateJobIcon;
