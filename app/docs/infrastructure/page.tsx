import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Server, Settings, BarChart3, Shield, Network, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Infrastructure - HypeBook",
    description: "Complete guide to running HyperEVM nodes and infrastructure",
}

export default function InfrastructurePage() {
    const infrastructureGuides = [
        {
            title: "Node Setup",
            description: "Step-by-step guide to setting up and running HyperEVM nodes",
            icon: Server,
            href: "/docs/infrastructure/node-setup",
            color: "from-primary/20 to-accent/20",
            status: "Available",
        },
        {
            title: "Validator Guide",
            description: "Become a validator on the HyperEVM network",
            icon: Shield,
            href: "/docs/infrastructure/validator",
            color: "from-accent/20 to-primary/20",
            status: "Available",
        },
        {
            title: "Network Configuration",
            description: "Configure networking and connectivity for optimal performance",
            icon: Network,
            href: "/docs/infrastructure/networking",
            color: "from-primary/15 to-accent/25",
            status: "Available",
        },
        {
            title: "Monitoring & Maintenance",
            description: "Monitor node health and perform routine maintenance",
            icon: BarChart3,
            href: "/docs/infrastructure/monitoring",
            color: "from-accent/15 to-primary/25",
            status: "Available",
        },
        {
            title: "Performance Optimization",
            description: "Optimize your node for maximum performance and efficiency",
            icon: Zap,
            href: "/docs/infrastructure/optimization",
            color: "from-primary/25 to-accent/15",
            status: "Available",
        },
        {
            title: "Advanced Configuration",
            description: "Advanced settings and customization options",
            icon: Settings,
            href: "/docs/infrastructure/advanced",
            color: "from-accent/25 to-primary/15",
            status: "Available",
        },
    ]

    return (
        <div className="space-y-8 sm:space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                    <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
                        Infrastructure
                    </Badge>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight px-4">
                        <span className="text-gradient">HyperEVM</span>
                        <br />
                        <span className="text-foreground">Infrastructure Guide</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans px-4">
                        Complete guides for running, maintaining, and optimizing HyperEVM nodes. From basic setup to advanced configurations.
                    </p>
                </div>
            </div>

            {/* Quick Overview */}
            <div className="bg-muted/30 rounded-lg p-6 sm:p-8 mx-4 sm:mx-0">
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-gradient">
                    What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Node Operations</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Setting up HyperEVM nodes from scratch</li>
                            <li>• Hardware requirements and recommendations</li>
                            <li>• Network configuration and security</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Advanced Topics</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Validator setup and staking</li>
                            <li>• Performance monitoring and optimization</li>
                            <li>• Troubleshooting and maintenance</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Infrastructure Guides Grid */}
            <div className="space-y-6 sm:space-y-8">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-center text-gradient">
                    Infrastructure Guides
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
                    {infrastructureGuides.map((guide, index) => {
                        const Icon = guide.icon
                        return (
                            <Card
                                key={index}
                                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 glass w-full"
                            >
                                <CardHeader className="pb-3 sm:pb-4">
                                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                                        <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-br ${guide.color}`}>
                                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                        </div>
                                        <Badge
                                            variant={guide.status === "Available" ? "default" : "secondary"}
                                            className="text-xs px-2 py-1"
                                        >
                                            {guide.status}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-base sm:text-lg font-serif group-hover:text-primary transition-colors break-words">
                                        {guide.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <CardDescription className="text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed break-words">
                                        {guide.description}
                                    </CardDescription>
                                    <Button
                                        asChild
                                        variant="ghost"
                                        size="sm"
                                        className="w-full justify-between group-hover:bg-primary/10 transition-colors text-xs sm:text-sm"
                                    >
                                        <Link href={guide.href}>
                                            Read Guide
                                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>

            {/* Prerequisites Section */}
            <div className="bg-card border rounded-lg p-6 sm:p-8 mx-4 sm:mx-0">
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-gradient">
                    Prerequisites
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Server className="w-4 h-4 text-primary" />
                            Hardware
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• 8+ CPU cores</li>
                            <li>• 32GB+ RAM</li>
                            <li>• 1TB+ SSD storage</li>
                            <li>• Stable internet connection</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Settings className="w-4 h-4 text-primary" />
                            Software
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Ubuntu 20.04+ or similar</li>
                            <li>• Docker & Docker Compose</li>
                            <li>• Basic Linux administration</li>
                            <li>• Network configuration knowledge</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Shield className="w-4 h-4 text-primary" />
                            Security
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Firewall configuration</li>
                            <li>• SSL/TLS certificates</li>
                            <li>• Key management</li>
                            <li>• Backup strategies</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Getting Started */}
            <div className="text-center space-y-4 sm:space-y-6 bg-muted/20 rounded-lg p-6 sm:p-8 mx-4 sm:mx-0">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-gradient">
                    Ready to Get Started?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                    Begin with our comprehensive node setup guide to deploy your first HyperEVM node.
                </p>
                <Button asChild size="lg" className="font-medium">
                    <Link href="/docs/infrastructure/node-setup">
                        Start Node Setup
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}

