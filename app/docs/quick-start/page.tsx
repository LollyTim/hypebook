import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quick Start - HyperBook",
  description: "Get started with HyperEVM development in minutes",
}

export default function QuickStartPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Quick Start Guide
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Get up and running with HyperEVM development in just a few minutes.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
        <h2 className="font-sans text-xl font-semibold mb-4 text-primary">Prerequisites</h2>
        <ul className="space-y-2">
          <li>Node.js 18+ installed</li>
          <li>Basic knowledge of Ethereum development</li>
          <li>Familiarity with Solidity</li>
        </ul>
      </div>

      <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Step 1: Install the CLI</h2>
      <div className="bg-slate-900 rounded-lg p-4 mb-6">
        <code className="text-green-400">npm install -g @hyperliquid/cli</code>
      </div>

      <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Step 2: Initialize Your Project</h2>
      <div className="bg-slate-900 rounded-lg p-4 mb-6">
        <code className="text-green-400">hyper init my-project</code>
      </div>

      <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Step 3: Deploy Your First Contract</h2>
      <div className="bg-slate-900 rounded-lg p-4 mb-6">
        <code className="text-green-400">hyper deploy --network testnet</code>
      </div>

      <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-accent">🎉 Congratulations!</h3>
        <p>
          You've successfully deployed your first contract to HyperEVM. Continue reading to learn more about advanced
          features.
        </p>
      </div>
    </div>
  )
}
