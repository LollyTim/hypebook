import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RPC Providers - HyperBook",
  description: "Guide to HyperEVM RPC endpoints and providers",
}

export default function RPCPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        RPC Providers
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Complete guide to HyperEVM RPC endpoints, providers, and connection methods.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">🌐 Coming Soon</h3>
        <p>
          RPC provider documentation is being finalized. This will include endpoint URLs, authentication, and usage
          examples.
        </p>
      </div>
    </div>
  )
}
