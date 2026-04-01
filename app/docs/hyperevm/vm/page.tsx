"use client"

import { Badge } from "@/components/ui/badge"
import { Cpu, Flame, AlertTriangle, Info, Code2 } from "lucide-react"
import type { Metadata } from "next"

export default function VMPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">EVM</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">HyperEVM Virtual Machine</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          HyperEVM is a fully EVM-compatible execution environment built into the Hyperliquid L1.
          It derives its security from HyperBFT consensus and supports standard Solidity tooling
          (Foundry, Hardhat, ethers.js, wagmi) with no modifications required.
        </p>
      </div>

      {/* Key specs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SpecRow label="EVM Hardfork" value="Cancun (no blob / EIP-4844 support)" />
          <SpecRow label="Native Gas Token" value="HYPE — 18 decimals, both networks" />
          <SpecRow label="Fee Mechanism" value="EIP-1559 — base fee + priority fee, both burned" />
          <SpecRow label="Fee Burn Destination" value="Zero address EVM balance (0x000...000)" />
          <SpecRow label="JSON-RPC" value="Standard HTTP supported" />
          <SpecRow label="WebSocket" value="Not available on official endpoint" />
          <SpecRow label="Mainnet Chain ID" value="999" />
          <SpecRow label="Testnet Chain ID" value="998" />
        </div>
      </section>

      {/* Fee burning */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Fee Burning</h2>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 space-y-3">
          <div className="flex items-center gap-3">
            <Flame className="w-5 h-5 text-orange-400" />
            <h3 className="font-bold text-white">Both Base Fee and Priority Fee Are Burned</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Unlike Ethereum (where priority fees go to validators), HyperEVM burns priority fees by routing them
            to the zero address's EVM balance. This means 100% of gas fees paid by users are permanently removed
            from supply.
          </p>
          <div className="bg-black/40 rounded-lg p-4 font-mono text-sm">
            <div className="text-muted-foreground">{"// Fee routing"}</div>
            <div className="text-primary mt-1">base_fee <span className="text-white">→</span> burned (zero address)</div>
            <div className="text-primary">priority_fee <span className="text-white">→</span> burned (zero address EVM balance)</div>
            <div className="text-muted-foreground mt-2 text-xs">{"// Validators do NOT receive priority fees"}</div>
          </div>
        </div>
      </section>

      {/* Block types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Block Types for Contract Deployment</h2>
        <div className="flex items-start gap-3 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
          <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
          <p className="text-sm text-orange-200">
            <strong>Important:</strong> Small blocks have a 2M gas limit — not enough to deploy most contracts.
            You must switch to <strong>big blocks</strong> (30M gas limit) before deploying.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-[#141419] border border-[#333344] rounded-xl">
            <h4 className="font-bold text-white mb-2">Option 1 — Web Toggle</h4>
            <p className="text-sm text-muted-foreground">
              Use the community block toggle interface at{" "}
              <span className="text-accent font-mono">hyperevm-block-toggle.vercel.app</span> to switch your
              address to big blocks mode.
            </p>
          </div>
          <div className="p-5 bg-[#141419] border border-[#333344] rounded-xl">
            <h4 className="font-bold text-white mb-2">Option 2 — LayerZero CLI</h4>
            <p className="text-sm text-muted-foreground">
              Use the LayerZero CLI tool to toggle big block mode programmatically for your deployer address.
            </p>
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">EVM Compatibility</h2>
        <p className="text-muted-foreground text-sm">
          HyperEVM is compatible with all standard Ethereum tooling targeting the Cancun hardfork:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Foundry", "Hardhat", "ethers.js", "wagmi", "viem", "OpenZeppelin", "Chainlist", "MetaMask"].map(tool => (
            <div key={tool} className="flex items-center gap-2 p-3 bg-[#141419] border border-[#333344] rounded-lg">
              <Code2 className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm text-white">{tool}</span>
            </div>
          ))}
        </div>
      </section>

      {/* RPC endpoints quick ref */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Quick Reference — RPC Endpoints</h2>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 font-mono text-sm space-y-4">
          <div>
            <div className="text-muted-foreground text-xs mb-1">{"// Mainnet (Chain ID: 999)"}</div>
            <div className="text-accent">https://rpc.hyperliquid.xyz/evm</div>
          </div>
          <div>
            <div className="text-muted-foreground text-xs mb-1">{"// Testnet (Chain ID: 998)"}</div>
            <div className="text-primary">https://rpc.hyperliquid-testnet.xyz/evm</div>
          </div>
          <div>
            <div className="text-muted-foreground text-xs mb-1">{"// Chainlist reference"}</div>
            <div className="text-muted-foreground">chainlist.org/chain/998  (testnet)</div>
            <div className="text-muted-foreground">chainlist.org/chain/999  (mainnet)</div>
          </div>
        </div>
      </section>

      <div className="flex items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-xl">
        <Info className="w-5 h-5 text-accent shrink-0" />
        <p className="text-sm text-muted-foreground">
          Source:{" "}
          <a href="https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm" target="_blank" className="text-accent underline">
            Official Hyperliquid GitBook — HyperEVM
          </a>
        </p>
      </div>
    </div>
  )
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-[#141419] border border-[#333344] rounded-xl">
      <div className="flex-1">
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
        <div className="text-white font-medium mt-0.5">{value}</div>
      </div>
    </div>
  )
}
