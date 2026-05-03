import React from 'react';
import Badge from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  badge, 
  badgeIcon,
  title, 
  description, 
  alignment = 'left',
  className = ''
}) => {
  const aligns = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto'
  };

  return (
    <div className={`flex flex-col ${aligns[alignment]} ${className} animate-fade-in`}>
      {badge && (
        <Badge icon={badgeIcon} className="mb-6 lg:mb-8">
          {badge}
        </Badge>
      )}
      
      <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
        {title}
      </h2>
      
      {description && (
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl leading-relaxed font-medium">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
