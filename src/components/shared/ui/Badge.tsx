import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'glass';
  className?: string;
  size?: 'sm' | 'md';
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  icon, 
  variant = 'primary', 
  className = '',
  size = 'md'
}) => {
  const variants = {
    primary: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
    outline: 'bg-white/5 border-white/10 text-slate-400',
    ghost: 'bg-transparent border-transparent text-slate-500',
    glass: 'bg-white/5 border-white/10 backdrop-blur-md text-white'
  };

  const sizes = {
    sm: 'px-3 py-1 text-[10px]',
    md: 'px-4 py-1.5 text-xs'
  };

  return (
    <div className={`inline-flex items-center gap-2 border rounded-full font-bold uppercase tracking-widest ${variants[variant]} ${sizes[size]} ${className}`}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </div>
  );
};

export default Badge;
