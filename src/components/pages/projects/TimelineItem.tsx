import React from 'react';
import { Briefcase, ChevronRight, Zap } from 'lucide-react';
import Card from '@/components/shared/ui/Card';
import Badge from '@/components/shared/ui/Badge';

interface TimelineItemProps {
  task: any; // Task combined with project info
  onClick: () => void;
  index?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ task, onClick, index = 0 }) => {
  const [year, month] = task.month.split('.');
  
  return (
    <Card 
      hoverable 
      className="flex flex-col lg:flex-row items-stretch lg:items-center gap-8 animate-fade-in" 
      padding="lg"
      onClick={onClick}
      style={{ animationDelay: `${(index % 10) * 0.1}s` }}
    >
      <div className="flex lg:flex-col items-center justify-center min-w-[80px] gap-1 border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pb-0 lg:pr-6">
        <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]">20{year}</span>
        <span className="text-5xl font-black text-white leading-none">{month}</span>
      </div>
      
      {/* Thumbnail Section */}
      <div className="w-full lg:w-64 aspect-video bg-black/60 rounded-2xl overflow-hidden flex-shrink-0 border border-white/5 relative group-hover:shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500">
        {task.imageUrl ? (
          <img 
            src={task.imageUrl} 
            alt={task.description} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-800">
            <Briefcase size={40} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
      </div>
      
      {/* Content Section */}
      <div className="flex-1 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="primary" size="sm" className="bg-indigo-500/10 border-indigo-500/20">
            {task.project.name}
          </Badge>
          <div className="h-1 w-1 rounded-full bg-slate-700" />
          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-1">
            <Zap size={10} className="text-amber-500" />
            {task.project.category}
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
          {task.description}
        </h3>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-2 items-center">
          {task.project.techStack?.slice(0, 5).map((tech: string) => (
            <Badge key={tech} variant="outline" size="sm" className="bg-white/5 border-none lowercase first-letter:uppercase tracking-normal font-medium">
              #{tech}
            </Badge>
          ))}
          {task.project.techStack?.length > 5 && (
            <span className="text-[10px] font-black text-slate-600 ml-1">
              +{task.project.techStack.length - 5}
            </span>
          )}
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-slate-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
        <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
      </div>

      {/* Decorative background glow */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/10 transition-colors" />
    </Card>
  );
};

export default TimelineItem;
