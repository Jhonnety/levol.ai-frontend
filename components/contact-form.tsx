"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2 text-accent">Request Received</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for your interest. Our team will contact you shortly to schedule your demo.
        </p>
        <Button
          variant="outline"
          className="border-accent text-accent hover:bg-accent/10"
          onClick={() => setSubmitted(false)}
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Name <span className="text-accent">*</span>
          </Label>
          <Input
            id="name"
            placeholder="Enter your name"
            required
            className="border-white/10 focus-visible:ring-accent bg-white/5"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-sm font-medium">
            Company <span className="text-accent">*</span>
          </Label>
          <Input
            id="company"
            placeholder="Enter your company name"
            required
            className="border-white/10 focus-visible:ring-accent bg-white/5"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email <span className="text-accent">*</span>
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
        <Label htmlFor="service" className="text-sm font-medium">
          Service of Interest <span className="text-accent">*</span>
        </Label>
        <Select required>
          <SelectTrigger className="border-white/10 focus:ring-accent bg-white/5">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ai-agents">AI Agents</SelectItem>
            <SelectItem value="automation">Workflow Automation</SelectItem>
            <SelectItem value="analytics">Predictive Analytics</SelectItem>
            <SelectItem value="all">All Services</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-accent">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us about your business needs"
          required
          className="min-h-[100px] border-white/10 focus-visible:ring-accent bg-white/5"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full group bg-gradient-to-r from-accent to-cyan-500 hover:opacity-90 text-white"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Schedule Demo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>
    </form>
  )
}
