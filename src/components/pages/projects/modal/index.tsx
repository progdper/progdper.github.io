import React from 'react';
import { X } from 'lucide-react';
import { Project } from '@/data/projects/types';
import { useProjectGallery } from './useProjectGallery';
import ProjectModalGallery from './ProjectModalGallery';
import ProjectModalContent from './ProjectModalContent';
import ProjectLightbox from './ProjectLightbox';

interface ProjectModalProps {
  project: Project;
  activeModalImg: string | null;
  setActiveModalImg: (img: string | null) => void;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  activeModalImg, 
  setActiveModalImg, 
  onClose 
}) => {
  const {
    galleryItems,
    currentItem,
    currentIndex,
    isEnlarged,
    setIsEnlarged,
    videoId,
    embedUrl,
    handlePrev,
    handleNext,
    handleWheel,
    handleTouchStart,
    handleTouchEnd
  } = useProjectGallery({ project, activeModalImg, setActiveModalImg });

  return (
    <>
      <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl"></div>
        
        <div 
          className="relative w-full max-w-6xl max-h-[90vh] bg-[#0f0f12] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scale-up" 
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 z-50 p-2 bg-black/20 hover:bg-white/10 text-white rounded-full backdrop-blur-md transition-colors"
            onClick={onClose}
          >
            <X size={24} />
          </button>
          
          {/* Left Side: Gallery */}
          <ProjectModalGallery 
            project={project}
            galleryItems={galleryItems}
            currentItem={currentItem}
            activeModalImg={activeModalImg}
            setActiveModalImg={setActiveModalImg}
            setIsEnlarged={setIsEnlarged}
            videoId={videoId}
          />
          
          {/* Right Side: Content */}
          <ProjectModalContent 
            project={project}
            embedUrl={embedUrl}
            setActiveModalImg={setActiveModalImg}
          />
        </div>
      </div>

      {/* Lightbox Overlay */}
      {isEnlarged && (
        <ProjectLightbox 
          project={project}
          galleryItems={galleryItems}
          currentItem={currentItem}
          currentIndex={currentIndex}
          onClose={() => setIsEnlarged(false)}
          handlePrev={handlePrev}
          handleNext={handleNext}
          handleWheel={handleWheel}
          handleTouchStart={handleTouchStart}
          handleTouchEnd={handleTouchEnd}
        />
      )}
    </>
  );
};

export default ProjectModal;
