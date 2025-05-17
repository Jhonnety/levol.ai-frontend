import { AnimatedElement } from '@/components/animated-element'
import { ScheduleSession } from '@/components/schedule-session'
import React from 'react'

export const Schedule = () => {
    return (
        < section id="schedule-session" className="py-20 px-4 relative" >
            <div className="container mx-auto max-w-6xl relative z-10">
                <AnimatedElement type="fade" direction="up">
                    <ScheduleSession
                        title="Ready to automate your business processes?"
                        description="Schedule a personalized demo to see our solutions in action and discuss how we can help transform your business operations."
                    />
                </AnimatedElement>
            </div>
        </section >
    )
}
