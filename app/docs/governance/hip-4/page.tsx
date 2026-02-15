"use client"

import { Badge } from "@/components/ui/badge"
import { Shield, Zap, TrendingUp, AlertCircle, Info, Sparkles } from "lucide-react"

export default function HIP4Page() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Governance & Upgrades</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-white">HIP-4: Making All Markets Hyperliquid</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The upcoming Hyperliquid Improvement Proposal (HIP-4) represents a massive leap in decentralizing market creation and liquidity scaling.
        </p>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 flex gap-6 items-start">
        <Sparkles className="w-10 h-10 text-primary shrink-0 mt-1" />
        <div className="space-y-2">
          <h4 className="font-bold text-white text-lg">The Vision</h4>
          <p className="text-muted-foreground">HIP-4 aims to eliminate the friction of centralized market listings by allowing the protocol to scale to thousands—or even tens of thousands—of permissionless markets while maintaining sub-second finality.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Core Pillars of HIP-4</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DetailCard 
            title="Permissionless Listings"
            desc="Users and builders can initiate new markets without waiting for core team approval, backed by native protocol liquidity."
          />
          <DetailCard 
            title="Isolated Margin for New Assets"
            desc="Enhanced risk management for long-tail assets to protect the overall health of the L1 CLOB."
          />
          <DetailCard 
            title="Enhanced HLP Utility"
            desc="The Hyperliquid Liquidity Provider (HLP) vaults will gain expanded roles in supporting these new markets."
          />
          <DetailCard 
            title="Gas Efficiency"
            desc="Optimizations to ensure that the influx of new markets does not degrade the sub-second finality performance."
          />
        </div>
      </section>

      <section className="bg-white/5 border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Info className="w-5 h-5 text-accent" />
          <h4 className="font-bold text-white">Community Impact</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This proposal is the culmination of months of research into decentralized orderbooks. It essentially turns Hyperliquid into a self-scaling liquidity layer for any asset, from major blue-chips to long-tail meme tokens.
        </p>
      </section>

      <div className="flex items-center justify-between p-6 bg-card border border-border rounded-xl">
        <div className="text-sm text-muted-foreground">Source: hyperliquidr.xyz</div>
        <Badge className="bg-primary text-background">Status: Proposed / Coming Soon</Badge>
      </div>
    </div>
  )
}

function DetailCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-6 bg-[#141419] border border-[#333344] rounded-xl hover:border-primary/30 transition-all">
      <h3 className="font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}
