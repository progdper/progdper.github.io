import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  glass?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  as?: any;
  href?: string;
  target?: string;
  rel?: string;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverable = false,
  padding = 'md',
  glass = true,
  onClick,
  style,
  as: Component = 'div',
  ...props
}) => {
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10 md:p-12'
  };

  return (
    <Component 
      className={`
        relative overflow-hidden border border-white/10 rounded-[2rem] transition-all duration-500
        ${glass ? 'bg-white/[0.03] backdrop-blur-xl' : 'bg-white/5'}
        ${hoverable ? 'hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1' : ''}
        ${paddings[padding]}
        ${className}
      `}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
