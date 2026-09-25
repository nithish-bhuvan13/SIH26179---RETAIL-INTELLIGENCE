import React from 'react';

interface StatNumberProps {
  value: string;
  caption: string;
  subtext?: string;
  tone?: 'default' | 'rust' | 'teal';
  className?: string;
}

export const StatNumber: React.FC<StatNumberProps> = ({
  value,
  caption,
  subtext,
  tone = 'default',
  className = '',
}) => {
  const toneClasses = {
    default: 'text-ink dark:text-paper',
    rust: 'text-rust',
    teal: 'text-teal-700 dark:text-teal-300',
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <span className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight ${toneClasses[tone]}`}>
        {value}
      </span>
      <span className="mt-2 font-body text-sm font-medium text-slate max-w-xs leading-snug">
        {caption}
      </span>
      {subtext && (
        <span className="mt-1 font-body text-xs text-slate/80">
          {subtext}
        </span>
      )}
    </div>
  );
};
