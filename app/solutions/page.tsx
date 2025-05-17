"use client"

import Link from "next/link"
import { ArrowRight, Bot, BarChart2, Workflow } from "lucide-react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"
import { GlassMorphicCard } from "@/components/glassmorphic-card"
import { AnimatedElement } from "@/components/animated-element"
import { AnimatedText } from "@/components/animated-text"

export default function SolutionsPage() {
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
            <AnimatedText text="Our Solutions" as="h1" className="text-4xl md:text-6xl font-bold mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Explore our comprehensive suite of AI-powered solutions designed to transform your business operations
            </motion.p>
          </AnimatedElement>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-8"
          >
            <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Link href="/solutions/multi-channel-ai-agents" className="block group">
                <GlassMorphicCard className="p-8 transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(117,78,249,0.2)]">
                  <div className="flex flex-col md:flex-row gap-8">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-xl bg-gradient-to-br from-accent to-purple-400 h-fit"
                    >
                      <Bot className="h-10 w-10 text-white" />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                        Multi-Channel AI Agents
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Intelligent virtual assistants that handle customer inquiries across all your communication
                        channels with human-like understanding and 24/7 availability.
                      </p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-wrap gap-3 mb-6"
                      >
                        {["WhatsApp", "Instagram", "Facebook", "TikTok", "Website Chat"].map((platform, index) => (
                          <motion.span
                            key={platform}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                            className="px-3 py-1 bg-accent/10 rounded-full text-sm text-accent"
                          >
                            {platform}
                          </motion.span>
                        ))}
                      </motion.div>
                      <motion.div
                        className="flex items-center text-accent"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="font-medium">View Solution Details</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </motion.div>
                    </div>
                  </div>
                </GlassMorphicCard>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Link href="/solutions/advanced-workflow-automation" className="block group">
                <GlassMorphicCard className="p-8 transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(0,240,255,0.2)]">
                  <div className="flex flex-col md:flex-row gap-8">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 h-fit"
                    >
                      <Workflow className="h-10 w-10 text-white" />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                        Advanced Workflow Automation
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Streamline operations by automating repetitive tasks and complex business processes with our
                        visual workflow builder and extensive integration capabilities.
                      </p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex flex-wrap gap-3 mb-6"
                      >
                        {["n8n", "Zapier", "Make", "REST API", "Custom Integrations"].map((platform, index) => (
                          <motion.span
                            key={platform}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                            className="px-3 py-1 bg-cyan-400/10 rounded-full text-sm text-cyan-400"
                          >
                            {platform}
                          </motion.span>
                        ))}
                      </motion.div>
                      <motion.div
                        className="flex items-center text-cyan-400"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="font-medium">View Solution Details</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </motion.div>
                    </div>
                  </div>
                </GlassMorphicCard>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Link href="/solutions/predictive-analytics-platform" className="block group">
                <GlassMorphicCard className="p-8 transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(255,105,180,0.2)]">
                  <div className="flex flex-col md:flex-row gap-8">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-xl bg-gradient-to-br from-pink-400 to-accent h-fit"
                    >
                      <BarChart2 className="h-10 w-10 text-white" />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors">
                        Predictive Analytics Platform
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Transform raw data into actionable insights and strategic advantages with our AI-powered
                        analytics platform, helping you make data-driven decisions.
                      </p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                        className="flex flex-wrap gap-3 mb-6"
                      >
                        {[
                          "Data Visualization",
                          "Forecasting",
                          "Anomaly Detection",
                          "Custom Dashboards",
                          "Reporting",
                        ].map((platform, index) => (
                          <motion.span
                            key={platform}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.1 + index * 0.1, duration: 0.3 }}
                            className="px-3 py-1 bg-pink-400/10 rounded-full text-sm text-pink-400"
                          >
                            {platform}
                          </motion.span>
                        ))}
                      </motion.div>
                      <motion.div
                        className="flex items-center text-pink-400"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="font-medium">View Solution Details</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </motion.div>
                    </div>
                  </div>
                </GlassMorphicCard>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
