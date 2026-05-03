import React from 'react';
import { X, ExternalLink, Calendar, Briefcase } from 'lucide-react';

interface TaskModalProps {
  task: any;
  onClose: () => void;
  onViewProject: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose, onViewProject }) => {
  const [year, month] = task.month.split('.');

  return (
    <div className="fixed inset-0 z-[2500] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl"></div>
      
      <div 
        className="relative w-full max-w-5xl bg-[#0f0f12] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl animate-scale-up flex flex-col" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          className="absolute top-6 right-6 z-50 p-2 bg-black/40 hover:bg-white/10 text-white rounded-full backdrop-blur-md transition-colors"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Section */}
          <div className="w-full lg:w-2/3 bg-black flex items-center justify-center relative group min-h-[300px]">
            {task.imageUrl ? (
              <img 
                src={task.imageUrl} 
                alt={task.description} 
                className="max-w-full max-h-[70vh] object-contain animate-fade-in" 
              />
            ) : (
              <div className="flex flex-col items-center gap-4 text-slate-700">
                <Briefcase size={64} />
                <p className="text-sm font-bold uppercase tracking-widest">No Image Available</p>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-1/3 p-8 md:p-12 flex flex-col justify-between bg-white/[0.02]">
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-3 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded-lg text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
                    Monthly Activity
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-[11px] font-bold uppercase tracking-widest">
                    <Calendar size={14} className="text-indigo-400/70" />
                    20{year}.{month}
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.2] mb-6 tracking-tight">
                  {task.description}
                </h2>
                <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full" />
              </div>

              <div className="space-y-5">
                <h4 className="text-slate-300 text-[11px] font-black uppercase tracking-[0.2em] opacity-80">Related Project</h4>
                <div className="p-6 bg-white/[0.04] border border-white/10 rounded-3xl group/proj hover:bg-white/[0.06] transition-all cursor-pointer" onClick={onViewProject}>
                  <div className="text-xs font-bold text-indigo-400 mb-2 uppercase tracking-widest">{task.project.category}</div>
                  <div className="text-xl font-black text-white leading-snug group-hover:text-indigo-300 transition-colors">{task.project.name}</div>
                </div>
              </div>
            </div>

            <div className="pt-12">
              <button 
                onClick={onViewProject}
                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-white text-indigo-950 text-base font-black rounded-2xl hover:bg-indigo-50 transition-all shadow-[0_20px_50px_rgba(99,102,241,0.2)] hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>프로젝트 전체 보기</span>
                <ExternalLink size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
