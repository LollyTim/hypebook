"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, GitFork, Star } from "lucide-react"

export function OpenSourceSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <motion.h2
              className="text-4xl lg:text-6xl font-serif font-bold text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Built by the Community
            </motion.h2>

            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              HypeBook is completely open source. Contribute guides, fix bugs, or suggest improvements. Together, we're
              building the definitive resource for Hyperliquid developers.
            </motion.p>
          </div>

          <motion.div
            className="glass p-8 lg:p-12 rounded-3xl border border-primary/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <motion.div
                className="text-center space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary">1.2k</div>
                <div className="text-muted-foreground flex items-center justify-center gap-2">
                  <Star className="w-4 h-4" />
                  GitHub Stars
                </div>
              </motion.div>

              <motion.div
                className="text-center space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary">340</div>
                <div className="text-muted-foreground flex items-center justify-center gap-2">
                  <GitFork className="w-4 h-4" />
                  Forks
                </div>
              </motion.div>

              <motion.div
                className="text-center space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary">85</div>
                <div className="text-muted-foreground">Contributors</div>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold animate-glow"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Fork on GitHub
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="glass glass-hover border-primary/30 text-foreground px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  View Contributors
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
