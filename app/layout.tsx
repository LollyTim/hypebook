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
  title: "HypeBook - The Open Guide for HyperEVM Builders",
  description: "Comprehensive open-source documentation, tutorials, and guides for building DeFi applications on Hyperliquid's HyperEVM. Learn smart contract development, cross-chain integration, and advanced DeFi protocols with real-world examples.",
  generator: "Next.js",
  applicationName: "HypeBook",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Hyperliquid",
    "HyperEVM",
    "DeFi",
    "blockchain",
    "documentation",
    "smart contracts",
    "Ethereum",
    "cryptocurrency",
    "trading",
    "perpetual futures",
    "spot trading",
    "cross-chain",
    "bridge",
    "HYPE token",
    "gas fees",
    "EIP-1559",
    "developer tools",
    "SDK",
    "RPC",
    "testnet",
    "faucet",
    "NFT",
    "Web3",
    "crypto development",
    "tutorials",
    "guides"
  ],
  authors: [{ name: "HypeBook Team", url: "https://github.com/hypebook-docs" }],
  creator: "HypeBook Team",
  publisher: "HypeBook",
  category: "Technology",
  classification: "Documentation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hypebook.dev"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/hypebook-logo.png",
    apple: "/hypebook-logo.png",
  },
  openGraph: {
    title: "HypeBook - The Open Guide for HyperEVM Builders",
    description: "Comprehensive open-source documentation, tutorials, and guides for building DeFi applications on Hyperliquid's HyperEVM. Learn smart contract development, cross-chain integration, and advanced DeFi protocols with real-world examples.",
    url: "https://hypebook.dev",
    siteName: "HypeBook",
    images: [
      {
        url: "/hypebook-logo.png",
        width: 1200,
        height: 630,
        alt: "HypeBook - Comprehensive HyperEVM Documentation and Development Guides",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
    publishedTime: "2024-01-01T00:00:00.000Z",
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: "summary_large_image",
    title: "HypeBook - The Open Guide for HyperEVM Builders",
    description: "Comprehensive open-source documentation, tutorials, and guides for building DeFi applications on Hyperliquid's HyperEVM.",
    images: ["/hypebook-logo.png"],
    creator: "@hypebook",
    site: "@hypebook",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "HypeBook",
    "application-name": "HypeBook",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#000000",
    "color-scheme": "dark",
    "viewport": "width=device-width, initial-scale=1, maximum-scale=5",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-tap-highlight": "no",
    "referrer": "strict-origin-when-cross-origin",
    "X-UA-Compatible": "IE=edge",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
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
