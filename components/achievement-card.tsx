import Image from "next/image"
import { Trophy } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlassMorphicCard } from "./glassmorphic-card"

interface AchievementCardProps {
  title: string
  achievement: string
  description: string
  logo: string
  className?: string
}

export function AchievementCard({ title, achievement, description, logo, className }: AchievementCardProps) {
  return (
    <GlassMorphicCard
      className={cn("group transition-all duration-300 hover:shadow-[0_10px_40px_rgba(117,78,249,0.2)]", className)}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <Image
            src={logo || "/placeholder.svg"}
            alt={title}
            width={120}
            height={60}
            className="h-8 w-auto object-contain"
          />
          <div className="flex items-center">
            <Trophy className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-yellow-400">Achievement</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">{title}</h3>

        <div className="mb-3 px-3 py-1.5 bg-accent/10 rounded-md inline-block">
          <span className="text-accent font-medium">{achievement}</span>
        </div>

        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </GlassMorphicCard>
  )
}
