import React from 'react';

interface StatusChipProps {
  label: string;
  variant?: 'teal' | 'rust' | 'neutral';
  pulse?: boolean;
  className?: string;
}

export const StatusChip: React.FC<StatusChipProps> = ({
  label,
  variant = 'teal',
  pulse = false,
  className = '',
}) => {
  const variantStyles = {
    teal: 'bg-teal-300/15 border-teal-700/30 text-teal-700 dark:text-teal-300 dark:border-teal-300/40',
    rust: 'bg-rust/10 border-rust/30 text-rust',
    neutral: 'bg-slate/10 border-slate/30 text-slate dark:text-paper/80',
  };

  const dotColors = {
    teal: 'bg-teal-700 dark:bg-teal-300',
    rust: 'bg-rust',
    neutral: 'bg-slate',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] border text-xs font-medium tracking-normal ${variantStyles[variant]} ${className}`}
    >
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant]}`}
          />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColors[variant]}`} />
      </span>
      <span>{label}</span>
    </span>
  );
};
