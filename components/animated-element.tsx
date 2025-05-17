"use client"

import type { ReactNode } from "react"
import { motion, type MotionProps } from "framer-motion"

type AnimationType = "fade" | "slide" | "scale" | "rotate"
type DirectionType = "up" | "down" | "left" | "right" | "none"

interface AnimatedElementProps {
  children: ReactNode
  type?: AnimationType
  direction?: DirectionType
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function AnimatedElement({
  children,
  type = "fade",
  direction = "up",
  delay = 0,
  duration = 0.5,
  className,
  once = true,
}: AnimatedElementProps) {
  const getAnimationProps = (): MotionProps => {
    const baseProps: MotionProps = {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once },
      transition: { duration, delay, ease: "easeOut" },
    }

    switch (type) {
      case "fade":
        return {
          ...baseProps,
          variants: {
            hidden: {
              opacity: 0,
              y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
              x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
            },
            visible: { opacity: 1, y: 0, x: 0 },
          },
        }
      case "slide":
        return {
          ...baseProps,
          variants: {
            hidden: {
              x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
              y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
            },
            visible: { x: 0, y: 0 },
          },
        }
      case "scale":
        return {
          ...baseProps,
          variants: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          },
        }
      case "rotate":
        return {
          ...baseProps,
          variants: {
            hidden: { opacity: 0, rotate: direction === "left" ? -10 : 10, scale: 0.8 },
            visible: { opacity: 1, rotate: 0, scale: 1 },
          },
        }
      default:
        return baseProps
    }
  }

  return (
    <motion.div className={className} {...getAnimationProps()}>
      {children}
    </motion.div>
  )
}
