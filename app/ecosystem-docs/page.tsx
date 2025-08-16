"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, BookOpen, Globe, Users, Zap, Shield, GitBranch, Search, FileText, Code, Database, Rocket, Mail, Plus, Settings, Upload, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";

export default function EcosystemDocsPage() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const addToWaitlist = useMutation(api.waitlist.addToWaitlist);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            setErrorMessage("Please enter a valid email address");
            setSubmitStatus("error");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            await addToWaitlist({ email: email.trim() });
            setSubmitStatus("success");
            setEmail("");
        } catch (error) {
            setSubmitStatus("error");
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Failed to join waitlist. Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <Navigation />

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge
                            variant="secondary"
                            className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
                        >
                            <GitBranch className="w-4 h-4 mr-2" />
                            Professional Documentation Hosting
                        </Badge>

                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-gradient">Host Your Docs</span>
                            <br />
                            <span className="text-foreground">on HypeBook</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Professional documentation hosting with MDX support, modern layout, and seamless integration into the Hyperliquid ecosystem.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold animate-glow group"
                            >
                                <Link href="#waitlist">
                                    Join Waitlist
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="glass glass-hover border-primary/30 text-foreground px-8 py-4 text-lg font-semibold group bg-transparent"
                            >
                                <Link href="/docs">
                                    <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                                    View Examples
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Professional <span className="text-gradient">Documentation</span> Platform
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Modern documentation with MDX support and seamless ecosystem integration
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FileText,
                                title: "MDX Support",
                                description: "Write documentation in MDX format with embedded React components, code blocks, and interactive elements.",
                                color: "text-emerald-400"
                            },
                            {
                                icon: Search,
                                title: "Advanced Search",
                                description: "Full-text search across all documentation with intelligent filtering and quick navigation.",
                                color: "text-cyan-400"
                            },
                            {
                                icon: Code,
                                title: "Code Highlighting",
                                description: "Syntax highlighting for all major programming languages with copy-to-clipboard functionality.",
                                color: "text-blue-400"
                            },
                            {
                                icon: Database,
                                title: "Version Control",
                                description: "Git-based version control with automatic deployments and rollback capabilities.",
                                color: "text-purple-400"
                            },
                            {
                                icon: Globe,
                                title: "Custom Domains",
                                description: "Custom subdomains (yourproject.hypebook.xyz) with SSL certificates and CDN optimization.",
                                color: "text-orange-400"
                            },
                            {
                                icon: Rocket,
                                title: "Performance",
                                description: "Lightning-fast loading with static generation, caching, and optimized delivery.",
                                color: "text-pink-400"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <Card className="h-full glass hover:glass-hover transition-all duration-300 border-primary/20 hover:border-primary/40">
                                    <CardHeader>
                                        <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4`}>
                                            <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                        </div>
                                        <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documentation Structure Preview */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Professional <span className="text-gradient">Layout</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Professional documentation structure with sidebar navigation, search, and responsive design
                        </p>
                    </motion.div>

                    <motion.div
                        className="max-w-6xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Card className="glass border-primary/20 overflow-hidden">
                            <CardHeader className="bg-muted/50 border-b border-border">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div className="text-sm text-muted-foreground">yourproject.hypebook.xyz</div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="flex">
                                    {/* Sidebar */}
                                    <div className="w-64 bg-card border-r border-border p-4">
                                        <div className="space-y-4">
                                            <div className="text-sm font-semibold text-primary">Documentation</div>
                                            <div className="space-y-2">
                                                <div className="text-sm text-muted-foreground hover:text-primary cursor-pointer">Getting Started</div>
                                                <div className="text-sm text-muted-foreground hover:text-primary cursor-pointer">Installation</div>
                                                <div className="text-sm text-muted-foreground hover:text-primary cursor-pointer">API Reference</div>
                                                <div className="text-sm text-muted-foreground hover:text-primary cursor-pointer">Examples</div>
                                                <div className="text-sm text-muted-foreground hover:text-primary cursor-pointer">Deployment</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-1 p-6">
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-foreground">Getting Started</h3>
                                            <p className="text-muted-foreground">
                                                Welcome to your project documentation. This is a preview of how your documentation will look on HypeBook.
                                            </p>
                                            <div className="bg-muted p-4 rounded-lg border border-border">
                                                <pre className="text-sm text-primary">
                                                    <code>npm install your-package</code>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Why Choose <span className="text-gradient">HypeBook</span>?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Professional documentation hosting with ecosystem integration
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Built-in Audience",
                                description: "Reach developers already building on Hyperliquid. No need to build your own documentation audience from scratch.",
                                color: "text-emerald-400"
                            },
                            {
                                icon: Globe,
                                title: "Ecosystem Discovery",
                                description: "Get discovered by other builders in the Hyperliquid ecosystem. Cross-pollination leads to more integrations.",
                                color: "text-cyan-400"
                            },
                            {
                                icon: Zap,
                                title: "Faster Integration",
                                description: "Developers can find and integrate your product faster when docs are in a familiar, trusted location.",
                                color: "text-blue-400"
                            },
                            {
                                icon: Shield,
                                title: "Quality Assurance",
                                description: "Benefit from HypeBook's documentation standards and review process. Ensure your docs are comprehensive and up-to-date.",
                                color: "text-purple-400"
                            },
                            {
                                icon: BookOpen,
                                title: "Consistent Experience",
                                description: "Provide a consistent documentation experience that matches the Hyperliquid ecosystem's design and navigation patterns.",
                                color: "text-orange-400"
                            },
                            {
                                icon: GitBranch,
                                title: "Community Driven",
                                description: "Contribute to and benefit from the growing Hyperliquid developer community. Share knowledge and best practices.",
                                color: "text-pink-400"
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <Card className="h-full glass hover:glass-hover transition-all duration-300 border-primary/20 hover:border-primary/40">
                                    <CardHeader>
                                        <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4`}>
                                            <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                                        </div>
                                        <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed">
                                            {benefit.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Waitlist Section */}
            <section id="waitlist" className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Coming <span className="text-gradient">Soon</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Join the waitlist to be among the first to host your documentation on HypeBook
                        </p>
                    </motion.div>

                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Waitlist Form */}
                            <Card className="glass border-primary/20">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold">Join the Waitlist</CardTitle>
                                    <CardDescription className="text-lg">
                                        Be notified when we launch and get early access to our documentation hosting platform
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-4">
                                            <Label htmlFor="waitlist-email" className="text-base font-semibold">
                                                <Mail className="w-4 h-4 mr-2 inline" />
                                                Email Address
                                            </Label>
                                            <Input
                                                id="waitlist-email"
                                                type="email"
                                                placeholder="your.email@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="glass border-primary/20"
                                                disabled={isSubmitting}
                                            />
                                        </div>

                                        {submitStatus === "success" && (
                                            <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                                                <p className="text-green-500 text-sm">
                                                    ✅ Successfully joined the waitlist! We'll notify you when we launch.
                                                </p>
                                            </div>
                                        )}

                                        {submitStatus === "error" && (
                                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                                                <p className="text-red-500 text-sm">
                                                    ❌ {errorMessage}
                                                </p>
                                            </div>
                                        )}

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Joining..." : "Join Waitlist"}
                                            {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                                        </Button>
                                    </form>

                                    <p className="text-center text-sm text-muted-foreground">
                                        We'll notify you as soon as we launch. No spam, just updates.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* What's Coming Preview */}
                            <Card className="glass border-primary/20">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold">What's Coming?</CardTitle>
                                    <CardDescription className="text-lg">
                                        Here's what you can expect when we launch:
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        {[
                                            {
                                                icon: Plus,
                                                title: "Create Your First Project",
                                                description: "Set up a new documentation project with a custom subdomain"
                                            },
                                            {
                                                icon: Upload,
                                                title: "Upload Your Content",
                                                description: "Import existing documentation or start fresh with our editor"
                                            },
                                            {
                                                icon: Settings,
                                                title: "Customize & Deploy",
                                                description: "Configure your site settings and publish instantly"
                                            },
                                            {
                                                icon: FileText,
                                                title: "Custom SOC Template",
                                                description: "Use our pre-built SOC (Security Operations Center) documentation templates"
                                            }
                                        ].map((step, index) => (
                                            <div key={index} className="flex items-start space-x-4">
                                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <step.icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-primary/20">
                                        <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                            <Clock className="w-4 h-4" />
                                            <span>Launch expected in Q4 2025</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
