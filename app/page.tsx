"use client"

import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/sections/footer"
import { Introduction } from "@/sections/home/introduction"
import { Solutions } from "@/sections/home/solutions"
import { Stats } from "@/sections/home/stats"
import { Schedule } from "@/sections/home/schedule"
import { Testimonials } from "@/sections/home/testimonials"
import { ContactUs } from "@/sections/home/contact-us"
import { Implementations } from "@/sections/home/implementations"
import { AboutUs } from "@/sections/home/about-us"
import { Blog } from "@/sections/home/blog"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <Introduction />
      <Solutions />
      <Implementations />
      <Stats />
      <Schedule />
      <Testimonials />
      <ContactUs />
      <AboutUs />
      <Blog />
      <Footer />
    </div>
  )
}
