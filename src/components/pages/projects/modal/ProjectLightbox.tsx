import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/data/projects/types';
import { GalleryItem } from './useProjectGallery';

interface ProjectLightboxProps {
  project: Project;
  galleryItems: GalleryItem[];
  currentItem: GalleryItem;
  currentIndex: number;
  onClose: () => void;
  handlePrev: () => void;
  handleNext: () => void;
  handleWheel: (e: React.WheelEvent) => void;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchEnd: (e: React.TouchEvent) => void;
}

const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  galleryItems,
  currentItem,
  currentIndex,
  onClose,
  handlePrev,
  handleNext,
  handleWheel,
  handleTouchStart,
  handleTouchEnd
}) => {
  return (
    <div 
      className="fixed inset-0 z-[3000] bg-black/95 backdrop-blur-2xl flex flex-col items-start justify-between p-4 md:p-12 cursor-zoom-out animate-fade-in"
      onClick={onClose}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar Spacer for Menu */}
      <div className="h-16 w-full flex-shrink-0" />

      {/* Close Button */}
      <button 
        className="absolute top-24 right-6 md:right-12 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-[3100] backdrop-blur-md border border-white/10"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      {galleryItems.length > 1 && (
        <>
          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/10 backdrop-blur-md z-[3100]"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/10 backdrop-blur-md z-[3100]"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-h-[75vh] relative mb-8 self-center">
        {currentItem.type === 'video' ? (
          <div className="w-full max-w-5xl aspect-video p-4" onClick={e => e.stopPropagation()}>
            <iframe 
              src={currentItem.url}
              className="w-full h-full rounded-2xl shadow-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title="Project Demo"
            />
          </div>
        ) : (
          <img 
            src={currentItem.url} 
            alt={project.name} 
            className="max-w-full max-h-full object-contain shadow-2xl animate-scale-up select-none rounded-lg"
            onClick={e => e.stopPropagation()}
          />
        )}
      </div>
      
      {/* Info Area (Bottom) */}
      <div className="w-full max-w-6xl flex flex-col items-start gap-4 z-[3100] px-6 md:px-12 pb-12" onClick={e => e.stopPropagation()}>
        <div className="flex flex-row items-center gap-4 bg-white/[0.03] backdrop-blur-md border border-white/10 p-2 pr-6 rounded-2xl">
          <div className="px-3 py-1.5 bg-indigo-500 text-white text-[10px] font-black tracking-widest uppercase rounded-xl shadow-lg shadow-indigo-500/20">
            {currentIndex + 1} / {galleryItems.length}
          </div>
          <p className="text-white text-sm md:text-lg font-bold leading-tight">
            {currentItem.description}
          </p>
        </div>
        
        <div className="text-white/20 text-[9px] font-bold uppercase tracking-widest flex items-center gap-4 pl-4">
          <span>Wheel / Arrows / Swipe to Nav</span>
          <span className="w-px h-2 bg-white/10"></span>
          <span>ESC to Close</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectLightbox;
