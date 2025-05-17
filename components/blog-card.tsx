import Image from "next/image"
import { cn } from "@/lib/utils"
import { GlassMorphicCard } from "./glassmorphic-card"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  className?: string
}

export function BlogCard({ title, excerpt, date, category, image, className }: BlogCardProps) {
  return (
    <GlassMorphicCard
      className={cn("group transition-all duration-300 hover:shadow-[0_10px_40px_rgba(117,78,249,0.2)]", className)}
    >
      <div className="h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-accent/80 text-white text-xs font-medium rounded-full">{category}</span>
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <div className="text-sm text-muted-foreground mb-2">{date}</div>
          <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-accent transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow">{excerpt}</p>

          <div className="mt-auto">
            <button className="text-sm text-accent font-medium flex items-center hover:underline">
              Read Article
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
      </div>
    </GlassMorphicCard>
  )
}
