"use client"

import { Badge } from "@/components/ui/badge"
import { Globe, Shield, Zap, TrendingUp, Anchor, Database } from "lucide-react"

export default function WhatIsHyperliquid() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Protocol</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-white">What is Hyperliquid?</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Hyperliquid is a performant L1 blockchain purpose-built for finance, combining the performance of centralized exchanges with the security and transparency of decentralized finance.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={Zap}
          title="Performance"
          description="Sub-second finality with the capacity to handle thousands of orders per second."
        />
        <FeatureCard 
          icon={Shield}
          title="Decentralization"
          description="A fully decentralized validator set securing the L1 and its native components."
        />
        <FeatureCard 
          icon={TrendingUp}
          title="Vertical Integration"
          description="Native CLOB, Perpetuals, and Spot trading integrated directly into the protocol."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">The Native Components</h2>
        <p className="text-muted-foreground">
          Unlike generic blockchains, Hyperliquid features native financial primitives built into the consensus layer:
        </p>
        <div className="space-y-4">
          <ComponentItem 
            title="L1 CLOB (Central Limit Order Book)"
            description="The most gas-efficient order book in DeFi, providing CEX-like liquidity."
          />
          <ComponentItem 
            title="HyperEVM"
            description="A high-performance, EVM-compatible environment for custom smart contract logic."
          />
          <ComponentItem 
            title="Native Bridge"
            description="Secure, trustless bridging between Arbitrum and Hyperliquid L1."
          />
        </div>
      </section>

      <section className="bg-[#141419] border border-[#333344] rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Why Hyperliquid?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h4 className="font-bold text-primary flex items-center gap-2">
              <Anchor className="w-4 h-4" /> For Traders
            </h4>
            <p className="text-sm text-muted-foreground">Ultra-low latency, deep liquidity, and a familiar CEX interface with self-custody.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-primary flex items-center gap-2">
              <Database className="w-4 h-4" /> For Builders
            </h4>
            <p className="text-sm text-muted-foreground">Direct access to the L1 orderbook precompiles and high-throughput EVM execution.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="p-6 bg-[#141419] border border-[#333344] rounded-xl hover:border-primary/40 transition-all group">
      <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function ComponentItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex gap-4 p-4 bg-white/5 border border-white/5 rounded-lg">
      <div className="w-1.5 h-auto bg-primary rounded-full glow-mint" />
      <div>
        <h4 className="font-bold text-white">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
