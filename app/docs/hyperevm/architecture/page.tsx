"use client"

import { Badge } from "@/components/ui/badge"
import { Cpu, Zap, Globe, Lock, Database, ArrowLeftRight } from "lucide-react"

export default function ArchitecturePage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Core Concepts</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">HyperEVM Architecture</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Hyperliquid is a performant L1 blockchain built with the vision of a fully on-chain open financial system.
          It combines a native high-performance trading engine (<strong className="text-white">HyperCore</strong>) with
          a general-purpose EVM execution layer (<strong className="text-white">HyperEVM</strong>), both secured
          by the <strong className="text-white">HyperBFT</strong> consensus mechanism.
        </p>
      </div>

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard value="200k" label="Orders / second" />
        <StatCard value="HyperBFT" label="Consensus" />
        <StatCard value="Cancun" label="EVM hardfork" />
        <StatCard value="EIP-1559" label="Fee mechanism" />
      </div>

      {/* The Stack */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Hyperliquid Stack</h2>
        <div className="bg-[#141419] border border-[#333344] rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />
          <div className="space-y-3 relative z-10">
            <StackLayer title="Your Smart Contracts / dApps" description="EVM contracts deployed on HyperEVM — DeFi, NFTs, DEXs, etc." color="primary" />
            <StackLayer title="HyperEVM" description="EVM-compatible execution layer. Cancun hardfork (no blob support). Chain ID: 999 (mainnet), 998 (testnet)." color="accent" />
            <StackLayer title="HyperCore" description="Native L1 order book handling perpetual futures and spot trading at 200k orders/sec." color="primary" />
            <StackLayer title="HyperBFT Consensus" description="Custom high-performance Byzantine Fault Tolerant consensus. Sub-second finality." color="accent" />
            <StackLayer title="P2P Network" description="Optimized validator networking for global block propagation." color="primary" />
          </div>
        </div>
      </section>

      {/* HyperCore vs HyperEVM */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">HyperCore vs HyperEVM</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#141419] border border-[#333344] rounded-xl space-y-4">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-white">HyperCore</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The native order book and trading engine. Handles perpetual futures, spot markets, and HIP-1/HIP-2 token mechanics.
              Operates through the <span className="text-primary font-mono">api.hyperliquid.xyz/info</span> and
              <span className="text-primary font-mono"> /exchange</span> REST/WebSocket API.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li className="flex gap-2"><span className="text-primary">•</span>200,000 orders per second</li>
              <li className="flex gap-2"><span className="text-primary">•</span>Sub-second finality</li>
              <li className="flex gap-2"><span className="text-primary">•</span>USDC margin for perps</li>
              <li className="flex gap-2"><span className="text-primary">•</span>Native HIP-1 spot tokens</li>
            </ul>
          </div>
          <div className="p-6 bg-[#141419] border border-[#333344] rounded-xl space-y-4">
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold text-white">HyperEVM</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              A general-purpose EVM execution environment. Deploy any Solidity contract. Interacts with HyperCore
              via precompiles and cross-chain transfers.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li className="flex gap-2"><span className="text-accent">•</span>Cancun EVM (no blob support)</li>
              <li className="flex gap-2"><span className="text-accent">•</span>HYPE as native gas token (18 decimals)</li>
              <li className="flex gap-2"><span className="text-accent">•</span>EIP-1559 fees — base + priority both burned</li>
              <li className="flex gap-2"><span className="text-accent">•</span>Standard JSON-RPC HTTP (no official WS)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dual Block Architecture */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Dual Block Architecture</h2>
        <p className="text-muted-foreground">
          HyperEVM uses two distinct block types optimized for different use cases:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#141419] border border-primary/20 rounded-xl space-y-3">
            <h3 className="font-bold text-white text-lg">Small Blocks</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gas limit</span>
                <span className="text-primary font-mono font-bold">2,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Block time</span>
                <span className="text-primary font-mono font-bold">~1 second</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              The default block type. Suitable for lightweight transactions but insufficient for most contract deployments.
            </p>
          </div>
          <div className="p-6 bg-[#141419] border border-accent/20 rounded-xl space-y-3">
            <h3 className="font-bold text-white text-lg">Big Blocks</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gas limit</span>
                <span className="text-accent font-mono font-bold">30,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Block time</span>
                <span className="text-accent font-mono font-bold">~1 minute</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Required for contract deployments. Must be explicitly enabled via the block toggle tool or LayerZero CLI.
            </p>
          </div>
        </div>
      </section>

      {/* Network Config */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Network Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NetworkCard
            label="Mainnet"
            chainId="999"
            rpc="https://rpc.hyperliquid.xyz/evm"
            api="https://api.hyperliquid.xyz/info"
          />
          <NetworkCard
            label="Testnet"
            chainId="998"
            rpc="https://rpc.hyperliquid-testnet.xyz/evm"
            api="https://api.hyperliquid-testnet.xyz/info"
          />
        </div>
      </section>

      {/* HYPE Transfer */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Transferring HYPE Between HyperCore ↔ HyperEVM</h2>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 space-y-3">
          <div className="flex items-center gap-3">
            <ArrowLeftRight className="w-5 h-5 text-primary" />
            <span className="font-bold text-white">System Transfer Address</span>
          </div>
          <p className="text-sm text-muted-foreground">
            To move HYPE from HyperCore to HyperEVM, send tokens to the system address:
          </p>
          <code className="block text-sm text-accent bg-black/40 px-4 py-3 rounded-lg font-mono break-all">
            0x2222222222222222222222222222222222222222
          </code>
          <p className="text-xs text-muted-foreground">
            This is a protocol-level address — transactions to this address trigger the native bridge mechanism.
          </p>
        </div>
      </section>
    </div>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-4 bg-[#141419] border border-[#333344] rounded-xl text-center">
      <div className="text-2xl font-bold text-primary font-mono">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  )
}

function StackLayer({ title, description, color }: { title: string; description: string; color: "primary" | "accent" }) {
  return (
    <div className={`p-4 bg-black/40 border rounded-lg flex items-center justify-between group hover:border-${color}/40 transition-all border-white/5`}>
      <div>
        <h4 className="font-bold text-white">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className={`w-2 h-2 rounded-full bg-${color} shrink-0 ml-4`} />
    </div>
  )
}

function NetworkCard({ label, chainId, rpc, api }: { label: string; chainId: string; rpc: string; api: string }) {
  return (
    <div className="p-6 bg-[#141419] border border-[#333344] rounded-xl space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-white text-lg">{label}</h3>
        <Badge variant="secondary" className="font-mono">Chain ID: {chainId}</Badge>
      </div>
      <div className="space-y-2 text-sm">
        <div>
          <span className="text-muted-foreground text-xs uppercase tracking-wider">EVM RPC</span>
          <code className="block text-accent bg-black/40 px-3 py-1.5 rounded mt-1 font-mono text-xs break-all">{rpc}</code>
        </div>
        <div>
          <span className="text-muted-foreground text-xs uppercase tracking-wider">Info API</span>
          <code className="block text-primary bg-black/40 px-3 py-1.5 rounded mt-1 font-mono text-xs break-all">{api}</code>
        </div>
      </div>
    </div>
  )
}
