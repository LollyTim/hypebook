"use client"

import { Badge } from "@/components/ui/badge"
import { Rocket, Wallet, Terminal, Search, ShieldCheck, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GettingStartedOverview() {
  const steps = [
    {
      title: "1. Setup Your Wallet",
      desc: "Connect to the Hyperliquid ecosystem using MetaMask or other EVM-compatible wallets.",
      icon: Wallet,
      href: "/docs/quick-start"
    },
    {
      title: "2. Bridge Assets",
      desc: "Move USDC from Arbitrum to Hyperliquid L1 using the native trustless bridge.",
      icon: Rocket,
      href: "/docs/hyperevm/architecture"
    },
    {
      title: "3. Choose Your Path",
      desc: "Start trading on the CLOB or deploy your first smart contract on HyperEVM.",
      icon: Terminal,
      href: "/docs/examples/contracts"
    }
  ]

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Onboarding</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-white">Getting Started</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Welcome to the Hyperliquid L1. This guide provides a high-level roadmap for users, traders, and developers entering the ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {steps.map((step, i) => (
          <Link 
            key={i} 
            href={step.href}
            className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-8 bg-[#141419] border border-[#333344] rounded-2xl hover:border-primary/40 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:glow-mint transition-all">
              <step.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
            <ArrowRight className="hidden md:block w-6 h-6 text-muted group-hover:text-primary transition-all group-hover:translate-x-1" />
          </Link>
        ))}
      </div>

      <section className="bg-accent/5 border border-accent/20 rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Search className="w-6 h-6 text-accent" />
          Developer Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResourceItem 
            title="RPC Endpoints" 
            desc="Connect your application to the network." 
            href="/docs/rpc"
          />
          <ResourceItem 
            title="SDKs & Tools" 
            desc="Python, Rust, and Typescript libraries." 
            href="/docs/ecosystem/tools"
          />
          <ResourceItem 
            title="Core Architecture" 
            desc="Learn about consensus and finality." 
            href="/docs/hyperevm/architecture"
          />
          <ResourceItem 
            title="Sample Contracts" 
            desc="Copy-paste code for common DeFi patterns." 
            href="/docs/examples/contracts"
          />
        </div>
      </section>
    </div>
  )
}

function ResourceItem({ title, desc, href }: { title: string, desc: string, href: string }) {
  return (
    <Link href={href} className="p-4 bg-black/40 border border-white/5 rounded-xl hover:border-accent/40 transition-all">
      <h4 className="font-bold text-white mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </Link>
  )
}
