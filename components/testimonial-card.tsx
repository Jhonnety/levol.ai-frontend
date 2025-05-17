import Image from "next/image"
import { cn } from "@/lib/utils"
import { GlassMorphicCard } from "./glassmorphic-card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  company: string
  avatar: string
  className?: string
}

export function TestimonialCard({ quote, author, position, company, avatar, className }: TestimonialCardProps) {
  return (
    <GlassMorphicCard
      className={cn("group transition-all duration-300 hover:shadow-[0_10px_40px_rgba(117,78,249,0.2)]", className)}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="text-accent mb-4">
          <QuoteIcon className="h-8 w-8 opacity-50" />
        </div>

        <p className="text-muted-foreground mb-6 flex-grow italic">"{quote}"</p>

        <div className="flex items-center mt-auto">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent/20">
            <Image src={avatar || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-foreground">{author}</h4>
            <p className="text-sm text-muted-foreground">
              {position}, {company}
            </p>
          </div>
        </div>
      </div>
    </GlassMorphicCard>
  )
}
