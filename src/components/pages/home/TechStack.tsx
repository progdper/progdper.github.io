import React from 'react';
import { resumeData, SkillCategory } from '@/data/resume';
import Container from '@/components/shared/ui/Container';
import SectionHeader from '@/components/shared/ui/SectionHeader';
import Card from '@/components/shared/ui/Card';
import Badge from '@/components/shared/ui/Badge';

const TechStack: React.FC = () => {
  const { skillCategories } = resumeData;

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <Container className="relative">
        <SectionHeader 
          title="Technology Stack"
          description="비즈니스 문제를 해결하기 위해 가장 적합한 도구를 선택하고 깊이 있게 활용합니다."
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category: SkillCategory, idx: number) => (
            <Card 
              key={idx} 
              className="group animate-fade-in" 
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center 
                  ${category.type === 'backend' ? 'bg-indigo-500/10 text-indigo-400' : 
                    category.type === 'frontend' ? 'bg-cyan-500/10 text-cyan-400' : 
                    'bg-slate-500/10 text-slate-400'}`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="glass" 
                    className="bg-white/[0.03] border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechStack;
