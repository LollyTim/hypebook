import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "NFT Collection Examples - HypeBook",
  description: "Creating and managing NFT collections on HyperEVM",
}

export default function NFTExamplesPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        NFT Collection Examples
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Complete guide to creating, deploying, and managing NFT collections on HyperEVM.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">🎨 Coming Soon</h3>
        <p>
          NFT collection examples are being created. This will include ERC-721, ERC-1155, and marketplace integration
          tutorials.
        </p>
      </div>
    </div>
  )
}
