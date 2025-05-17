import type React from "react"
import { cn } from "@/lib/utils"

interface GlowingTextProps {
  children: React.ReactNode
  color?: "cyan" | "purple"
  className?: string
}

export function GlowingText({ children, color = "cyan", className }: GlowingTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block",
        color === "cyan" && "text-cyan-400 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]",
        color === "purple" && "text-purple-400 drop-shadow-[0_0_10px_rgba(157,0,255,0.5)]",
        className,
      )}
    >
      {children}
    </span>
  )
}
