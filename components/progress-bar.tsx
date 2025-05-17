import { cn } from "@/lib/utils"

interface ProgressBarProps {
  value: number
  label?: string
  className?: string
}

export function ProgressBar({ value, label, className }: ProgressBarProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-xs font-mono text-muted-foreground">{label}</span>
          <span className="text-xs font-mono text-accent">{value}%</span>
        </div>
      )}
      <div className="h-2 bg-background/50 rounded-full overflow-hidden border border-accent/30 relative">
        <div
          className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full"
          style={{ width: `${value}%` }}
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-shimmer" />
      </div>
    </div>
  )
}
