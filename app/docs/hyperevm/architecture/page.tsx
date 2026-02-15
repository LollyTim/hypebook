"use client"

import { Badge } from "@/components/ui/badge"
import { Code2, Cpu, Globe, Lock, Zap } from "lucide-react"

export default function ArchitecturePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Core Concepts</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">Core Architecture</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          HyperEVM is a custom-built L1 that balances extreme performance with full EVM compatibility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard 
          icon={Zap}
          title="Sub-second Finality"
          description="Powered by the Hyperliquid consensus engine, transactions reach finality in less than one second."
        />
        <FeatureCard 
          icon={Lock}
          title="On-chain Governance"
          description="Core protocol parameters and upgrades are decided by HL token holders."
        />
        <FeatureCard 
          icon={Cpu}
          title="Native Optimization"
          description="HyperEVM is not just a fork; it's optimized at the binary level for high-throughput DeFi."
        />
        <FeatureCard 
          icon={Globe}
          title="Global Liquidity"
          description="Directly tap into the native Hyperliquid liquidity pools from any smart contract."
        />
      </div>

      <section className="space-y-4 pt-10">
        <h2 className="text-2xl font-bold text-white">The Hyperliquid Stack</h2>
        <div className="bg-[#141419] border border-[#333344] rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />
          <div className="space-y-6 relative z-10">
            <StackLayer title="Application Layer" description="DEX, Perpetuals, and your Smart Contracts" />
            <StackLayer title="HyperEVM" description="Fully compatible Ethereum Virtual Machine" />
            <StackLayer title="Hyperliquid Consensus" description="High-performance BFT engine" />
            <StackLayer title="P2P Layer" description="Optimized networking for global propagation" />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="p-6 bg-[#141419] border border-[#333344] rounded-xl hover:border-primary/30 transition-all">
      <Icon className="w-8 h-8 text-primary mb-4" />
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

function StackLayer({ title, description }: { title: string, description: string }) {
  return (
    <div className="p-4 bg-black/40 border border-white/5 rounded-lg flex items-center justify-between group hover:border-accent/40 transition-all">
      <div>
        <h4 className="font-bold text-white group-hover:text-accent transition-colors">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="w-2 h-2 rounded-full bg-primary glow-mint" />
    </div>
  )
}
