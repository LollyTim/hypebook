"use client"

import { Badge } from "@/components/ui/badge"
import { Globe } from "lucide-react"

export default function RPCPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Network</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">RPC Endpoints & API</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Connect to HyperEVM via standard JSON-RPC or interact with HyperCore via the native REST and WebSocket APIs.
        </p>
      </div>

      {/* EVM RPC */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">HyperEVM RPC (JSON-RPC)</h2>
        <p className="text-muted-foreground text-sm">
          Standard Ethereum JSON-RPC over HTTP. WebSocket is not available on the official endpoint — use
          community providers like <span className="text-accent">HypeRPC</span> if you need WebSocket access.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EndpointCard
            title="Mainnet EVM RPC"
            url="https://rpc.hyperliquid.xyz/evm"
            chainId="999"
            type="EVM JSON-RPC"
          />
          <EndpointCard
            title="Testnet EVM RPC"
            url="https://rpc.hyperliquid-testnet.xyz/evm"
            chainId="998"
            type="EVM JSON-RPC"
          />
        </div>
      </section>

      {/* Native API */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">HyperCore Native API (REST)</h2>
        <p className="text-muted-foreground text-sm">
          POST requests with <code className="text-accent font-mono">Content-Type: application/json</code>.
          Used for querying perpetuals, spot markets, user positions, and funding data.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EndpointCard
            title="Mainnet Info API"
            url="https://api.hyperliquid.xyz/info"
            chainId="POST"
            type="REST JSON"
          />
          <EndpointCard
            title="Testnet Info API"
            url="https://api.hyperliquid-testnet.xyz/info"
            chainId="POST"
            type="REST JSON"
          />
        </div>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 font-mono text-sm space-y-3">
          <div className="text-muted-foreground font-sans text-xs uppercase tracking-wider">Example — fetch all mid prices</div>
          <pre className="text-primary whitespace-pre-wrap">{`POST https://api.hyperliquid.xyz/info
Content-Type: application/json

{
  "type": "allMids"
}`}</pre>
        </div>
      </section>

      {/* WebSocket */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">WebSocket (Real-time Feed)</h2>
        <p className="text-muted-foreground text-sm">Subscribe to live order book, trade, and position data.</p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 font-mono text-sm space-y-4">
          <div>
            <div className="text-muted-foreground font-sans text-xs uppercase tracking-wider mb-2">Mainnet WebSocket URL</div>
            <div className="text-accent">wss://api.hyperliquid.xyz/ws</div>
          </div>
          <div>
            <div className="text-muted-foreground font-sans text-xs uppercase tracking-wider mb-2">Testnet WebSocket URL</div>
            <div className="text-primary">wss://api.hyperliquid-testnet.xyz/ws</div>
          </div>
          <div>
            <div className="text-muted-foreground font-sans text-xs mb-2">{"// Subscribe to all mid prices"}</div>
            <pre className="text-white">{`{
  "method": "subscribe",
  "subscription": { "type": "allMids" }
}`}</pre>
          </div>
        </div>
      </section>

      {/* Rate limits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Rate Limits</h2>
        <div className="bg-[#141419] border border-[#333344] rounded-xl overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 text-muted-foreground uppercase text-xs">
              <tr>
                <th className="px-6 py-4 font-bold">Endpoint</th>
                <th className="px-6 py-4 font-bold">Limit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#333344]">
              <TableRow action="Info API (REST)" limit="20 req / second" />
              <TableRow action="Exchange API (REST)" limit="120 req / minute" />
              <TableRow action="WebSocket messages" limit="1,000 / minute" />
              <TableRow action="EVM RPC (JSON-RPC)" limit="50 req / second" />
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground">
          For higher throughput, consider community providers such as{" "}
          <a href="https://hyperrpc.xyz" target="_blank" className="text-accent underline">HypeRPC</a> or{" "}
          <a href="https://hydromancer.xyz" target="_blank" className="text-accent underline">Hydromancer API</a>.
        </p>
      </section>

      {/* Common API types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Common Info API Request Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { type: "allMids", desc: "All current mid prices for perpetuals and spot markets." },
            { type: "meta", desc: "Perpetuals metadata: asset names, decimals, leverage." },
            { type: "metaAndAssetCtxs", desc: "Metadata + live mark prices, funding rates, open interest." },
            { type: "clearinghouseState", desc: "User account: open positions, leverage, liquidation price, margin." },
            { type: "fundingHistory", desc: "Historical funding rates for a specific asset." },
            { type: "predictedFundings", desc: "Predicted funding rates across venues (Binance, Bybit, Hyperliquid)." },
            { type: "perpDeployAuctionStatus", desc: "Current Dutch auction timeline and gas price for HIP-3 deployment." },
            { type: "perpDexs", desc: "List all perpetual DEXs (native + builder-deployed via HIP-3)." },
          ].map(item => (
            <div key={item.type} className="p-4 bg-[#141419] border border-[#333344] rounded-xl">
              <code className="text-primary font-mono text-sm font-bold">{item.type}</code>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function EndpointCard({ title, url, chainId, type }: { title: string; url: string; chainId: string; type: string }) {
  return (
    <div className="p-6 bg-[#141419] border border-[#333344] rounded-xl group hover:border-primary/30 transition-all">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-white">{title}</h3>
        <div className="flex gap-2 flex-col items-end">
          <Badge variant="secondary" className="text-[10px] uppercase">{type}</Badge>
          <Badge variant="outline" className="text-[10px] font-mono text-primary border-primary/20">{chainId}</Badge>
        </div>
      </div>
      <code className="text-sm text-accent bg-black/40 px-3 py-2 rounded block break-all select-all font-mono">{url}</code>
    </div>
  )
}

function TableRow({ action, limit }: { action: string; limit: string }) {
  return (
    <tr className="hover:bg-white/2 transition-colors">
      <td className="px-6 py-4 text-white font-medium">{action}</td>
      <td className="px-6 py-4 text-muted-foreground font-mono">{limit}</td>
    </tr>
  )
}
