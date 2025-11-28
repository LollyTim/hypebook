"use client"

import type React from "react"
import { useState, createContext, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Home, Book, Code, Settings, Zap, Globe, Wrench, FileText, Server } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigationItems = [
  {
    title: "Getting Started",
    icon: Home,
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick Start", href: "/docs/quick-start" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "HyperEVM",
    icon: Book,
    items: [
      { title: "Architecture", href: "/docs/hyperevm/architecture" },
    ],
  },
  {
    title: "Infrastructure",
    icon: Server,
    items: [
      { title: "Overview", href: "/docs/infrastructure" },
      { title: "Node Setup", href: "/docs/infrastructure/node-setup" },
      { title: "Validator Guide", href: "/docs/infrastructure/validator" },
      { title: "Monitoring", href: "/docs/infrastructure/monitoring" },
    ],
  },
  {
    title: "Testnet",
    icon: Zap,
    items: [
      { title: "Network Setup", href: "/docs/testnet" },
      { title: "Faucet", href: "/docs/testnet/faucet" },
    ],
  },
  {
    title: "RPC & Network",
    icon: Globe,
    items: [
      { title: "RPC Endpoints", href: "/docs/rpc" },
      { title: "Rate Limits", href: "/docs/rpc/limits" },
    ],
  },
  {
    title: "Examples",
    icon: FileText,
    items: [
      { title: "Smart Contracts", href: "/docs/examples/contracts" },
      { title: "DeFi Protocols", href: "/docs/examples/defi" },
      { title: "NFT Collections", href: "/docs/examples/nft" },
    ],
  },
]

interface SidebarContextType {
  sidebarOpen: boolean
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar, setSidebarOpen }}>{children}</SidebarContext.Provider>
  )
}

export function DocsSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(["Getting Started"])
  const pathname = usePathname()
  const { sidebarOpen, setSidebarOpen } = useSidebar()

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:top-16 lg:flex lg:w-80 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-border/40 bg-background/95 backdrop-blur px-4 sm:px-6 py-6">
          <nav className="flex flex-1 flex-col">
            <div className="space-y-2">
              {navigationItems.map((section) => {
                const isExpanded = expandedSections.includes(section.title)
                const Icon = section.icon

                return (
                  <div key={section.title} className="space-y-1">
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-3 h-auto font-medium text-left hover:bg-primary/10 hover:text-white group transition-all duration-200"
                      onClick={() => toggleSection(section.title)}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                        <span className="font-sans text-muted-foreground group-hover:text-white transition-colors">
                          {section.title}
                        </span>
                      </div>
                      <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
                      </motion.div>
                    </Button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-7 space-y-1 border-l border-border/30 pl-4">
                            {section.items.map((item) => {
                              const isActive = pathname === item.href
                              return (
                                <motion.div key={item.href} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                                  <Link
                                    href={item.href}
                                    className={`block py-2 px-3 rounded-md text-sm font-sans transition-all duration-200 ${isActive
                                      ? "bg-primary/20 text-white font-medium border-l-2 border-primary"
                                      : "text-muted-foreground hover:text-white hover:bg-primary/10"
                                      }`}
                                  >
                                    {item.title}
                                  </Link>
                                </motion.div>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </nav>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] overflow-y-auto bg-background border-r border-border/40 lg:hidden"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex grow flex-col gap-y-5 px-4 sm:px-6 py-6 pt-20">
                <nav className="flex flex-1 flex-col">
                  <div className="space-y-2">
                    {navigationItems.map((section) => {
                      const isExpanded = expandedSections.includes(section.title)
                      const Icon = section.icon

                      return (
                        <div key={section.title} className="space-y-1">
                          <Button
                            variant="ghost"
                            className="w-full justify-between p-3 h-auto font-medium text-left hover:bg-primary/10 hover:text-white group transition-all duration-200"
                            onClick={() => toggleSection(section.title)}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                              <span className="font-sans text-muted-foreground group-hover:text-white transition-colors">
                                {section.title}
                              </span>
                            </div>
                            <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
                            </motion.div>
                          </Button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-7 space-y-1 border-l border-border/30 pl-4">
                                  {section.items.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                      <motion.div key={item.href} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                                        <Link
                                          href={item.href}
                                          className={`block py-2 px-3 rounded-md text-sm font-sans transition-all duration-200 ${isActive
                                            ? "bg-primary/20 text-white font-medium border-l-2 border-primary"
                                            : "text-muted-foreground hover:text-white hover:bg-primary/10"
                                            }`}
                                          onClick={() => setSidebarOpen(false)}
                                        >
                                          {item.title}
                                        </Link>
                                      </motion.div>
                                    )
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                  </div>
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
