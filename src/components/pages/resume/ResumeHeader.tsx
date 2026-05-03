import React from 'react';
import { Mail, Phone, CheckCircle2 } from 'lucide-react';
import { resumeData } from '@/data/resume';

const ResumeHeader: React.FC = () => {
  const { personalInfo } = resumeData;

  return (
    <header className="mb-20 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 border-b border-white/10 pb-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black mb-4 font-heading tracking-tight text-white">RESUME</h1>
          <p className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-6">{personalInfo.title}</p>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed break-keep">
            {personalInfo.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-slate-300 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md w-full md:w-auto">
          <div className="flex items-center gap-3"><Mail size={16} className="text-indigo-400" /> {personalInfo.email}</div>
          <div className="flex items-center gap-3"><Phone size={16} className="text-indigo-400" /> {personalInfo.phone}</div>
          <div className="flex items-center gap-3 col-span-1 sm:col-span-2"><CheckCircle2 size={16} className="text-indigo-400" /> {personalInfo.status}</div>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;
