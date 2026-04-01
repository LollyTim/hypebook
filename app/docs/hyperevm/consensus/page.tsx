"use client"

import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ShieldCheck, Cpu, Network, Zap, Users } from "lucide-react"

export default function ConsensusPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Protocol</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-white">HyperBFT Consensus</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Hyperliquid's custom Byzantine Fault Tolerant (BFT) consensus engine powers both HyperCore and HyperEVM.
          It is purpose-built for financial applications — prioritizing sub-second finality and
          200,000 orders per second throughput.
        </p>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard value="200k" label="Orders / second" />
        <StatCard value="<1s" label="Time to finality" />
        <StatCard value="No reorgs" label="Instant finality" />
        <StatCard value="BFT" label="Fault tolerance" />
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Key Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DetailCard
            icon={Zap}
            title="Sub-second Finality"
            description="Once a block is committed by the validator set, it is immediately final. There are no forks or chain reorganizations. This makes building financial applications significantly simpler — you don't need to wait for confirmations."
          />
          <DetailCard
            icon={ShieldCheck}
            title="Byzantine Fault Tolerant"
            description="The network can tolerate up to 1/3 of validators behaving maliciously or going offline. As long as 2/3+ of validators are honest and online, the chain continues to produce blocks."
          />
          <DetailCard
            icon={Users}
            title="Validator Set"
            description="A decentralized set of validators stake HYPE to participate in consensus. Validators vote on each block in real-time. Stake-weighted voting power determines which blocks get finalized."
          />
          <DetailCard
            icon={Cpu}
            title="Optimized for Finance"
            description="Unlike general-purpose blockchains, HyperBFT is co-designed with the order book execution layer. The consensus pipeline is tuned to minimize latency for order matching at 200k orders/second."
          />
        </div>
      </section>

      {/* Pipeline */}
      <section className="space-y-6 bg-[#141419] border border-[#333344] rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Network className="w-6 h-6 text-primary" />
          Transaction Lifecycle
        </h2>
        <div className="space-y-6 pt-2">
          <Step number="1" title="Submission" desc="Users submit transactions via the HyperCore API (REST/WebSocket) or via HyperEVM JSON-RPC." />
          <Step number="2" title="Mempool" desc="Transactions enter one of two mempools — the HyperCore action mempool or the EVM transaction mempool." />
          <Step number="3" title="Ordering" desc="The proposer validator assembles transactions into a block proposal. Other validators verify the ordering." />
          <Step number="4" title="Voting" desc="Validators broadcast votes. Once 2/3+ stake votes on a block, it is committed." />
          <Step number="5" title="Execution" desc="HyperCore order matching and HyperEVM state transitions execute against the finalized block." />
          <Step number="6" title="Finality" desc="The block is final immediately after commitment. No further confirmations needed." />
        </div>
      </section>

      {/* Staking */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Staking & Validators</h2>
        <div className="space-y-3">
          <InfoRow label="Staking token" value="HYPE" />
          <InfoRow label="Unbonding period" value="7 days" />
          <InfoRow label="Delegation" value="Available — delegate HYPE to validators you trust" />
          <InfoRow label="Claim rewards" value="Via cWithdraw action on the Exchange API" />
          <InfoRow label="Node repo" value="github.com/hyperliquid-dex/node" />
        </div>
        <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-xl mt-2">
          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Both validator and non-validating (observer) nodes are supported. See the{" "}
            <a href="https://github.com/hyperliquid-dex/node" target="_blank" className="text-accent underline">
              official node repository
            </a>{" "}
            for setup instructions.
          </p>
        </div>
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

function DetailCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="p-6 bg-white/5 border border-white/5 rounded-xl hover:border-primary/20 transition-all">
      <Icon className="w-6 h-6 text-primary mb-4" />
      <h3 className="font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

function Step({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="flex gap-5 items-start">
      <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center font-bold text-background text-sm shrink-0">
        {number}
      </div>
      <div>
        <h4 className="font-bold text-white">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-[#141419] border border-[#333344] rounded-xl">
      <span className="text-muted-foreground text-sm w-36 shrink-0">{label}</span>
      <span className="text-white text-sm font-medium">{value}</span>
    </div>
  )
}
