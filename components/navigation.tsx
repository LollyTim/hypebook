"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={`rounded-full px-12 py-3 border transition-all duration-300 min-w-[600px] ${
          isScrolled ? "bg-white/10 backdrop-blur-md border-white/20 shadow-lg" : "border-transparent"
        }`}
        animate={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between gap-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Image src="/hyperbook-logo.png" alt="HyperBook Logo" width={32} height={32} className="w-8 h-8" />
            </div>
            <span className="text-lg font-medium text-white">HyperBook</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-12">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-white transition-colors font-medium text-sm"
            >
              About
            </button>
            <Link href="/docs" className="text-white/80 hover:text-white transition-colors font-medium text-sm">
              Docs
            </Link>
            <Link href="/ecosystem" className="text-white/80 hover:text-white transition-colors font-medium text-sm">
              Ecosystem
            </Link>
          </div>

          {/* Launch App Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="bg-emerald-400 hover:bg-emerald-500 text-black font-medium px-6 py-2 rounded-full text-sm"
            >
              <Link href="/docs">Launch App</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
