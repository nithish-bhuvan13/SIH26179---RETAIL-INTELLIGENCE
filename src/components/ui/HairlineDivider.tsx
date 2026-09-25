import React from 'react';

interface HairlineDividerProps {
  className?: string;
}

export const HairlineDivider: React.FC<HairlineDividerProps> = ({ className = '' }) => {
  return (
    <div 
      role="separator" 
      className={`w-full h-px bg-teal-300 opacity-60 ${className}`} 
    />
  );
};
