import React from 'react';
import { GraduationCap } from 'lucide-react';
import { resumeData, Education } from '@/data/resume';
import Card from '@/components/shared/ui/Card';
import Badge from '@/components/shared/ui/Badge';

const EducationSection: React.FC = () => {
  const { education } = resumeData;

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
          <GraduationCap size={24} />
        </div>
        <h2 className="text-3xl font-black text-white tracking-tight font-heading text-center md:text-left">Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {education.map((edu: Education, idx: number) => (
          <Card key={idx} hoverable className="group flex flex-col items-center md:items-start text-center md:text-left">
            <Badge variant="outline" size="sm" className="mb-4 text-cyan-400 border-cyan-500/20 bg-cyan-500/5">
              {edu.period}
            </Badge>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {edu.major}
            </h3>
            <p className="text-slate-400 text-sm font-medium mb-2">{edu.school}</p>
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{edu.degree}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
