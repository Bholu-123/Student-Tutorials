import React from 'react';

const variants = {
  primary:
    'bg-brand hover:bg-brand-dark text-white shadow-md hover:shadow-lg',
  outline:
    'border-2 border-brand text-brand hover:bg-brand hover:text-white dark:text-brand-light dark:border-brand-light',
  ghost:
    'text-brand hover:bg-brand/10 dark:text-brand-light',
};

const sizes = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => (
  <button
    className={`
      inline-flex items-center justify-center gap-2 cursor-pointer
      font-semibold rounded-lg transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      ${variants[variant]} ${sizes[size]} ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

export default Button;
