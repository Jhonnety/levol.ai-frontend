import type { Metadata } from "next"
import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/sections/footer"
import { AgentesLanding } from "@/sections/agentes/landing"

export const metadata: Metadata = {
  title: "Agentes que no mienten: la guía para que tu IA no invente precios ni promesas | Levol.ia",
  description:
    "Guía en PDF y plataforma web interactiva para construir agentes de IA que no inventan precios, políticas ni promesas a tus clientes. Método de 5 capas, 25 prompts y kit de código.",
}

export default function AgentesQueNoMienten() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden" lang="es">
      <ParticleBackground />
      <Navbar />
      <AgentesLanding />
      <Footer />
    </div>
  )
}
