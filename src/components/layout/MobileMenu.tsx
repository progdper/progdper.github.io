import React from 'react';
import { Link, useRouter } from '@tanstack/react-router';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navLinks: Array<{ name: string; href: string }>;
  handleContactClick: (e: React.MouseEvent) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  setIsOpen, 
  navLinks, 
  handleContactClick 
}) => {
  const router = useRouter();

  return (
    <div 
      className={`fixed inset-0 bg-[#0a0a0c] flex flex-col items-center justify-center transition-all duration-500 md:hidden
        ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
      style={{ 
        visibility: isOpen ? 'visible' : 'hidden',
        zIndex: 2147483646, // Just below the toggle button but above everything else
      }}
    >
      {/* Background Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-black text-white/[0.02] uppercase tracking-tighter leading-none select-none">
          MENU
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12 w-full px-10">
        {navLinks.map((link, idx) => (
          <Link
            key={link.name}
            to={link.href}
            className={`text-5xl font-black transition-all duration-500 w-full text-center
              ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ 
              transitionDelay: `${idx * 100}ms`,
              color: router.state.location.pathname === link.href ? 'white' : '#475569' 
            }}
            onClick={() => setIsOpen(false)}
          >
            <span className="hover:text-indigo-400 active:scale-95 inline-block transition-transform">
              {link.name}
            </span>
          </Link>
        ))}
        
        <Link
          to={router.state.location.pathname}
          hash="contact"
          onClick={handleContactClick}
          className={`mt-6 w-full max-w-xs py-5 bg-indigo-600 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-indigo-500/40 text-center transition-all duration-500
            ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
          style={{ transitionDelay: `${navLinks.length * 100}ms` }}
        >
          Contact Me
        </Link>
      </div>

      <div className="absolute bottom-12 left-0 w-full text-center opacity-20">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white">© 2024 Progdper Portfolio</p>
      </div>
    </div>
  );
};

export default MobileMenu;
