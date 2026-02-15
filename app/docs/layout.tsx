import { Sidebar } from "@/components/docs-sidebar"
import { DocsHeader } from "@/components/docs-header"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0d0d10]">
      <Sidebar className="hidden lg:block w-72 border-r border-[#333344] sticky top-0 h-screen" />
      <div className="flex-1 flex flex-col">
        <DocsHeader />
        <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  )
}
