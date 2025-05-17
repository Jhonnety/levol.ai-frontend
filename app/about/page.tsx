"use client"

import Image from "next/image"
import { ArrowRight, Brain, CheckCircle, Globe, Lightbulb, Zap } from 'lucide-react'
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"
import { GlassMorphicCard } from "@/components/glassmorphic-card"
import { Button } from "@/components/ui/button"
import { AnimatedElement } from "@/components/animated-element"
import { AnimatedText } from "@/components/animated-text"
import { ScheduleSession } from "@/components/schedule-session"

export default function AboutPage() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement type="fade" direction="left" delay={0.2}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm"
              >
                Our Story
              </motion.div>
              <AnimatedText
                text="About Levol.ia"
                as="h1"
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl mb-8 text-muted-foreground"
              >
                Founded by a team of AI specialists and business transformation experts, Levol.ia emerged from a simple
                yet powerful idea: businesses shouldn't just adapt to technology—they should evolve with it.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-accent to-cyan-500 hover:opacity-90 text-white"
                  >
                    Our Solutions
                    <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                    Meet Our Team
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement type="fade" direction="right" delay={0.4}>
              <div className="relative">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.02, rotate: 1 }}
                >
                  <GlassMorphicCard className="p-6">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Levol.ia Team"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </GlassMorphicCard>
                </motion.div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedElement type="fade" direction="up" className="text-center mb-16">
            <AnimatedText
              text="Our Mission"
              as="h2"
              className="text-3xl md:text-4xl font-bold mb-4"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We're on a mission to empower businesses with intelligent technology that drives growth and innovation
            </motion.p>
          </AnimatedElement>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Intelligent Solutions",
                description:
                  "We create AI-powered solutions that understand, adapt, and evolve to meet the unique needs of each business we serve.",
                icon: <Brain className="h-8 w-8 text-accent" />,
                color: "accent",
              },
              {
                title: "Business Transformation",
                description:
                  "We help businesses transform their operations, increase efficiency, and unlock new opportunities for growth and innovation.",
                icon: <Zap className="h-8 w-8 text-cyan-500" />,
                color: "cyan-500",
              },
              {
                title: "Global Impact",
                description:
                  "We're committed to making advanced AI technology accessible to businesses of all sizes, across industries and regions.",
                icon: <Globe className="h-8 w-8 text-purple-500" />,
                color: "purple-500",
              },
            ].map((mission, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <GlassMorphicCard className="p-6 text-center h-full">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`mx-auto w-16 h-16 rounded-full bg-${mission.color}/20 flex items-center justify-center mb-6`}
                  >
                    {mission.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">{mission.title}</h3>
                  <p className="text-muted-foreground">{mission.description}</p>
                </GlassMorphicCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement type="fade" direction="left" delay={0.2} className="relative order-2 lg:order-1">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02, rotate: -1 }}
              >
                <GlassMorphicCard className="p-6">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Our Values"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </GlassMorphicCard>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement type="fade" direction="right" delay={0.3} className="order-1 lg:order-2">
              <AnimatedText
                text="Our Values"
                as="h2"
                className="text-3xl font-bold mb-6"
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-muted-foreground mb-8"
              >
                At Levol.ia, our values guide everything we do. They shape our culture, inform our decisions, and drive
                our commitment to excellence.
              </motion.p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  {
                    title: "Innovation",
                    description:
                      "We constantly push the boundaries of what's possible, exploring new ideas and technologies to create better solutions.",
                    icon: <Lightbulb className="h-6 w-6" />,
                  },
                  {
                    title: "Excellence",
                    description:
                      "We're committed to delivering the highest quality in everything we do, from our technology to our customer service.",
                    icon: <CheckCircle className="h-6 w-6" />,
                  },
                  {
                    title: "Continuous Learning",
                    description:
                      "We embrace a culture of learning and growth, constantly evolving our knowledge and skills to stay at the forefront of AI technology.",
                    icon: <Brain className="h-6 w-6" />,
                  },
                  {
                    title: "Ethical AI",
                    description:
                      "We're committed to developing and deploying AI responsibly, with transparency, fairness, and respect for privacy.",
                    icon: <Globe className="h-6 w-6" />,
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 rounded-lg bg-accent/10 text-accent"
                    >
                      {value.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-bold mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-cyan-500/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedElement type="fade" direction="up" className="text-center mb-16">
            <AnimatedText
              text="Our Team"
              as="h2"
              className="text-3xl md:text-4xl font-bold mb-4"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Meet the brilliant minds behind Levol.ia's innovative solutions
            </motion.p>
          </AnimatedElement>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                name: "Alex Morgan",
                role: "CEO & Co-Founder",
                bio: "AI researcher with 15+ years of experience in machine learning and business transformation.",
              },
              {
                name: "Sophia Chen",
                role: "CTO & Co-Founder",
                bio: "Former lead engineer at a major tech company with expertise in NLP and machine learning systems.",
              },
              {
                name: "Marcus Johnson",
                role: "Chief Product Officer",
                bio: "Product strategist with a background in UX design and business intelligence solutions.",
              },
              {
                name: "Olivia Martinez",
                role: "Chief Customer Officer",
                bio: "Customer experience expert with a passion for helping businesses achieve their goals through technology.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <GlassMorphicCard className="p-6 text-center h-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent/30"
                  >
                    <Image src="/placeholder.svg?height=200&width=200" alt="Team Member" fill className="object-cover" />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-accent mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex justify-center space-x-3"
                  >
                    {["twitter", "github", "linkedin"].map((social, idx) => (
                      <motion.a
                        key={idx}
                        href="#"
                        whileHover={{ y: -3, scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          {social === "twitter" && (
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          )}
                          {social === "github" && (
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          )}
                          {social === "linkedin" && (
                            <path
                              fillRule="evenodd"
                              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                              clipRule="evenodd"
                            />
                          )}
                        </svg>
                      </motion.a>
                    ))}
                  </motion.div>
                </GlassMorphicCard>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedElement type="fade" direction="up" delay={0.5} className="mt-12 text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-accent to-cyan-500 hover:opacity-90 text-white">
                Join Our Team
                <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Button>
            </motion.div>
          </AnimatedElement>
        </div>
      </section>

      {/* Schedule Session CTA */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedElement type="fade" direction="up" delay={0.2}>
            <ScheduleSession
              title="Want to learn more about how we can help your business?"
              description="Schedule a personalized demo to meet our team and discuss how our solutions can address your specific business challenges."
            />
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
