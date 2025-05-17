"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart2, Bot, Brain, ChevronRight, Workflow } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { GlassMorphicCard } from "@/components/glassmorphic-card"
import { GradientBorder } from "@/components/gradient-border"
import { ParticleBackground } from "@/components/particle-background"
import { EnhancedSolutionCard } from "@/components/enhanced-solution-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { BlogCard } from "@/components/blog-card"
import { Navbar } from "@/components/navbar"
import { ScheduleSession } from "@/components/schedule-session"
import { AnimatedElement } from "@/components/animated-element"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedCounter } from "@/components/animated-counter"
import { Footer } from "@/sections/footer"
import { ContactForm } from "@/components/contact-form"
import { Introduction } from "@/sections/home/introduction"

// Stagger animation for children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <Introduction />
      

      {/* Enhanced Solutions Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedElement type="fade" direction="up">
            <div className="text-center mb-16">
              <AnimatedText text="Solutions We Offer" as="h2" className="text-3xl md:text-4xl font-bold mb-4" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground max-w-2xl mx-auto"
              >
                Cutting-edge technologies designed to transform your business operations and drive growth
              </motion.p>
            </div>
          </AnimatedElement>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <AnimatedElement type="fade" direction="up" delay={0.1}>
              <EnhancedSolutionCard
                title="Multi-Channel AI Agents"
                description="Intelligent virtual assistants that handle customer inquiries across all your communication channels."
                icon={<Bot className="h-8 w-8" />}
                gradient="from-accent to-purple-400"
                features={[
                  "WhatsApp, Instagram, TikTok & Facebook integration",
                  "Natural language understanding & processing",
                  "24/7 automated customer support",
                  "Seamless handoff to human agents",
                  "Continuous learning from interactions",
                ]}
              />
            </AnimatedElement>
            <AnimatedElement type="fade" direction="up" delay={0.2}>
              <EnhancedSolutionCard
                title="Advanced Workflow Automation"
                description="Streamline operations by automating repetitive tasks and complex business processes."
                icon={<Workflow className="h-8 w-8" />}
                gradient="from-cyan-400 to-blue-500"
                features={[
                  "Visual workflow builder with n8n",
                  "Custom triggers and actions",
                  "Integration with 300+ apps and services",
                  "Conditional logic and branching",
                  "Error handling and notifications",
                ]}
              />
            </AnimatedElement>
            <AnimatedElement type="fade" direction="up" delay={0.3}>
              <EnhancedSolutionCard
                title="Predictive Analytics Platform"
                description="Transform raw data into actionable insights and strategic advantages with AI-powered analytics."
                icon={<BarChart2 className="h-8 w-8" />}
                gradient="from-pink-400 to-accent"
                features={[
                  "Real-time data visualization dashboards",
                  "Trend analysis and forecasting",
                  "Customer behavior prediction",
                  "Anomaly detection and alerts",
                  "Custom reporting and exports",
                ]}
              />
            </AnimatedElement>
          </motion.div>
        </div>
      </section>

      {/* Implementation Examples Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedElement type="fade" direction="up">
            <div className="text-center mb-16">
              <AnimatedText text="Implementation Examples" as="h2" className="text-3xl md:text-4xl font-bold mb-4" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground max-w-2xl mx-auto"
              >
                Real-world applications of our technology solutions
              </motion.p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatedElement type="fade" direction="left" delay={0.1}>
              <div className="group relative">
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <GlassMorphicCard className="h-full transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(117,78,249,0.2)] overflow-hidden">
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Omnichannel AI Agent Architecture"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm backdrop-blur-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-accent"></span>
                        AI Agents
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      Omnichannel AI Agent Architecture
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      A unified AI agent system that connects to multiple messaging platforms, providing consistent
                      customer experiences across all channels with real-time learning capabilities.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["WhatsApp", "Instagram", "Facebook", "TikTok", "Web Chat"].map((platform, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.05 * index }}
                          className="px-3 py-1 bg-accent/10 rounded-full text-xs text-accent"
                        >
                          {platform}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <motion.div
                        className="flex items-center text-accent group-hover:translate-x-1 transition-transform"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-sm font-medium">View Implementation</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                      <div className="text-xs text-muted-foreground">Case Study Available</div>
                    </div>
                  </div>
                </GlassMorphicCard>
              </div>
            </AnimatedElement>

            <AnimatedElement type="fade" direction="right" delay={0.2}>
              <div className="group relative">
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <GlassMorphicCard className="h-full transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(0,240,255,0.2)] overflow-hidden">
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="n8n Workflow Automation"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 text-sm backdrop-blur-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400"></span>
                        Workflow Automation
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      n8n Workflow Automation
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Custom workflow automation that connects CRM, marketing tools, and internal systems for seamless
                      data flow and process execution with error handling.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["n8n", "Zapier", "Make", "REST API"].map((platform, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.05 * index }}
                          className="px-3 py-1 bg-cyan-400/10 rounded-full text-xs text-cyan-400"
                        >
                          {platform}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <motion.div
                        className="flex items-center text-cyan-400 group-hover:translate-x-1 transition-transform"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-sm font-medium">View Implementation</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                      <div className="text-xs text-muted-foreground">Interactive Demo</div>
                    </div>
                  </div>
                </GlassMorphicCard>
              </div>
            </AnimatedElement>

            <AnimatedElement type="fade" direction="left" delay={0.3}>
              <div className="group relative">
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-pink-400/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <GlassMorphicCard className="h-full transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(255,105,180,0.2)] overflow-hidden">
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Predictive Sales Analytics"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-400/20 border border-pink-400/30 text-pink-400 text-sm backdrop-blur-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-pink-400"></span>
                        Predictive Analytics
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-pink-400 transition-colors">
                      Predictive Sales Analytics
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      AI-powered sales forecasting and customer behavior analysis that helps businesses anticipate
                      market trends and optimize strategies with 95% accuracy.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Tableau", "Power BI", "Custom Dashboard"].map((platform, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.05 * index }}
                          className="px-3 py-1 bg-pink-400/10 rounded-full text-xs text-pink-400"
                        >
                          {platform}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <motion.div
                        className="flex items-center text-pink-400 group-hover:translate-x-1 transition-transform"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-sm font-medium">View Implementation</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                      <div className="text-xs text-muted-foreground">Live Dashboard</div>
                    </div>
                  </div>
                </GlassMorphicCard>
              </div>
            </AnimatedElement>

            <AnimatedElement type="fade" direction="right" delay={0.4}>
              <div className="group relative">
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-green-400/10 to-teal-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <GlassMorphicCard className="h-full transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(72,187,120,0.2)] overflow-hidden">
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Intelligent Document Processing"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-400/20 border border-green-400/30 text-green-400 text-sm backdrop-blur-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
                        Document Processing
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                      Intelligent Document Processing
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Automated extraction and processing of information from invoices, contracts, and forms using
                      computer vision and natural language processing with 98% accuracy.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["OCR", "NLP", "Machine Learning"].map((platform, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.05 * index }}
                          className="px-3 py-1 bg-green-400/10 rounded-full text-xs text-green-400"
                        >
                          {platform}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <motion.div
                        className="flex items-center text-green-400 group-hover:translate-x-1 transition-transform"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-sm font-medium">View Implementation</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                      <div className="text-xs text-muted-foreground">Technical Walkthrough</div>
                    </div>
                  </div>
                </GlassMorphicCard>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement type="fade" direction="up" delay={0.5}>
            <div className="mt-12 text-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-accent to-cyan-500 hover:opacity-90 text-white">
                  Explore All Implementations
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedElement type="fade" direction="up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassMorphicCard className="p-6 text-center">
                <h3 className="text-lg font-medium text-muted-foreground mb-2">Clients Served</h3>
                <div className="text-4xl font-bold text-accent">
                  <AnimatedCounter from={0} to={500} duration={2} />+
                </div>
              </GlassMorphicCard>
              <GlassMorphicCard className="p-6 text-center">
                <h3 className="text-lg font-medium text-muted-foreground mb-2">Automation Hours</h3>
                <div className="text-4xl font-bold text-accent">
                  <AnimatedCounter from={0} to={25000} duration={2} formatter={(v) => Math.round(v).toLocaleString()} />
                </div>
              </GlassMorphicCard>
              <GlassMorphicCard className="p-6 text-center">
                <h3 className="text-lg font-medium text-muted-foreground mb-2">AI Interactions</h3>
                <div className="text-4xl font-bold text-accent">
                  <AnimatedCounter from={0} to={1.5} duration={2} formatter={(v) => v.toFixed(1)} />M
                </div>
              </GlassMorphicCard>
              <GlassMorphicCard className="p-6 text-center">
                <h3 className="text-lg font-medium text-muted-foreground mb-2">ROI Delivered</h3>
                <div className="text-4xl font-bold text-accent">
                  <AnimatedCounter from={0} to={320} duration={2} />%
                </div>
              </GlassMorphicCard>
            </div>
          </AnimatedElement>
        </div>
      </section>

      < section id="schedule-session" className="py-20 px-4 relative" >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedElement type="fade" direction="up">
            <ScheduleSession
              title="Ready to automate your business processes?"
              description="Schedule a personalized demo to see our solutions in action and discuss how we can help transform your business operations."
            />
          </AnimatedElement>
        </div>
      </section >

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-cyan-500/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedElement type="fade" direction="up">
            <div className="text-center mb-16">
              <AnimatedText text="Client Testimonials" as="h2" className="text-3xl md:text-4xl font-bold mb-4" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground max-w-2xl mx-auto"
              >
                What our clients say about their experience with Levol.ia
              </motion.p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedElement type="fade" direction="up" delay={0.1}>
              <TestimonialCard
                quote="The AI agents Levol.ia implemented for our customer service have reduced response times by 80% and significantly improved customer satisfaction scores."
                author="Maria Rodriguez"
                position="CTO"
                company="TechCorp Global"
                avatar="/placeholder.svg?height=100&width=100"
              />
            </AnimatedElement>
            <AnimatedElement type="fade" direction="up" delay={0.2}>
              <TestimonialCard
                quote="Their workflow automation solution eliminated 75% of our manual data entry tasks, saving us over 120 hours per week and reducing errors by 95%."
                author="James Chen"
                position="Operations Director"
                company="Innovate Industries"
                avatar="/placeholder.svg?height=100&width=100"
              />
            </AnimatedElement>
            <AnimatedElement type="fade" direction="up" delay={0.3}>
              <TestimonialCard
                quote="The predictive analytics platform helped us identify market trends that led to a 32% revenue growth in just 6 months. Game-changing technology."
                author="Sarah Johnson"
                position="CEO"
                company="Future Finance"
                avatar="/placeholder.svg?height=100&width=100"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>


      <section id="contact-form" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedElement type="fade" direction="up">
            <GlassMorphicCard className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <AnimatedText
                    text="Ready for Your Mission Briefing?"
                    as="h2"
                    className="text-3xl md:text-4xl font-bold mb-6"
                  />
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg mb-8 text-muted-foreground"
                  >
                    Schedule a personalized demo to see how our solutions can transform your business operations and
                    drive growth.
                  </motion.p>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <motion.div variants={fadeInUp} className="flex items-start gap-3">
                      <div className="mt-1 bg-accent/20 p-1 rounded-full">
                        <ChevronRight className="h-4 w-4 text-accent" />
                      </div>
                      <p className="text-muted-foreground">Tailored solutions for your specific business needs</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="flex items-start gap-3">
                      <div className="mt-1 bg-accent/20 p-1 rounded-full">
                        <ChevronRight className="h-4 w-4 text-accent" />
                      </div>
                      <p className="text-muted-foreground">Implementation roadmap with clear ROI projections</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="flex items-start gap-3">
                      <div className="mt-1 bg-accent/20 p-1 rounded-full">
                        <ChevronRight className="h-4 w-4 text-accent" />
                      </div>
                      <p className="text-muted-foreground">Ongoing support and optimization from our expert team</p>
                    </motion.div>
                  </motion.div>
                </div>

                <AnimatedElement type="fade" direction="right" delay={0.3}>
                  <ContactForm />
                </AnimatedElement>
              </div>
            </GlassMorphicCard>
          </AnimatedElement>
        </div>
      </section>


      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <AnimatedElement type="fade" direction="up">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-accent to-cyan-400 flex items-center justify-center"
            >
              <Brain className="h-10 w-10 text-white" />
            </motion.div>
            <AnimatedText text="About Levol.ia" as="h2" className="text-3xl md:text-4xl font-bold mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-8 text-muted-foreground"
            >
              Founded by a team of AI specialists and business transformation experts, Levol.ia emerged from a simple
              yet powerful idea: businesses shouldn't just adapt to technology—they should evolve with it.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg mb-8 text-muted-foreground"
            >
              Our team combines cutting-edge AI research with practical business applications, creating solutions that
              don't just solve today's problems but anticipate tomorrow's challenges.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground"
            >
              The name "Levol.ia" represents our core philosophy: Level up, Evolve, and harness Artificial Intelligence
              to transform your business into its most powerful form.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatedElement>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedElement type="fade" direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <AnimatedText text="Intel Center" as="h2" className="text-3xl md:text-4xl font-bold mb-4" />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-muted-foreground max-w-2xl"
                >
                  Latest insights, trends, and strategies in AI and business transformation
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="mt-4 md:mt-0 border-accent text-accent hover:bg-accent/10" asChild>
                  <Link href="/blog">View All Articles</Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedElement type="fade" direction="up" delay={0.1}>
              <BlogCard
                title="The Future of AI in Business Operations"
                excerpt="Explore how artificial intelligence is reshaping core business functions and creating new opportunities for growth."
                date="May 8, 2025"
                category="Artificial Intelligence"
                image="/placeholder.svg?height=200&width=400"
              />
            </AnimatedElement>
            <AnimatedElement type="fade" direction="up" delay={0.2}>
              <BlogCard
                title="Workflow Automation: Beyond the Basics"
                excerpt="Discover advanced automation strategies that go beyond simple task automation to transform entire business processes."
                date="May 2, 2025"
                category="Automation"
                image="/placeholder.svg?height=200&width=400"
              />
            </AnimatedElement>
            <AnimatedElement type="fade" direction="up" delay={0.3}>
              <BlogCard
                title="Data-Driven Decision Making in 2025"
                excerpt="Learn how predictive analytics and AI-powered insights are changing how businesses make strategic decisions."
                date="April 25, 2025"
                category="Data Analytics"
                image="/placeholder.svg?height=200&width=400"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
