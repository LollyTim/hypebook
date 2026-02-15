"use client"

import { Badge } from "@/components/ui/badge"
import { Search, Globe, Box, Shield, Zap, Terminal } from "lucide-react"

export default function RPCPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Network</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">RPC Endpoints & API</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Access the Hyperliquid L1 through our global RPC network. We provide both EVM-compatible and native API endpoints.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EndpointCard 
          title="HyperEVM Testnet RPC"
          url="https://rpc.hyperliquid-testnet.xyz/evm"
          type="EVM (JSON-RPC)"
        />
        <EndpointCard 
          title="Native Info API"
          url="https://api.hyperliquid-testnet.xyz/info"
          type="POST (JSON)"
        />
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">WebSocket Feed</h2>
        <p className="text-muted-foreground">For real-time data, subscribe to our WebSocket streaming service.</p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 font-mono text-sm">
          <div className="text-muted-foreground mb-4 font-sans italic">// WebSocket URL</div>
          <div className="text-accent mb-6">wss://api.hyperliquid.xyz/ws</div>
          
          <div className="text-muted-foreground mb-4 font-sans italic">// Example Subscription (All Mids)</div>
          <pre className="text-primary">
{`{
  "method": "subscribe",
  "subscription": { "type": "allMids" }
}`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Rate Limits</h2>
        <div className="bg-[#141419] border border-[#333344] rounded-xl overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 text-muted-foreground uppercase text-xs">
              <tr>
                <th className="px-6 py-4 font-bold">Action</th>
                <th className="px-6 py-4 font-bold">Limit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#333344]">
              <TableRow action="Public Info (REST)" limit="20 req / second" />
              <TableRow action="Exchange (REST)" limit="120 req / minute" />
              <TableRow action="WebSocket Messages" limit="1,000 / minute" />
              <TableRow action="EVM RPC" limit="50 req / second" />
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

function EndpointCard({ title, url, type }: { title: string, url: string, type: string }) {
  return (
    <div className="p-6 bg-[#141419] border border-[#333344] rounded-xl group hover:border-primary/30 transition-all">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-white">{title}</h3>
        <Badge variant="secondary" className="text-[10px] uppercase">{type}</Badge>
      </div>
      <code className="text-sm text-accent bg-black/40 px-3 py-2 rounded block truncate select-all">{url}</code>
    </div>
  )
}

function TableRow({ action, limit }: { action: string, limit: string }) {
  return (
    <tr className="hover:bg-white/[0.02] transition-colors">
      <td className="px-6 py-4 text-white font-medium">{action}</td>
      <td className="px-6 py-4 text-muted-foreground font-mono">{limit}</td>
    </tr>
  )
}
