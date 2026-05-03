import React from 'react';
import { Award } from 'lucide-react';
import { resumeData, SkillCategory } from '@/data/resume';

const SkillsSection: React.FC = () => {
  const { skillCategories } = resumeData;

  const getStyles = (type: string) => {
    switch (type) {
      case 'backend':
        return 'bg-indigo-600/10 border-indigo-500/20 text-indigo-300';
      case 'frontend':
        return 'bg-cyan-600/10 border-cyan-500/20 text-cyan-300';
      default:
        return 'bg-white/5 border-white/10 text-slate-300';
    }
  };

  return (
    <section className="animate-fade-in">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
        <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-indigo-400">
          <Award size={24} />
        </div>
        <h2 className="text-2xl font-bold font-heading text-white text-center md:text-left">Core Skills</h2>
      </div>

      <div className="space-y-8">
        {skillCategories.map((cat: SkillCategory, idx: number) => (
          <div key={idx} className="text-center md:text-left">
            <h4 className="text-slate-400 font-black text-[10px] uppercase tracking-widest mb-4">{cat.title}</h4>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {cat.skills.map(skill => (
                <span key={skill} className={`px-4 py-2 border rounded-xl text-xs font-bold ${getStyles(cat.type)}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
