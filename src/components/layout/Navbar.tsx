import { useState, useEffect } from 'react';
import { Link, useRouter } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import Container from '@/components/shared/ui/Container';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [router.state.location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: '/resume' },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    setIsOpen(false);
    const element = document.getElementById('contact');
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isHome = router.state.location.pathname === '/';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full transition-all duration-300 py-4
          ${(scrolled || !isHome) ? 'bg-[#0a0a0c]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3' : 'bg-transparent'}`}
        style={{ 
          zIndex: isOpen ? 2147483647 : 1000000 
        }}
      >
        <Container className="flex justify-between items-center relative">
          <Link to="/" className="relative z-[2147483647] text-2xl font-bold font-heading tracking-tight text-white flex-shrink-0">
            Progdper
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 relative z-[2147483647]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                activeProps={{ className: 'text-white font-bold' }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={router.state.location.pathname}
              hash="contact"
              onClick={handleContactClick}
              className="inline-block px-6 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-full shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:scale-105 transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex md:hidden items-center relative z-[2147483647]">
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }} 
              className="p-3 text-white hover:bg-white/10 rounded-xl transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay - Now rendered as a sibling to the nav, bypassing backdrop-filter clipping */}
      <MobileMenu 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navLinks={navLinks}
        handleContactClick={handleContactClick}
      />
    </>
  );
};

export default Navbar;
