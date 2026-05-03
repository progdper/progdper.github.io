import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useProjectLogic } from '@/hooks/useProjectLogic'
import ProjectHeader from '@/components/pages/projects/ProjectHeader'
import ProjectFilters from '@/components/pages/projects/ProjectFilters'
import ProjectCard from '@/components/pages/projects/ProjectCard'
import TimelineItem from '@/components/pages/projects/TimelineItem'
import ProjectModal from '@/components/pages/projects/modal'
import TaskModal from '@/components/pages/projects/TaskModal'
import Container from '@/components/shared/ui/Container'
import Button from '@/components/shared/ui/Button'

export const Route = createFileRoute('/projects')({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      id: (search.id as string) || undefined,
      taskId: (search.taskId as string) || undefined,
    } as { id?: string, taskId?: string }
  },
  component: Projects,
})

function Projects() {
  const {
    activeYear,
    setActiveYear,
    categories,
    activeCategory,
    setActiveCategory,
    viewMode,
    setViewMode,
    selectedProject,
    setSelectedProject,
    selectedTask,
    setSelectedTask,
    activeModalImg,
    setActiveModalImg,
    years,
    filteredProjects,
    allTasks,
    hasMore,
    handleLoadMore,
    isLoading
  } = useProjectLogic()

  return (
    <>
      <Container className="py-20">
        <ProjectHeader />

        <ProjectFilters 
          years={years}
          activeYear={activeYear}
          setActiveYear={setActiveYear}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24 animate-fade-in">
            <div className="w-12 h-12 border-4 border-white/5 border-t-indigo-500 rounded-full animate-spin mb-6" />
            <p className="text-slate-400 font-medium tracking-wide">데이터를 불러오고 있습니다...</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6 animate-fade-in">
            {allTasks.map((task, index) => {
              const currentYear = `20${task.month.split('.')[0]}`;
              const prevYear = index > 0 ? `20${allTasks[index - 1].month.split('.')[0]}` : null;
              const showYearDivider = currentYear !== prevYear;

              return (
                <React.Fragment key={`${task.project.id}-${task.month}-${task.description}`}>
                  {showYearDivider && (
                    <div className="flex items-center gap-6 py-10">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-3xl font-black text-white/20 tracking-[0.2em] font-heading">{currentYear}</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>
                  )}
                  <TimelineItem 
                    task={task} 
                    onClick={() => setSelectedTask(task)} 
                    index={index}
                  />
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-16 flex justify-center animate-fade-in">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleLoadMore}
              className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 min-w-[200px]"
            >
              Load More Projects
            </Button>
          </div>
        )}

        {!isLoading && ((viewMode === 'grid' && filteredProjects.length === 0) || (viewMode === 'timeline' && allTasks.length === 0)) && (
          <div className="py-32 text-center bg-white/5 border border-dashed border-white/10 rounded-[3rem]">
            <p className="text-slate-500 font-medium">검색된 데이터가 없습니다.</p>
          </div>
        )}
      </Container>

      {selectedTask && (
        <TaskModal 
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onViewProject={() => {
            setSelectedProject(selectedTask.project);
            if (selectedTask.imageUrl) {
              setActiveModalImg(selectedTask.imageUrl);
            }
            setSelectedTask(null);
          }}
        />
      )}

      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          activeModalImg={activeModalImg}
          setActiveModalImg={setActiveModalImg}
          onClose={() => {
            setSelectedProject(null);
            setActiveModalImg(null);
          }}
        />
      )}
    </>
  )
}
