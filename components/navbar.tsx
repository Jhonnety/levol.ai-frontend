"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { GlassMorphicCard } from "./glassmorphic-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Solutions",
    path: "/solutions",
  },
  {
    name: "Case Studies",
    path: "/case-studies",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Blog",
    path: "/blog",
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { hasScrolled } = useScrollAnimation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-4"
    >
      <GlassMorphicCard
        className={cn(
          "backdrop-blur-md transition-all duration-300",
          hasScrolled ? "shadow-lg shadow-accent/5" : "shadow-none",
        )}
      >
        <nav className="container mx-auto max-w-6xl flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <motion.div
                className="w-10 h-10 rounded-lg bg-gradient-to-r from-accent to-cyan-400 flex items-center justify-center mr-3"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-lg">L</span>
              </motion.div>
              <motion.span
                className="text-xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">LEVOL.IA</span>
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {routes.map((route, index) => (
              <motion.div
                key={route.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              >
                <Link
                  href={route.path}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors relative",
                    pathname === route.path
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/10",
                  )}
                >
                  {route.name}
                  {pathname === route.path && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Auth & Language */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    <span>EN</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Español</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <Link href="/sign-in">
                <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10">
                  Sign In
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <Link href="/sign-up">
                <Button size="sm" className="bg-gradient-to-r from-accent to-cyan-500 hover:opacity-90 text-white">
                  Sign Up
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </nav>
      </GlassMorphicCard>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GlassMorphicCard className="mt-2 p-4 backdrop-blur-md">
              <div className="flex flex-col space-y-3">
                {routes.map((route, index) => (
                  <motion.div
                    key={route.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={route.path}
                      className={cn(
                        "px-4 py-2 rounded-md text-sm font-medium transition-colors block",
                        pathname === route.path
                          ? "text-accent bg-accent/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/10",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {route.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="pt-4 border-t border-border/20 mt-2 flex flex-col space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Link href="/sign-in" className="w-full">
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/sign-up" className="w-full">
                    <Button className="bg-gradient-to-r from-accent to-cyan-500 hover:opacity-90 text-white w-full">
                      Sign Up
                    </Button>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex justify-between items-center text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          <span>Language: English</span>
                        </div>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>English</DropdownMenuItem>
                      <DropdownMenuItem>Español</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>
              </div>
            </GlassMorphicCard>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
