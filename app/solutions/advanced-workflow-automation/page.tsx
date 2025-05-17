import { Workflow } from "lucide-react"
import { SolutionHeader } from "@/components/solution-header"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"
import { ScheduleSession } from "@/components/schedule-session"

export default function AdvancedWorkflowAutomationPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <SolutionHeader
        title="Advanced Workflow Automation"
        description="Streamline operations by automating repetitive tasks and complex business processes with our visual workflow builder and extensive integration capabilities."
        icon={<Workflow className="h-10 w-10" />}
        gradient="from-cyan-400 to-blue-500"
      />

      {/* Schedule Session CTA */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <ScheduleSession
            title="Ready to automate your business processes?"
            description="Schedule a personalized demo to see our Advanced Workflow Automation platform in action and discuss your specific business needs."
          />
        </div>
      </section>

      {/* Content to be added similar to the Multi-Channel AI Agents page */}
      <div className="py-32 text-center text-muted-foreground">
        <p>Full page content coming soon...</p>
      </div>
    </div>
  )
}
