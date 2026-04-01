"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, Info } from "lucide-react"

export default function JavaScriptSDKPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">SDK Reference</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">JavaScript / TypeScript SDK</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The official Hyperliquid JS SDK provides full access to the Info and Exchange APIs for
          web frontends, Node.js bots, and TypeScript applications.
        </p>
      </div>

      <div className="flex items-center gap-4 p-4 bg-[#141419] border border-[#333344] rounded-xl">
        <a href="https://github.com/hyperliquid-dex/hyperliquid-js-sdk" target="_blank"
          className="flex items-center gap-2 text-accent underline text-sm">
          github.com/hyperliquid-dex/hyperliquid-js-sdk
          <ExternalLink className="w-3 h-3" />
        </a>
        <Badge variant="secondary">Official</Badge>
      </div>

      {/* Install */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Installation</h2>
        <CodeBlock label="npm / pnpm / yarn">{`npm install @hyperliquid/sdk
# or
pnpm add @hyperliquid/sdk`}
        </CodeBlock>
      </section>

      {/* Read data */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Read Market Data (Info API)</h2>
        <p className="text-muted-foreground text-sm">No authentication needed. Queries the <code className="text-primary">info</code> endpoint.</p>
        <CodeBlock label="Fetch all mid prices">{`import { HyperliquidInfoAPI } from "@hyperliquid/sdk";

const info = new HyperliquidInfoAPI();
// Use "testnet" for testnet: new HyperliquidInfoAPI("testnet")

// Get all current mid prices
const mids = await info.getAllMids();
console.log("HYPE price:", mids["HYPE"]);

// Get perpetuals metadata
const { universe } = await info.getMeta();
console.log("Available perps:", universe.map(a => a.name));`}
        </CodeBlock>
        <CodeBlock label="Get a user's open positions">{`const state = await info.getClearinghouseState("0xYourAddress");
console.log("Open positions:", state.assetPositions);
console.log("Account value:", state.crossMarginSummary.accountValue);`}
        </CodeBlock>
        <CodeBlock label="Get funding rate history">{`const funding = await info.getFundingHistory({
  coin: "HYPE",
  startTime: Date.now() - 7 * 24 * 60 * 60 * 1000, // 7 days ago
});
console.log("Funding history:", funding);`}
        </CodeBlock>
      </section>

      {/* Place orders */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Place Orders (Exchange API)</h2>
        <p className="text-muted-foreground text-sm">
          Exchange actions require signing with a private key. Never expose your private key in frontend code
          — use an API wallet (agent) for web apps.
        </p>
        <CodeBlock label="Place a limit order">{`import { HyperliquidExchangeAPI } from "@hyperliquid/sdk";
import { Wallet } from "ethers";

const wallet = new Wallet("0xYOUR_PRIVATE_KEY");
const exchange = new HyperliquidExchangeAPI({ wallet, testnet: true });

// Buy 0.1 HYPE at $25.00 (GTC limit order)
const result = await exchange.order({
  coin: "HYPE",
  isBuy: true,
  sz: 0.1,
  limitPx: 25.0,
  orderType: { limit: { tif: "Gtc" } },
  reduceOnly: false,
});
console.log("Order result:", result);`}
        </CodeBlock>
        <CodeBlock label="Market order (IOC)">{`// IOC = Immediate or Cancel (market-like behavior)
const result = await exchange.order({
  coin: "HYPE",
  isBuy: true,
  sz: 0.1,
  limitPx: 999999, // High price for buy market order
  orderType: { limit: { tif: "Ioc" } },
  reduceOnly: false,
});`}
        </CodeBlock>
        <CodeBlock label="Cancel an order">{`await exchange.cancel({ coin: "HYPE", oid: 123456789 });`}
        </CodeBlock>
      </section>

      {/* WebSocket */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Real-time WebSocket Feed</h2>
        <CodeBlock label="Subscribe to live trades">{`import { HyperliquidWebSocketAPI } from "@hyperliquid/sdk";

const ws = new HyperliquidWebSocketAPI();
await ws.connect();

// Subscribe to real-time trades for HYPE
await ws.subscribe({ type: "trades", coin: "HYPE" }, (data) => {
  console.log("New trade:", data);
});

// Subscribe to all mid prices
await ws.subscribe({ type: "allMids" }, (data) => {
  console.log("Price update:", data);
});

// Handle disconnects gracefully
ws.on("disconnect", () => ws.reconnect());`}
        </CodeBlock>
        <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
          <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Always handle disconnects and reconnect gracefully. On reconnect, re-subscribe to your channels
            or use snapshot acknowledgments to catch up on missed data.
          </p>
        </div>
      </section>

      {/* Transfer */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Internal Transfers & Withdrawals</h2>
        <CodeBlock label="Transfer USDC to another user">{`// Internal transfer (no bridge, instant, no fee)
await exchange.usdSend({
  destination: "0xRecipientAddress",
  amount: "100", // USDC amount as string
  time: Date.now(),
});`}
        </CodeBlock>
        <CodeBlock label="Withdraw USDC to L1 (bridge out, ~5 min, $1 fee)">{`await exchange.withdraw3({
  destination: "0xRecipientAddress",
  amount: "100",
  time: Date.now(),
});`}
        </CodeBlock>
      </section>

      <div className="flex items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-xl">
        <Info className="w-5 h-5 text-accent shrink-0" />
        <p className="text-sm text-muted-foreground">
          Full SDK reference and changelog:{" "}
          <a href="https://github.com/hyperliquid-dex/hyperliquid-js-sdk" target="_blank" className="text-accent underline">
            github.com/hyperliquid-dex/hyperliquid-js-sdk
          </a>
        </p>
      </div>
    </div>
  )
}

function CodeBlock({ label, children }: { label: string; children: string }) {
  return (
    <div className="bg-[#141419] border border-[#333344] rounded-xl overflow-hidden">
      <div className="px-4 py-2 bg-white/5 border-b border-[#333344] text-xs text-muted-foreground font-mono">{label}</div>
      <pre className="px-4 py-4 text-sm text-accent font-mono overflow-x-auto whitespace-pre-wrap">{children}</pre>
    </div>
  )
}
