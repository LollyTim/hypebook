"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Shield, Code, Globe } from "lucide-react"
import Link from "next/link"

export default function DocsHomePage() {
  const quickStartCards = [
    {
      title: "Quick Start",
      description: "Get up and running with HyperEVM in minutes",
      icon: Zap,
      href: "/docs/quick-start",
      color: "from-primary/20 to-accent/20",
    },
    {
      title: "Architecture",
      description: "Understand the core concepts and design",
      icon: Shield,
      href: "/docs/hyperevm/architecture",
      color: "from-accent/20 to-primary/20",
    },
    {
      title: "Smart Contracts",
      description: "Deploy and interact with contracts",
      icon: Code,
      href: "/docs/examples/contracts",
      color: "from-primary/15 to-accent/25",
    },
    {
      title: "Network Setup",
      description: "Connect to testnet and mainnet",
      icon: Globe,
      href: "/docs/testnet",
      color: "from-accent/15 to-primary/25",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            Documentation
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
            <span className="text-gradient">HyperBook</span>
            <br />
            <span className="text-foreground">Documentation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans">
            Everything you need to build on HyperEVM. From basic concepts to advanced implementations.
          </p>
        </div>
      </motion.div>

      {/* Quick Start Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {quickStartCards.map((card, index) => {
          const Icon = card.icon
          return (
            <motion.div key={card.title} whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 group h-full">
                <CardHeader className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="font-sans text-base mt-2">{card.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group/btn p-0 h-auto font-medium" asChild>
                    <Link href={card.href}>
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Featured Content */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            <span className="text-gradient">Popular Guides</span>
          </h2>
          <p className="text-muted-foreground font-sans">Most accessed documentation and tutorials</p>
        </div>

        <div className="grid gap-4">
          {[
            { title: "Setting up your first smart contract", category: "Getting Started", readTime: "5 min" },
            { title: "Understanding HyperEVM gas mechanics", category: "Core Concepts", readTime: "8 min" },
            { title: "Building a DeFi protocol", category: "Advanced", readTime: "15 min" },
            { title: "Integrating with RPC providers", category: "Integration", readTime: "10 min" },
          ].map((guide, index) => (
            <motion.div key={guide.title} whileHover={{ x: 8 }} transition={{ duration: 0.2 }}>
              <Card className="glass border-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <h3 className="font-serif font-semibold text-lg hover:text-primary transition-colors">
                        {guide.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground font-sans">
                        <Badge variant="outline" className="text-xs">
                          {guide.category}
                        </Badge>
                        <span>{guide.readTime} read</span>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
