import { AnimatedElement } from '@/components/animated-element'
import { AnimatedText } from '@/components/animated-text'
import { motion } from 'framer-motion'
import { ArrowRight, Brain } from 'lucide-react'
import Link from "next/link"
import React from 'react'
import { Button } from "@/components/ui/button"

export const AboutUs = () => {
    return (
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
    )
}
