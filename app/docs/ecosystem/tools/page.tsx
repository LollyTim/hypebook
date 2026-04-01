"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const toolCategories = [
  {
    category: "Block Explorers",
    tools: [
      { name: "HypurrScan", desc: "Primary mainnet block explorer for HyperCore and HyperEVM transactions.", url: "https://hypurrscan.io", tags: ["Explorer", "Mainnet"] },
      { name: "Purrsec (Testnet)", desc: "The primary — and currently only functional — block explorer for HyperEVM testnet. Also supports contract verification via Sourcify.", url: "https://testnet.purrsec.com", tags: ["Explorer", "Testnet"] },
      { name: "HyperEvmScan", desc: "Block explorer for HyperEVM transactions and contract interactions.", url: "https://hyperevmscan.io", tags: ["Explorer", "HyperEVM"] },
      { name: "Hyperscan", desc: "Community-built explorer for Hyperliquid network data.", url: "https://hyperscan.xyz", tags: ["Explorer", "Community"] },
    ]
  },
  {
    category: "Development Tools",
    tools: [
      { name: "Hyperliquid Python SDK", desc: "Official Python library for Info and Exchange API interactions. Best for bots and backend integrations.", url: "https://github.com/hyperliquid-dex/hyperliquid-python-sdk", tags: ["Official", "SDK", "Python"] },
      { name: "Hyperliquid Rust SDK", desc: "High-performance Rust implementation for protocol-level interactions and low-latency trading.", url: "https://github.com/hyperliquid-dex/hyperliquid-rust-sdk", tags: ["Official", "SDK", "Rust"] },
      { name: "Hyperliquid JS SDK", desc: "Full-featured SDK for web frontends and Node.js applications.", url: "https://github.com/hyperliquid-dex/hyperliquid-js-sdk", tags: ["Official", "SDK", "JS"] },
      { name: "HypeRPC", desc: "Alternative RPC endpoint provider for HyperEVM — useful when official endpoint rate limits are hit.", url: "https://hyperrpc.xyz", tags: ["RPC", "Infrastructure"] },
      { name: "Hydromancer API", desc: "Non-rate-limited API access for HyperCore data. Ideal for data-intensive applications.", url: "https://hydromancer.xyz", tags: ["API", "Community"] },
      { name: "Dual Block Toggle", desc: "Web interface to switch your deployer address between small blocks (2M gas) and big blocks (30M gas) on HyperEVM.", url: "https://hyperevm-block-toggle.vercel.app", tags: ["Dev Tool", "HyperEVM"] },
      { name: "HyperEVM Multisig", desc: "Multisig wallet interface for HyperEVM.", url: "https://hyperevm.xyz", tags: ["Wallet", "HyperEVM"] },
      { name: "Official Faucet", desc: "Get testnet USDC and HYPE for development and testing.", url: "https://hyperliquid.gitbook.io/hyperliquid-docs/onboarding/testnet", tags: ["Faucet", "Testnet"] },
    ]
  },
  {
    category: "Portfolio & Analytics",
    tools: [
      { name: "Hyperfolio", desc: "Multi-address portfolio aggregator for Hyperliquid. Track positions across wallets.", url: "https://hyperfolio.xyz", tags: ["Portfolio", "Analytics"] },
      { name: "DeBank", desc: "Cross-chain portfolio tracking with HyperEVM support.", url: "https://debank.com", tags: ["Portfolio", "Cross-chain"] },
      { name: "hl.eco", desc: "Ecosystem-native portfolio and activity tracker.", url: "https://hl.eco", tags: ["Portfolio", "Community"] },
      { name: "Purrfolio", desc: "Hyperliquid-focused portfolio tracking tool.", url: "https://purrfolio.xyz", tags: ["Portfolio", "Community"] },
      { name: "Octav", desc: "Advanced portfolio analytics — cross-chain.", url: "https://octav.fi", tags: ["Portfolio", "Advanced"] },
    ]
  },
  {
    category: "Market Analytics & Dashboards",
    tools: [
      { name: "HyperDash", desc: "Comprehensive trader insights: liquidation maps, position tracking, and copy trading features.", url: "https://hyperdash.info", tags: ["Analytics", "Trading"] },
      { name: "Hyperliquid Stats", desc: "Official-linked stats page with user counts, volume, open interest, and protocol health metrics.", url: "https://stats.hyperliquid.xyz", tags: ["Analytics", "Official"] },
      { name: "ASXN Dashboard", desc: "Risk analytics, staking metrics, HYPE tokenomics, and validator data.", url: "https://asxn.xyz", tags: ["Analytics", "Data"] },
      { name: "Allium", desc: "On-chain data: volumes, referrals, P&L data for Hyperliquid.", url: "https://allium.so", tags: ["Analytics", "On-chain"] },
      { name: "Dune Analytics", desc: "Community-created on-chain dashboards for Hyperliquid.", url: "https://dune.com", tags: ["Analytics", "Community"] },
      { name: "Hypervisor.gg", desc: "Bubble visualization and market analysis for Hyperliquid assets.", url: "https://hypervisor.gg", tags: ["Analytics", "Visualization"] },
      { name: "HyperTracker", desc: "Wallet position tracking with cohort segmentation.", url: "https://hypertracker.xyz", tags: ["Analytics", "Wallet"] },
      { name: "HyperSignals", desc: "Trading alerts and signal aggregation for Hyperliquid markets.", url: "https://hypersignals.xyz", tags: ["Trading", "Alerts"] },
    ]
  },
  {
    category: "Token & Gas Utilities",
    tools: [
      { name: "HypeGas", desc: "Real-time gas pricing for HyperEVM. Monitor current gas costs before transacting.", url: "https://hypegas.xyz", tags: ["Gas", "Utility"] },
      { name: "HyperEVM.top", desc: "Points checker, dApp statistics, and ecosystem overview.", url: "https://hyperevm.top", tags: ["Utility", "Stats"] },
      { name: "HypeBurn / ASXN", desc: "Track $HYPE tokenomics, burn rate, and supply statistics.", url: "https://hypeburn.xyz", tags: ["Tokenomics", "HYPE"] },
      { name: "PurrBurn", desc: "Monitor $PURR token burn data and supply.", url: "https://purrburn.xyz", tags: ["Tokenomics", "PURR"] },
      { name: "Skewga", desc: "Revenue forecasting and yield analysis for Hyperliquid.", url: "https://skewga.xyz", tags: ["Analytics", "Revenue"] },
      { name: "Loris Tools", desc: "Funding rate monitoring and analysis across Hyperliquid markets.", url: "https://loris.tools", tags: ["Funding Rates", "Trading"] },
      { name: "Hyperliquid.tax", desc: "Tax reporting tool specifically for Hyperliquid trading activity.", url: "https://hyperliquid.tax", tags: ["Tax", "Compliance"] },
    ]
  },
  {
    category: "Staking & Validators",
    tools: [
      { name: "Native Staking", desc: "Official Hyperliquid native HYPE staking interface.", url: "https://app.hyperliquid.xyz/staking", tags: ["Staking", "Official"] },
      { name: "ASXN Staking", desc: "Metrics and validator data for Hyperliquid staking.", url: "https://asxn.xyz/staking", tags: ["Staking", "Analytics"] },
      { name: "Hyper Validators", desc: "Testnet validator performance tracking.", url: "https://hypervalidators.xyz", tags: ["Validators", "Testnet"] },
    ]
  },
  {
    category: "Bridges & Onboarding",
    tools: [
      { name: "HyperUnit (Native Bridge)", desc: "Official native bridge for cross-chain asset transfers to Hyperliquid.", url: "https://hyperunit.xyz", tags: ["Bridge", "Official"] },
      { name: "HyBridge", desc: "Cross-chain bridge aggregator for Hyperliquid.", url: "https://hybridge.xyz", tags: ["Bridge", "Community"] },
      { name: "zkp2p", desc: "P2P onramp — buy HYPE/USDC directly from other users with fiat.", url: "https://zkp2p.xyz", tags: ["Onramp", "P2P"] },
      { name: "Overdraft", desc: "Fiat onramp and bridge tool for Hyperliquid.", url: "https://overdraft.xyz", tags: ["Onramp", "Bridge"] },
    ]
  },
  {
    category: "Community Resources",
    tools: [
      { name: "Hypurr.co", desc: "Searchable, categorized database of ecosystem projects. Submit your own project for listing.", url: "https://hypurr.co", tags: ["Directory", "Community"] },
      { name: "HL Wiki", desc: "Community-maintained knowledge base for builders, traders, and investors on Hyperliquid.", url: "https://hyperliquid-co.gitbook.io", tags: ["Wiki", "Community"] },
      { name: "HyperEVM Projects List", desc: "Curated list of projects built on HyperEVM.", url: "https://hyperliquid-co.gitbook.io/wiki/ecosystem/projects/hyperevm", tags: ["Directory", "HyperEVM"] },
      { name: "HLQuiz", desc: "Knowledge testing platform for Hyperliquid concepts.", url: "https://hlquiz.xyz", tags: ["Education", "Community"] },
    ]
  },
]

