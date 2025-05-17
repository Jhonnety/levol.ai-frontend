import Link from "next/link"
import { ArrowLeft, ArrowRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GlassMorphicCard } from "@/components/glassmorphic-card"
import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"

export default function ForgotPasswordPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleBackground />
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-28 flex justify-center">
        <div className="w-full max-w-md">
          <GlassMorphicCard className="p-8">
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-accent to-cyan-400 flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold">Reset Password</h1>
              <p className="text-muted-foreground mt-2">
                Enter your email and we'll send you a link to reset your password
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 border-accent/30 focus-visible:ring-accent bg-white/5"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full group bg-gradient-to-r from-accent to-cyan-500 hover:opacity-90 text-white"
              >
                Send Reset Link
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/sign-in" className="text-sm text-accent hover:underline inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to sign in
              </Link>
            </div>
          </GlassMorphicCard>
        </div>
      </div>

      {/* Footer with minimal info */}
      <footer className="py-6 px-4 border-t border-border/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Levol.ia. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-accent">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
