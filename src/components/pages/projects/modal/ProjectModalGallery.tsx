import React from 'react';
import { Maximize2 } from 'lucide-react';
import { Project } from '@/data/projects/types';
import { GalleryItem } from './useProjectGallery';

interface ProjectModalGalleryProps {
  project: Project;
  galleryItems: GalleryItem[];
  currentItem: GalleryItem;
  activeModalImg: string | null;
  setActiveModalImg: (img: string | null) => void;
  setIsEnlarged: (enlarged: boolean) => void;
  videoId: string | null;
}

const ProjectModalGallery: React.FC<ProjectModalGalleryProps> = ({
  project,
  galleryItems,
  currentItem,
  activeModalImg,
  setActiveModalImg,
  setIsEnlarged,
  videoId
}) => {
  return (
    <div className="w-full md:w-3/5 bg-black flex flex-col">
      <div 
        className={`flex-1 flex items-center justify-center p-4 overflow-hidden min-h-[300px] relative group ${currentItem.type === 'image' ? 'cursor-zoom-in' : ''}`}
        onClick={() => currentItem.type === 'image' && setIsEnlarged(true)}
      >
        {currentItem.type === 'video' ? (
          <div className="w-full h-full p-4">
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
            src={activeModalImg || project.imageUrl} 
            alt={project.name} 
            className="max-w-full max-h-full object-contain animate-fade-in transition-transform duration-500 group-hover:scale-[1.02]" 
            key={activeModalImg} 
          />
        )}
        <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Maximize2 size={16} className="text-white" />
            <span className="text-white text-xs font-bold">Click to Enlarge</span>
          </div>
        </div>
      </div>
      
      {galleryItems.length >= 2 && (
        <div className="p-4 bg-black/50 border-t border-white/5 flex flex-nowrap gap-4 overflow-x-auto custom-scrollbar pb-6">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex-shrink-0 relative group cursor-pointer transition-all ${
                activeModalImg === item.url || (idx === 0 && !activeModalImg) ? 'ring-2 ring-indigo-500 scale-105' : 'opacity-50 hover:opacity-100'
              }`}
              onClick={() => setActiveModalImg(item.url)}
            >
              {item.type === 'video' ? (
                <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-900 flex items-center justify-center rounded-xl overflow-hidden border border-white/10 relative">
                  <img 
                    src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} 
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center shadow-xl">
                      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <img src={item.url} alt={`Gallery ${idx}`} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectModalGallery;
