"use client"

import { Badge } from "@/components/ui/badge"
import { Globe, Shield, Zap, TrendingUp, Anchor, Database, Cpu } from "lucide-react"

export default function WhatIsHyperliquid() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Protocol</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-white">What is Hyperliquid?</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Hyperliquid is a performant L1 blockchain built with the vision of a fully on-chain open financial system.
          It combines a native high-performance trading engine with a general-purpose EVM — all secured by the
          custom <strong className="text-white">HyperBFT</strong> consensus mechanism.
        </p>
      </div>

      {/* Live stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard value="200k" label="Orders per second" />
        <StatCard value="HyperBFT" label="Consensus" />
        <StatCard value="Chain ID 999" label="Mainnet" />
        <StatCard value="Chain ID 998" label="Testnet" />
      </div>

      {/* Feature cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={Zap}
          title="High Performance"
          description="Handles 200,000 orders per second with sub-second finality via the HyperBFT consensus engine."
        />
        <FeatureCard
          icon={Shield}
          title="Fully On-chain"
          description="Order books, perpetual markets, and spot trading all run on-chain — no off-chain matching engines."
        />
        <FeatureCard
          icon={TrendingUp}
          title="Vertical Integration"
          description="Native CLOB, perpetuals, and spot trading are built directly into the L1 protocol alongside HyperEVM."
        />
      </section>

      {/* Core components */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">The Two Core Components</h2>
        <p className="text-muted-foreground">
          Hyperliquid is composed of two tightly integrated systems:
        </p>
        <div className="space-y-4">
          <ComponentItem
            icon={Database}
            title="HyperCore"
            description="The native L1 trading engine. Handles perpetual futures and spot order books at 200k orders/second. Accessed via the REST and WebSocket APIs (api.hyperliquid.xyz). Supports HIP-1 native tokens, HIP-2 Hyperliquidity, and HIP-3 builder-deployed perpetuals."
          />
          <ComponentItem
            icon={Cpu}
            title="HyperEVM"
            description="A general-purpose EVM-compatible smart contract platform built into the same L1. Supports Cancun hardfork (no blob support). Uses HYPE as the native gas token. Chain ID 999 on mainnet, 998 on testnet. Deploy any Solidity contract with standard tooling."
          />
          <ComponentItem
            icon={Globe}
            title="HyperBFT"
            description="The custom Byzantine Fault Tolerant consensus mechanism powering both HyperCore and HyperEVM. Provides sub-second finality and is operated by a decentralized validator set."
          />
        </div>
      </section>

      {/* Why section */}
      <section className="bg-[#141419] border border-[#333344] rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Why Build on Hyperliquid?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h4 className="font-bold text-primary flex items-center gap-2">
              <Anchor className="w-4 h-4" /> For Traders
            </h4>
            <p className="text-sm text-muted-foreground">
              Ultra-low latency, deep native liquidity, and a full self-custody CEX experience. No off-chain
              matching or centralized components.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-primary flex items-center gap-2">
              <Database className="w-4 h-4" /> For Builders
            </h4>
            <p className="text-sm text-muted-foreground">
              Deploy EVM contracts that interact directly with L1 order book precompiles.
              Build perp DEXs (HIP-3), launch tokens (HIP-1), or create DeFi protocols with native liquidity access.
            </p>
          </div>
        </div>
      </section>

      {/* Native bridge note */}
      <section className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-2">
        <h3 className="font-bold text-white">Native Bridge</h3>
        <p className="text-sm text-muted-foreground">
          USDC can be bridged from Arbitrum to Hyperliquid L1 using the native trustless bridge.
          HYPE transfers between HyperCore and HyperEVM use the system address{" "}
          <code className="text-accent font-mono">0x2222222222222222222222222222222222222222</code>.
        </p>
      </section>
    </div>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-4 bg-[#141419] border border-[#333344] rounded-xl text-center">
      <div className="text-xl font-bold text-primary font-mono">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
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

function ComponentItem({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="flex gap-4 p-5 bg-white/5 border border-white/5 rounded-lg hover:border-primary/20 transition-all">
      <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
      <div>
        <h4 className="font-bold text-white mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
