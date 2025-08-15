import type React from "react"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsHeader } from "@/components/docs-header"

export default function DocsLayoutPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <DocsHeader />
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 lg:pl-80">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
