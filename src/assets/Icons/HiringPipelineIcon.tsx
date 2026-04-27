import React from 'react';

interface HiringPipelineIconProps {
  size?: number;
  color?: string;
}

export const HiringPipelineIcon: React.FC<HiringPipelineIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect x='3' y='3' width='18' height='18' rx='2' stroke={color} strokeWidth='2' fill='none' />
    <circle cx='8' cy='8' r='1' fill={color} />
    <circle cx='12' cy='8' r='1' fill={color} />
    <circle cx='16' cy='8' r='1' fill={color} />
    <circle cx='8' cy='12' r='1' fill={color} />
    <circle cx='12' cy='12' r='1' fill={color} />
    <circle cx='16' cy='12' r='1' fill={color} />
    <circle cx='8' cy='16' r='1' fill={color} />
    <circle cx='12' cy='16' r='1' fill={color} />
    <circle cx='16' cy='16' r='1' fill={color} />
    <path d='M8 8L12 12L16 8' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8 12L12 16L16 12' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
