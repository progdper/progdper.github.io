import React from 'react';
import { Briefcase } from 'lucide-react';
import { resumeData, Experience } from '@/data/resume';
import Card from '@/components/shared/ui/Card';
import Badge from '@/components/shared/ui/Badge';

const ExperienceSection: React.FC = () => {
  const { experiences } = resumeData;

  const calculateDuration = (period: string) => {
    const [startPart, endPart] = period.split(' - ');
    if (!startPart) return '';

    const [startYear, startMonth] = startPart.split('.').map(Number);
    const startDate = new Date(startYear, startMonth - 1);

    let endDate: Date;
    let isPresent = false;
    if (!endPart || endPart.includes('재 직 중') || endPart.includes('Present')) {
      endDate = new Date();
      isPresent = true;
    } else {
      const [endYear, endMonth] = endPart.split('.').map(Number);
      endDate = new Date(endYear, endMonth - 1);
    }

    const diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;
    
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;

    const parts = [];
    if (years > 0) parts.push(`${years}년`);
    if (months > 0) parts.push(`${months}개월`);
    
    let durationText = parts.join(' ');
    if (isPresent && durationText) {
      durationText += ' / 기준일 현재';
    }
    
    return durationText ? `(${durationText})` : '';
  };

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-16">
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
          <Briefcase size={24} />
        </div>
        <h2 className="text-3xl font-black text-white tracking-tight font-heading text-center md:text-left">Work Experience</h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp: Experience, idx: number) => (
          <div key={idx} className="relative group">
            <div className="flex items-center gap-4 mb-4 ml-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform duration-500" />
              <div className="flex items-baseline gap-2.5">
                <span className="text-sm font-black uppercase tracking-[0.15em] text-indigo-400/90">{exp.period}</span>
                <span className="text-xs font-bold text-slate-500 tracking-tight">{calculateDuration(exp.period)}</span>
              </div>
            </div>

            <Card hoverable className="relative border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden" padding="lg">
              <div className="flex flex-col gap-5">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                      {exp.company}
                    </h3>
                    <Badge variant="primary" size="sm" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/20 py-0.5 px-2.5 normal-case tracking-normal text-[10px]">
                      {exp.role}
                    </Badge>
                  </div>
                </div>

                {exp.description && (
                  <p className="text-slate-400 leading-relaxed text-sm font-medium max-w-3xl -mt-2">
                    {exp.description}
                  </p>
                )}
                
                {/* Details List */}
                <ul className="space-y-2.5">
                  {exp.details.map((item: string, i: number) => {
                    const isTechStack = item.includes(',') || (item.split(' ').length > 2 && item.split(' ').every(word => /^[A-Z]/.test(word) || word.length < 3));
                    
                    if (isTechStack) {
                      return (
                        <li key={i} className="flex flex-wrap gap-1.5 pt-1">
                          {item.split(',').map((tech, techIdx) => (
                            <Badge 
                              key={techIdx} 
                              variant="outline" 
                              size="sm" 
                              className="bg-white/5 border-white/10 text-slate-400 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all normal-case tracking-normal px-2 py-0.5 text-[10px]"
                            >
                              {tech.trim()}
                            </Badge>
                          ))}
                        </li>
                      );
                    }

                    return (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <div className="mt-2 w-1 h-1 rounded-full bg-indigo-500/60 group-hover/item:bg-indigo-400 transition-all shrink-0" />
                        <span className="text-slate-300 text-sm md:text-base leading-snug group-hover/item:text-white transition-colors">
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
