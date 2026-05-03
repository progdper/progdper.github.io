import React from 'react';
import { Award } from 'lucide-react';
import { resumeData, Training } from '@/data/resume';

const TrainingSection: React.FC = () => {
  const { training } = resumeData;

  return (
    <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-amber-400">
          <Award size={24} />
        </div>
        <h2 className="text-2xl font-bold font-heading text-white">Development Training</h2>
      </div>
      <div className="space-y-6">
        {training.map((item: Training, idx: number) => (
          <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
            <h3 className="text-lg font-bold text-white mb-2">{item.course}</h3>
            <p className="text-amber-400 text-[10px] font-black uppercase tracking-widest mb-4">{item.period}</p>
            <p className="text-slate-400 text-sm mb-4">{item.institution}</p>
            {item.details && (
              <ul className="text-slate-500 text-xs space-y-2">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx}>• {detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainingSection;
