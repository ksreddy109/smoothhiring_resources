import React from 'react';

interface VideoAssessmentIconProps {
  size?: number;
  color?: string;
}

export const VideoAssessmentIcon: React.FC<VideoAssessmentIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect x='2' y='6' width='20' height='12' rx='2' stroke={color} strokeWidth='2' fill='none' />
    <circle cx='12' cy='12' r='3' stroke={color} strokeWidth='2' fill='none' />
    <circle cx='12' cy='12' r='1' fill={color} />
    <path d='M8 8L10 10M16 8L14 10M8 16L10 14M16 16L14 14' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
);
