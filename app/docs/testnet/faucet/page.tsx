import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Testnet Faucet - HyperBook",
  description: "How to get testnet tokens for development and testing",
}

export default function FaucetPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Testnet Faucet
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Learn how to get testnet tokens for development and testing purposes.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">💧 Coming Soon</h3>
        <p>
          Faucet documentation and access instructions are being prepared. This will include token distribution details
          and usage guidelines.
        </p>
      </div>
    </div>
  )
}
