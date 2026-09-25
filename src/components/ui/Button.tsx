import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  as = 'button',
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-body text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-teal-700 rounded-[4px] px-5 py-2.5';
  
  const variantClasses = {
    primary: 'bg-teal-700 text-paper border border-teal-700 hover:bg-[#084843]',
    secondary: 'bg-teal-300 text-ink border border-teal-300 hover:bg-[#85cbbd]',
    outline: 'bg-transparent text-ink border border-teal-700 hover:bg-teal-300/20 dark:text-paper dark:border-teal-300',
    'outline-light': 'bg-transparent text-paper border border-teal-300/70 hover:bg-teal-300/15 hover:border-teal-300 hover:text-teal-300',
    ghost: 'bg-transparent text-slate hover:text-ink hover:bg-teal-300/10 dark:text-slate dark:hover:text-paper',
  };

  const combined = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (as === 'a' || href) {
    return (
      <a href={href} target={target} rel={rel} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
};
