"use client"
import { AnimatedElement } from '@/components/animated-element'
import React from 'react'
import { Button } from "@/components/ui/button"
import { AnimatedText } from '@/components/animated-text'
import { motion } from 'framer-motion'
import { GlassMorphicCard } from '@/components/glassmorphic-card'
import Image from "next/image"
import { ArrowRight } from 'lucide-react'

export const Implementations = () => {
  return (
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
  )
}