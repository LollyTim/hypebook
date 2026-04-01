"use client"

import { Badge } from "@/components/ui/badge"
import { Gavel, Coins, Droplets, TrendingUp, ShieldAlert, Info } from "lucide-react"

export default function HIPsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Protocol Standards</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-white">Hyperliquid Improvement Proposals</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          HIPs define the standards and mechanisms that power Hyperliquid's native asset and liquidity systems.
          There are currently three ratified HIPs plus a set of client-side frontend validation checks.
        </p>
      </div>

      {/* HIP-1 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Coins className="w-7 h-7 text-primary" />
          <h2 className="text-3xl font-bold text-white">HIP-1: Native Token Standard</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          HIP-1 defines the standard for deploying native tokens directly on Hyperliquid L1. All tokens
          automatically receive a spot USDC trading pair on the native order book.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ParamCard title="name" detail="Human-readable, max 6 characters. Not required to be unique." />
          <ParamCard title="weiDecimals" detail="Minimal unit decimals (e.g. 18 for ETH, 8 for BTC). Range: 0–8." />
          <ParamCard title="szDecimals" detail="Minimum tradable decimals on the spot order book. Must satisfy: szDecimals + 5 ≤ weiDecimals." />
          <ParamCard title="maxSupply" detail="Maximum and initial supply. Supply may decrease over time from fees or burns." />
          <ParamCard title="initialWei" detail="Optional: genesis balances for multisig treasuries or bridge mints." />
          <ParamCard title="anchorTokenWei" detail="Optional: distribute genesis supply proportionally to existing HIP-1 holders. Minimum 100,000 token allocation required." />
        </div>

        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 space-y-4">
          <h3 className="font-bold text-white">Gas Auction</h3>
          <p className="text-sm text-muted-foreground">
            Deployment uses a 31-hour Dutch auction. Price decreases linearly from an initial price down to
            <span className="text-primary font-mono"> 500 HYPE</span>. If the previous auction failed, the starting
            price is 500 HYPE; otherwise it is 2× the last gas price. The deployer pays once — subsequent steps
            have no time constraints.
          </p>
        </div>

        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 space-y-4">
          <h3 className="font-bold text-white">Fee Structure</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li className="flex gap-2"><span className="text-primary">•</span> <strong className="text-white">Base token fees:</strong> Deployer receives 100% by default. Configurable within 0–100%. Can only decrease over time. Unallocated fees are burned.</li>
            <li className="flex gap-2"><span className="text-primary">•</span> <strong className="text-white">Quote token fees:</strong> Directed to the Assistance Fund. Deployer cannot configure these.</li>
            <li className="flex gap-2"><span className="text-primary">•</span> <strong className="text-white">Dust settlement:</strong> Automatic daily at 00:00 UTC. Balances below 1 lot size with notional ≤$1 USD are aggregated and market-sold. Proceeds are returned proportionally.</li>
          </ul>
        </div>

        <div className="flex items-start gap-3 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
          <ShieldAlert className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
          <p className="text-sm text-orange-200">
            The initial deployment step (setting name, szDecimals, weiDecimals) is <strong>time-sensitive and irreversible</strong>.
            Always validate on testnet first. Gas cannot be refunded for stuck deployments.
          </p>
        </div>
      </section>

      <hr className="border-[#333344]" />

      {/* HIP-2 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Droplets className="w-7 h-7 text-primary" />
          <h2 className="text-3xl font-bold text-white">HIP-2: Hyperliquidity</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          HIP-2 is a fully decentralized, on-chain automated market-making strategy embedded in Hyperliquid's block
          transition logic. It bootstraps liquidity for HIP-1 tokens during early price discovery — inspired by Uniswap
          but integrated directly with the native CLOB. It requires no operators; the strategy logic is secured by the
          same consensus that runs the order book.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ParamCard title="spot" detail="The HIP-1 asset being quoted against USDC." />
          <ParamCard title="startPx" detail="Initial price for the range." />
          <ParamCard title="nOrders" detail="Total number of orders spread across the range." />
          <ParamCard title="orderSz" detail="Size of each individual order." />
          <ParamCard title="nSeededLevels" detail="Number of bid-side orders funded at launch. Each extra level costs px × sz USDC and reduces genesis supply." />
        </div>

        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6 space-y-2">
          <h3 className="font-bold text-white">Operational Mechanics</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li className="flex gap-2"><span className="text-primary">•</span>Prices are set recursively, each level approximately <span className="text-primary font-mono">0.3%</span> higher than the last.</li>
            <li className="flex gap-2"><span className="text-primary">•</span>Strategy updates every block after at least 3 seconds have elapsed.</li>
            <li className="flex gap-2"><span className="text-primary">•</span>Maintains a <span className="text-primary font-mono">0.3% spread every 3 seconds</span> with minimal maintenance requirements.</li>
            <li className="flex gap-2"><span className="text-primary">•</span>Currently operates only for spot pairs denominated in USDC.</li>
          </ul>
        </div>

        <div className="bg-[#141419] border border-[#333344] rounded-xl p-6">
          <h3 className="font-bold text-white mb-3">Hyperliquidity Configuration Constraints</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <StatItem label="Minimum price gap" value="0.003" />
            <StatItem label="Max orders" value="4,000" />
            <StatItem label="USDC ceiling" value="100B" />
            <StatItem label="USDC floor" value="1B" />
            <StatItem label="Max starting mkt cap" value="$10M USDC" />
            <StatItem label="Min orders required" value="10" />
          </div>
          <p className="text-xs text-muted-foreground mt-4">Hyperliquidity must represent more than 1% of total supply and require sufficient USDC availability.</p>
        </div>
      </section>

      <hr className="border-[#333344]" />

      {/* HIP-3 */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-7 h-7 text-primary" />
          <h2 className="text-3xl font-bold text-white">HIP-3: Builder-Deployed Perpetuals</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          HIP-3 enables builders to deploy and operate their own permissionless perpetual DEXs on Hyperliquid L1,
          with full control over listing assets, fee structures, and market parameters. Builder-deployed perp DEXs
          share the same high-performance order book infrastructure as the native Hyperliquid exchange.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeatureCard title="Permissionless Listing" desc="List any asset as a perpetual without waiting for core team approval." />
          <FeatureCard title="Custom Fee Recipient" desc="Builders set their own fee recipient address and trading fee share." />
          <FeatureCard title="OI Caps" desc="Open interest caps per asset protect the overall system from over-exposure." />
          <FeatureCard title="Shared Liquidity" desc="Operates on the same L1 order book and HyperBFT consensus as the native exchange." />
        </div>
      </section>

      <hr className="border-[#333344]" />

      {/* Frontend Checks */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Gavel className="w-7 h-7 text-primary" />
          <h2 className="text-3xl font-bold text-white">Frontend Checks (Spot Deploy)</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          These are client-side validation rules that prevent invalid configurations before submitting a spot
          token deployment. Always test on testnet before deploying to mainnet.
        </p>

        <div className="space-y-4">
          <CheckSection title="Token Deployment Validation">
            <CheckItem text="szDecimals must be between 0 and 2." />
            <CheckItem text="weiDecimals must be between 0 and 8." />
            <CheckItem text="weiDecimals must be at least szDecimals + 5 (precision requirement)." />
          </CheckSection>

          <CheckSection title="Deployer Trading Fee Share">
            <CheckItem text="Must be specified." />
            <CheckItem text="Must be within 0–100%." />
          </CheckSection>

          <CheckSection title="User & Anchor Token Genesis">
            <CheckItem text="Blacklist user operations cannot be combined with other parameters." />
            <CheckItem text="Amount entries are limited to 19 digits maximum." />
            <CheckItem text="Total supply cannot exceed half of MAX_UINT_64 (18,446,744,073,709,551,615)." />
            <CheckItem text="Market cap at minimum Hyperliquidity price cannot exceed $10,000,000 USDC." />
            <CheckItem text="Cannot assign genesis balances to the Hyperliquidity user." />
            <CheckItem text="Exactly one of: user address OR existing token must be specified." />
            <CheckItem text="Existing tokens used as anchors require a minimum 100,000 token allocation." />
          </CheckSection>
        </div>
      </section>

      <div className="flex items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-xl">
        <Info className="w-5 h-5 text-accent shrink-0" />
        <p className="text-sm text-muted-foreground">
          Source: <a href="https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips" target="_blank" className="text-accent underline">Official Hyperliquid GitBook — HIPs</a>
        </p>
      </div>
    </div>
  )
}

function ParamCard({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="p-4 bg-[#141419] border border-[#333344] rounded-xl">
      <code className="text-primary font-mono text-sm font-bold">{title}</code>
      <p className="text-sm text-muted-foreground mt-1">{detail}</p>
    </div>
  )
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-5 bg-[#141419] border border-[#333344] rounded-xl hover:border-primary/30 transition-all">
      <h3 className="font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  )
}

function CheckSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#141419] border border-[#333344] rounded-xl p-5 space-y-2">
      <h4 className="font-bold text-white text-sm uppercase tracking-wider">{title}</h4>
      <ul className="space-y-1">{children}</ul>
    </div>
  )
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex gap-2 text-sm text-muted-foreground">
      <span className="text-primary mt-0.5">✓</span>
      <span>{text}</span>
    </li>
  )
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-black/40 rounded-lg p-3">
      <div className="text-primary font-mono font-bold">{value}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  )
}
