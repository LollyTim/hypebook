import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Python SDK - HyperBook",
  description: "Complete guide to the HyperEVM Python SDK",
}

export default function PythonSDKPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Python SDK
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Complete guide to using the HyperEVM Python SDK for backend applications and data analysis.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">🐍 Coming Soon</h3>
        <p>
          Python SDK documentation is in development. This will cover installation, usage patterns, and integration
          examples.
        </p>
      </div>
    </div>
  )
}
