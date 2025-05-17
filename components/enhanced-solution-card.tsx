"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { motion } from "framer-motion"
import { GlassMorphicCard } from "./glassmorphic-card"
import { Button } from "./ui/button"
import { ArrowRight, Check } from "lucide-react"

interface EnhancedSolutionCardProps {
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  features: string[]
  className?: string
}

export function EnhancedSolutionCard({
  title,
  description,
  icon,
  gradient,
  features,
  className,
}: EnhancedSolutionCardProps) {
  return (
    <GlassMorphicCard
      className={cn(
        "group h-full transition-all duration-300 hover:shadow-[0_10px_40px_rgba(117,78,249,0.2)]",
        className,
      )}
    >
      <div className="p-6 h-full flex flex-col">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={cn("p-3 rounded-xl mb-6 w-fit", "bg-gradient-to-br", gradient)}
        >
          {icon}
        </motion.div>

        <motion.h3
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors"
        >
          {title}
        </motion.h3>

        <p className="text-muted-foreground mb-6">{description}</p>

        <div className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex items-start gap-2"
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="mt-0.5 text-accent">
                <Check className="h-4 w-4" />
              </motion.div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-auto">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              variant="outline"
              className="w-full border-accent text-accent hover:bg-accent/10 group-hover:bg-accent group-hover:text-white transition-colors"
            >
              Learn More
              <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </div>
    </GlassMorphicCard>
  )
}
