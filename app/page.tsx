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
import { Solutions } from "@/sections/home/solutions"
import { Implementations } from "@/sections/home/Implementations"
import { Stats } from "@/sections/home/stats"
import { Schedule } from "@/sections/home/schedule"

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


      <Solutions />


      <Implementations />


      <Stats />


      <Schedule />

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
