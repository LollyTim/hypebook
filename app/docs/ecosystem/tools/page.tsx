"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, Terminal, Code2, Tooltip, Tool } from "lucide-react"

export default function EcosystemTools() {
  const tools = [
    {
      name: "Hyperliquid Python SDK",
      desc: "Official Python library for Info and Exchange API interactions.",
      link: "https://github.com/hyperliquid-dex/hyperliquid-python-sdk",
      tags: ["Official", "SDK", "Python"]
    },
    {
      name: "Hyperliquid Rust SDK",
      desc: "High-performance Rust implementation for protocol-level interactions.",
      link: "https://github.com/hyperliquid-dex/hyperliquid-rust-sdk",
      tags: ["Official", "SDK", "Rust"]
    },
    {
      name: "Hyperliquid Typescript SDK",
      desc: "Full-featured SDK for web-based frontends and Node.js applications.",
      link: "https://github.com/hyperliquid-dex/hyperliquid-js-sdk",
      tags: ["Community", "SDK", "Typescript"]
    },
    {
      name: "HyperEVM Explorer",
      desc: "Comprehensive block explorer for tracking transactions on the HyperEVM.",
      link: "https://testnet.hyperevm.xyz",
      tags: ["Explorer", "HyperEVM"]
    },
    {
      name: "HyperStats",
      desc: "Real-time dashboard for protocol health, volume, and open interest.",
      link: "https://hyperstats.xyz",
      tags: ["Community", "Analytics"]
    }
  ]

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Ecosystem</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-white">Ecosystem Tools</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A curated collection of SDKs, explorers, and community-built utilities for the Hyperliquid L1.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {tools.map((tool) => (
          <a 
            key={tool.name}
            href={tool.link}
            target="_blank"
            className="block p-6 bg-[#141419] border border-[#333344] rounded-xl hover:border-primary/40 transition-all group"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{tool.name}</h3>
                  <div className="flex gap-2">
                    {tool.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground uppercase font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{tool.desc}</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted group-hover:text-primary transition-all" />
            </div>
          </a>
        ))}
      </div>

      <section className="bg-accent/5 border border-accent/20 rounded-2xl p-8 space-y-4">
        <h2 className="text-2xl font-bold text-white">Missing something?</h2>
        <p className="text-muted-foreground">
          Hyperliquid is an open ecosystem. If you've built a tool or project, submit it to be featured here.
        </p>
        <button className="bg-accent text-background font-bold px-6 py-2 rounded-lg hover:bg-accent/90 transition-all">
          Submit Project
        </button>
      </section>
    </div>
  )
}
