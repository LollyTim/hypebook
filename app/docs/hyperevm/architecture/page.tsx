import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, Network, Zap, Database, Code } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "HyperEVM Architecture - HypeBook",
  description: "Deep dive into HyperEVM dual-block architecture and HyperCore integration",
}

export default function ArchitecturePage() {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 sm:space-y-6">
        <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
          Architecture
        </Badge>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight px-4">
          <span className="text-gradient">HyperEVM Architecture</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-sans px-4">
          Understanding the dual-block architecture and seamless integration between HyperCore and HyperEVM for building next-generation DeFi applications.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 space-y-12">

        {/* Dual-Block Architecture */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            <span className="text-gradient">Dual-Block Architecture</span>
          </h2>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg leading-relaxed">
              HyperEVM operates on a unique dual-block architecture that separates concerns between market operations and smart contract execution.
              This design enables HyperCore to handle lightning-fast spot and perpetual markets while HyperEVM provides full Ethereum compatibility
              for smart contract deployment and execution.
            </p>

            <h3 className="text-xl sm:text-2xl font-serif font-bold mt-8 mb-4">HyperCore Layer</h3>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              The HyperCore layer is responsible for core market functionalities including spot trading, perpetual futures, and order book management.
              This layer operates at extremely high speeds, processing thousands of transactions per second with sub-second finality. HyperCore maintains
              the primary order books and handles all market-related operations including:
            </p>
            <ul className="space-y-2 text-base sm:text-lg leading-relaxed ml-6">
              <li>• Real-time spot market trading with instant settlement</li>
              <li>• Perpetual futures with up to 100x leverage</li>
              <li>• Advanced order types including limit, market, and stop orders</li>
              <li>• Liquidity provision and market making</li>
              <li>• Risk management and position tracking</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-serif font-bold mt-8 mb-4">HyperEVM Layer</h3>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              The HyperEVM layer provides full Ethereum Virtual Machine compatibility, allowing developers to deploy and execute smart contracts
              using standard Ethereum development tools and languages. This layer handles all smart contract operations including:
            </p>
            <ul className="space-y-2 text-base sm:text-lg leading-relaxed ml-6">
              <li>• Smart contract deployment and execution</li>
              <li>• DeFi protocol development and integration</li>
              <li>• Cross-chain asset transfers and bridging</li>
              <li>• Complex financial instrument creation</li>
              <li>• Automated trading strategies and bots</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-serif font-bold mt-8 mb-4">Synchronized Operation</h3>
            <p className="text-base sm:text-lg leading-relaxed">
              Both HyperCore and HyperEVM operate in parallel with synchronized block production. This means that market operations on HyperCore
              and smart contract execution on HyperEVM happen simultaneously, providing developers with real-time access to market data and
              the ability to execute complex DeFi strategies that leverage both layers.
            </p>
          </div>
        </section>

        {/* Cross-Chain Integration */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            <span className="text-gradient">Cross-Chain Integration</span>
          </h2>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              The seamless integration between HyperCore and HyperEVM enables developers to build sophisticated DeFi applications that leverage
              the speed and liquidity of HyperCore markets while maintaining the flexibility and programmability of smart contracts.
            </p>

            <h3 className="text-xl sm:text-2xl font-serif font-bold mt-8 mb-4">HYPE Token Bridging</h3>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              The HYPE token serves as the native gas token for HyperEVM operations. To use HYPE for gas fees and smart contract operations,
              users must first bridge HYPE from HyperCore to HyperEVM using the designated bridge address:
            </p>

            <div className="bg-muted/50 rounded-lg p-4 my-6">
              <h4 className="font-semibold text-sm mb-2">HYPE Bridge Address</h4>
              <code className="text-sm bg-background/50 px-3 py-2 rounded break-all">
                0x2222222222222222222222222222222222222222
              </code>
              <p className="text-sm text-muted-foreground mt-2">
                Send HYPE to this address from your HyperCore account to bridge it to HyperEVM. The HYPE will appear in your HyperEVM account
                with 18 decimal precision and can be used for gas fees and smart contract operations.
              </p>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold mt-8 mb-4">Asset Transfers</h3>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Beyond HYPE token bridging, the system supports cross-chain transfers of spot assets between HyperCore and HyperEVM. This enables:
            </p>
            <ul className="space-y-2 text-base sm:text-lg leading-relaxed ml-6">
              <li>• Direct access to HyperCore liquidity from smart contracts</li>
              <li>• Real-time market data integration in DeFi protocols</li>
              <li>• Atomic cross-chain operations for complex trading strategies</li>
              <li>• Unified account system across both layers</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-serif font-bold mt-8 mb-4">Smart Contract Integration</h3>
            <p className="text-base sm:text-lg leading-relaxed">
              Developers can deploy smart contracts on HyperEVM that directly interact with HyperCore markets. This integration allows for:
            </p>
            <ul className="space-y-2 text-base sm:text-lg leading-relaxed ml-6">
              <li>• Automated trading strategies that execute on HyperCore</li>
              <li>• DeFi protocols that leverage HyperCore's deep liquidity</li>
              <li>• Real-time market data feeds for algorithmic trading</li>
              <li>• Cross-chain arbitrage and market making bots</li>
            </ul>
          </div>
        </section>

        {/* Block Structure */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            <span className="text-gradient">Block Structure and Data</span>
          </h2>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              HyperEVM blocks contain standard EVM transaction data with additional optimizations for the dual-block architecture.
              Each block includes transaction data, state changes, and metadata that enables seamless integration with HyperCore.
            </p>

            <h3 className="text-xl sm:text-2xl font-serif font-bold mt-8 mb-4">Transaction Format</h3>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              HyperEVM transactions follow the standard Ethereum transaction format with EIP-1559 support. Each transaction includes:
            </p>
            <ul className="space-y-2 text-base sm:text-lg leading-relaxed ml-6">
              <li>• Standard EVM transaction fields (nonce, gas price, gas limit, to, value, data)</li>
              <li>• EIP-1559 base fee and priority fee fields</li>
              <li>• Transaction signature for authentication</li>
              <li>• Chain ID for network identification</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-serif font-bold mt-8 mb-4">State Management</h3>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              The HyperEVM state management system tracks account balances, contract storage, and cross-chain integration data:
            </p>
            <ul className="space-y-2 text-base sm:text-lg leading-relaxed ml-6">
              <li>• Account balance updates and HYPE token tracking</li>
              <li>• Smart contract storage and execution state</li>
              <li>• Event logs and transaction receipts</li>
              <li>• Cross-chain transfer state and bridge data</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-serif font-bold mt-8 mb-4">Gas Mechanics</h3>
            <p className="text-base sm:text-lg leading-relaxed">
              HyperEVM uses HYPE tokens for gas fees with EIP-1559 fee mechanism. Base fees are burned, while priority fees
              can be included to prioritize transaction processing. This ensures predictable gas costs and efficient transaction ordering.
            </p>
          </div>
        </section>

        {/* Development Benefits */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            <span className="text-gradient">Development Benefits</span>
          </h2>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              The dual-block architecture provides developers with unique advantages for building sophisticated DeFi applications
              that combine the speed of centralized exchanges with the programmability of decentralized protocols.
            </p>

            <h3 className="text-xl sm:text-2xl font-serif font-bold mt-8 mb-4">Performance Advantages</h3>
            <ul className="space-y-2 text-base sm:text-lg leading-relaxed ml-6">
              <li>• Sub-second finality for both market operations and smart contract execution</li>
              <li>• High throughput capable of handling thousands of transactions per second</li>
              <li>• Low latency access to market data and order book information</li>
              <li>• Efficient cross-chain operations without external bridges</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-serif font-bold mt-8 mb-4">Developer Experience</h3>
            <ul className="space-y-2 text-base sm:text-lg leading-relaxed ml-6">
              <li>• Full Ethereum compatibility - use existing tools, languages, and frameworks</li>
              <li>• Standard EVM opcodes and development patterns</li>
              <li>• Familiar gas mechanics and transaction structure</li>
              <li>• Comprehensive documentation and community support</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-serif font-bold mt-8 mb-4">DeFi Innovation</h3>
            <ul className="space-y-2 text-base sm:text-lg leading-relaxed ml-6">
              <li>• Direct access to HyperCore's deep liquidity and order books</li>
              <li>• Real-time market data integration in smart contracts</li>
              <li>• Complex trading strategies with atomic execution</li>
              <li>• Cross-chain arbitrage and market making opportunities</li>
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            <span className="text-gradient">Getting Started</span>
          </h2>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              Ready to start building on HyperEVM? Follow these steps to get your development environment set up and deploy your first smart contract.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Set Up Your Environment</h4>
                  <p className="text-base leading-relaxed">
                    Install Node.js, configure your wallet, and add the HyperEVM network to MetaMask.
                    Get testnet HYPE tokens from the faucet for development and testing.
                  </p>
                  <Button variant="outline" size="sm" asChild className="mt-3">
                    <Link href="/docs/installation">
                      Installation Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Deploy Your First Contract</h4>
                  <p className="text-base leading-relaxed">
                    Use Hardhat or Foundry to deploy a simple smart contract to HyperEVM.
                    Learn how to interact with HyperCore markets from your contracts.
                  </p>
                  <Button variant="outline" size="sm" asChild className="mt-3">
                    <Link href="/docs/examples/contracts">
                      Contract Examples
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Build DeFi Protocols</h4>
                  <p className="text-base leading-relaxed">
                    Create sophisticated DeFi applications that leverage HyperCore's liquidity and HyperEVM's programmability.
                    Explore advanced patterns and integration techniques.
                  </p>
                  <Button variant="outline" size="sm" asChild className="mt-3">
                    <Link href="/docs/examples/defi">
                      DeFi Guides
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-center">
            <span className="text-gradient">Additional Resources</span>
          </h2>
          <p className="text-base text-muted-foreground text-center mb-6">
            Explore the official Hyperliquid documentation for detailed technical specifications and advanced topics.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <a
              href="https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm/dual-block-architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Dual-Block Architecture →
            </a>
            <a
              href="https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm/raw-hyperevm-block-data"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Raw Block Data →
            </a>
            <a
              href="https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm/hypercore-less-than-greater-than-hyperevm-transfers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Cross-Chain Transfers →
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
