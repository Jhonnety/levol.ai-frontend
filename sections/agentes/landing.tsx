"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check, ShieldCheck, FileText, MonitorPlay, TerminalSquare, Layers, Languages } from "lucide-react"
import { AnimatedElement } from "@/components/animated-element"
import { GradientBorder } from "@/components/gradient-border"
import { GlassMorphicCard } from "@/components/glassmorphic-card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Link de compra del checkout de Hotmart. Mientras esté vacío, la página muestra "Próximamente"
// en lugar de un botón que no lleva a ningún lado.
const COMPRAR_URL = ""
const PRECIO = "US$19,99"
const IMG = "/agentes-que-no-mienten/img"

const stats = [
  { n: "2.289", t: "decisiones judiciales en el mundo con contenido inventado por IA", s: "Base de D. Charlotin, 10-nov-2026" },
  { n: "17-33 %", t: "de respuestas inventadas en herramientas legales comerciales que ya usaban RAG", s: "Stanford RegLab/HAI" },
  { n: "2-23 %", t: "tasa de alucinación al resumir un documento, según el modelo", s: "Vectara, oct-2026" },
  { n: "~3×", t: "más errores cuando el modelo no tiene permiso para decir \"no sé\"", s: "OpenAI, sep-2025" },
]

const cases = [
  { w: "Canadá · 2024", h: "Air Canada", p: "El chatbot dijo que el descuento por duelo se podía pedir después del viaje. La política oficial lo prohibía.", c: "Condena del tribunal y un precedente: la empresa responde por su bot." },
  { w: "EE. UU. · 2024-2026", h: "MyCity, Nueva York", p: "El chatbot oficial le dijo a empresarios que podían quedarse con propinas y rechazar pagos en efectivo. Era ilegal.", c: "Cerrado a comienzos de 2026, tras costar cerca de US$600.000." },
  { w: "Australia · 2025", h: "Deloitte", p: "Un informe para el gobierno citaba estudios y un fallo judicial que no existían. Se había usado IA.", c: "Devolvió la última cuota de un contrato de AU$440.000." },
  { w: "Reino Unido · 2025-2026", h: "Revolut", p: "El chatbot confirmó un reembolso de £1.119 \"ya procesado\". Los puntos valían £22,38.", c: "Caso ante el Financial Ombudsman." },
  { w: "Colombia · 2026", h: "Corte Suprema", p: "Un abogado citó sentencias inexistentes y, al corregir, agregó cuatro más.", c: "Multa de 15 salarios mínimos mensuales." },
  { w: "EE. UU. · 2025", h: "Replit", p: "Un agente de código borró una base de producción y dijo que no se podía recuperar. Sí se podía.", c: "Disculpa pública del CEO y cambios de arquitectura." },
]

const layers = [
  { n: 1, t: "Verdad", p: "El mapa de qué puede afirmar tu agente, de dónde sale cada dato y quién manda cuando dos fuentes no coinciden." },
  { n: 2, t: "Instrucción", p: "Prompts de mundo cerrado para Claude, GPT y Gemini, con permiso para no saber sin volver al agente un robot." },
  { n: 3, t: "Acción", p: "La regla del recibo: tu agente nunca dice \"quedó agendado\" si la herramienta no lo agendó." },
  { n: 4, t: "Verificación", p: "El grafo de cinco etapas que revisa cada borrador, afirmación por afirmación, con puntaje en código y veto por hecho grave." },
  { n: 5, t: "Escalación", p: "Cuándo y cómo pasar a una persona, y cómo lograr que cada promesa del agente tenga un dueño en tu equipo." },
]

const includes = [
  { Icon: FileText, t: "Libro en PDF", p: "16 capítulos, de los casos reales a la arquitectura completa, en español y en inglés." },
  { Icon: MonitorPlay, t: "Guía web interactiva", p: "Diagnóstico de tu agente en 26 puntos y simulador del Escudo que corre en tu navegador." },
  { Icon: Layers, t: "Pack de 25 prompts", p: "Para diseñar, construir, verificar y evaluar agentes con Claude, GPT y Gemini, y para pedirle a la IA que te los construya." },
  { Icon: TerminalSquare, t: "Kit de código escudo", p: "Implementación en Python del grafo de verificación, con 31 pruebas, para adaptar a tu agente." },
  { Icon: ShieldCheck, t: "5 plantillas", p: "Política de afirmaciones, dataset de evals, registro de incidentes, checklist de auditoría y plan de 30 días." },
  { Icon: Languages, t: "Dos idiomas", p: "Todo el producto en español y en inglés, en un solo archivo." },
]

