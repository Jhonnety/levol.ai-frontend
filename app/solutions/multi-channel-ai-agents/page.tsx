import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Bot,
  Check,
  MessageCircle,
  Zap,
  Shield,
  BarChart2,
  Layers,
  RefreshCw,
  Workflow,
} from "lucide-react"

import flow from "../../../assets/images/flow1.png"
import { Button } from "@/components/ui/button"
import { GlassMorphicCard } from "@/components/glassmorphic-card"
import { GradientBorder } from "@/components/gradient-border"
import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"
import { ScheduleSession } from "@/components/schedule-session"
import { FeatureCard } from "@/components/feature-card"
import { PlatformBadge } from "@/components/platform-badge"
import { SolutionHeader } from "@/components/solution-header"
import { IconTiktok, IconFacebook, IconInstagram, IconWhatsapp } from "@/components/icons"

export default function MultiChannelAIAgentsPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <SolutionHeader
        title="Multi-Channel AI Agents"
        description="Intelligent virtual assistants that handle customer inquiries across all your communication channels with human-like understanding and 24/7 availability."
        icon={<Bot className="h-10 w-10" />}
        gradient="from-accent to-purple-400"
      />

      {/* Overview Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Unify Your Customer{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                  Communication
                </span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Multi-Channel AI Agents create a seamless experience for your customers across all communication
                platforms. Whether they reach out via WhatsApp, Instagram, Facebook, TikTok, or your website, they'll
                receive consistent, intelligent responses powered by advanced natural language processing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-accent">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Unified Experience</span> - Consistent customer
                    interactions across all channels
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-accent">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">24/7 Availability</span> - Respond to customer
                    inquiries at any time, day or night
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-accent">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Intelligent Routing</span> - Seamlessly transfer to
                    human agents when needed
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-accent">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Continuous Learning</span> - AI that improves with
                    every interaction
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl"></div>
              <GradientBorder className="rounded-2xl overflow-hidden">
                <Image
                  src={flow}
                  alt="Multi-Channel AI Agents Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </GradientBorder>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              How It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI agents use advanced natural language processing to understand, respond, and learn from every
              interaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-accent/10 to-transparent rounded-2xl blur-xl"></div>
              <GlassMorphicCard className="h-full p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                    <MessageCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">1. Message Reception</h3>
                  <p className="text-muted-foreground">
                    Customer messages from any platform are received through our unified API and preprocessed for
                    analysis.
                  </p>
                </div>
              </GlassMorphicCard>
            </div>

            <div className="relative">
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/10 to-transparent rounded-2xl blur-xl"></div>
              <GlassMorphicCard className="h-full p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                    <Bot className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">2. AI Processing</h3>
                  <p className="text-muted-foreground">
                    Our advanced AI models analyze the content, intent, and sentiment to generate appropriate responses.
                  </p>
                </div>
              </GlassMorphicCard>
            </div>

            <div className="relative">
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/10 to-transparent rounded-2xl blur-xl"></div>
              <GlassMorphicCard className="h-full p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6">
                    <Zap className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">3. Intelligent Response</h3>
                  <p className="text-muted-foreground">
                    Personalized responses are delivered back through the original channel with appropriate formatting
                    and tone.
                  </p>
                </div>
              </GlassMorphicCard>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-accent to-purple-400 hover:opacity-90 text-white">
              Learn More About Our Technology
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Key{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Features</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI agents come packed with powerful capabilities to transform your customer interactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Natural Language Understanding"
              description="Advanced NLP capabilities that understand context, slang, and multiple languages."
              icon={<Bot className="h-6 w-6" />}
              gradient="from-accent to-purple-400"
            />
            <FeatureCard
              title="Sentiment Analysis"
              description="Detect customer emotions and adjust responses to provide appropriate support."
              icon={<MessageCircle className="h-6 w-6" />}
              gradient="from-purple-400 to-pink-400"
            />
            <FeatureCard
              title="Seamless Handoff"
              description="Intelligent routing to human agents when complex issues require personal attention."
              icon={<RefreshCw className="h-6 w-6" />}
              gradient="from-pink-400 to-red-400"
            />
            <FeatureCard
              title="Analytics Dashboard"
              description="Comprehensive insights into customer interactions, common queries, and agent performance."
              icon={<BarChart2 className="h-6 w-6" />}
              gradient="from-cyan-400 to-blue-400"
            />
            <FeatureCard
              title="Custom Knowledge Base"
              description="Train your AI with your specific products, services, and company information."
              icon={<Layers className="h-6 w-6" />}
              gradient="from-blue-400 to-indigo-400"
            />
            <FeatureCard
              title="Security & Compliance"
              description="Enterprise-grade security with data encryption and compliance with privacy regulations."
              icon={<Shield className="h-6 w-6" />}
              gradient="from-indigo-400 to-accent"
            />
          </div>
        </div>
      </section>

      {/* Supported Platforms Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-purple-500/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <GlassMorphicCard className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Supported{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                  Platforms
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our AI agents seamlessly integrate with all major messaging and social media platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-accent to-purple-400 relative w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center">
                  <IconWhatsapp className="w-10 h-10 text-white" />
                </div>
                <h3 className="mt-4 font-medium">WhatsApp</h3>
                <p className="text-sm text-muted-foreground text-center mt-1">Business API Integration</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-400 relative w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center">
                  <IconInstagram className="w-10 h-10 text-white" />
                </div>
                <h3 className="mt-4 font-medium">Instagram</h3>
                <p className="text-sm text-muted-foreground text-center mt-1">DM & Comment Management</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-blue-400 to-indigo-400 relative w-20 h-20 rounded-2xl p-0 m-0  flex items-center justify-center">
                  <IconFacebook className="w-10 h-10 text-white text-center" />
                </div>
                <h3 className="mt-4 font-medium">Facebook</h3>
                <p className="text-sm text-muted-foreground text-center mt-1">Messenger & Comments</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-indigo-400 to-accent relative w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center">
                  <IconTiktok className="w-10 h-10 text-white" />
                </div>
                <h3 className="mt-4 font-medium">TikTok</h3>
                <p className="text-sm text-muted-foreground text-center mt-1">Comment Management</p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <PlatformBadge name="Telegram" />
              <PlatformBadge name="Twitter" />
              <PlatformBadge name="Website Chat" />
              <PlatformBadge name="SMS" />
              <PlatformBadge name="Email" />
              <PlatformBadge name="Discord" />
              <PlatformBadge name="Slack" />
              <PlatformBadge name="Microsoft Teams" />
            </div>
          </GlassMorphicCard>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Use{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Cases</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how businesses across industries are leveraging our AI agents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassMorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-4">E-commerce</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">Product recommendations based on customer queries</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">Order status updates and tracking information</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">Return and exchange process automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">Abandoned cart recovery through messaging</span>
                </li>
              </ul>
            </GlassMorphicCard>

            <GlassMorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-4">Financial Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">Account balance and transaction inquiries</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">Fraud alerts and verification processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">Loan application status updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">Financial product recommendations</span>
                </li>
              </ul>
            </GlassMorphicCard>

            <GlassMorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-4">Healthcare</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">Appointment scheduling and reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">Medication refill requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">Basic symptom assessment and triage</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">Insurance coverage verification</span>
                </li>
              </ul>
            </GlassMorphicCard>
          </div>
        </div>
      </section>

      {/* Schedule Session CTA */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <ScheduleSession
            title="Ready to transform your customer communication?"
            description="Schedule a personalized demo to see our Multi-Channel AI Agents in action and discuss your specific business needs."
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            <GlassMorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-2">How long does implementation take?</h3>
              <p className="text-muted-foreground">
                Most implementations can be completed within 2-4 weeks, depending on the complexity of your requirements
                and the number of channels being integrated. Our team will provide a detailed timeline during your
                consultation.
              </p>
            </GlassMorphicCard>

            <GlassMorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-2">Can the AI agents handle multiple languages?</h3>
              <p className="text-muted-foreground">
                Yes, our AI agents support over 30 languages out of the box, with the ability to add more as needed.
                They can detect the language being used and respond appropriately, making them ideal for global
                businesses.
              </p>
            </GlassMorphicCard>

            <GlassMorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-2">How do you ensure data security and privacy?</h3>
              <p className="text-muted-foreground">
                We implement enterprise-grade security measures including end-to-end encryption, secure data storage,
                and strict access controls. Our systems are compliant with GDPR, CCPA, and other relevant privacy
                regulations.
              </p>
            </GlassMorphicCard>

            <GlassMorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-2">Can the AI agents integrate with our existing CRM?</h3>
              <p className="text-muted-foreground">
                Absolutely. Our AI agents can integrate with popular CRM systems like Salesforce, HubSpot, Zoho, and
                many others. This allows for seamless data sharing and a unified view of customer interactions.
              </p>
            </GlassMorphicCard>
          </div>
        </div>
      </section>

      {/* Related Solutions Section */}
      <section className="py-16 px-4 relative border-t border-border/20">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Related{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                Solutions
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/solutions/advanced-workflow-automation" className="block group">
              <GlassMorphicCard className="p-6 h-full transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(0,240,255,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
                    <Workflow className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      Advanced Workflow Automation
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Streamline operations by automating repetitive tasks and complex business processes.
                    </p>
                    <div className="flex items-center text-cyan-400">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </GlassMorphicCard>
            </Link>

            <Link href="/solutions/predictive-analytics-platform" className="block group">
              <GlassMorphicCard className="p-6 h-full transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(255,105,180,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-pink-400 to-accent">
                    <BarChart2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">
                      Predictive Analytics Platform
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Transform raw data into actionable insights and strategic advantages with AI-powered analytics.
                    </p>
                    <div className="flex items-center text-pink-400">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </GlassMorphicCard>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
