import { AnimatedElement } from '@/components/animated-element'
import { AnimatedText } from '@/components/animated-text'
import { motion } from 'framer-motion'
import React from 'react'
import { Button } from "@/components/ui/button"
import { BlogCard } from '@/components/blog-card'
import Link from "next/link"

export const Blog = () => {
    return (
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
    )
}
