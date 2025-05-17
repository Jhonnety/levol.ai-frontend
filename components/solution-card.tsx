import { cn } from "@/lib/utils"
import type React from "react"
import { GlassMorphicCard } from "./glassmorphic-card"

interface SolutionCardProps {
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  className?: string
}

export function SolutionCard({ title, description, icon, gradient, className }: SolutionCardProps) {
  return (
    <GlassMorphicCard
      className={cn(
        "group h-full transition-all duration-300 hover:shadow-[0_10px_40px_rgba(117,78,249,0.2)]",
        className,
      )}
    >
      <div className="p-6 h-full flex flex-col">
        <div className={cn("p-3 rounded-xl mb-6 w-fit", "bg-gradient-to-br", gradient)}>{icon}</div>

        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">{title}</h3>

        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>

        <div className="mt-auto">
          <button className="text-sm text-accent font-medium flex items-center hover:underline">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </GlassMorphicCard>
  )
}
