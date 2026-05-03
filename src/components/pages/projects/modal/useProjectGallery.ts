import { useState, useEffect, useCallback, useMemo } from 'react';
import { Project } from '@/data/projects/types';

export type GalleryItem = { type: 'image' | 'video'; url: string; description: string };

interface UseProjectGalleryProps {
  project: Project;
  activeModalImg: string | null;
  setActiveModalImg: (img: string | null) => void;
}

export const useProjectGallery = ({ 
  project, 
  activeModalImg, 
  setActiveModalImg 
}: UseProjectGalleryProps) => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Helper to get YouTube ID
  const getYouTubeId = useCallback((url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }, []);

  const videoId = useMemo(() => 
    project.videoUrl ? getYouTubeId(project.videoUrl) : null
  , [project.videoUrl, getYouTubeId]);

  const embedUrl = useMemo(() => 
    videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : null
  , [videoId]);

  // Construct gallery items
  const galleryItems = useMemo(() => {
    const items: GalleryItem[] = [];
    
    // 1. Add main project image
    if (project.imageUrl) {
      items.push({ type: 'image', url: project.imageUrl, description: project.name });
    }
    
    // 2. Add task images (sorted by date ascending)
    [...project.tasks]
      .sort((a, b) => a.month.localeCompare(b.month))
      .forEach(t => {
        if (t.imageUrl && !items.find(item => item.url === t.imageUrl)) {
          items.push({ type: 'image', url: t.imageUrl, description: t.description });
        }
      });

    // 3. Add video at the end
    if (embedUrl) {
      items.push({ type: 'video', url: embedUrl, description: 'Project Demo Video' });
    }

    return items;
  }, [project, embedUrl]);

  const currentItem = useMemo(() => 
    activeModalImg 
      ? galleryItems.find(item => item.url === activeModalImg) || galleryItems[0]
      : galleryItems[0]
  , [activeModalImg, galleryItems]);
    
  const currentIndex = useMemo(() => 
    galleryItems.indexOf(currentItem)
  , [galleryItems, currentItem]);

  const handlePrev = useCallback(() => {
    const nextIdx = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setActiveModalImg(galleryItems[nextIdx].url);
  }, [currentIndex, galleryItems, setActiveModalImg]);

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % galleryItems.length;
    setActiveModalImg(galleryItems[nextIdx].url);
  }, [currentIndex, galleryItems, setActiveModalImg]);

  // Event Handlers
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (!isEnlarged) return;
    if (Math.abs(e.deltaX) > 30 || Math.abs(e.deltaY) > 30) {
      if (e.deltaX > 0 || e.deltaY > 0) handleNext();
      else handlePrev();
    }
  }, [isEnlarged, handleNext, handlePrev]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    
    if (Math.abs(distance) > 50) {
      if (distance > 0) handleNext();
      else handlePrev();
    }
    setTouchStart(null);
  }, [touchStart, handleNext, handlePrev]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isEnlarged) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIsEnlarged(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEnlarged, handlePrev, handleNext]);

  return {
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
  };
};
