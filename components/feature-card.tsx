import { cn } from "@/lib/utils"
import type React from "react"
import { GlassMorphicCard } from "./glassmorphic-card"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  className?: string
}

export function FeatureCard({ title, description, icon, gradient, className }: FeatureCardProps) {
  return (
    <GlassMorphicCard
      className={cn(
        "group h-full transition-all duration-300 hover:shadow-[0_10px_40px_rgba(117,78,249,0.2)]",
        className,
      )}
    >
      <div className="p-6 h-full flex flex-col">
        <div className={cn("p-3 rounded-xl mb-4 w-fit", "bg-gradient-to-br", gradient)}>{icon}</div>

        <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-accent transition-colors">{title}</h3>

        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </GlassMorphicCard>
  )
}