const ownCases = [
  {
    img: "ch-laura",
    t: "Laura",
    d: "Asesora comercial de inversión inmobiliaria por WhatsApp e Instagram.",
    l: [
      "De \"conversa pero alucina mucho\" a un grafo con unas 48 salvaguardas, 40 de ellas en código.",
      "Cero reuniones fantasma en las confirmaciones revisadas contra el calendario real.",
      "220 de 220 escenarios aprobados al cambiar de proveedor de modelo, en pruebas internas.",
    ],
  },
  {
    img: "ch-nube",
    t: "Nube",
    d: "Anfitriona digital de un hotel boutique: cotiza, reserva y cobra anticipos.",
    l: [
      "17 verificaciones deterministas que corren en cada mensaje.",
      "Detector de confirmación: 39 de 40 \"sí\" reales detectados y cero falsos en 36 casos.",
      "Impuestos calculados por perfil declarado: el \"sí\" del huésped vale para la cifra que vio.",
    ],
  },
]

const faqs = [
  { q: "¿Necesito saber programar?", a: "No para entender el método, auditar tu agente ni usar los prompts. El kit de código y los capítulos 8, 11 y 12 sí están pensados para quien desarrolla, o para dárselos a tu equipo técnico." },
  { q: "¿Sirve si mi agente está en una plataforma sin código?", a: "Las capas 1, 2 y 5 aplican en cualquier plataforma. Las capas 3 y 4 necesitan poder poner lógica antes de enviar el mensaje; la guía explica qué pedirle a tu plataforma o a tu equipo." },
  { q: "¿Funciona con Claude, GPT o Gemini?", a: "Sí. El método es independiente del modelo y los prompts traen variantes para cada proveedor. Laura pasó de un proveedor a otro sin perder un solo escenario en las pruebas internas, porque la verdad no vive en el modelo." },
  { q: "¿Garantiza cero alucinaciones?", a: "No, y desconfía de quien lo prometa. Lo que el sistema busca es que ninguna afirmación sin respaldo llegue al cliente: el modelo puede seguir inventando en sus borradores, pero tu sistema decide qué sale." },
  { q: "¿Los casos de Laura y Nube son reales?", a: "Sí. Son agentes en producción. Los datos de clientes están anonimizados y las cifras vienen de registros y pruebas internas, indicadas como tales." },
  { q: "¿Es asesoría legal?", a: "No. La guía explica casos y riesgos legales documentados para que tomes mejores decisiones técnicas, pero no reemplaza a un abogado." },
]

