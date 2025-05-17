import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"
import { GlassMorphicCard } from "@/components/glassmorphic-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BlogCard } from "@/components/blog-card"
import { ScheduleSession } from "@/components/schedule-session"

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Intel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">Center</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Insights, trends, and strategies in AI, automation, and business transformation
            </p>

            <div className="relative max-w-xl mx-auto">
              <Input
                placeholder="Search articles..."
                className="pl-10 border-accent/30 focus-visible:ring-accent bg-background/50 h-12"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <GlassMorphicCard className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Featured Article"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm">
                  Featured Article
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  The Future of Business: How AI is Reshaping Industries in 2025
                </h2>
                <p className="text-muted-foreground mb-6">
                  Explore how artificial intelligence is transforming business operations across sectors, from customer
                  service to supply chain management, and what this means for the future of work.
                </p>
                <div className="flex items-center mb-6">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Author" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">Alex Morgan</p>
                    <p className="text-sm text-muted-foreground">May 10, 2025 · 8 min read</p>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-accent to-cyan-500 hover:opacity-90 text-white">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </GlassMorphicCard>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <h2 className="text-3xl font-bold">
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">Articles</span>
            </h2>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                All
              </Button>
              <Button variant="ghost">AI</Button>
              <Button variant="ghost">Automation</Button>
              <Button variant="ghost">Analytics</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BlogCard
              title="The Future of AI in Business Operations"
              excerpt="Explore how artificial intelligence is reshaping core business functions and creating new opportunities for growth."
              date="May 8, 2025"
              category="Artificial Intelligence"
              image="/placeholder.svg?height=200&width=400"
            />
            <BlogCard
              title="Workflow Automation: Beyond the Basics"
              excerpt="Discover advanced automation strategies that go beyond simple task automation to transform entire business processes."
              date="May 2, 2025"
              category="Automation"
              image="/placeholder.svg?height=200&width=400"
            />
            <BlogCard
              title="Data-Driven Decision Making in 2025"
              excerpt="Learn how predictive analytics and AI-powered insights are changing how businesses make strategic decisions."
              date="April 25, 2025"
              category="Data Analytics"
              image="/placeholder.svg?height=200&width=400"
            />
            <BlogCard
              title="The Rise of Conversational AI Agents"
              excerpt="How natural language processing is enabling more human-like interactions between customers and AI systems."
              date="April 18, 2025"
              category="Artificial Intelligence"
              image="/placeholder.svg?height=200&width=400"
            />
            <BlogCard
              title="Building Resilient Supply Chains with AI"
              excerpt="Strategies for using predictive analytics and automation to create more adaptable supply chain operations."
              date="April 12, 2025"
              category="Supply Chain"
              image="/placeholder.svg?height=200&width=400"
            />
            <BlogCard
              title="The Ethics of AI in Business"
              excerpt="Exploring the ethical considerations and best practices for responsible AI implementation in business contexts."
              date="April 5, 2025"
              category="AI Ethics"
              image="/placeholder.svg?height=200&width=400"
            />
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-cyan-500/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Explore by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">Category</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dive into our content collections organized by topic
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="#" className="block group">
              <GlassMorphicCard className="p-6 text-center h-full transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(117,78,249,0.2)]">
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  Artificial Intelligence
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore the latest developments in AI technology and applications
                </p>
                <span className="text-xs text-accent">24 articles</span>
              </GlassMorphicCard>
            </Link>

            <Link href="#" className="block group">
              <GlassMorphicCard className="p-6 text-center h-full transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(0,240,255,0.2)]">
                <div className="mx-auto w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-cyan-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-cyan-500 transition-colors">
                  Workflow Automation
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn how to streamline operations and increase efficiency
                </p>
                <span className="text-xs text-cyan-500">18 articles</span>
              </GlassMorphicCard>
            </Link>

            <Link href="#" className="block group">
              <GlassMorphicCard className="p-6 text-center h-full transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(255,105,180,0.2)]">
                <div className="mx-auto w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mb-4 group-hover:bg-pink-500/30 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-pink-500 transition-colors">Data Analytics</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover how to transform data into actionable insights
                </p>
                <span className="text-xs text-pink-500">15 articles</span>
              </GlassMorphicCard>
            </Link>

            <Link href="#" className="block group">
              <GlassMorphicCard className="p-6 text-center h-full transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(72,187,120,0.2)]">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-green-500 transition-colors">
                  Business Strategy
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Strategies for leveraging technology to drive business growth
                </p>
                <span className="text-xs text-green-500">12 articles</span>
              </GlassMorphicCard>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-3xl relative z-10">
          <GlassMorphicCard className="p-8 md:p-12 text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-accent to-cyan-400 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter to receive the latest insights, articles, and updates on AI, automation, and
              business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="border-accent/30 focus-visible:ring-accent bg-background/50"
              />
              <Button className="bg-gradient-to-r from-accent to-cyan-500 hover:opacity-90 text-white whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </GlassMorphicCard>
        </div>
      </section>

      {/* Schedule Session CTA */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <ScheduleSession
            title="Want to learn more about our solutions?"
            description="Schedule a personalized demo to see how our AI-powered solutions can help transform your business operations."
          />
        </div>
      </section>
    </div>
  )
}
