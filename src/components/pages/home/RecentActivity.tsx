import { Link } from '@tanstack/react-router';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';

interface Task {
  month: string;
  description: string;
  projectName: string;
  projectId: string;
}

interface RecentActivityProps {
  tasks: Task[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ tasks }) => {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-indigo-400 bg-clip-text text-transparent font-heading tracking-tight">
          Recent Activity
        </h2>
        <p className="text-slate-500 text-lg md:text-xl font-medium">최근 진행된 주요 업무 및 프로젝트 업데이트</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {tasks.map((task, idx) => (
          <Link 
            to="/projects"
            search={{ id: task.projectId }}
            key={`${task.projectId}-${idx}`}
            className="group p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] animate-fade-in shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                  <Calendar size={14} className="text-indigo-400" />
                  <span className="text-indigo-300 text-xs font-bold tracking-widest">{task.month}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <ArrowRight size={18} className="text-white group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">{task.projectName}</h3>
              <p className="text-slate-400 text-base leading-relaxed line-clamp-2">{task.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all hover:scale-105"
        >
          View All Projects <ChevronRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default RecentActivity;
