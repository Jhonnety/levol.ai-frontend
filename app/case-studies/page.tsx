"use client"

import Image from "next/image"
import { ArrowRight, BarChart2, Bot, ChevronRight, Workflow } from "lucide-react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"
import { GlassMorphicCard } from "@/components/glassmorphic-card"
import { Button } from "@/components/ui/button"
import { ScheduleSession } from "@/components/schedule-session"
import { AnimatedElement } from "@/components/animated-element"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedCounter } from "@/components/animated-counter"

export default function CaseStudiesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedElement type="fade" direction="up" className="text-center max-w-3xl mx-auto">
            <AnimatedText text="Case Studies" as="h1" className="text-4xl md:text-6xl font-bold mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Discover how businesses across industries have transformed their operations and achieved remarkable
              results with our solutions
            </motion.p>
          </AnimatedElement>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement type="fade" direction="left" delay={0.2}>
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm">
                Featured Case Study
              </div>
              <AnimatedText
                text="How TechCorp Global Achieved 500% ROI with AI Agents"
                as="h2"
                className="text-3xl font-bold mb-4"
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-muted-foreground mb-6"
              >
                TechCorp Global, a leading technology solutions provider, was struggling with scaling their customer
                support operations to meet growing demand. Response times were increasing, and customer satisfaction
                scores were declining.
              </motion.p>

              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4 mb-6">
                {[
                  {
                    title: "Challenge",
                    description: "Scaling customer support across multiple channels while maintaining quality",
                  },
                  {
                    title: "Solution",
                    description: "Multi-Channel AI Agents integrated with WhatsApp, email, and web chat",
                  },
                  {
                    title: "Results",
                    description: "80% reduction in response time, 35% increase in CSAT, 500% ROI in 6 months",
                  },
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-start gap-3">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="mt-1 bg-accent/20 p-1 rounded-full">
                      <ChevronRight className="h-4 w-4 text-accent" />
                    </motion.div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-accent to-cyan-500 hover:opacity-90 text-white">
                  Read Full Case Study
                  <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Button>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement type="fade" direction="right" delay={0.4}>
              <div className="relative">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl"></div>
                <GlassMorphicCard className="p-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="TechCorp Global Case Study"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg mb-6"
                    />
                  </motion.div>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-3 gap-4 text-center"
                  >
                    {[
                      { value: 80, label: "Faster Response" },
                      { value: 35, label: "Higher CSAT" },
                      { value: 500, label: "ROI" },
                    ].map((stat, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <p className="text-3xl font-bold text-accent mb-1">
                          <AnimatedCounter
                            from={0}
                            to={stat.value}
                            duration={2}
                            formatter={(value) => `${Math.round(value)}%`}
                          />
                        </p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </GlassMorphicCard>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedElement type="fade" direction="up" className="text-center">
            <AnimatedText text="Success Stories" as="h2" className="text-3xl font-bold mb-12" />
          </AnimatedElement>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Case Study 1 */}
            <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <GlassMorphicCard className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
                      <Workflow className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">Workflow Automation</h3>
                      <p className="text-sm text-muted-foreground">Innovate Industries</p>
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3">
                    Eliminating Manual Data Entry with Intelligent Workflow Automation
                  </h3>

                  <p className="text-muted-foreground mb-6 flex-grow">
                    Innovate Industries reduced manual data entry by 75%, saving over 120 hours per week and reducing
                    errors by 95% through our advanced workflow automation solution.
                  </p>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-4 text-center mb-6"
                  >
                    {[
                      { value: 75, label: "Less Manual Work" },
                      { value: 120, label: "Hours Saved Weekly" },
                      { value: 95, label: "Error Reduction" },
                    ].map((stat, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <p className="text-2xl font-bold text-cyan-400 mb-1">
                          <AnimatedCounter
                            from={0}
                            to={stat.value}
                            duration={1.5}
                            formatter={(value) => (index === 1 ? `${Math.round(value)}+` : `${Math.round(value)}%`)}
                          />
                        </p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
                    <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 w-full">
                      Read Case Study
                      <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>
              </GlassMorphicCard>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <GlassMorphicCard className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-pink-400 to-accent">
                      <BarChart2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">Predictive Analytics</h3>
                      <p className="text-sm text-muted-foreground">Future Finance</p>
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3">
                    Driving Revenue Growth with AI-Powered Market Trend Analysis
                  </h3>

                  <p className="text-muted-foreground mb-6 flex-grow">
                    Future Finance leveraged our predictive analytics platform to identify market trends that led to a
                    32% revenue growth in just 6 months, transforming their business strategy.
                  </p>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-4 text-center mb-6"
                  >
                    {[
                      { value: 32, label: "Revenue Growth" },
                      { value: 6, label: "Month Timeframe" },
                      { value: 3, label: "Forecast Accuracy" },
                    ].map((stat, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <p className="text-2xl font-bold text-pink-400 mb-1">
                          <AnimatedCounter
                            from={0}
                            to={stat.value}
                            duration={1.5}
                            formatter={(value) =>
                              index === 2 ? `${Math.round(value)}x` : `${Math.round(value)}${index === 0 ? "%" : ""}`
                            }
                          />
                        </p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
                    <Button variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400/10 w-full">
                      Read Case Study
                      <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>
              </GlassMorphicCard>
            </motion.div>

            {/* Case Study 3 */}
            <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <GlassMorphicCard className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-purple-400">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">AI Agents</h3>
                      <p className="text-sm text-muted-foreground">Quantum Retail</p>
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3">Personalizing Shopping Experiences with Multi-Channel AI</h3>

                  <p className="text-muted-foreground mb-6 flex-grow">
                    Quantum Retail implemented our AI agents across their digital channels, resulting in personalized
                    shopping experiences that increased average order value by 45%.
                  </p>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-4 text-center mb-6"
                  >
                    {[
                      { value: 45, label: "Higher AOV" },
                      { value: 28, label: "Conversion Rate" },
                      { value: 60, label: "More Engagement" },
                    ].map((stat, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <p className="text-2xl font-bold text-purple-400 mb-1">
                          <AnimatedCounter
                            from={0}
                            to={stat.value}
                            duration={1.5}
                            formatter={(value) => `${Math.round(value)}%`}
                          />
                        </p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
                    <Button
                      variant="outline"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400/10 w-full"
                    >
                      Read Case Study
                      <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>
              </GlassMorphicCard>
            </motion.div>

            {/* Case Study 4 */}
            <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <GlassMorphicCard className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-400 to-teal-500">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">Integrated Solution</h3>
                      <p className="text-sm text-muted-foreground">Global Health Services</p>
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3">Transforming Patient Care with AI and Workflow Automation</h3>

                  <p className="text-muted-foreground mb-6 flex-grow">
                    Global Health Services combined our AI agents and workflow automation to streamline appointment
                    scheduling and follow-ups, reducing administrative costs by 40%.
                  </p>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-4 text-center mb-6"
                  >
                    {[
                      { value: 40, label: "Cost Reduction" },
                      { value: 50, label: "Faster Scheduling" },
                      { value: 22, label: "No-show Reduction" },
                    ].map((stat, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <p className="text-2xl font-bold text-green-400 mb-1">
                          <AnimatedCounter
                            from={0}
                            to={stat.value}
                            duration={1.5}
                            formatter={(value) => `${Math.round(value)}%`}
                          />
                        </p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
                    <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10 w-full">
                      Read Case Study
                      <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>
              </GlassMorphicCard>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-accent to-cyan-500 hover:opacity-90 text-white">
                View All Case Studies
                <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-cyan-500/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedElement type="fade" direction="up" className="text-center mb-16">
            <AnimatedText text="Industries We Serve" as="h2" className="text-3xl font-bold mb-4" />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Our solutions are tailored to meet the unique needs of businesses across various industries
            </motion.p>
          </AnimatedElement>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Retail & E-commerce",
                description: "Personalized shopping experiences and intelligent inventory management",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                ),
                color: "accent",
              },
              {
                title: "Financial Services",
                description: "Fraud detection, customer service automation, and market analysis",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-cyan-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                color: "cyan-500",
              },
              {
                title: "Healthcare",
                description: "Patient engagement, appointment scheduling, and operational efficiency",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                ),
                color: "purple-500",
              },
              {
                title: "Real Estate",
                description: "Lead qualification, property matching, and transaction automation",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
                color: "pink-500",
              },
            ].map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <GlassMorphicCard className="p-6 text-center h-full">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`mx-auto w-16 h-16 rounded-full bg-${industry.color}/20 flex items-center justify-center mb-4 group-hover:bg-${industry.color}/30 transition-colors`}
                  >
                    {industry.icon}
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{industry.description}</p>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`text-xs text-${industry.color}`}
                  >
                    {12 + index * 3} articles
                  </motion.span>
                </GlassMorphicCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Schedule Session CTA */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedElement type="fade" direction="up" delay={0.2}>
            <ScheduleSession
              title="Ready to become our next success story?"
              description="Schedule a personalized demo to discuss your business challenges and how our solutions can help you achieve remarkable results."
            />
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
