import { createFileRoute } from '@tanstack/react-router'
import { projectsData } from '@/data/projects'
import Hero from '@/components/pages/home/Hero'
import ProfessionalSnapshot from '@/components/pages/home/ProfessionalSnapshot'
import FeaturedProjects from '@/components/pages/home/FeaturedProjects'
import TechStack from '@/components/pages/home/TechStack'
import RecentActivity from '@/components/pages/home/RecentActivity'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  // Get tasks from the last 6 months
  const recentTasks = projectsData
    .flatMap(p => p.tasks.map(t => ({ ...t, projectName: p.name, projectId: p.id })))
    .sort((a, b) => b.month.localeCompare(a.month))
    .slice(0, 6)

  return (
    <>
      <Hero />
      <ProfessionalSnapshot />
      <FeaturedProjects />
      <TechStack />
      <RecentActivity tasks={recentTasks} />
    </>
  )
}
