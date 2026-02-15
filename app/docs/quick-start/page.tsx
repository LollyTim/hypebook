"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Copy, Terminal, ExternalLink } from "lucide-react"

export default function QuickStartPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Getting Started</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">Quick Start: Deploy on HyperEVM</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          HyperEVM is a high-performance EVM-compatible layer built on the Hyperliquid L1. 
          This guide will help you deploy your first smart contract in under 5 minutes.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Add HyperEVM Testnet to MetaMask</h2>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 space-y-4">
          <p className="text-muted-foreground">Network Details:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NetworkDetail label="Network Name" value="HyperEVM Testnet" />
            <NetworkDetail label="RPC URL" value="https://rpc.hyperliquid-testnet.xyz/evm" />
            <NetworkDetail label="Chain ID" value="998" />
            <NetworkDetail label="Currency Symbol" value="PURR" />
          </div>
          <Button className="w-full bg-primary text-background font-bold glow-mint hover:bg-primary/90 mt-4">
            Add to MetaMask Automatically
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Get Testnet Tokens</h2>
        <p className="text-muted-foreground">
          You'll need testnet PURR to pay for gas. Head over to the official faucet:
        </p>
        <a 
          href="https://faucet.hyperliquid-testnet.xyz" 
          target="_blank" 
          className="flex items-center justify-between p-4 bg-[#141419] border border-[#333344] rounded-xl group hover:border-accent/40 transition-all"
        >
          <span className="font-medium">HyperEVM Testnet Faucet</span>
          <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
        </a>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Deploy using Hardhat</h2>
        <p className="text-muted-foreground">Initialize your project and install dependencies:</p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-4 overflow-x-auto font-mono text-sm relative group">
          <pre className="text-accent">
            {`mkdir my-hype-project && cd my-hype-project
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox`}
          </pre>
          <button className="absolute top-4 right-4 p-2 bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </section>

      <div className="flex items-center justify-between pt-10 border-t border-[#333344]">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Previous</span>
          <span className="text-primary hover:underline cursor-pointer">Introduction</span>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Next</span>
          <span className="text-primary hover:underline cursor-pointer">Core Architecture</span>
        </div>
      </div>
    </div>
  )
}

function NetworkDetail({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col p-3 bg-black/20 rounded-lg border border-white/5">
      <span className="text-xs text-muted-foreground mb-1">{label}</span>
      <span className="font-mono text-sm text-white select-all">{value}</span>
    </div>
  )
}
