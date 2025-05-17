import type React from "react"
import { cn } from "@/lib/utils"
import { HudFrame } from "./hud-frame"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  level: number
  className?: string
}

export function ServiceCard({ title, description, icon, level, className }: ServiceCardProps) {
  return (
    <HudFrame
      className={cn(
        "group transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]",
        className,
      )}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-md bg-background/50 border border-accent/20 text-accent">{icon}</div>
          <div className="flex items-center">
            <span className="text-xs font-mono text-muted-foreground mr-2">LVL</span>
            <span className="text-lg font-orbitron text-accent">{level}</span>
          </div>
        </div>

        <h3 className="text-xl font-orbitron font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

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
    </HudFrame>
  )
}
