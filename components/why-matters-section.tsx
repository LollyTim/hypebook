"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Users, Rocket } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built on HyperEVM for unparalleled speed and efficiency in DeFi operations.",
  },
  {
    icon: Shield,
    title: "Battle Tested",
    description: "Security-first approach with audited smart contracts and proven patterns.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Open source documentation maintained by the developer community.",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    description: "Stay ahead with cutting-edge Web3 technologies and emerging standards.",
  },
]

export function WhyMattersSection() {
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
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gradient">Why This Matters</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Hyperliquid ecosystem is revolutionizing DeFi. HypeBook ensures you have the knowledge to build the
            next generation of financial applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="glass glass-hover p-8 rounded-2xl h-full border border-primary/10 group-hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>

                <h3 className="text-xl font-serif font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
