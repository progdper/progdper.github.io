import React from 'react';
import { Link } from '@tanstack/react-router';
import { Briefcase } from 'lucide-react';
import Container from '@/components/shared/ui/Container';
import Card from '@/components/shared/ui/Card';
import Button from '@/components/shared/ui/Button';
import { resumeData } from '@/data/resume';

const ProfessionalSnapshot: React.FC = () => {
  // Helper to calculate total years from period strings
  const calculateTotalYears = (periods: string[]) => {
    let totalMonths = 0;
    const now = new Date();

    periods.forEach(period => {
      const [startStr, endStr] = period.split(' - ');
      
      const [startYear, startMonth] = startStr.split('.').map(Number);
      const startDate = new Date(startYear, startMonth - 1);
      
      let endDate: Date;
      if (!endStr || 
          endStr.toLowerCase().includes('present') || 
          endStr.includes('현재') || 
          endStr.includes('재 직 중') || 
          endStr.includes('재직중')) {
        endDate = now;
      } else {
        const [endYear, endMonth] = endStr.split('.').map(Number);
        endDate = new Date(endYear, (endMonth || 1) - 1);
      }
      
      const diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
      totalMonths += Math.max(0, diffMonths);
    });

    return (totalMonths / 12).toFixed(1);
  };

  // Calculate stats dynamically from resumeData
  const devPeriods = resumeData.experiences
    .filter(exp => !exp.isLegacy && !exp.role.includes('수료'))
    .map(exp => exp.period);
  
  const devExpYears = calculateTotalYears(devPeriods);
  const businessExpYears = 12;
  const degreeCount = resumeData.education.length;
  const isFullStack = resumeData.skillCategories.some(c => c.type === 'backend') && 
                      resumeData.skillCategories.some(c => c.type === 'frontend');

  const stats = [
    { 
      label: '개발 실무', 
      value: `${devExpYears}+`, 
      color: 'text-indigo-400', 
      bg: 'bg-indigo-600/10', 
      border: 'border-indigo-500/20' 
    },
    { 
      label: '비즈니스 경력', 
      value: `${businessExpYears}+`, 
      color: 'text-slate-400', 
      bg: 'bg-slate-800/40', 
      border: 'border-white/5' 
    },
    { 
      label: '학사 학위', 
      value: `${degreeCount}`, 
      color: 'text-cyan-400', 
      bg: 'bg-cyan-600/10', 
      border: 'border-cyan-500/20' 
    },
    { 
      label: '기술스택', 
      value: isFullStack ? 'FULL' : 'SPECIAL', 
      color: 'text-white', 
      bg: 'bg-white/5', 
      border: 'border-white/10' 
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <Card className="lg:col-span-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left animate-fade-in" padding="xl">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 font-heading break-keep">
              비즈니스 인사이트와 <br />
              기술 실행력을 겸비한 <span className="text-indigo-400">풀스택 개발자</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl break-keep">
              {resumeData.personalInfo.description}
            </p>
            <div className="flex justify-center lg:justify-start w-full">
              <Button 
                variant="primary" 
                as={Link} 
                to="/resume" 
                icon={<Briefcase size={18} className="group-hover:rotate-12 transition-transform" />}
                className="w-full sm:w-auto"
              >
                상세 이력서 보기
              </Button>
            </div>
          </Card>
          
          <div className="grid grid-cols-2 gap-4 animate-fade-in [animation-delay:200ms]">
            {stats.map((stat, idx) => (
              <Card 
                key={idx} 
                className={`flex flex-col items-center justify-center text-center group ${stat.bg} ${stat.border}`}
                hoverable
                glass={false}
                padding="sm"
              >
                <span className={`text-3xl font-black ${stat.color} mb-1 font-heading tracking-tighter`}>{stat.value}</span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-tight whitespace-pre-line">{stat.label}</span>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProfessionalSnapshot;
