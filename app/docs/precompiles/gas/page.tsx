"use client"

import { Badge } from "@/components/ui/badge"
import { Flame, Zap, AlertTriangle, Info, ArrowLeftRight } from "lucide-react"

export default function GasMechanicsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Gas & Fees</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">HyperEVM Gas Mechanics</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          HyperEVM uses <strong className="text-white">HYPE</strong> as its native gas token and implements
          EIP-1559 fee mechanics — with a key difference: both the base fee <em>and</em> priority fee are fully burned.
        </p>
      </div>

      <div className="flex items-start gap-3 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
        <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
        <p className="text-sm text-orange-200">
          <strong>Gas token is HYPE.</strong> PURR is a community memecoin — it is not used for gas.
          You need HYPE on HyperEVM to pay transaction fees.
        </p>
      </div>

      {/* EIP-1559 section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">EIP-1559 With Full Burns</h2>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Flame className="w-5 h-5 text-orange-400" />
            <h3 className="font-bold text-white">All Fees Go to the Zero Address</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            On Ethereum, validators receive the priority fee. On HyperEVM, priority fees are routed to
            the zero address's EVM balance. Combined with the base fee burn, this means
            <strong className="text-white"> 100% of all gas fees paid are permanently removed from supply</strong>.
          </p>
          <div className="bg-black/40 rounded-lg p-4 font-mono text-sm space-y-1">
            <div className="text-muted-foreground text-xs">{"// HyperEVM fee routing"}</div>
            <div className="text-primary">base_fee <span className="text-white">→</span> <span className="text-orange-400">burned</span></div>
            <div className="text-primary">priority_fee <span className="text-white">→</span> <span className="text-orange-400">burned (zero address EVM balance)</span></div>
            <div className="text-muted-foreground text-xs mt-2">{"// Validators do NOT receive any portion of fees"}</div>
          </div>
        </div>
      </section>

      {/* Block gas limits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Block Gas Limits by Block Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#141419] border border-[#333344] rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white">Small Blocks (Default)</h3>
              <Badge variant="secondary">~1 sec</Badge>
            </div>
            <div className="space-y-2 text-sm">
              <GasRow label="Gas Limit" value="2,000,000" />
              <GasRow label="Target Gas" value="1,000,000" />
              <GasRow label="Block Time" value="~1 second" />
            </div>
            <p className="text-xs text-muted-foreground">
              Fast and cheap. Sufficient for token transfers, swaps, and simple calls.
              Not enough gas for most contract deployments.
            </p>
          </div>
          <div className="p-6 bg-[#141419] border border-accent/20 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white">Big Blocks</h3>
              <Badge variant="outline" className="text-accent border-accent/30">~1 min</Badge>
            </div>
            <div className="space-y-2 text-sm">
              <GasRow label="Gas Limit" value="30,000,000" />
              <GasRow label="Target Gas" value="15,000,000" />
              <GasRow label="Block Time" value="~1 minute" />
            </div>
            <p className="text-xs text-muted-foreground">
              Required for contract deployment. Must be explicitly enabled per-address using the
              block toggle tool or LayerZero CLI.
            </p>
          </div>
        </div>
      </section>

      {/* Switching to big blocks */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Switching to Big Blocks</h2>
        <p className="text-muted-foreground text-sm">
          By default, your address routes transactions to small blocks. To deploy contracts, you must opt in:
        </p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 space-y-3 font-mono text-sm">
          <div className="text-muted-foreground text-xs font-sans">{"// Via API action (raw)"}</div>
          <pre className="text-primary">{`{
  "type": "evmUserModify",
  "usingBigBlocks": true
}`}</pre>
          <div className="text-muted-foreground text-xs font-sans mt-3">{"// Or use the web UI"}</div>
          <div className="text-accent">hyperevm-block-toggle.vercel.app</div>
        </div>
        <p className="text-xs text-muted-foreground">
          Note: your deployer address must be a HyperCore user (has received USDC or HYPE on Core side) to submit this action.
        </p>
      </section>

      {/* Gas price estimation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Gas Price Estimation</h2>
        <p className="text-muted-foreground text-sm">
          HyperEVM exposes a custom JSON-RPC method for estimating big block base fees:
        </p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 font-mono text-sm">
          <div className="text-muted-foreground text-xs mb-2 font-sans">{"// Get estimated base fee for next big block"}</div>
          <pre className="text-accent">{`{
  "jsonrpc": "2.0",
  "method": "bigBlockGasPrice",
  "params": [],
  "id": 1
}`}</pre>
          <div className="text-muted-foreground text-xs mt-4 font-sans">
            Use <span className="text-primary">eth_gasPrice</span> for small block estimation (standard).
          </div>
        </div>
      </section>

      {/* Mempool */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Mempool Behavior</h2>
        <div className="space-y-3">
          <InfoItem text="Two independent mempools — one for small blocks, one for big blocks." />
          <InfoItem text="Each address can have at most 8 pending nonces in the mempool at once." />
          <InfoItem text="Transactions older than 1 day are automatically pruned." />
          <InfoItem text="Block and transaction data are accessible via standard JSON-RPC (eth_getBlockByNumber, eth_getTransactionReceipt, etc.)." />
        </div>
      </section>
    </div>
  )
}

function GasRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-1 border-b border-white/5">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-white font-mono font-bold">{value}</span>
    </div>
  )
}

function InfoItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 p-4 bg-[#141419] border border-[#333344] rounded-xl text-sm text-muted-foreground">
      <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  )
}
