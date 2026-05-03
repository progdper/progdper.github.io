import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import { Project } from '@/data/projects/types';

interface ProjectModalContentProps {
  project: Project;
  embedUrl: string | null;
  setActiveModalImg: (img: string | null) => void;
}

const ProjectModalContent: React.FC<ProjectModalContentProps> = ({
  project,
  embedUrl,
  setActiveModalImg
}) => {
  return (
    <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto bg-gradient-to-b from-white/[0.02] to-transparent custom-scrollbar">
      <div className="mb-10 text-white">
        <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[0.7rem] font-bold rounded-full border border-cyan-500/20 mb-4 uppercase tracking-widest">
          {project.category}
        </span>
        <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">{project.name}</h2>
        <div className="flex flex-wrap gap-6 text-sm text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-indigo-400" /> <span>{project.period}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={18} className="text-indigo-400" /> <span>{project.client}</span>
          </div>
          {project.videoUrl && embedUrl && (
            <button 
              onClick={() => setActiveModalImg(embedUrl)}
              className="flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20"
            >
              <div className="w-5 h-5 flex items-center justify-center bg-rose-500 rounded-full">
                <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3 ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">Watch Demo</span>
            </button>
          )}
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">Overview</h4>
          <p className="text-slate-300 leading-relaxed">{project.description}</p>
        </section>

        <section>
          <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(stack => (
              <span key={stack} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white uppercase">
                {stack}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">Monthly Timeline</h4>
          <div className="space-y-6">
            {[...project.tasks]
              .sort((a, b) => a.month.localeCompare(b.month))
              .reduce((acc, task) => {
                if (!acc.find(t => t.month === task.month)) {
                  acc.push(task);
                }
                return acc;
              }, [] as typeof project.tasks).map((task, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                  <div className="w-px flex-1 bg-white/10 my-2"></div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 mb-1">20{task.month}</div>
                  <div className="text-sm text-slate-300 leading-relaxed">{task.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">Key Insights</h4>
          <ul className="space-y-3">
            {project.learnings.map((l, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                <span className="text-indigo-500 font-black">•</span>
                {l}
              </li>
            ))}
          </ul>
        </section>

        {project.reflections && (
          <section className="relative p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Briefcase size={40} className="text-indigo-400" />
            </div>
            <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] mb-3">Retrospective</h4>
            <p className="text-slate-300 text-sm italic leading-relaxed relative z-10">
              "{project.reflections}"
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectModalContent;
