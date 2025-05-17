import { cn } from "@/lib/utils"
import type React from "react"

interface GlassMorphicCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassMorphicCard({ children, className }: GlassMorphicCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10",
        "bg-gradient-to-br from-white/5 to-white/10",
        "shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
        className,
      )}
    >
      {children}
    </div>
  )
}
