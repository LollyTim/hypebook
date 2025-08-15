import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Wallet, Code, Settings, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Installation - HypeBook",
  description: "Complete installation guide for HyperEVM development tools",
}

export default function InstallationPage() {
  const installationSteps = [
    {
      step: "1",
      title: "Install Node.js",
      description: "Set up Node.js for development",
      icon: Code,
      details: [
        "Download from nodejs.org",
        "Version 14 or later required",
        "npm comes with Node.js"
      ],
      code: "node --version\nnpm --version"
    },
    {
      step: "2",
      title: "Install MetaMask",
      description: "Add MetaMask browser extension",
      icon: Wallet,
      details: [
        "Download from metamask.io",
        "Create or import wallet",
        "Secure your seed phrase"
      ],
      link: "https://metamask.io"
    },
    {
      step: "3",
      title: "Add HyperEVM Network",
      description: "Configure MetaMask for HyperEVM",
      icon: Settings,
      details: [
        "Network Name: Hyperliquid",
        "RPC URL: https://rpc.hyperliquid.xyz/evm",
        "Chain ID: 999",
        "Currency: HYPE"
      ],
      code: "Chain ID: 999\nRPC URL: https://rpc.hyperliquid.xyz/evm"
    },
    {
      step: "4",
      title: "Get HYPE Tokens",
      description: "Acquire HYPE for gas fees",
      icon: CheckCircle,
      details: [
        "Buy HYPE with USDC on Hyperliquid",
        "Transfer to HyperEVM via bridge",
        "Bridge address: 0x2222222222222222222222222222222222222222"
      ],
      link: "https://hyperliquid.gitbook.io/hyperliquid-docs/onboarding/how-to-use-the-hyperevm"
    }
  ]

  const blockExplorers = [
    {
      name: "Hyperevmscan",
      url: "https://hyperevmscan.io/",
      description: "Official HyperEVM block explorer"
    },
    {
      name: "Purrsec",
      url: "https://purrsec.com/",
      description: "Alternative block explorer"
    },
    {
      name: "Hyperscan",
      url: "https://www.hyperscan.com/",
      description: "Community block explorer"
    }
  ]

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 sm:space-y-6">
        <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
          Installation
        </Badge>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight px-4">
          <span className="text-gradient">HyperEVM Installation Guide</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans px-4">
          Step-by-step instructions to set up and interact with HyperEVM, ensuring a smooth onboarding process for developers.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold px-4">
          <span className="text-gradient">Prerequisites</span>
        </h2>
        <Card className="glass border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">Before You Start</CardTitle>
            <CardDescription>Ensure you have the following installed</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span><strong>Node.js:</strong> Version 14 or later</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span><strong>npm:</strong> Comes with Node.js</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span><strong>MetaMask:</strong> Browser extension wallet</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Installation Steps */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold px-4">
          <span className="text-gradient">Installation Steps</span>
        </h2>
        <div className="space-y-4 sm:space-y-6 px-4">
          {installationSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={step.step} className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary text-sm sm:text-base">{step.step}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                        <CardTitle className="text-lg sm:text-xl">{step.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sm sm:text-base mt-1 sm:mt-2">{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3 text-sm">Details:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {step.code && (
                    <div className="bg-slate-900 rounded-lg p-4">
                      <code className="text-green-400 text-sm">{step.code}</code>
                    </div>
                  )}

                  {step.link && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={step.link} target="_blank" rel="noopener noreferrer">
                        View Guide
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Block Explorers */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold px-4">
          <span className="text-gradient">Block Explorers</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {blockExplorers.map((explorer, index) => (
            <Card key={explorer.name} className="glass border-primary/10 hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{explorer.name}</CardTitle>
                <CardDescription>{explorer.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href={explorer.url} target="_blank" rel="noopener noreferrer">
                    Visit Explorer
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testnet Setup */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold px-4">
          <span className="text-gradient">Testnet Setup</span>
        </h2>
        <Card className="glass border-accent/20">
          <CardHeader>
            <CardTitle className="text-accent">HyperEVM Testnet</CardTitle>
            <CardDescription>For development and testing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Network Details:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Network Name: Hyperliquid Testnet</li>
                  <li>• RPC URL: https://rpc.hyperliquid-testnet.xyz/evm</li>
                  <li>• Chain ID: 998</li>
                  <li>• Currency: HYPE</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Getting Testnet Tokens:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Use the official testnet faucet</li>
                  <li>• Free HYPE tokens for testing</li>
                  <li>• No real value tokens</li>
                </ul>
              </div>
            </div>
            <Button asChild>
              <Link href="/docs/testnet/faucet">
                Get Testnet Tokens
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold px-4">
          <span className="text-gradient">What's Next?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Deploy Your First Contract</CardTitle>
              <CardDescription>Learn how to deploy smart contracts to HyperEVM</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/docs/examples/contracts">
                  View Examples
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="glass border-accent/20">
            <CardHeader>
              <CardTitle className="text-accent">Learn HyperEVM Architecture</CardTitle>
              <CardDescription>Understand the dual-block architecture and features</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild>
                <Link href="/docs/hyperevm/architecture">
                  Read Architecture Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Success Message */}
      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6 sm:p-8 text-center mx-4 sm:mx-0">
        <h2 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">
          <span className="text-gradient">✅ Installation Complete!</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
          You're now ready to start building on HyperEVM! Your development environment is set up and configured.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button asChild>
            <Link href="/docs/quick-start">
              Quick Start Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/examples/contracts">
              Deploy First Contract
            </Link>
          </Button>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold px-4">
          <span className="text-gradient">Additional Resources</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Official Documentation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a href="https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">
                HyperEVM Developer Guide →
              </a>
              <a href="https://hyperliquid.gitbook.io/hyperliquid-docs/onboarding/how-to-use-the-hyperevm" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">
                How to Use HyperEVM →
              </a>
              <a href="https://hyperliquid.gitbook.io/hyperliquid-docs/hyperevm/tools-for-hyperevm-builders" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">
                Tools for HyperEVM Builders →
              </a>
            </CardContent>
          </Card>
          <Card className="glass border-accent/20">
            <CardHeader>
              <CardTitle className="text-accent">Community Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a href="https://discord.gg/hyperliquid" target="_blank" rel="noopener noreferrer" className="block text-sm text-accent hover:underline">
                Developer Discord →
              </a>
              <a href="https://github.com/hyperliquid" target="_blank" rel="noopener noreferrer" className="block text-sm text-accent hover:underline">
                GitHub Repository →
              </a>
              <a href="/docs/ai-assistant" className="block text-sm text-accent hover:underline">
                HypeBook AI Assistant →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
