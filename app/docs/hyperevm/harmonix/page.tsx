"use client"

import { Badge } from "@/components/ui/badge"
import { Code2, Cpu, Globe, Lock, Zap, Database, Server } from "lucide-react"

export default function HarmonixPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">HyperEVM Ecosystem</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-white">Harmonix</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The next-generation framework for building high-performance, interoperable DeFi applications on HyperEVM.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">What is Harmonix?</h2>
        <p className="text-muted-foreground">
          Harmonix is a specialized developer toolkit and architectural pattern designed to leverage the unique features of the Hyperliquid L1, such as sub-second finality and native orderbook access.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Feature icon={Cpu} title="Native Optimization" desc="Pre-built hooks into L1 precompiles for ultra-low latency execution." />
          <Feature icon={Lock} title="Security First" desc="Formal verification ready patterns for smart contract deployment." />
          <Feature icon={Zap} title="Sub-second UI" desc="Framework-level support for real-time state updates in the frontend." />
          <Feature icon={Globe} title="Interoperability" desc="Seamless communication between HyperEVM contracts and the native CLOB." />
        </div>
      </section>

      <section className="space-y-6 bg-[#141419] border border-[#333344] rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white">Building with Harmonix</h2>
        <p className="text-muted-foreground mb-6">Harmonix simplifies the "Builder's Guide" into manageable modules:</p>
        <div className="space-y-4">
          <ModuleItem title="State Sync" desc="Efficiently syncing your contract state with off-chain indices." />
          <ModuleItem title="Orderbook Hooks" desc="Directly trigger orderbook actions from within your Solidity contracts." />
          <ModuleItem title="Gas Management" desc="Advanced patterns for managing dynamic gas limits in high-throughput environments." />
        </div>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
        <p className="text-primary font-bold">"Harmonix turns the Hyperliquid L1 into a programmable financial engine."</p>
      </div>
    </div>
  )
}

function Feature({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-4 items-start p-4 bg-white/5 border border-white/5 rounded-lg">
      <Icon className="w-5 h-5 text-primary shrink-0 mt-1" />
      <div>
        <h4 className="font-bold text-white">{title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function ModuleItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-black/40 border border-[#333344] rounded-xl hover:border-accent/40 transition-all cursor-pointer group">
      <div>
        <h4 className="font-bold text-white group-hover:text-accent transition-colors">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
      <ArrowRight className="w-5 h-5 text-muted group-hover:text-accent transition-all" />
    </div>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  )
}
