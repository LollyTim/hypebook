"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { 
  Book, 
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
  BookOpen
} from "lucide-react"

// Add SidebarProvider since app/layout.tsx expects it
export function SidebarProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
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
    title: "Governance",
    items: [
      { title: "HIP-4 Proposal", href: "/docs/governance/hip-4", icon: Gavel },
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
      { title: "Node Setup", href: "/docs/infrastructure/node-setup", icon: Settings },
      { title: "Validators", href: "/docs/testnet/validators", icon: Settings },
    ]
  }
]

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <aside className={cn("bg-[#141419] py-8 px-6", className)}>
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-bold text-background glow-mint">HB</div>
        <span className="text-xl font-serif font-bold text-white">HypeBook</span>
      </div>

      <nav className="space-y-8">
        {sidebarItems.map((group) => (
          <div key={group.title} className="space-y-3">
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-2">
              {group.title}
            </h4>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all group",
                      isActive 
                        ? "bg-primary/10 text-primary font-medium border border-primary/20 shadow-[0_0_15px_rgba(77,219,178,0.1)]" 
                        : "text-muted hover:text-white hover:bg-white/5"
                    )}
                  >
                    <item.icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted group-hover:text-accent")} />
                    {item.title}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}
