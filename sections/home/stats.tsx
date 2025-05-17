import { AnimatedCounter } from '@/components/animated-counter'
import { AnimatedElement } from '@/components/animated-element'
import { GlassMorphicCard } from '@/components/glassmorphic-card'
import React from 'react'

export const Stats = () => {
    return (
        <section className="py-20 px-4 relative">
            <div className="container mx-auto max-w-6xl relative z-10">
                <AnimatedElement type="fade" direction="up">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <GlassMorphicCard className="p-6 text-center">
                            <h3 className="text-lg font-medium text-muted-foreground mb-2">Clients Served</h3>
                            <div className="text-4xl font-bold text-accent">
                                <AnimatedCounter from={0} to={500} duration={2} />+
                            </div>
                        </GlassMorphicCard>
                        <GlassMorphicCard className="p-6 text-center">
                            <h3 className="text-lg font-medium text-muted-foreground mb-2">Automation Hours</h3>
                            <div className="text-4xl font-bold text-accent">
                                <AnimatedCounter from={0} to={25000} duration={2} formatter={(v) => Math.round(v).toLocaleString()} />
                            </div>
                        </GlassMorphicCard>
                        <GlassMorphicCard className="p-6 text-center">
                            <h3 className="text-lg font-medium text-muted-foreground mb-2">AI Interactions</h3>
                            <div className="text-4xl font-bold text-accent">
                                <AnimatedCounter from={0} to={1.5} duration={2} formatter={(v) => v.toFixed(1)} />M
                            </div>
                        </GlassMorphicCard>
                        <GlassMorphicCard className="p-6 text-center">
                            <h3 className="text-lg font-medium text-muted-foreground mb-2">ROI Delivered</h3>
                            <div className="text-4xl font-bold text-accent">
                                <AnimatedCounter from={0} to={320} duration={2} />%
                            </div>
                        </GlassMorphicCard>
                    </div>
                </AnimatedElement>
            </div>
        </section>
    )
}
