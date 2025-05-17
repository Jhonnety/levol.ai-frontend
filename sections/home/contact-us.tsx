import { AnimatedElement } from '@/components/animated-element'
import { AnimatedText } from '@/components/animated-text'
import { ContactForm } from '@/components/contact-form'
import { GlassMorphicCard } from '@/components/glassmorphic-card'
import { fadeInUp, staggerContainer } from '@/styles/constants'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import React from 'react'

export const ContactUs = () => {
    return (
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
    )
}
