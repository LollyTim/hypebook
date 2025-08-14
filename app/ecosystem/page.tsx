"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Code, Database, Zap, Shield, BarChart3, Wallet, Globe, ArrowRight } from "lucide-react"
import { useRef } from "react"

const nativeTools = [
  {
    name: "HyperEVM",
    description:
      "High-performance Ethereum Virtual Machine implementation optimized for Hyperliquid's architecture with advanced gas optimization.",
    icon: Code,
    category: "Core Infrastructure",
    features: ["EVM Compatibility", "Gas Optimization", "State Management"],
    status: "Live",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "CoreWriter",
    description:
      "Native smart contract development framework with built-in testing, deployment tools, and comprehensive documentation.",
    icon: Database,
    category: "Development Tools",
    features: ["Contract Templates", "Testing Suite", "Deployment Scripts"],
    status: "Live",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "HyperRPC",
    description:
      "Ultra-fast RPC provider with WebSocket support, advanced caching mechanisms, and real-time data streaming.",
    icon: Zap,
    category: "Infrastructure",
    features: ["WebSocket API", "Rate Limiting", "Real-time Data"],
    status: "Live",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Validator Toolkit",
    description:
      "Complete validator setup and management tools for network participants with monitoring and slashing protection.",
    icon: Shield,
    category: "Network Tools",
    features: ["Node Setup", "Monitoring", "Slashing Protection"],
    status: "Beta",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Analytics Dashboard",
    description:
      "Real-time network statistics and performance monitoring dashboard for developers, validators, and users.",
    icon: BarChart3,
    category: "Monitoring",
    features: ["Network Stats", "Performance Metrics", "Historical Data"],
    status: "Coming Soon",
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "HyperWallet SDK",
    description:
      "Native wallet integration SDK with comprehensive support for all Hyperliquid features and seamless UX.",
    icon: Wallet,
    category: "Integration",
    features: ["Wallet Connect", "Transaction Signing", "Account Management"],
    status: "Coming Soon",
    color: "from-teal-500 to-cyan-500",
  },
]

function ToolCard({ tool, index }: { tool: (typeof nativeTools)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const Icon = tool.icon

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 h-full hover:bg-white/10 transition-all duration-500 overflow-hidden"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full ${
              tool.status === "Live"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : tool.status === "Beta"
                  ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                  : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
            }`}
          >
            {tool.status}
          </span>
        </div>

        <div className="relative z-10 space-y-6">
          {/* Icon and category */}
          <div className="flex items-start justify-between">
            <motion.div
              className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="w-8 h-8 text-white" />
            </motion.div>
            <span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
              {tool.category}
            </span>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              {tool.name}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">{tool.description}</p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {tool.features.map((feature, featureIndex) => (
              <span
                key={featureIndex}
                className="text-xs font-medium text-white/80 bg-white/10 px-3 py-1 rounded-md border border-white/20"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Learn more button */}
          <motion.button
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium group/btn"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function EcosystemPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-900">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-teal-500/10 to-cyan-400/15" />
          <div className="container mx-auto px-6 lg:px-8 relative">
            <motion.div
              className="text-center space-y-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                HyperBook Ecosystem
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Discover the powerful native tools and resources built specifically for the HyperBook documentation
                ecosystem and HyperEVM development
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16 lg:py-24 relative">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {nativeTools.map((tool, index) => (
                <ToolCard key={tool.name} tool={tool} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-24 lg:py-32 relative">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center space-y-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                More Tools Coming Soon
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                We're continuously expanding the ecosystem with new tools, integrations, and developer resources to
                empower the HyperBook community.
              </p>
              <motion.div
                className="inline-flex items-center gap-2 text-emerald-400 font-medium bg-emerald-400/10 px-6 py-3 rounded-full border border-emerald-400/20"
                whileHover={{ scale: 1.05 }}
              >
                <Globe className="w-5 h-5" />
                Stay tuned for updates
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
