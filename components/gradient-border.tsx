import { cn } from "@/lib/utils"
import type React from "react"

interface GradientBorderProps {
  children: React.ReactNode
  className?: string
}

export function GradientBorder({ children, className }: GradientBorderProps) {
  return (
    <div
      className={cn(
        "relative p-[1px] rounded-2xl overflow-hidden",
        "before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-gradient-to-r before:from-accent before:via-cyan-400 before:to-accent",
        "before:animate-gradient-x",
        className,
      )}
    >
      <div className="relative bg-background rounded-2xl overflow-hidden">{children}</div>
    </div>
  )
}
