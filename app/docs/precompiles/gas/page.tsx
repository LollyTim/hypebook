"use client"

import { Badge } from "@/components/ui/badge"
import { AlertCircle, Terminal, Zap, ShieldCheck } from "lucide-react"

export default function GasMechanicsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Advanced</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">HyperEVM Gas Mechanics</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Understanding how gas is calculated and optimized on the Hyperliquid L1.
        </p>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 flex gap-4 items-start">
        <Zap className="w-6 h-6 text-primary shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-white">Zero-Fee Design Philosophy</h4>
          <p className="text-sm text-muted-foreground">While HyperEVM uses gas to prevent spam, the underlying L1 is optimized for near-zero operational costs, allowing for significantly lower fees than traditional Ethereum L2s.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">The PURR Asset</h2>
        <p className="text-muted-foreground">
          PURR is the native utility asset used to pay for computational resources on HyperEVM.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GasStat label="Base Fee" value="0.00001 PURR" />
          <GasStat label="Block Gas Limit" value="30,000,000" />
          <GasStat label="Target Gas" value="15,000,000" />
          <GasStat label="Priority Fee" value="Optional" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Native Precompiles</h2>
        <p className="text-muted-foreground">
          HyperEVM includes several native precompiles that allow smart contracts to interact directly with the L1 orderbook and liquidity pools at minimal gas cost.
        </p>
        <div className="space-y-3">
          <PrecompileItem name="L1_OrderBook" address="0x0000000000000000000000000000000000000101" />
          <PrecompileItem name="L1_Liquidity" address="0x0000000000000000000000000000000000000102" />
          <PrecompileItem name="L1_Bridge" address="0x0000000000000000000000000000000000000103" />
        </div>
      </section>

      <section className="space-y-4 bg-[#141419] border border-[#333344] rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-accent" />
          Anti-Spam Controls
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          HyperEVM implements dynamic gas pricing. If the network experiences a surge in transaction volume, the base fee automatically adjusts to maintain network stability and sub-second finality.
        </p>
      </section>
    </div>
  )
}

function GasStat({ label, value }: { label: string, value: string }) {
  return (
    <div className="p-4 bg-black/40 border border-white/5 rounded-lg">
      <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{label}</div>
      <div className="text-xl font-mono text-white">{value}</div>
    </div>
  )
}

function PrecompileItem({ name, address }: { name: string, address: string }) {
  return (
    <div className="p-4 bg-[#141419] border border-[#333344] rounded-lg flex items-center justify-between group hover:border-primary/20 transition-all">
      <span className="font-bold text-white group-hover:text-primary transition-colors">{name}</span>
      <code className="text-xs text-muted-foreground bg-black/50 px-2 py-1 rounded">{address}</code>
    </div>
  )
}
