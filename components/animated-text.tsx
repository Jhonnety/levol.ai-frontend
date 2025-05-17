"use client"

import { motion } from "framer-motion"
import type { ElementType } from "react"

interface AnimatedTextProps {
  text: string
  as?: ElementType
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export function AnimatedText({
  text,
  as: Component = "h2",
  className,
  delay = 0,
  duration = 0.5,
  once = true,
}: AnimatedTextProps) {
  // Split the text into words
  const words = text.split(" ")

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <Component className={className}>
      <motion.span
        style={{ display: "inline-block" }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={child} style={{ display: "inline-block", marginRight: "0.25em" }}>
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  )
}
