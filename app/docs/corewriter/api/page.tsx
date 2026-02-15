"use client"

import { Badge } from "@/components/ui/badge"
import { Code2, Play, CheckCircle, AlertTriangle, FileJson } from "lucide-react"

export default function CoreWriterPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Protocol Level</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">CoreWriter API</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The CoreWriter is the low-latency gateway to the Hyperliquid L1, bypassing traditional EVM overhead for order placement.
        </p>
      </div>

      <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 flex gap-4 items-start">
        <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-white">Internal Only Warning</h4>
          <p className="text-sm text-muted-foreground">The CoreWriter API is designed for high-frequency trading and protocol-level integration. It requires signing transactions using Hyperliquid's custom EIP-712 schemas.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Action Types</h2>
        <p className="text-muted-foreground">Every interaction with the CoreWriter is defined by an <code>action</code> object.</p>
        
        <div className="space-y-4">
          <ActionItem 
            name="Order" 
            desc="Place a limit, market, or trigger order on the CLOB." 
          />
          <ActionItem 
            name="Cancel" 
            desc="Cancel one or more pending orders by ID." 
          />
          <ActionItem 
            name="UpdateLeverage" 
            desc="Modify the leverage for a specific asset position." 
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">EIP-712 Signing</h2>
        <p className="text-muted-foreground">To submit an action, you must sign it. The domain separator varies by network:</p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 font-mono text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-muted-foreground mb-2 font-sans italic">// Testnet Domain</div>
              <pre className="text-accent text-xs">
{`{
  name: "HyperliquidExchange",
  version: "1",
  chainId: 998,
  verifyingContract: "0x..."
}`}
              </pre>
            </div>
            <div>
              <div className="text-muted-foreground mb-2 font-sans italic">// Mainnet Domain</div>
              <pre className="text-primary text-xs">
{`{
  name: "HyperliquidExchange",
  version: "1",
  chainId: 999,
  verifyingContract: "0x..."
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Response Handling</h2>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 font-mono text-sm text-primary">
{`{
  "status": "ok",
  "response": {
    "type": "order",
    "data": { "resting_orders": [{ "oid": 12345 }] }
  }
}`}
        </div>
      </section>
    </div>
  )
}

function ActionItem({ name, desc }: { name: string, desc: string }) {
  return (
    <div className="p-4 bg-white/5 border border-[#333344] rounded-lg flex items-start gap-4">
      <div className="p-2 bg-primary/10 rounded-md">
        <Code2 className="w-4 h-4 text-primary" />
      </div>
      <div>
        <div className="font-bold text-white">{name}</div>
        <div className="text-sm text-muted-foreground">{desc}</div>
      </div>
    </div>
  )
}
