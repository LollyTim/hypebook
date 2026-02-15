"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Shield, Code, Globe, Gavel, BookOpen } from "lucide-react"
import Link from "next/link"

export default function DocsHomePage() {
  const quickStartCards = [
    {
      title: "Builder's Guide",
      description: "The complete roadmap for developing on Hyperliquid L1",
      icon: BookOpen,
      href: "/docs/builder-guide",
      color: "from-primary/20 to-accent/20",
    },
    {
      title: "HIP-4 Proposal",
      description: "Making all markets Hyperliquid with permissionless listings",
      icon: Gavel,
      href: "/docs/governance/hip-4",
      color: "from-accent/20 to-primary/20",
    },
    {
      title: "Smart Contracts",
      description: "Tested Solidity patterns and L1 precompile hooks",
      icon: Code,
      href: "/docs/examples/contracts",
      color: "from-primary/15 to-accent/25",
    },
    {
      title: "Network Setup",
      description: "Connect to RPCs or setup your own validator node",
      icon: Globe,
      href: "/docs/rpc",
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
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/20 text-primary">
            Hyperliquid Wiki v2
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            The Open Guide for
            <br />
            <span className="text-primary">HyperEVM Builders</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to build the future of decentralized finance. From core architecture to production-ready SDKs.
          </p>
        </div>
      </motion.div>

      {/* Quick Start Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {quickStartCards.map((card, index) => {
          const Icon = card.icon
          return (
            <Link key={card.title} href={card.href}>
              <Card className="bg-[#141419] border-[#333344] hover:border-primary/40 transition-all duration-300 group h-full">
                <CardHeader className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm mt-2">{card.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                    Start Building
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Featured Content */}
      <div className="space-y-8 pt-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Latest Protocol Updates</h2>
          <p className="text-muted-foreground">Stay current with the fast-moving Hyperliquid ecosystem</p>
        </div>

        <div className="grid gap-4">
          {[
            { title: "Implementing EIP-712 Signing for CoreWriter", category: "Builder Tools", time: "Feb 14" },
            { title: "Optimizing High-Frequency Order Placement", category: "Performance", time: "Feb 13" },
            { title: "Building Cross-chain Liquidity Bridges", category: "Infrastructure", time: "Feb 12" },
          ].map((guide) => (
            <div key={guide.title} className="p-6 bg-[#141419] border border-[#333344] rounded-xl flex items-center justify-between group hover:border-accent/40 transition-all cursor-pointer">
              <div className="space-y-1">
                <h3 className="font-bold text-white group-hover:text-accent transition-colors">{guide.title}</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <Badge variant="secondary" className="text-[10px] h-5 bg-white/5 border-white/10 uppercase">{guide.category}</Badge>
                  <span>{guide.time} • 5 min read</span>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted group-hover:text-accent transition-all group-hover:translate-x-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
