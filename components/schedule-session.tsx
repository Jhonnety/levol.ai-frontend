"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Calendar, Clock, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassMorphicCard } from "@/components/glassmorphic-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ScheduleSessionProps {
  title: string
  description: string
}

export function ScheduleSession({ title, description }: ScheduleSessionProps) {
  const [step, setStep] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  // Animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  return (
    <GlassMorphicCard
      className={`p-8 md:p-12 transition-all duration-500 ${isAnimating ? "shadow-[0_0_30px_rgba(117,78,249,0.3)]" : ""}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg mb-8 text-muted-foreground">{description}</p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${step >= 1 ? "bg-accent text-white" : "bg-accent/20 text-accent"}`}
              >
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Select a Date</h3>
                <p className="text-sm text-muted-foreground">Choose a day that works for you</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${step >= 2 ? "bg-accent text-white" : "bg-accent/20 text-accent"}`}
              >
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Choose a Time</h3>
                <p className="text-sm text-muted-foreground">Select a convenient time slot</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${step >= 3 ? "bg-accent text-white" : "bg-accent/20 text-accent"}`}
              >
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Confirmation</h3>
                <p className="text-sm text-muted-foreground">Receive meeting details via email</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {step === 1 && (
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Your Name <span className="text-accent">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  required
                  className="border-white/10 focus-visible:ring-accent bg-white/5"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address <span className="text-accent">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="border-white/10 focus-visible:ring-accent bg-white/5"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-sm font-medium">
                  Preferred Date <span className="text-accent">*</span>
                </Label>
                <Select value={selectedDate} onValueChange={setSelectedDate} required>
                  <SelectTrigger className="border-white/10 focus:ring-accent bg-white/5">
                    <SelectValue placeholder="Select a date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025-05-15">May 15, 2025</SelectItem>
                    <SelectItem value="2025-05-16">May 16, 2025</SelectItem>
                    <SelectItem value="2025-05-17">May 17, 2025</SelectItem>
                    <SelectItem value="2025-05-18">May 18, 2025</SelectItem>
                    <SelectItem value="2025-05-19">May 19, 2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleNext}
                disabled={!selectedDate}
                className="w-full group bg-gradient-to-r from-accent to-purple-500 hover:opacity-90 text-white"
              >
                Next Step
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="time" className="text-sm font-medium">
                  Preferred Time <span className="text-accent">*</span>
                </Label>
                <Select value={selectedTime} onValueChange={setSelectedTime} required>
                  <SelectTrigger className="border-white/10 focus:ring-accent bg-white/5">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic" className="text-sm font-medium">
                  Discussion Topic <span className="text-accent">*</span>
                </Label>
                <Select required>
                  <SelectTrigger className="border-white/10 focus:ring-accent bg-white/5">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Information</SelectItem>
                    <SelectItem value="demo">Product Demo</SelectItem>
                    <SelectItem value="pricing">Pricing & Packages</SelectItem>
                    <SelectItem value="technical">Technical Questions</SelectItem>
                    <SelectItem value="custom">Custom Solution</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-sm font-medium">
                  Additional Notes
                </Label>
                <Input
                  id="notes"
                  placeholder="Any specific questions or requirements"
                  className="border-white/10 focus-visible:ring-accent bg-white/5"
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1 border-accent text-accent hover:bg-accent/10"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={!selectedTime}
                  className="flex-1 group bg-gradient-to-r from-accent to-purple-500 hover:opacity-90 text-white"
                >
                  Schedule Meeting
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 text-accent mb-6">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Meeting Scheduled!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for scheduling a session with us. We've sent a confirmation email with all the details and a
                calendar invitation.
              </p>
              <div className="p-4 rounded-lg bg-accent/10 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-medium">
                    {selectedDate
                      ? new Date(selectedDate).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "Selected Date"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-medium">{selectedTime || "Selected Time"}</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
                onClick={() => setStep(1)}
              >
                Schedule Another Meeting
              </Button>
            </div>
          )}
        </div>
      </div>
    </GlassMorphicCard>
  )
}
