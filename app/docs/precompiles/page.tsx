"use client"

import { Badge } from "@/components/ui/badge"
import { Info, AlertTriangle, ArrowLeftRight, ExternalLink } from "lucide-react"

export default function PrecompilesPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Badge variant="outline" className="text-primary border-primary/20">System Addresses</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-white">System Addresses & Precompiles</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          HyperEVM exposes a set of well-known system addresses and precompiles that allow smart contracts to
          interact with HyperCore — bridging assets, reading prices, and sending trading actions directly from Solidity.
        </p>
      </div>

      {/* Known confirmed system addresses */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Confirmed System Addresses</h2>
        <p className="text-sm text-muted-foreground">
          These addresses are documented in the official Hyperliquid source. They work on both mainnet and testnet.
        </p>

        <div className="space-y-4">
          <AddressCard
            name="HyperCore Bridge (HYPE Transfer)"
            address="0x2222222222222222222222222222222222222222"
            purpose="Send native HYPE to this address to move it from HyperCore to HyperEVM. Used by EOAs and contracts."
            usage={`// Transfer HYPE: HyperCore → HyperEVM
// Send HYPE to this address from your HyperCore account
// The balance appears on your EVM address automatically`}
          />
          <AddressCard
            name="Wrapped HYPE (WHYPE)"
            address="0x5555555555555555555555555555555555555555"
            purpose="The canonical immutable ERC-20 wrapper for native HYPE. Use to integrate HYPE into DeFi protocols that require an ERC-20 interface."
            usage={`interface IWHYPE {
    function deposit() external payable;   // wrap HYPE → WHYPE
    function withdraw(uint256 wad) external; // unwrap WHYPE → HYPE
    function balanceOf(address) external view returns (uint256);
    function transfer(address to, uint256 amt) external returns (bool);
    function approve(address spender, uint256 amt) external returns (bool);
}

// Usage example:
IWHYPE constant WHYPE = IWHYPE(0x5555555555555555555555555555555555555555);
WHYPE.deposit{value: 1 ether}(); // Wrap 1 HYPE`}
          />
        </div>
      </section>

      {/* HyperCore interaction precompiles */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">HyperCore Interaction Precompiles</h2>
        <div className="flex items-start gap-3 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
          <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm text-orange-200 font-medium">Verify addresses from official docs before using in production.</p>
            <p className="text-xs text-orange-300">
              The full precompile interface (reading mark prices, sending orders from contracts) is documented in the
              official Hyperliquid GitBook under <strong>For Developers → HyperEVM → System Addresses & Precompiles</strong>.
              We don't publish unverified addresses here to avoid build failures caused by wrong addresses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CapabilityCard
            title="Read HyperCore Prices"
            desc="Query live oracle/mark prices for any HyperCore asset directly from your Solidity contract. No external oracle needed — the data is part of the same consensus."
          />
          <CapabilityCard
            title="Send Orders from Contracts"
            desc="Place, cancel, and modify orders on HyperCore spot/perp markets from within a smart contract — enabling fully on-chain trading strategies."
          />
          <CapabilityCard
            title="Read User Positions"
            desc="Query on-chain positions, margin, and funding data for any address from inside a contract."
          />
          <CapabilityCard
            title="Cross-system Transfers"
            desc="Move HYPE and USDC between HyperCore and HyperEVM programmatically via sendToEvmWithData and related actions."
          />
        </div>

        <a
          href="https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm"
          target="_blank"
          className="flex items-center justify-between p-4 bg-[#141419] border border-[#333344] rounded-xl group hover:border-primary/40 transition-all"
        >
          <div>
            <div className="font-bold text-white group-hover:text-primary transition-colors">Official Precompile Documentation</div>
            <div className="text-xs text-muted-foreground mt-0.5">hyperliquid.gitbook.io → For Developers → HyperEVM</div>
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
      </section>

      {/* Ethereum standard precompiles */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Standard Ethereum Precompiles</h2>
        <p className="text-sm text-muted-foreground">
          HyperEVM supports all standard Ethereum precompiles (Cancun hardfork, no blob/EIP-4844):
        </p>
        <div className="bg-[#141419] border border-[#333344] rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-white/5">
              <tr>
                <th className="px-4 py-3 text-left text-muted-foreground font-medium">Address</th>
                <th className="px-4 py-3 text-left text-muted-foreground font-medium">Function</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#333344]">
              {[
                ["0x01", "ecRecover — ECDSA signature recovery"],
                ["0x02", "SHA-256 hash"],
                ["0x03", "RIPEMD-160 hash"],
                ["0x04", "Identity (data copy)"],
                ["0x05", "modexp — modular exponentiation"],
                ["0x06", "ecAdd — BN256 elliptic curve addition"],
                ["0x07", "ecMul — BN256 scalar multiplication"],
                ["0x08", "ecPairing — BN256 pairing check"],
                ["0x09", "BLAKE2F compression function"],
              ].map(([addr, fn]) => (
                <tr key={addr} className="hover:bg-white/2">
                  <td className="px-4 py-3 font-mono text-primary">{addr}</td>
                  <td className="px-4 py-3 text-muted-foreground">{fn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

function AddressCard({ name, address, purpose, usage }: {
  name: string; address: string; purpose: string; usage: string
}) {
  return (
    <div className="bg-[#141419] border border-[#333344] rounded-xl overflow-hidden">
      <div className="px-5 pt-5 pb-4 space-y-3">
        <h3 className="font-bold text-white text-lg">{name}</h3>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Address (mainnet & testnet)</div>
          <code className="text-accent font-mono text-sm break-all">{address}</code>
        </div>
        <p className="text-sm text-muted-foreground">{purpose}</p>
      </div>
      <div className="border-t border-[#333344]">
        <div className="px-4 py-2 bg-white/5 text-xs text-muted-foreground font-mono">Interface / Usage</div>
        <pre className="px-4 py-4 text-xs text-primary font-mono overflow-x-auto whitespace-pre-wrap">{usage}</pre>
      </div>
    </div>
  )
}

function CapabilityCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-5 bg-[#141419] border border-[#333344] rounded-xl hover:border-primary/20 transition-all">
      <h4 className="font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  )
}
