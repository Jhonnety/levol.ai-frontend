import type React from "react"

interface SolutionHeaderProps {
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
}

export function SolutionHeader({ title, description, icon, gradient }: SolutionHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4">
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient}/10 to-transparent opacity-30`}></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className={`inline-flex items-center justify-center p-4 rounded-2xl mb-6 bg-gradient-to-br ${gradient}`}>
            {icon}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground">{description}</p>
        </div>
      </div>
    </section>
  )
}
