"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import logo from "@/app/assets/image/hypebookLogo.png"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
    {
      label: "Product",
      type: "dropdown",
      items: [
        { label: "HypeBook Docs", href: "/ecosystem-docs", description: "Professional documentation hosting" },
        { label: "HypeBook Article", href: "https://article.hyperliquid.xyz", external: true, description: "Publishing platform for articles & blogs" },
      ]
    },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Open Source Docs", href: "/docs" },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 mt-3"
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
            {navigationItems.map((item) => {
              if (item.type === "dropdown") {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <button className="text-white/80 hover:text-white transition-colors font-medium text-sm whitespace-nowrap flex items-center gap-1">
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-72 bg-popover backdrop-blur-md border-border shadow-lg">
                      {item.items?.map((subItem) => (
                        <DropdownMenuItem key={subItem.label} asChild>
                          {subItem.external ? (
                            <a
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-col items-start w-full px-3 py-3 text-sm rounded-sm hover:bg-accent cursor-pointer"
                            >
                              <span className="font-medium text-popover-foreground">{subItem.label}</span>
                              {subItem.description && (
                                <span className="text-xs text-muted-foreground mt-1">{subItem.description}</span>
                              )}
                            </a>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="flex flex-col items-start w-full px-3 py-3 text-sm rounded-sm hover:bg-accent cursor-pointer"
                            >
                              <span className="font-medium text-popover-foreground">{subItem.label}</span>
                              {subItem.description && (
                                <span className="text-xs text-muted-foreground mt-1">{subItem.description}</span>
                              )}
                            </Link>
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }

              return (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  onClick={item.onClick}
                  className="text-white/80 hover:text-white transition-colors font-medium text-sm whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )
            })}
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
                {navigationItems.map((item) => {
                  if (item.type === "dropdown") {
                    return (
                      <div key={item.label} className="space-y-2">
                        <div className="text-white/60 font-medium text-sm py-2 px-3">
                          {item.label}
                        </div>
                        {item.items?.map((subItem) => (
                          <div key={subItem.label} className="ml-4">
                            {subItem.external ? (
                              <a
                                href={subItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                              >
                                <div className="font-medium text-sm">{subItem.label}</div>
                                {subItem.description && (
                                  <div className="text-xs text-white/60 mt-1">{subItem.description}</div>
                                )}
                              </a>
                            ) : (
                              <Link
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                              >
                                <div className="font-medium text-sm">{subItem.label}</div>
                                {subItem.description && (
                                  <div className="text-xs text-white/60 mt-1">{subItem.description}</div>
                                )}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href || "#"}
                      onClick={item.onClick}
                      className="block text-white/80 hover:text-white transition-colors font-medium text-sm py-2 px-3 rounded-lg hover:bg-white/10"
                    >
                      {item.label}
                    </Link>
                  )
                })}
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
