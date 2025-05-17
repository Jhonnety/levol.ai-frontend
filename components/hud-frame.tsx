import type React from "react"
import { cn } from "@/lib/utils"

interface HudFrameProps {
  children: React.ReactNode
  className?: string
}

export function HudFrame({ children, className }: HudFrameProps) {
  return (
    <div
      className={cn(
        "relative border border-accent/30 rounded-md overflow-hidden",
        "before:absolute before:top-0 before:left-0 before:w-2 before:h-2 before:border-t before:border-l before:border-accent",
        "after:absolute after:top-0 after:right-0 after:w-2 after:h-2 after:border-t after:border-r after:border-accent",
        "[&>*:before]:absolute [&>*:before]:bottom-0 [&>*:before]:left-0 [&>*:before]:w-2 [&>*:before]:h-2 [&>*:before]:border-b [&>*:before]:border-l [&>*:before]:border-accent",
        "[&>*:after]:absolute [&>*:after]:bottom-0 [&>*:after]:right-0 [&>*:after]:w-2 [&>*:after]:h-2 [&>*:after]:border-b [&>*:after]:border-r [&>*:after]:border-accent",
        className,
      )}
    >
      <div className="relative h-full">{children}</div>
    </div>
  )
}
