"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, Info, AlertTriangle } from "lucide-react"

export default function PythonSDKPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">SDK Reference</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">Python SDK</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The official Hyperliquid Python SDK provides a high-level interface for both the Info API
          (market data, no auth) and the Exchange API (trading, requires signing).
        </p>
      </div>

      <div className="flex items-center gap-4 p-4 bg-[#141419] border border-[#333344] rounded-xl">
        <a href="https://github.com/hyperliquid-dex/hyperliquid-python-sdk" target="_blank"
          className="flex items-center gap-2 text-accent underline text-sm">
          github.com/hyperliquid-dex/hyperliquid-python-sdk
          <ExternalLink className="w-3 h-3" />
        </a>
        <Badge variant="secondary">Official</Badge>
      </div>

      {/* Install */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Installation</h2>
        <CodeBlock label="pip">{`pip install hyperliquid-python-sdk`}
        </CodeBlock>
      </section>

      {/* Info API */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Read Market Data (Info API)</h2>
        <p className="text-muted-foreground text-sm">The <code className="text-primary">Info</code> client requires no private key.</p>
        <CodeBlock label="Fetch prices and metadata">{`from hyperliquid.info import Info
from hyperliquid.utils import constants

# Testnet
info = Info(constants.TESTNET_API_URL, skip_ws=True)
# Mainnet
# info = Info(constants.MAINNET_API_URL, skip_ws=True)

# All current mid prices
mids = info.all_mids()
print(f"HYPE price: {mids['HYPE']}")

# Perpetuals metadata (asset names, sz_decimals, max_leverage)
meta = info.meta()
for asset in meta["universe"]:
    print(asset["name"], asset["szDecimals"])`}
        </CodeBlock>
        <CodeBlock label="User account state">{`address = "0xYourAddress"
state = info.user_state(address)
print("Account value:", state["crossMarginSummary"]["accountValue"])
print("Open positions:", state["assetPositions"])`}
        </CodeBlock>
        <CodeBlock label="Funding rate history">{`import time

funding = info.funding_history(
    coin="HYPE",
    start_time=int((time.time() - 7 * 24 * 3600) * 1000),  # 7 days ago in ms
)
for entry in funding:
    print(entry["time"], entry["fundingRate"])`}
        </CodeBlock>
      </section>

      {/* Exchange */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Place Orders (Exchange API)</h2>
        <div className="flex items-start gap-3 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
          <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
          <p className="text-sm text-orange-200">
            Never hardcode private keys. Use environment variables or a secrets manager.
            Consider using an <strong>API wallet (agent key)</strong> to limit permissions.
          </p>
        </div>
        <CodeBlock label="Initialize Exchange client">{`import eth_account
from hyperliquid.exchange import Exchange
from hyperliquid.utils import constants

private_key = "0xYOUR_PRIVATE_KEY"  # Use env var in production
account = eth_account.Account.from_key(private_key)
exchange = Exchange(account, constants.TESTNET_API_URL)`}
        </CodeBlock>
        <CodeBlock label="Place a GTC limit order">{`# Buy 0.1 HYPE at $25.00 (GTC = Good Til Canceled)
result = exchange.order(
    name="HYPE",
    is_buy=True,
    sz=0.1,
    limit_px=25.0,
    order_type={"limit": {"tif": "Gtc"}},
    reduce_only=False,
)
print(result)`}
        </CodeBlock>
        <CodeBlock label="Market order (IOC)">{`# IOC = Immediate or Cancel (fills at market, cancels remainder)
result = exchange.order(
    name="HYPE",
    is_buy=True,
    sz=0.1,
    limit_px=999999,          # High price for buy market
    order_type={"limit": {"tif": "Ioc"}},
    reduce_only=False,
)`}
        </CodeBlock>
        <CodeBlock label="Cancel an order">{`# Cancel by asset + order ID
exchange.cancel("HYPE", oid=123456789)`}
        </CodeBlock>
        <CodeBlock label="Update leverage">{`# Set 5x cross margin leverage on HYPE
exchange.update_leverage(5, "HYPE", is_cross=True)`}
        </CodeBlock>
      </section>

      {/* Rounding */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Precision & Rounding</h2>
        <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-xl">
          <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Hyperliquid is strict about decimal precision. Always round sizes and prices using
            <code className="text-primary"> szDecimals</code> from the <code className="text-primary">meta</code> endpoint
            to avoid <code className="text-orange-400">"Invalid order"</code> errors.
          </p>
        </div>
        <CodeBlock label="Correct rounding helper">{`def round_to_sz_decimals(value: float, sz_decimals: int) -> float:
    return round(value, sz_decimals)

def round_to_px_decimals(value: float, px_decimals: int) -> float:
    # px_decimals is typically 5 significant figures
    from decimal import Decimal
    d = Decimal(str(value))
    return float(d.quantize(Decimal('0.' + '0' * px_decimals)))

# Example: HYPE has szDecimals = 2
sz = round_to_sz_decimals(0.123456, sz_decimals=2)  # → 0.12`}
        </CodeBlock>
      </section>

      {/* Transfers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Transfers & Withdrawals</h2>
        <CodeBlock label="Transfer USDC to another user (internal, instant)">{`exchange.usd_send(
    destination="0xRecipientAddress",
    amount=100.0,
)`}
        </CodeBlock>
        <CodeBlock label="Withdraw USDC via bridge (~5 min, $1 fee)">{`exchange.withdraw3(
    destination="0xYourL1Address",
    amount=100.0,
)`}
        </CodeBlock>
      </section>

      <div className="flex items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-xl">
        <Info className="w-5 h-5 text-accent shrink-0" />
        <p className="text-sm text-muted-foreground">
          Full examples and changelog:{" "}
          <a href="https://github.com/hyperliquid-dex/hyperliquid-python-sdk" target="_blank" className="text-accent underline">
            github.com/hyperliquid-dex/hyperliquid-python-sdk
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
