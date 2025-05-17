import { BarChart2 } from "lucide-react"
import { SolutionHeader } from "@/components/solution-header"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"
import { ScheduleSession } from "@/components/schedule-session"

export default function PredictiveAnalyticsPlatformPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <SolutionHeader
        title="Predictive Analytics Platform"
        description="Transform raw data into actionable insights and strategic advantages with our AI-powered analytics platform, helping you make data-driven decisions."
        icon={<BarChart2 className="h-10 w-10" />}
        gradient="from-pink-400 to-accent"
      />

      {/* Schedule Session CTA */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <ScheduleSession
            title="Ready to unlock the power of your data?"
            description="Schedule a personalized demo to see our Predictive Analytics Platform in action and discuss your specific business needs."
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