function BuyButton({ label, className = "" }: { label: string; className?: string }) {
  if (!COMPRAR_URL) {
    return (
      <Button size="lg" disabled className={className}>
        Próximamente
      </Button>
    )
  }
  return (
    <Button size="lg" asChild className={`group bg-gradient-to-r from-accent to-cyan-500 hover:opacity-90 text-white ${className}`}>
      <a href={COMPRAR_URL} target="_blank" rel="noopener noreferrer">
        {label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </Button>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm">
      <span className="mr-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
      {children}
    </div>
  )
}

export function AgentesLanding() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement type="fade" direction="up" delay={0.1}>
              <div>
                <Eyebrow>La guía definitiva · Edición 2026</Eyebrow>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Tu agente de IA le va a{" "}
                  <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">mentir</span> a un cliente
                </h1>
                <p className="text-lg md:text-xl mb-8 text-muted-foreground">
                  La pregunta es si tu sistema lo atrapa antes de que el cliente lo lea. <strong className="text-foreground">Agentes que no mienten</strong> es el
                  sistema completo para que tu agente no invente precios, políticas, enlaces ni acciones, construido y probado en agentes que venden por WhatsApp e
                  Instagram todos los días.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <BuyButton label="Quiero el sistema completo" />
                  <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10" asChild>
                    <a href="#incluye">Ver qué incluye</a>
                  </Button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{PRECIO} · pago único · español e inglés</p>
              </div>
            </AnimatedElement>
            <AnimatedElement type="fade" direction="up" delay={0.3}>
              <div className="relative">
                <div className="absolute -top-16 -right-10 w-60 h-60 bg-accent/30 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute -bottom-16 -left-10 w-60 h-60 bg-cyan-500/30 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
                <GradientBorder className="rounded-2xl overflow-hidden">
                  <Image
                    src={`${IMG}/hero.jpg`}
                    alt="Robot con escudo de luz que verifica cada respuesta"
                    width={1600}
                    height={1067}
                    priority
                    className="w-full h-auto rounded-2xl"
                  />
                </GradientBorder>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedElement>
            <Eyebrow>El problema</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo que dice tu agente, <span className="text-accent">lo dices tú</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-10">
              En 2024 un tribunal de Canadá condenó a Air Canada porque su chatbot le inventó una política de reembolso a un pasajero. La aerolínea alegó que el
              chatbot era responsable de sus propias acciones. El tribunal no lo aceptó.
            </p>
          </AnimatedElement>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {stats.map((s, i) => (
              <AnimatedElement key={s.n} delay={i * 0.08}>
                <GlassMorphicCard className="h-full p-5">
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent mb-2">{s.n}</div>
                  <p className="text-sm text-muted-foreground">{s.t}</p>
                  <p className="text-xs text-muted-foreground/60 mt-3">{s.s}</p>
                </GlassMorphicCard>
              </AnimatedElement>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cases.map((c, i) => (
              <AnimatedElement key={c.h} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-xl border border-border bg-card p-5">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{c.w}</div>
                  <h3 className="text-lg font-semibold mb-2">{c.h}</h3>
                  <p className="text-sm text-muted-foreground">{c.p}</p>
                  <p className="text-sm text-red-400 font-medium mt-4 pt-3 border-t border-border">{c.c}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Todos los casos están verificados con fuentes primarias o con al menos dos medios serios, citados en la guía.
          </p>
        </div>
      </section>

      {/* Principio */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedElement>
            <GradientBorder className="rounded-2xl">
              <div className="rounded-2xl bg-card/80 backdrop-blur px-6 py-14 md:py-20">
                <div className="text-sm uppercase tracking-widest text-accent mb-4">La causa y la solución</div>
                <p className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  El modelo redacta.{" "}
                  <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">El sistema afirma.</span>
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ningún modelo, por bueno que sea, deja de inventar. Los agentes mienten cuando les pides que escriban y que sean fuente de verdad al mismo
                  tiempo. La solución es separar los dos trabajos: el modelo escribe, y un sistema de cinco capas decide qué es verdad y qué llega al cliente.
                </p>
              </div>
            </GradientBorder>
          </AnimatedElement>
        </div>
      </section>

      {/* Método */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <AnimatedElement>
            <Eyebrow>El método</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              El Escudo de <span className="text-accent">5 capas</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">Cada capa atrapa lo que se escapa de la anterior. Juntas se multiplican.</p>
          </AnimatedElement>
          <div className="grid gap-3">
            {layers.map((l, i) => (
              <AnimatedElement key={l.n} delay={i * 0.06} direction="left">
                <GlassMorphicCard className="p-5">
                  <div className="grid grid-cols-[48px_1fr] md:grid-cols-[56px_200px_1fr] gap-4 items-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">{l.n}</div>
                    <h3 className="text-lg font-semibold">{l.t}</h3>
                    <p className="text-sm md:text-base text-muted-foreground col-span-2 md:col-span-1">{l.p}</p>
                  </div>
                </GlassMorphicCard>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section id="incluye" className="relative py-20 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 items-start">
            <AnimatedElement>
              <div className="relative mx-auto max-w-[340px]">
                <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full" />
                <Image
                  src={`${IMG}/cover.jpg`}
                  alt="Portada del libro Agentes que no mienten"
                  width={1000}
                  height={1415}
                  className="relative w-full h-auto rounded-xl border border-border"
                />
              </div>
            </AnimatedElement>
            <div>
              <AnimatedElement>
                <Eyebrow>Lo que recibes</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  No es una guía más. <span className="text-accent">Es un sistema listo para usar.</span>
                </h2>
              </AnimatedElement>
              <div className="grid gap-3 sm:grid-cols-2">
                {includes.map(({ Icon, t, p }, k) => (
                  <AnimatedElement key={t} delay={k * 0.05}>
                    <div className="h-full rounded-xl border border-border bg-card p-4 flex gap-3">
                      <div className="shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">{t}</div>
                        <p className="text-sm text-muted-foreground">{p}</p>
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos propios */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedElement>
            <Eyebrow>Construido en producción</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Dos agentes reales, <span className="text-accent">paso a paso</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-10">
              La guía abre por dentro dos agentes que hablan con clientes todos los días: cómo se construyeron, qué falló y qué se puso para que no vuelva a pasar.
            </p>
          </AnimatedElement>
          <div className="grid gap-5 md:grid-cols-2">
            {ownCases.map((c, i) => (
              <AnimatedElement key={c.t} delay={i * 0.1}>
                <div className="h-full rounded-2xl overflow-hidden border border-border bg-card">
                  <Image src={`${IMG}/${c.img}.jpg`} alt={c.t} width={1600} height={1067} className="w-full h-auto" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-1">{c.t}</h3>
                    <p className="text-muted-foreground mb-4">{c.d}</p>
                    <ul className="space-y-2">
                      {c.l.map((x) => (
                        <li key={x} className="flex gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 mt-0.5 shrink-0 text-cyan-400" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <AnimatedElement>
            <Eyebrow>Para quién es</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Hecho para quien ya tiene <span className="text-accent">clientes reales</span>
            </h2>
          </AnimatedElement>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-3">Es para ti si…</h3>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Tienes o vas a lanzar un agente que habla con clientes por WhatsApp, Instagram o la web.</li>
                <li>Tu agente da precios, agenda, reserva o cobra, y un error te cuesta dinero o reputación.</li>
                <li>Construyes agentes para otras empresas y necesitas un estándar de calidad que puedas mostrar.</li>
                <li>Lideras un equipo técnico y quieres un lenguaje común para hablar de calidad del agente.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-3">No es para ti si…</h3>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Buscas un "prompt mágico" que lo arregle todo. No existe, y la guía explica por qué.</li>
                <li>Tu agente no afirma nada que importe (solo saluda o redirige).</li>
                <li>Quieres teoría académica: esto es un manual de trabajo, con código y plantillas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Precio */}
      <section id="precio" className="relative py-20 px-4 scroll-mt-24">
        <div className="container mx-auto max-w-xl">
          <AnimatedElement>
            <div className="text-center mb-8">
              <Eyebrow>Acceso inmediato</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold">
                Todo en un <span className="text-accent">solo producto</span>
              </h2>
            </div>
            <GradientBorder className="rounded-2xl">
              <div className="rounded-2xl bg-card p-8">
                <div className="inline-block mb-3 rounded-full bg-gradient-to-r from-accent to-cyan-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                  Edición bilingüe
                </div>
                <h3 className="text-xl font-semibold">Agentes que no mienten</h3>
                <div className="text-5xl font-bold my-4">{PRECIO}</div>
                <ul className="space-y-2 mb-8">
                  {[
                    "Libro completo en PDF, en español y en inglés",
                    "Guía web interactiva con diagnóstico y simulador",
                    "Pack de 25 prompts para Claude, GPT y Gemini",
                    "Kit de código escudo en Python con 31 pruebas",
                    "Las 5 plantillas de trabajo",
                  ].map((x) => (
                    <li key={x} className="flex gap-2 text-muted-foreground">
                      <Check className="h-5 w-5 shrink-0 text-cyan-400" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <BuyButton label="Quiero el sistema completo" className="w-full" />
                <p className="text-xs text-muted-foreground text-center mt-4">Pago único en dólares estadounidenses. Acceso inmediato a los archivos.</p>
              </div>
            </GradientBorder>
          </AnimatedElement>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <AnimatedElement>
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Antes de comprar</h2>
          </AnimatedElement>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Cierre */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <AnimatedElement>
            <div className="text-sm uppercase tracking-widest text-accent mb-3">El modelo redacta. El sistema afirma.</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-5">Construye el sistema antes de que tu agente hable por ti</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Un mes con el plan de 30 días, y tu agente pasa de "parece funcionar" a verificar cada afirmación antes de que alguien la lea.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} className="inline-block">
              <BuyButton label="Ver el acceso" />
            </motion.div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
