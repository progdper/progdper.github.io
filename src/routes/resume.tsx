import { createFileRoute } from '@tanstack/react-router'
import ResumeHeader from '@/components/pages/resume/ResumeHeader'
import ExperienceSection from '@/components/pages/resume/ExperienceSection'
import EducationSection from '@/components/pages/resume/EducationSection'
import SkillsSection from '@/components/pages/resume/SkillsSection'
import ResumeCTA from '@/components/pages/home/ResumeCTA'
import Container from '@/components/shared/ui/Container'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  return (
    <>
      <Container className="py-20">
        <ResumeHeader />

        {/* Main Content Grid: Experience & Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2">
            <ExperienceSection />
          </div>

          <div className="lg:col-span-1">
            {/* 
              h-full allows the sidebar to take the same height as the left column.
              flex flex-col justify-between distributes the space between Skills and CTA.
            */}
            <div className="h-full flex flex-col justify-between py-2">
              <SkillsSection />
              <div className="mt-20 lg:mt-10">
                <ResumeCTA />
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Sections Below the Main Grid */}
        <div className="space-y-24">
          <EducationSection />
        </div>
      </Container>
    </>
  )
}
