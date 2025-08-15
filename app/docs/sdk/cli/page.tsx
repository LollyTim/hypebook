import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CLI Tools - HypeBook",
  description: "Command-line tools for HyperEVM development",
}

export default function CLIPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        CLI Tools
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Comprehensive guide to HyperEVM command-line tools for development and deployment.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">⚙️ Coming Soon</h3>
        <p>
          CLI tools documentation is being prepared. This will include command reference, usage examples, and automation
          scripts.
        </p>
      </div>
    </div>
  )
}
