"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const ecosystemLogos = [
  { name: "Hyperliquid", logo: "/hyperliquid-logo.png" },
  { name: "MetaMask", logo: "/metamask-logo.png" },
  { name: "Hardhat", logo: "/placeholder-6keow.png" },
  { name: "OpenZeppelin", logo: "/openzeppelin-logo.png" },
  { name: "Chainlink", logo: "/chainlink-logo.png" },
  { name: "The Graph", logo: "/the-graph-logo.png" },
]

export function EcosystemSection() {
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
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gradient">Ecosystem Integrations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            HypeBook covers integrations with all major tools and protocols in the Web3 ecosystem.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-12 lg:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {ecosystemLogos.map((item, index) => (
            <motion.div
              key={item.name}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="relative">
                <Image
                  src={item.logo || "/placeholder.svg"}
                  alt={`${item.name} logo`}
                  width={120}
                  height={60}
                  className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
