import type React from "react"
import type { Metadata } from "next"
import { Outfit, Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/docs-sidebar"

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "HyperBook - The Open Guide for HyperEVM Builders",
  description: "Open-source documentation and guides for building on Hyperliquid",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/hyperbook-logo.png",
    apple: "/hyperbook-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950">
        <SidebarProvider>{children}</SidebarProvider>
      </body>
    </html>
  )
}
