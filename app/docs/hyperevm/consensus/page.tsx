"use client"

import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ShieldCheck, Cpu, ArrowRight, Zap, Network } from "lucide-react"

export default function ConsensusPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Protocol</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-white">Hyperliquid Consensus</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The Hyperliquid L1 uses a custom high-performance BFT (Byzantine Fault Tolerance) consensus engine designed for financial applications.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">How it Works</h2>
        <p className="text-muted-foreground">
          Unlike Ethereum's PoS, Hyperliquid's consensus is optimized for <strong>sub-second finality</strong>. It achieves this by streamlining the block production and validation process.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DetailCard 
            icon={Zap}
            title="Immediate Finality"
            description="Once a block is committed by the validator set, it is final. There are no reorganizations (reorgs)."
          />
          <DetailCard 
            icon={ShieldCheck}
            title="Validator Set"
            description="A permissioned-to-become-permissionless set of nodes that vote on block validity in real-time."
          />
        </div>
      </section>

      <section className="space-y-6 bg-[#141419] border border-[#333344] rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Network className="w-6 h-6 text-primary" />
          The Pipeline
        </h2>
        <div className="space-y-8 pt-4">
          <Step 
            number="1" 
            title="Order Entry" 
            desc="Users submit orders via CoreWriter or EVM RPC." 
          />
          <Step 
            number="2" 
            title="Ordering" 
            desc="Validators agree on the sequence of transactions for the next block." 
          />
          <Step 
            number="3" 
            title="Execution" 
            desc="Transactions are executed against the L1 orderbook and HyperEVM state." 
          />
          <Step 
            number="4" 
            title="Commitment" 
            desc="The state transition is finalized and broadcast to all observers." 
          />
        </div>
      </section>

      <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-2">
          <Cpu className="w-5 h-5 text-primary" />
          <h4 className="font-bold text-white">Performance Metrics</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The consensus engine is currently capable of processing 20,000+ operations per second on the Testnet, with targets of 100k+ as the validator set optimizes.
        </p>
      </section>
    </div>
  )
}

function DetailCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="p-6 bg-white/5 border border-white/5 rounded-xl">
      <Icon className="w-6 h-6 text-primary mb-4" />
      <h3 className="font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function Step({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-background shrink-0 glow-mint">
        {number}
      </div>
      <div>
        <h4 className="font-bold text-white">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  )
}
