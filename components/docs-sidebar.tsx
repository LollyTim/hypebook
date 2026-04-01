"use client"

import * as React from "react"
import { useState, createContext, useContext } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { 
  Terminal, 
  Cpu, 
  Settings, 
  Globe, 
  Code2, 
  Zap,
  Box,
  Compass,
  Rocket,
  Gavel,
  BookOpen,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

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
    <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

const sidebarItems = [
  {
    title: "Introduction",
    items: [
      { title: "What is Hyperliquid?", href: "/docs/introduction/what-is-hyperliquid", icon: Rocket },
      { title: "Getting Started", href: "/docs/getting-started/overview", icon: Compass },
      { title: "Quick Start", href: "/docs/quick-start", icon: Zap },
    ]
  },
  {
    title: "Protocol Standards",
    items: [
      { title: "HIPs (HIP-1, 2, 3 & Checks)", href: "/docs/governance/hip-4", icon: Gavel },
    ]
  },
  {
    title: "Architecture",
    items: [
      { title: "Core Architecture", href: "/docs/hyperevm/architecture", icon: Cpu },
      { title: "HyperEVM VM", href: "/docs/hyperevm/vm", icon: Box },
      { title: "Consensus", href: "/docs/hyperevm/consensus", icon: Globe },
      { title: "Gas Mechanics", href: "/docs/precompiles/gas", icon: Terminal },
    ]
  },
  {
    title: "Builder Guide",
    items: [
      { title: "The Builder's Guide", href: "/docs/builder-guide", icon: BookOpen },
      { title: "CoreWriter API", href: "/docs/corewriter/api", icon: Code2 },
      { title: "Harmonix Framework", href: "/docs/hyperevm/harmonix", icon: Settings },
      { title: "Smart Contracts", href: "/docs/examples/contracts", icon: Code2 },
    ]
  },
  {
    title: "SDKs & APIs",
    items: [
      { title: "Javascript SDK", href: "/docs/sdk/javascript", icon: Settings },
      { title: "Python SDK", href: "/docs/sdk/python", icon: Settings },
      { title: "RPC Endpoints", href: "/docs/rpc", icon: Globe },
    ]
  },
  {
    title: "Ecosystem",
    items: [
      { title: "Projects", href: "/docs/ecosystem", icon: Compass },
      { title: "Tools & Utilities", href: "/docs/ecosystem/tools", icon: Settings },
    ]
  },
  {
    title: "Network",
    items: [
      { title: "Testnet Setup & Deploy", href: "/docs/testnet", icon: Terminal },
      { title: "Node Setup", href: "/docs/infrastructure/node-setup", icon: Settings },
      { title: "Validators", href: "/docs/testnet/validators", icon: Settings },
    ]
  }
]

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname()
  const { sidebarOpen, setSidebarOpen } = useSidebar()
  const [expandedSections, setExpandedSections] = useState<string[]>(["Introduction"])

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={cn("hidden lg:fixed lg:inset-y-0 lg:top-16 lg:flex lg:w-80 lg:flex-col", className)}>
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-border/40 bg-background/95 backdrop-blur px-4 sm:px-6 py-6">
          <nav className="flex flex-1 flex-col">
            <div className="space-y-2">
              {sidebarItems.map((section) => {
                const isExpanded = expandedSections.includes(section.title)
                return (
                  <div key={section.title} className="space-y-1">
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-3 h-auto font-medium text-left hover:bg-primary/10 hover:text-white group transition-all duration-200"
                      onClick={() => toggleSection(section.title)}
                    >
                      <div className="flex items-center gap-3">
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
                          <div className="ml-4 space-y-1 border-l border-border/30 pl-4">
                            {section.items.map((item) => {
                              const isActive = pathname === item.href
                              return (
                                <motion.div key={item.href} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                                  <Link
                                    href={item.href}
                                    className={cn(
                                      "block py-2 px-3 rounded-md text-sm font-sans transition-all duration-200",
                                      isActive 
                                        ? "bg-primary/20 text-white font-medium border-l-2 border-primary"
                                        : "text-muted-foreground hover:text-white hover:bg-primary/10"
                                    )}
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
                    {sidebarItems.map((section) => {
                      const isExpanded = expandedSections.includes(section.title)
                      return (
                        <div key={section.title} className="space-y-1">
                          <Button
                            variant="ghost"
                            className="w-full justify-between p-3 h-auto font-medium text-left hover:bg-primary/10 hover:text-white group transition-all duration-200"
                            onClick={() => toggleSection(section.title)}
                          >
                            <div className="flex items-center gap-3">
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
                                <div className="ml-4 space-y-1 border-l border-border/30 pl-4">
                                  {section.items.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                      <motion.div key={item.href} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                                        <Link
                                          href={item.href}
                                          className={cn(
                                            "block py-2 px-3 rounded-md text-sm font-sans transition-all duration-200",
                                            isActive 
                                              ? "bg-primary/20 text-white font-medium border-l-2 border-primary"
                                              : "text-muted-foreground hover:text-white hover:bg-primary/10"
                                          )}
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
