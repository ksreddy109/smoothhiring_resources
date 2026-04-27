import React from 'react';

interface InterviewTemplateIconProps {
  size?: number;
  color?: string;
}

export const InterviewTemplateIcon: React.FC<InterviewTemplateIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect x='3' y='3' width='18' height='18' rx='2' stroke={color} strokeWidth='2' fill='none' />
    <path d='M7 7H17' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M7 11H17' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <path d='M7 15H13' stroke={color} strokeWidth='2' strokeLinecap='round' />
    <circle cx='9' cy='9' r='1' fill={color} />
    <circle cx='9' cy='13' r='1' fill={color} />
    <circle cx='9' cy='17' r='1' fill={color} />
    <path d='M15 15L17 17M17 15L15 17' stroke={color} strokeWidth='2' strokeLinecap='round' />
  </svg>
);
