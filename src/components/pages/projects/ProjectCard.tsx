import React from 'react';
import { Calendar, Layers } from 'lucide-react';
import { Project } from '@/data/projects/types';
import Card from '@/components/shared/ui/Card';
import Badge from '@/components/shared/ui/Badge';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  index?: number;
  variant?: 'classic' | 'featured';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  onClick, 
  index = 0, 
  variant = 'classic' 
}) => {
  // 대표 이미지 결정 로직:
  // 1. 프로젝트 자체 대표 이미지
  // 2. isRepresentative로 지정된 태스크의 이미지
  // 3. 가장 최신 날짜(month)의 태스크 이미지
  // 4. 마지막 수단으로 첫 번째 태스크의 이미지
  const representativeTask = project.tasks.find(t => t.isRepresentative && t.imageUrl);
  const sortedTasks = [...project.tasks]
    .filter(t => t.imageUrl)
    .sort((a, b) => b.month.localeCompare(a.month));
  const latestTaskWithImg = sortedTasks[0];
  
  const displayImageUrl = project.imageUrl || representativeTask?.imageUrl || latestTaskWithImg?.imageUrl || project.tasks[0]?.imageUrl || '';
  
  if (variant === 'featured') {
    return (
      <Card 
        hoverable 
        className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-900 border border-white/10 animate-fade-in" 
        padding="none"
        onClick={onClick}
        style={{ animationDelay: `${(index % 10) * 0.1}s` }}
      >
        <img 
          src={displayImageUrl} 
          alt={project.name}
          className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        
        <div className="absolute inset-0 p-10 flex flex-col justify-end">
          <Badge variant="primary" className="mb-4 w-fit bg-indigo-500/20 border-none lowercase first-letter:uppercase">
            {project.category}
          </Badge>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors h-[4rem] line-clamp-2 flex items-start">
            {project.name}
          </h3>
          <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 items-center">
            {project.techStack.slice(0, 3).map((stack: string) => (
              <Badge key={stack} variant="glass" size="sm" className="bg-white/10 border-none lowercase first-letter:uppercase">
                {stack}
              </Badge>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-[10px] font-black text-white/40 ml-1">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </Card>
    );
  }

  // Classic Variant (Used in Projects List)
  return (
    <Card 
      hoverable 
      className="h-full flex flex-col group cursor-pointer animate-fade-in" 
      padding="none"
      onClick={onClick}
      style={{ animationDelay: `${(index % 10) * 0.1}s` }}
    >
      {/* Project Image Wrapper */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={displayImageUrl} 
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-4 left-4">
          <Badge variant="glass" size="sm" className="backdrop-blur-xl bg-black/40 border-white/20">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
          <Calendar size={12} className="text-indigo-400" />
          <span>{project.period}</span>
        </div>

        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-indigo-400 transition-colors tracking-tight h-[4rem] line-clamp-2 overflow-hidden flex items-start">
          {project.name}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2 font-medium min-h-[3rem]">
          {project.description}
        </p>

        <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech: string) => (
            <Badge key={tech} variant="outline" size="sm" className="bg-white/[0.02] lowercase first-letter:uppercase">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] font-black text-slate-600 self-center ml-1">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
        
        <div className="mt-6 flex items-center gap-4 text-slate-500">
          <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest">
            <Layers size={14} className="text-indigo-500/50" />
            <span>{project.tasks.length} Tasks</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
