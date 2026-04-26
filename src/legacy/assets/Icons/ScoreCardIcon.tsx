import React from 'react';

interface ScoreCardIconProps {
  size?: number;
  color?: string;
}

export const ScoreCardIcon: React.FC<ScoreCardIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect x='3' y='3' width='18' height='18' rx='2' stroke={color} strokeWidth='2' fill='none' />
    <line x1='7' y1='7' x2='17' y2='7' stroke={color} strokeWidth='2' />
    <line x1='7' y1='11' x2='17' y2='11' stroke={color} strokeWidth='2' />
    <line x1='7' y1='15' x2='17' y2='15' stroke={color} strokeWidth='2' />
    <circle cx='9' cy='9' r='1' fill={color} />
    <circle cx='9' cy='13' r='1' fill={color} />
    <circle cx='9' cy='17' r='1' fill={color} />
  </svg>
);
