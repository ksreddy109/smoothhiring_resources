import React from 'react';

interface FingerprintTemplateIconProps {
  size?: number;
  color?: string;
}

export const FingerprintTemplateIcon: React.FC<FingerprintTemplateIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='12' cy='12' r='10' stroke={color} strokeWidth='2' fill='none' />
    <path d='M8 8C8 6.9 8.9 6 10 6H14C15.1 6 16 6.9 16 8V10C16 11.1 15.1 12 14 12H10C8.9 12 8 11.1 8 10V8Z' stroke={color} strokeWidth='1.5' fill='none' />
    <path d='M7 14C7 12.9 7.9 12 9 12H15C16.1 12 17 12.9 17 14V16C17 17.1 16.1 18 15 18H9C7.9 18 7 17.1 7 16V14Z' stroke={color} strokeWidth='1.5' fill='none' />
    <path d='M6 18C6 16.9 6.9 16 8 16H16C17.1 16 18 16.9 18 18V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V18Z' stroke={color} strokeWidth='1.5' fill='none' />
    <circle cx='12' cy='12' r='2' fill={color} />
    <path d='M10 10L14 14M14 10L10 14' stroke={color} strokeWidth='1' strokeLinecap='round' />
  </svg>
);
