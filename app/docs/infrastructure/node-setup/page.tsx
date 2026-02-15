"use client"

import { Badge } from "@/components/ui/badge"
import { Terminal, Copy, Globe, Cpu } from "lucide-react"

export default function NodeSetupPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Infrastructure</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">Node Setup & Maintenance</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Learn how to run a HyperEVM node and contribute to the network's decentralization.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Hardware Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RequirementCard title="CPU" value="16+ Cores (High Clock Speed)" />
          <RequirementCard title="RAM" value="64GB+ DDR4/DDR5" />
          <RequirementCard title="Storage" value="2TB+ NVMe SSD (High IOPS)" />
          <RequirementCard title="Network" value="1Gbps+ Symmetrical" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">One-Line Installation</h2>
        <p className="text-muted-foreground">The easiest way to get started is using our official setup script:</p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-4 overflow-x-auto font-mono text-sm relative group">
          <pre className="text-primary">
            {`curl -sL https://setup.hyperliquid.xyz | bash`}
          </pre>
          <button className="absolute top-4 right-4 p-2 bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Docker Compose</h2>
        <p className="text-muted-foreground">For containerized environments, use our Docker template:</p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-4 overflow-x-auto font-mono text-sm">
          <pre className="text-muted-foreground">
            {`version: '3.8'
services:
  hyper-node:
    image: hyperliquid/node:latest
    ports:
      - "3000:3000"
      - "4000:4000"
    volumes:
      - ./data:/hl/data
    restart: always`}
          </pre>
        </div>
      </section>
    </div>
  )
}

function RequirementCard({ title, value }: { title: string, value: string }) {
  return (
    <div className="p-4 bg-[#141419] border border-[#333344] rounded-lg">
      <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{title}</div>
      <div className="text-lg font-bold text-white">{value}</div>
    </div>
  )
}
