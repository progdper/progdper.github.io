import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '@/data/projects';
import Container from '@/components/shared/ui/Container';
import SectionHeader from '@/components/shared/ui/SectionHeader';
import Button from '@/components/shared/ui/Button';
import ProjectCard from '@/components/pages/projects/ProjectCard';

const FeaturedProjects: React.FC = () => {
  const featured = projectsData.filter(p => p.featured).slice(0, 3);
  const navigate = useNavigate();

  return (
    <section className="py-32 border-t border-white/5">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <SectionHeader 
            badge="Featured Works"
            badgeIcon={<ArrowRight size={14} className="text-indigo-400" />}
            title="Selected Projects"
          />
          <Button 
            variant="ghost" 
            onClick={() => navigate({ to: '/projects' })}
            className="group"
            icon={<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
          >
            Explore All Archives
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              variant="featured"
              onClick={() => navigate({ 
                to: '/projects', 
                search: { id: project.id } 
              })}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
