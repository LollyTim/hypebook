"use client"

import { Badge } from "@/components/ui/badge"
import { Code2, Play, CheckCircle, Copy, Terminal } from "lucide-react"

export default function BuilderGuidePage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Developer Path</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-white">Builder's Guide</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The ultimate roadmap for developing on the Hyperliquid L1. From environment setup to advanced protocol integration.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Step 1: Environment Setup</h2>
        <p className="text-muted-foreground">We recommend using <strong>Foundry</strong> for smart contract development due to its speed and native support for EVM-compatible chains.</p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-4 overflow-x-auto font-mono text-sm relative group">
          <pre className="text-primary">
            {`curl -L https://foundry.paradigm.xyz | bash
foundryup
forge init my-project`}
          </pre>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Step 2: Connecting to HyperEVM</h2>
        <p className="text-muted-foreground">Configure your <code>foundry.toml</code> to point to the HyperEVM testnet.</p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 font-mono text-sm">
          <pre className="text-accent">
{`[rpc_endpoints]
hyperevm = "https://rpc.hyperliquid-testnet.xyz/evm"

[etherscan]
hyperevm = { key = "not-needed", url = "https://testnet.hyperevm.xyz/api" }`}
          </pre>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-white">Step 3: Advanced Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IntegrationCard 
            title="L1 Orderbook Access"
            desc="Use the L1_Orderbook precompile to place orders directly from Solidity."
          />
          <IntegrationCard 
            title="Native Asset Minting"
            desc="Create native assets on Hyperliquid that are tradable on the spot CLOB."
          />
          <IntegrationCard 
            title="Cross-chain Logic"
            desc="Listen for bridge events to trigger actions on the L1."
          />
          <IntegrationCard 
            title="Gas Optimization"
            desc="Implement custom gas tracking for high-frequency operations."
          />
        </div>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 space-y-4">
        <h3 className="text-2xl font-bold text-white">Need Help?</h3>
        <p className="text-muted-foreground">Join the Hyperliquid Discord and look for the #builder-chat channel for real-time support from the core team and community.</p>
        <button className="bg-primary text-background font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-all glow-mint">
          Join Discord
        </button>
      </div>
    </div>
  )
}

function IntegrationCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-6 bg-white/5 border border-[#333344] rounded-xl hover:border-accent/40 transition-all group">
      <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
      <h4 className="font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
  )
}
