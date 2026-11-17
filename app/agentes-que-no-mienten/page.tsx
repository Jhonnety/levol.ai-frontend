import type { Metadata } from "next"
import { COMPRAR_URL, LANDING_BODY, LANDING_CSS } from "@/sections/agentes/landing-html"

export const metadata: Metadata = {
  title: "Agentes que no mienten: la guía para que tu IA no invente precios ni promesas | Levol.ia",
  description:
    "Guía en PDF y plataforma web interactiva para construir agentes de IA que no inventan precios, políticas ni promesas a tus clientes. Método de 5 capas, 25 prompts y kit de código.",
}

const FONTS =
  "https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700;800&family=Inter:wght@400;500;600;700;800&display=swap"

// Mientras no haya link de checkout, el botón de compra se muestra desactivado ("Próximamente").
const botonCompra = COMPRAR_URL
  ? `<a class="btn p" href="${COMPRAR_URL}" target="_blank" rel="noopener noreferrer">Quiero el sistema completo</a>`
  : `<span class="btn p" aria-disabled="true" role="link">Próximamente</span>`

export default function AgentesQueNoMienten() {
  const html = LANDING_BODY.replace("@@COMPRAR@@", botonCompra)
  return (
    <div lang="es" className="agentes-landing">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet" href={FONTS} />
      <style dangerouslySetInnerHTML={{ __html: LANDING_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
