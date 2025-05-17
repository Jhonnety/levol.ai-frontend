import { AnimatedElement } from '@/components/animated-element';
import { GradientBorder } from '@/components/gradient-border';
import { motion } from 'framer-motion';
import React from 'react'
import Image from "next/image"
import { AnimatedText } from '@/components/animated-text';
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';
import brain from "../../assets/images/brain2.jpg"


export const Introduction = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4">
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <AnimatedElement type="fade" direction="up" delay={0.2}>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm"
                            >
                                <span className="mr-2 h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                                Next-Gen Business Evolution
                            </motion.div>
                            <AnimatedText
                                text="Don't Fall Behind. Level Up with AI."
                                as="h1"
                                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                                delay={0.4}
                            />
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="text-lg md:text-xl mb-8 text-muted-foreground"
                            >
                                Empower your business with intelligent automation, AI agents, and data-driven insights that transform
                                how you operate.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button
                                    size="lg"
                                    className="group bg-gradient-to-r from-accent to-cyan-500 hover:opacity-90 text-white"
                                    onClick={() => {
                                        const contactSection = document.getElementById('schedule-session');
                                        if (contactSection) {
                                            contactSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    Level Up
                                    <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </motion.span>
                                </Button>
                                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10"
                                    onClick={() => {
                                        const solutionsSection = document.getElementById('solutions');
                                        if (solutionsSection) {
                                            solutionsSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    Explore Solutions
                                </Button>
                            </motion.div>
                        </div>
                    </AnimatedElement>

                    <AnimatedElement type="fade" direction="up" delay={0.5}>
                        <div className="relative hidden lg:block" >
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse-slow"></div>
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                            >
                                <GradientBorder className="rounded-2xl overflow-hidden">
                                    <Image
                                        src={brain}
                                        alt="Levol.ia Platform"
                                        width={500}
                                        height={500}
                                        className="w-full h-auto rounded-2xl"
                                    />
                                </GradientBorder>
                            </motion.div>
                        </div>
                    </AnimatedElement>
                </div>
            </div>
        </section>
    )
}
