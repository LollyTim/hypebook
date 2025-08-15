import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Wallet, Coins, Code, Rocket, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Quick Start - HypeBook",
  description: "Get started with HyperEVM development in minutes",
}

export default function QuickStartPage() {
  const quickStartSteps = [
    {
      step: "1",
      title: "Set Up Your Wallet",
      description: "Install a Web3 wallet and connect to HyperEVM network",
      icon: Wallet,
      href: "/docs/installation",
      details: [
        "Network Name: HyperEVM",
        "RPC URL: https://rpc.hyperliquid.xyz/evm",
        "Chain ID: 999",
        "Currency: HYPE"
      ]
    },
    {
      step: "2",
      title: "Get Testnet Funds",
      description: "Use the official faucet to request testnet tokens",
      icon: Coins,
      href: "/docs/testnet/faucet",
      details: [
        "Testnet RPC: https://rpc.hyperliquid-testnet.xyz/evm",
        "Chain ID: 998",
        "Faucet: https://faucet.hyperliquid.xyz",
        "Free HYPE tokens for testing"
      ]
    },
    {
      step: "3",
      title: "Install Dependencies",
      description: "Set up your development environment",
      icon: Code,
      href: "/docs/installation",
      details: [
        "npm install --save ethers",
        "Hardhat or Foundry for deployment",
        "Standard Ethereum development tools"
      ]
    },
    {
      step: "4",
      title: "Deploy Your First Contract",
      description: "Deploy a sample contract to HyperEVM",
      icon: Rocket,
      href: "/docs/examples/contracts",
      details: [
        "Use existing Solidity contracts",
        "Full EVM compatibility",
        "Standard deployment process"
      ]
    },
    {
      step: "5",
      title: "Transfer HYPE to HyperEVM",
      description: "Bridge HYPE from HyperCore to HyperEVM",
      icon: Coins,
      href: "/docs/hyperevm/architecture",
      details: [
        "Bridge Address: 0x2222222222222222222222222222222222222222",
        "Send HYPE to bridge address",
        "HYPE has 18 decimals on HyperEVM"
      ]
    }
  ]

  const whyHyperEVM = [
    {
      title: "Speed & Performance",
      description: "Dual-block architecture with sub-second finality",
      icon: Zap,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Developer-Friendly",
      description: "Full EVM compatibility - use existing Ethereum tools",
      icon: Code,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Cost-Effective",
      description: "Lower gas fees with HYPE token payments",
      icon: Coins,
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Seamless Integration",
      description: "Direct access to HyperCore markets and order books",
      icon: CheckCircle,
      color: "from-purple-500/20 to-pink-500/20"
    }
  ]

  return (
    <div className="space-y-6 sm:space-y-8 lg:space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-3 sm:space-y-4 lg:space-y-6">
        <Badge variant="secondary" className="px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 text-xs sm:text-sm font-medium">
          Quick Start
        </Badge>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-serif font-bold leading-tight px-2 sm:px-4">
          <span className="text-gradient">Welcome to HypeBook</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans px-2 sm:px-4">
          Your AI-powered, open-source guide to building on Hyperliquid's HyperEVM.
          Follow these steps to start building in minutes.
        </p>
      </div>

      {/* What is Hyperliquid Section */}
      <div className="space-y-3 sm:space-y-4 lg:space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold px-2 sm:px-4">
          <span className="text-gradient">What is Hyperliquid?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-4">
          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">HyperCore</CardTitle>
              <CardDescription>Lightning-fast spot and perpetual markets</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The foundational layer responsible for core functionalities such as spot and perpetual markets.
              </p>
            </CardContent>
          </Card>
          <Card className="glass border-accent/20">
            <CardHeader>
              <CardTitle className="text-accent">HyperEVM</CardTitle>
              <CardDescription>Full Ethereum compatibility for smart contracts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                An Ethereum Virtual Machine (EVM)-compatible environment for seamless smart contract deployment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Why Build on HyperEVM */}
      <div className="space-y-3 sm:space-y-4 lg:space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold px-2 sm:px-4">
          <span className="text-gradient">Why Build on HyperEVM?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-4">
          {whyHyperEVM.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="glass border-primary/10 hover:border-primary/30 transition-all duration-300 w-full">
                <CardHeader className="space-y-2 sm:space-y-3 p-3 sm:p-4 lg:p-6">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <CardTitle className="text-sm sm:text-base lg:text-lg break-words">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground break-words">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Quick Start Steps */}
      <div className="space-y-3 sm:space-y-4 lg:space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold px-2 sm:px-4">
          <span className="text-gradient">Quick Start Guide</span>
        </h2>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6 px-2 sm:px-4">
          {quickStartSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={step.step} className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 w-full">
                <CardHeader className="p-3 sm:p-4 lg:p-6">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 lg:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary text-xs sm:text-sm lg:text-base">{step.step}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-3">
                          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
                            <Icon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                            <CardTitle className="text-sm sm:text-base lg:text-lg xl:text-xl break-words">{step.title}</CardTitle>
                          </div>
                        </div>
                        <CardDescription className="text-xs sm:text-sm lg:text-base mt-1 sm:mt-2 break-words">{step.description}</CardDescription>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild className="self-start w-full sm:w-auto text-xs sm:text-sm">
                      <Link href={step.href}>
                        View Guide
                        <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
                  <div className="bg-muted/50 rounded-lg p-2 sm:p-3 lg:p-4">
                    <h4 className="font-semibold mb-2 text-xs sm:text-sm">Details:</h4>
                    <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-1 sm:gap-2">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span className="break-words">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* What's Next */}
      <div className="space-y-3 sm:space-y-4 lg:space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold px-2 sm:px-4">
          <span className="text-gradient">What's Next?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-4">
          <Card className="glass border-primary/20 w-full">
            <CardHeader className="p-3 sm:p-4 lg:p-6">
              <CardTitle className="text-primary text-sm sm:text-base lg:text-lg break-words">Development Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3 p-3 sm:p-4 lg:p-6 pt-0">
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs sm:text-sm font-medium">Block Explorer</p>
                <a href="https://explorer.hyperliquid.xyz" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-primary hover:underline break-all">
                  explorer.hyperliquid.xyz
                </a>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-xs sm:text-sm font-medium">RPC Endpoints</p>
                <p className="text-xs sm:text-sm text-muted-foreground break-words">Mainnet & Testnet available</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass border-accent/20 w-full">
            <CardHeader className="p-3 sm:p-4 lg:p-6">
              <CardTitle className="text-accent text-sm sm:text-base lg:text-lg break-words">Learning Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3 p-3 sm:p-4 lg:p-6 pt-0">
              <Link href="/docs/hyperevm/architecture" className="block text-xs sm:text-sm text-accent hover:underline break-words">
                HyperEVM Architecture →
              </Link>
              <Link href="/docs/examples/contracts" className="block text-xs sm:text-sm text-accent hover:underline break-words">
                Smart Contract Examples →
              </Link>
              <Link href="/docs/examples/defi" className="block text-xs sm:text-sm text-accent hover:underline break-words">
                DeFi Protocol Guides →
              </Link>
            </CardContent>
          </Card>
          <Card className="glass border-primary/20 w-full">
            <CardHeader className="p-3 sm:p-4 lg:p-6">
              <CardTitle className="text-primary text-sm sm:text-base lg:text-lg break-words">Community Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3 p-3 sm:p-4 lg:p-6 pt-0">
              <a href="https://discord.gg/hyperliquid" target="_blank" rel="noopener noreferrer" className="block text-xs sm:text-sm text-primary hover:underline break-words">
                Developer Discord →
              </a>
              <a href="https://github.com/hyperliquid" target="_blank" rel="noopener noreferrer" className="block text-xs sm:text-sm text-primary hover:underline break-words">
                GitHub Repository →
              </a>
              <a href="https://hyperliquid.gitbook.io" target="_blank" rel="noopener noreferrer" className="block text-xs sm:text-sm text-primary hover:underline break-words">
                Official Documentation →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Need Help Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-3 sm:p-4 lg:p-6 xl:p-8 text-center mx-2 sm:mx-4">
        <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-serif font-bold mb-2 sm:mb-3 lg:mb-4">
          <span className="text-gradient">Need Help?</span>
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-3 sm:mb-4 lg:mb-6 max-w-2xl mx-auto px-1 sm:px-2">
          Stuck? Ask HypeBook AI for instant answers about HyperEVM development, or join our community for support.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center">
          <Button asChild className="w-full sm:w-auto text-xs sm:text-sm">
            <Link href="/docs/ai-assistant">
              Chat with HypeBook AI
              <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto text-xs sm:text-sm">
            <Link href="https://discord.gg/hyperliquid" target="_blank" rel="noopener noreferrer">
              Join Discord Community
            </Link>
          </Button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4 px-2 sm:px-4">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold">
          <span className="text-gradient">Ready to build the future of DeFi?</span>
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
          Start with HyperEVM and experience the perfect blend of speed, security, and developer experience.
        </p>
        <Button size="lg" asChild className="text-xs sm:text-sm">
          <Link href="/docs/examples/contracts">
            Deploy Your First Contract
            <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
