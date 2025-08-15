"use client"

import { motion } from "framer-motion"
import { Github, Twitter, DiscIcon as Discord, BookOpen } from "lucide-react"

const footerLinks = {
  Documentation: [
    { name: "Getting Started", href: "/docs" },
    { name: "Smart Contracts", href: "/docs/contracts" },
    { name: "DeFi Protocols", href: "/docs/defi" },
    { name: "API Reference", href: "/docs/api" },
  ],
  Community: [
    { name: "Discord", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "Contributors", href: "#" },
  ],
  Resources: [
    { name: "Examples", href: "/examples" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Blog", href: "/blog" },
    { name: "Changelog", href: "/changelog" },
  ],
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Discord", icon: Discord, href: "#" },
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/20 border-t border-primary/10">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-serif font-bold text-gradient">HypeBook</span>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              The open-source documentation platform for Hyperliquid developers. Build the future of DeFi with
              comprehensive guides and community support.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 glass glass-hover rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-serif font-semibold text-foreground">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">© 2024 HypeBook. Open source under MIT License.</p>
          <div className="flex gap-6 text-sm">
            <motion.a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -1 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -1 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
