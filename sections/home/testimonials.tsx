import { AnimatedElement } from '@/components/animated-element'
import { AnimatedText } from '@/components/animated-text'
import { TestimonialCard } from '@/components/testimonial-card'
import { motion } from 'framer-motion'
import React from 'react'

export const Testimonials = () => {
    return (
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
    )
}
