"use client"

import { Badge } from "@/components/ui/badge"
import { Terminal, Copy, Cpu, Layers, BookOpen } from "lucide-react"

export default function PythonSDKPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">SDK Reference</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">Python SDK Guide</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The official Python SDK provides a high-level interface for interacting with Hyperliquid's Info and Exchange APIs.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Installation</h2>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-4 overflow-x-auto font-mono text-sm relative group">
          <pre className="text-primary">
            {`pip install hyperliquid-python-sdk`}
          </pre>
          <button className="absolute top-4 right-4 p-2 bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Basic Usage: Fetching Prices</h2>
        <p className="text-muted-foreground">Use the <code>Info</code> class to query market data without needing an API key.</p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 font-mono text-sm">
          <pre className="text-accent">
{`from hyperliquid.info import Info
from hyperliquid.utils import constants

# Initialize Info client for Testnet
info = Info(constants.TESTNET_API_URL, skip_ws=True)

# Get all mid prices
prices = info.all_mids()
print(f"HYPE Price: {prices['HYPE']}")`}
          </pre>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Advanced: Trading via API</h2>
        <p className="text-muted-foreground">To place orders, use the <code>Exchange</code> class with your private key.</p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 font-mono text-sm">
          <pre className="text-muted-foreground">
{`from hyperliquid.exchange import Exchange
import eth_account

# Load your account
account = eth_account.Account.from_key("YOUR_PRIVATE_KEY")
exchange = Exchange(account, constants.TESTNET_API_URL)

# Place a limit order
# asset_index: 0 (HYPE), is_buy: True, sz: 10.0, px: 5.5
order_result = exchange.order("HYPE", True, 10.0, 5.5, {"limit": {"tif": "Gtc"}})`}
          </pre>
        </div>
      </section>

      <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-2">
          <Layers className="w-5 h-5 text-accent" />
          <h4 className="font-bold text-white">Best Practice: Rounding</h4>
        </div>
        <p className="text-sm text-muted-foreground">
          Hyperliquid requires specific precision for size and price. Always use the <code>szDecimals</code> and <code>pxDecimals</code> from the <code>meta</code> info endpoint to avoid "Invalid Order" errors.
        </p>
      </div>
    </div>
  )
}