const tagColors: Record<string, string> = {
  Official: "bg-primary/20 text-primary border-primary/30",
  Community: "bg-white/5 text-muted-foreground border-white/10",
  Testnet: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Mainnet: "bg-accent/10 text-accent border-accent/20",
  SDK: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Analytics: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Bridge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
}

function getTagClass(tag: string) {
  return tagColors[tag] ?? "bg-white/5 text-muted-foreground border-white/10"
}

export default function EcosystemTools() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">Ecosystem</Badge>
        <h1 className="text-5xl font-bold tracking-tight text-white">Tools & Utilities</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A comprehensive directory of tools, explorers, SDKs, analytics platforms, and community utilities
          built for the Hyperliquid ecosystem. Sourced from the official Hyperliquid community wiki.
        </p>
      </div>

      {toolCategories.map((cat) => (
        <section key={cat.category} className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-[#333344] pb-3">{cat.category}</h2>
          <div className="grid grid-cols-1 gap-3">
            {cat.tools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 bg-[#141419] border border-[#333344] rounded-xl hover:border-primary/40 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      <div className="flex gap-1.5 flex-wrap">
                        {tool.tags.map(tag => (
                          <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full border uppercase font-bold ${getTagClass(tag)}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{tool.desc}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}

      <section className="bg-accent/5 border border-accent/20 rounded-2xl p-8 space-y-3">
        <h2 className="text-xl font-bold text-white">Built something for the ecosystem?</h2>
        <p className="text-sm text-muted-foreground">
          Submit your project to the community wiki at{" "}
          <a href="https://hypurr.co" target="_blank" className="text-accent underline">hypurr.co</a>{" "}
          or contribute to the{" "}
          <a href="https://hyperliquid-co.gitbook.io" target="_blank" className="text-accent underline">HL community wiki</a>.
        </p>
        <p className="text-xs text-muted-foreground">
          Note: Community tools are not maintained by Hyperliquid Labs. Always do your own research before connecting wallets or depositing funds.
        </p>
      </section>
    </div>
  )
}
