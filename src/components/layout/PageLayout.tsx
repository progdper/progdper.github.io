import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageLayout Template
 * Ensures consistent layout rules across all pages:
 * - Prevents horizontal overflow
 * - Sets standard background and text colors
 * - Ensures minimum full screen height
 */
const PageLayout: React.FC<PageLayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen bg-[#0a0a0c] text-[#e2e8f0] overflow-x-hidden selection:bg-indigo-500/30 ${className}`}>
      {children}
    </div>
  );
};

export default PageLayout;
