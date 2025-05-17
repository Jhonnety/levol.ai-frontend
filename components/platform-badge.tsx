import { cn } from "@/lib/utils"
import { Badge } from "./ui/badge"

interface PlatformBadgeProps {
  name: string
  className?: string
}

export function PlatformBadge({ name, className }: PlatformBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn("bg-accent/10 text-accent border-accent/20 py-2 px-4 text-sm w-full justify-center", className)}
    >
      {name}
    </Badge>
  )
}
