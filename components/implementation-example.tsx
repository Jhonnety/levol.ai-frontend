import Image from "next/image"
import { cn } from "@/lib/utils"
import { GlassMorphicCard } from "./glassmorphic-card"
import { Badge } from "./ui/badge"

interface ImplementationExampleProps {
  title: string
  description: string
  image: string
  platforms: string[]
  className?: string
}

export function ImplementationExample({ title, description, image, platforms, className }: ImplementationExampleProps) {
  return (
    <GlassMorphicCard
      className={cn("group transition-all duration-300 hover:shadow-[0_10px_40px_rgba(117,78,249,0.2)]", className)}
    >
      <div className="h-full flex flex-col">
        <div className="relative h-64 overflow-hidden rounded-t-xl">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">{title}</h3>

          <p className="text-muted-foreground text-sm mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {platforms.map((platform, index) => (
              <Badge key={index} variant="outline" className="bg-accent/10 text-accent border-accent/20">
                {platform}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </GlassMorphicCard>
  )
}
