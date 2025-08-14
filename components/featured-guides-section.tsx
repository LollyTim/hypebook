"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Database, Coins, Settings } from "lucide-react"

const guides = [
  {
    icon: Code,
    title: "Smart Contracts",
    description: "Learn to build and deploy smart contracts on HyperEVM",
    topics: ["Solidity Basics", "Contract Deployment", "Testing & Debugging"],
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: Database,
    title: "DeFi Protocols",
    description: "Build decentralized finance applications and protocols",
    topics: ["AMM Development", "Lending Protocols", "Yield Farming"],
    color: "from-accent/20 to-primary/20",
  },
  {
    icon: Coins,
    title: "Token Standards",
    description: "Implement and work with various token standards",
    topics: ["ERC-20 Tokens", "NFT Collections", "Multi-Token Standards"],
    color: "from-primary/15 to-accent/25",
  },
  {
    icon: Settings,
    title: "Infrastructure",
    description: "Set up development environment and tooling",
    topics: ["Development Setup", "Testing Framework", "Deployment Tools"],
    color: "from-accent/15 to-primary/15",
  },
]

export function FeaturedGuidesSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gradient">Featured Guides</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dive deep into comprehensive tutorials and documentation covering every aspect of building on Hyperliquid.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="glass glass-hover p-8 rounded-2xl h-full border border-primary/10 group-hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${guide.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:animate-glow`}
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <guide.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-serif font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{guide.description}</p>
                    </div>

                    <div className="space-y-2">
                      {guide.topics.map((topic, topicIndex) => (
                        <motion.div
                          key={topic}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + topicIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {topic}
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Explore Guide
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
