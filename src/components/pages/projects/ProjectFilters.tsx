import React from 'react';
import { Filter, LayoutGrid, List, Hash } from 'lucide-react';
import Select from '@/components/shared/ui/Select';

interface ProjectFiltersProps {
  years: string[];
  activeYear: string;
  setActiveYear: (year: string) => void;
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  viewMode: 'grid' | 'timeline';
  setViewMode: (mode: 'grid' | 'timeline') => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ 
  years, 
  activeYear, 
  setActiveYear,
  categories,
  activeCategory,
  setActiveCategory,
  viewMode, 
  setViewMode 
}) => {
  const yearOptions = years.map(year => ({
    value: year,
    label: year === 'All' ? '모든 연도' : `${year}년`
  }));

  const categoryOptions = categories.map(cat => ({
    value: cat,
    label: cat === 'All' ? '모든 카테고리' : cat
  }));

  return (
    <div className="flex flex-col gap-6 mb-16 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Year Filter */}
        <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md max-w-full overflow-hidden group/filter cursor-pointer">
          <div className="flex items-center gap-2 px-4 text-slate-500 text-sm font-bold border-r border-white/10 flex-shrink-0 transition-colors group-hover/filter:text-white">
            <Filter size={16} className="transition-transform group-hover/filter:rotate-12" />
            <span>Year</span>
          </div>
          
          <div className="hidden sm:flex gap-1.5 overflow-x-auto no-scrollbar scroll-smooth px-4 scroll-mask">
            {years.map(year => (
              <button 
                key={year}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all flex-shrink-0 cursor-pointer ${
                  activeYear === year 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 scale-105' 
                  : 'text-slate-500 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>

          <Select 
            value={activeYear}
            onChange={setActiveYear}
            options={yearOptions}
            className="flex sm:hidden w-full min-w-[120px] cursor-pointer"
          />
        </div>

        {/* View Mode Toggle */}
        <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
          <button 
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl transition-all group cursor-pointer ${viewMode === 'grid' ? 'bg-white/10 text-white shadow-inner' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
            onClick={() => setViewMode('grid')}
          >
            <LayoutGrid size={18} className={`transition-transform duration-300 ${viewMode === 'grid' ? '' : 'group-hover:scale-110 group-hover:rotate-3'}`} />
            <span className="text-xs font-bold uppercase tracking-wider">프로젝트</span>
          </button>
          <button 
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl transition-all group cursor-pointer ${viewMode === 'timeline' ? 'bg-white/10 text-white shadow-inner' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
            onClick={() => setViewMode('timeline')}
          >
            <List size={18} className={`transition-transform duration-300 ${viewMode === 'timeline' ? '' : 'group-hover:scale-110 group-hover:translate-x-0.5'}`} />
            <span className="text-xs font-bold uppercase tracking-wider">월별 내역</span>
          </button>
        </div>
      </div>

      {/* Category Filter (Method A) */}
      <div className="flex items-center gap-4 bg-white/[0.02] p-2 rounded-2xl border border-white/5 backdrop-blur-sm max-w-full overflow-hidden group/cat cursor-pointer">
        <div className="flex items-center gap-2 px-4 text-slate-500 text-xs font-bold border-r border-white/10 flex-shrink-0 transition-colors group-hover/cat:text-white">
          <Hash size={14} className="text-indigo-400" />
          <span>Category</span>
        </div>

        <div className="hidden sm:flex gap-2 overflow-x-auto no-scrollbar scroll-smooth px-4 scroll-mask">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`px-4 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-tighter transition-all flex-shrink-0 cursor-pointer ${
                activeCategory === cat 
                ? 'bg-white/10 text-white border border-white/20' 
                : 'text-slate-500 hover:text-slate-300'
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'All' ? 'All categories' : cat}
            </button>
          ))}
        </div>

        <Select 
          value={activeCategory}
          onChange={setActiveCategory}
          options={categoryOptions}
          className="flex sm:hidden w-full min-w-[120px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProjectFilters;
