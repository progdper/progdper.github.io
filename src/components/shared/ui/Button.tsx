import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  as?: any;
  to?: string; // Add support for TanStack Link
  hash?: string; // Add support for TanStack Link hash
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  iconPosition = 'right',
  className = '',
  as: Component = 'button',
  ...props 
}) => {
  const variants = {
    primary: 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:scale-105',
    secondary: 'bg-white text-black font-black hover:bg-indigo-50 shadow-2xl shadow-white/10 hover:scale-105',
    outline: 'bg-transparent border border-white/10 text-white hover:bg-white/5 hover:border-white/20',
    glass: 'bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-white/10',
    ghost: 'bg-transparent text-slate-400 hover:text-white transition-colors'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs font-bold',
    md: 'px-6 py-2.5 text-sm font-bold',
    lg: 'px-8 py-4 text-base font-black',
    xl: 'px-10 py-5 text-lg font-black'
  };

  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  return (
    <Component 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {content}
    </Component>
  );
};

export default Button;
