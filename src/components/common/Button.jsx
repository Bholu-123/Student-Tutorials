import React from 'react';

const variants = {
  primary:
    'bg-brand hover:bg-brand-dark text-white shadow-md hover:shadow-lg hover:brightness-[1.03]',
  outline:
    'border-2 border-brand text-brand hover:bg-brand hover:text-white dark:text-brand-light dark:border-brand-light',
  ghost: 'text-brand hover:bg-brand/10 dark:text-brand-light',
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
      relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden
      font-semibold rounded-lg transition-all duration-300 ease-in-out
      hover:scale-[1.02] active:scale-[0.99]
      focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
      ${variants[variant]} ${sizes[size]} ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

export default Button;
