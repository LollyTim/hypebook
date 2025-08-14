import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Installation - HyperBook",
  description: "Complete installation guide for HyperEVM development tools",
}

export default function InstallationPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Installation Guide
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Complete guide to installing and configuring HyperEVM development tools.
      </p>

      <h2 className="font-serif text-2xl font-bold mt-8 mb-4">System Requirements</h2>
      <ul className="space-y-2 mb-6">
        <li>
          <strong>Operating System:</strong> macOS, Linux, or Windows (WSL2 recommended)
        </li>
        <li>
          <strong>Node.js:</strong> Version 18.0 or higher
        </li>
        <li>
          <strong>Memory:</strong> At least 4GB RAM
        </li>
        <li>
          <strong>Storage:</strong> 10GB free space
        </li>
      </ul>

      <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Install Node.js</h2>
      <p className="mb-4">Download and install Node.js from the official website:</p>
      <div className="bg-slate-900 rounded-lg p-4 mb-6">
        <code className="text-green-400">
          curl -fsSL https://nodejs.org/dist/v18.17.0/node-v18.17.0-linux-x64.tar.xz
        </code>
      </div>

      <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Install HyperEVM CLI</h2>
      <div className="bg-slate-900 rounded-lg p-4 mb-6">
        <code className="text-green-400">npm install -g @hyperliquid/cli@latest</code>
      </div>

      <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Verify Installation</h2>
      <div className="bg-slate-900 rounded-lg p-4 mb-6">
        <code className="text-green-400">hyper --version</code>
      </div>

      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-green-400">✅ Installation Complete</h3>
        <p>
          You're now ready to start building on HyperEVM! Check out the Quick Start guide to create your first project.
        </p>
      </div>
    </div>
  )
}
