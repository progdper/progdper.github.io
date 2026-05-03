import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  animate?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className = '', 
  from = 'from-indigo-400',
  via = 'via-cyan-400',
  to = 'to-indigo-400',
  animate = true
}) => {
  return (
    <span className={`
      bg-gradient-to-r ${from} ${via} ${to} 
      bg-clip-text text-transparent 
      ${animate ? 'bg-[length:200%_auto] animate-gradient' : ''} 
      ${className}
    `}>
      {children}
    </span>
  );
};

export default GradientText;
