"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.h2
                className="text-4xl lg:text-5xl font-serif font-bold text-gradient"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                About HypeBook
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              HypeBook is the definitive open-source documentation platform for the Hyperliquid ecosystem. Built by
              developers, for developers, it provides comprehensive guides, tutorials, and reference materials for
              building on HyperEVM.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              From smart contract development to DeFi protocol integration, HypeBook covers everything you need to know
              to build successful applications on the fastest growing blockchain ecosystem.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Comprehensive Guides</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Open Source</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Browser Mockup */}
              <div className="glass border border-primary/20 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-muted/30 rounded px-3 py-1 text-xs text-muted-foreground">
                      hypebook.dev/docs
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-background/50 to-muted/20">
                  <Image
                    src="/documentation-interface.png"
                    alt="HypeBook Documentation Interface"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 glass border border-accent/30 rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
