import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Testnet Setup - HypeBook",
  description: "Complete guide to setting up and connecting to HyperEVM testnet",
}

export default function TestnetPage() {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 sm:space-y-6">
        <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
          Testnet
        </Badge>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight px-4">
          <span className="text-gradient">Testnet Setup</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans px-4">
          Complete guide to setting up and connecting to the HyperEVM testnet for development and testing.
        </p>
      </div>

      {/* Coming Soon Card */}
      <div className="px-4">
        <Card className="glass border-orange-500/20 bg-orange-500/5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400" />
              </div>
              <div>
                <CardTitle className="text-lg sm:text-xl text-orange-400">🚧 Coming Soon</CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">
                  Testnet setup documentation is being finalized
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base text-muted-foreground">
              This will include network configuration, connection details, faucet information, and comprehensive testing guidelines for the HyperEVM testnet.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Placeholder Content */}
      <div className="space-y-6 sm:space-y-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary text-base sm:text-lg">Network Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground">
                RPC endpoints, chain IDs, and network parameters for testnet connectivity.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-accent/20">
            <CardHeader>
              <CardTitle className="text-accent text-base sm:text-lg">Faucet Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground">
                How to obtain testnet tokens for development and testing purposes.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary text-base sm:text-lg">Testing Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground">
                Best practices for testing smart contracts and applications on testnet.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
