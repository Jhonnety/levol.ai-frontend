import { AnimatedElement } from '@/components/animated-element'
import { AnimatedText } from '@/components/animated-text'
import { EnhancedSolutionCard } from '@/components/enhanced-solution-card'
import { staggerContainer } from '@/styles/constants'
import { motion } from 'framer-motion'
import { BarChart2, Bot, Workflow } from 'lucide-react'
import React from 'react'

export const Solutions = () => {
  return (
    <section className="py-20 px-4 relative" id='solutions'>
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
              link="/solutions/multi-channel-ai-agents"
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
              link="/solutions/advanced-workflow-automation"
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
              link="/solutions/predictive-analytics-platform"
            />
          </AnimatedElement>
        </motion.div>
      </div>
    </section>
  )
}
