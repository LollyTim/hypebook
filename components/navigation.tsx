"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import logo from "@/app/assets/image/hypebookLogo.png"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    setIsMobileMenuOpen(false)
  }

  const navigationItems = [
    { label: "About", href: "#about", onClick: () => scrollToSection("about") },
    { label: "Docs", href: "/docs" },
    { label: "Ecosystem", href: "/ecosystem" },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={`mx-auto max-w-7xl rounded-full px-4 sm:px-6 lg:px-8 py-3 border transition-all duration-300 ${isScrolled ? "bg-white/10 backdrop-blur-md border-white/20 shadow-lg" : "border-transparent"
          }`}
        animate={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group flex-shrink-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Image src={logo} alt="HypeBook Logo" width={32} height={32} className="w-8 h-8" />
            </div>
            <span className="text-lg font-medium text-white hidden sm:block">HypeBook</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={item.onClick}
                className="text-white/80 hover:text-white transition-colors font-medium text-sm whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Launch App Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-emerald-400 hover:bg-emerald-500 text-black font-medium px-6 py-2 rounded-full text-sm"
              >
                <Link href="/docs">Launch App</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg">
              <div className="space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={item.onClick}
                    className="block text-white/80 hover:text-white transition-colors font-medium text-sm py-2 px-3 rounded-lg hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2 border-t border-white/20">
                  <Button
                    asChild
                    className="w-full bg-emerald-400 hover:bg-emerald-500 text-black font-medium py-2 rounded-lg text-sm"
                  >
                    <Link href="/docs">Launch App</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
