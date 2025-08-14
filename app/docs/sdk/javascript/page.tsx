import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JavaScript SDK - HyperBook",
  description: "Complete guide to the HyperEVM JavaScript SDK",
}

export default function JavaScriptSDKPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="font-serif text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        JavaScript SDK
      </h1>

      <p className="text-lg text-muted-foreground mb-8">
        Complete guide to using the HyperEVM JavaScript SDK for web and Node.js applications.
      </p>

      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
        <h3 className="font-sans text-lg font-semibold mb-2 text-orange-400">📦 Coming Soon</h3>
        <p>
          JavaScript SDK documentation is being written. This will include installation, API reference, and practical
          examples.
        </p>
      </div>
    </div>
  )
}
