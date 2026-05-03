import React from 'react';
import { Globe, Mail } from 'lucide-react';
import Container from '@/components/shared/ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0a0c]">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold text-white tracking-tighter">Progdper</span>
          <p className="text-slate-500 text-xs font-medium">
            © {currentYear} Choi Jaehun. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/progdper" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 text-slate-500 hover:text-white transition-colors"
            title="GitHub"
          >
            <Globe size={20} />
          </a>
          <a 
            href="mailto:progdper@gmail.com" 
            className="p-2 text-slate-500 hover:text-white transition-colors"
            title="Email"
          >
            <Mail size={20} />
          </a>
          {/* <a 
            href="#" 
            className="p-2 text-slate-500 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkIcon size={20} />
          </a> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
