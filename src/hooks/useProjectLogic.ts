import { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearch, useNavigate } from '@tanstack/react-router';
import { Project, projectLoaders, availableYears } from '@/data';


export const useProjectLogic = () => {
  const search = useSearch({ from: '/projects' });
  const navigate = useNavigate({ from: '/projects' });
  
  const [activeYear, setActiveYear] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTask, setSelectedTask] = useState<any | null>(null);
  const [activeModalImg, setActiveModalImg] = useState<string | null>(null);
  
  // 로딩 상태 및 로드된 데이터 상태
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProjects, setLoadedProjects] = useState<Project[]>([]);

  const years = ['All', ...availableYears];

  // Helper to update search params
  const updateSearch = (params: { id?: string, taskId?: string }) => {
    navigate({
      search: (prev) => {
        const next: any = { ...prev };
        // Explicitly handle id
        if (params.hasOwnProperty('id')) {
          if (params.id) next.id = params.id;
          else delete next.id;
        }
        // Explicitly handle taskId
        if (params.hasOwnProperty('taskId')) {
          if (params.taskId) next.taskId = params.taskId;
          else delete next.taskId;
        }
        return next;
      },
      replace: false, // Important for Back button support
      resetScroll: false, // 모달을 열고 닫을 때 스크롤 위치 유지
    });
  };

  // 데이터 로딩 함수 (자동 스캔된 모든 파일 통합 로드)
  const loadData = useCallback(async () => {
    // 이미 모든 데이터가 로드된 경우 재실행 방지 (필요 시 주석 해제)
    // if (loadedProjects.length > 0) return;

    setIsLoading(true);
    try {
      const loaders = Object.values(projectLoaders);
      
      // 모든 프로젝트 파일 병렬 로드
      const results = await Promise.all(loaders.map(async (loader: any) => {
        const module = await loader();
        const key = Object.keys(module).find(k => k.startsWith('projects'));
        return key ? module[key] as Project[] : [];
      }));

      // 데이터 병합 및 중복 제거 (ID 기준)
      const allProjects = results.flat();
      const uniqueProjectsMap = new Map<string, Project>();
      
      allProjects.forEach(p => {
        if (!uniqueProjectsMap.has(p.id)) {
          uniqueProjectsMap.set(p.id, p);
        }
      });

      setLoadedProjects(Array.from(uniqueProjectsMap.values()));
    } catch (error) {
      console.error('Failed to load project data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 초기 렌더링 시 데이터 로드 실행
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Synchronize state with URL params
  useEffect(() => {
    const projectId = search.id;
    const taskId = search.taskId;

    if (projectId) {
      const project = loadedProjects.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
        
        if (selectedProject && !activeModalImg) {
          const representativeTask = selectedProject.tasks.find(t => t.isRepresentative && t.imageUrl);
          const latestTaskWithImg = [...selectedProject.tasks]
            .filter(t => t.imageUrl)
            .sort((a, b) => b.month.localeCompare(a.month))[0];
            
          const initialImg = 
            representativeTask?.imageUrl || 
            selectedProject.imageUrl || 
            latestTaskWithImg?.imageUrl || 
            null;

          if (initialImg) {
            setActiveModalImg(initialImg);
          }
        }
      }
    } else {
      setSelectedProject(null);
      document.body.style.overflow = 'unset';
      setActiveModalImg(null);
    }

    if (taskId) {
      const [pId, month] = taskId.split(':');
      const project = loadedProjects.find(p => p.id === pId);
      if (project) {
        const task = project.tasks.find(t => t.month === month);
        if (task) {
          setSelectedTask({ ...task, project });
        }
      }
    } else {
      setSelectedTask(null);
    }
  }, [search.id, search.taskId, loadedProjects, activeModalImg, selectedProject]);
  
  const [visibleCount, setVisibleCount] = useState(viewMode === 'grid' ? 6 : 10);

  useEffect(() => {
    setVisibleCount(viewMode === 'grid' ? 6 : 10);
  }, [activeYear, viewMode]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + (viewMode === 'grid' ? 6 : 10));
  };
  
  // 1. Filter projects by Year
  const projectsByYear = activeYear === 'All' 
    ? loadedProjects 
    : loadedProjects.filter(p => Array.isArray(p.year) ? p.year.includes(activeYear) : p.year === activeYear);

  // 2. Derive unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(projectsByYear.map(p => p.category))).sort();
    return ['All', ...cats];
  }, [projectsByYear]);

  useEffect(() => {
    if (activeCategory !== 'All' && !categories.includes(activeCategory)) {
      setActiveCategory('All');
    }
  }, [activeYear, categories, activeCategory]);

  const filteredProjects = projectsByYear
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .sort((a, b) => {
      // 각 프로젝트의 tasks 중 가장 최신 month 추출 (없으면 기본값)
      const aLastMonth = a.tasks.reduce((max, t) => (t.month > max ? t.month : max), '00.00');
      const bLastMonth = b.tasks.reduce((max, t) => (t.month > max ? t.month : max), '00.00');
      
      // 최신순(내림차순) 정렬
      return bLastMonth.localeCompare(aLastMonth);
    });

  const allTasks = loadedProjects
    .flatMap(p => p.tasks.map(t => ({ ...t, project: p })))
    .filter(t => {
      const yearMatch = activeYear === 'All' || (Array.isArray(t.project.year) ? t.project.year.includes(activeYear) : t.project.year === activeYear);
      const categoryMatch = activeCategory === 'All' || t.project.category === activeCategory;
      const monthMatch = activeYear === 'All' || t.month.startsWith(activeYear.slice(2));
      return yearMatch && categoryMatch && monthMatch && !t.hidden;
    })
    .sort((a, b) => b.month.localeCompare(a.month));

  // Slice data based on visibleCount
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const visibleTasks = allTasks.slice(0, visibleCount);

  // Exposed setters that update URL
  const handleSetSelectedProject = (project: Project | null) => {
    updateSearch({ id: project?.id, taskId: undefined });
  };

  const handleSetSelectedTask = (task: any | null) => {
    if (task) {
      const taskId = `${task.project.id}:${task.month}`;
      updateSearch({ taskId, id: undefined });
    } else {
      updateSearch({ taskId: undefined });
    }
  };

  return {
    activeYear,
    setActiveYear,
    categories,
    activeCategory,
    setActiveCategory,
    viewMode,
    setViewMode,
    selectedProject,
    setSelectedProject: handleSetSelectedProject,
    selectedTask,
    setSelectedTask: handleSetSelectedTask,
    activeModalImg,
    setActiveModalImg,
    years,
    filteredProjects: visibleProjects,
    allTasks: visibleTasks,
    hasMore: viewMode === 'grid' 
      ? filteredProjects.length > visibleCount 
      : allTasks.length > visibleCount,
    handleLoadMore,
    isLoading
  };
};
