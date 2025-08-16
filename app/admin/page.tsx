"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Lock, Mail, Calendar, Users, Download } from "lucide-react";

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Hardcoded admin password
    const ADMIN_PASSWORD = "hypebook2025";

    const waitlistEmails = useQuery(api.waitlist.getAllWaitlistEmails);

    const handleLogin = () => {
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setError("");
        } else {
            setError("Invalid password");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    const downloadCSV = () => {
        if (!waitlistEmails || waitlistEmails.length === 0) {
            alert("No data to export");
            return;
        }

        try {
            // Create professional CSV content with proper headers and formatting
            const csvHeaders = [
                "Email Address",
                "Registration Date",
                "Registration Time",
                "Days Since Registration"
            ];

            const currentDate = new Date();
            const csvRows = waitlistEmails.map((entry) => {
                const registrationDate = new Date(entry.joinedAt);
                const daysSince = Math.floor((currentDate.getTime() - registrationDate.getTime()) / (1000 * 60 * 60 * 24));

                return [
                    entry.email,
                    registrationDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }),
                    registrationDate.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: true
                    }),
                    daysSince.toString()
                ];
            });

            // Add summary row
            const summaryRow = [
                `Total Registrations: ${waitlistEmails.length}`,
                `Export Date: ${currentDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}`,
                `Export Time: ${currentDate.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                })}`,
                ""
            ];

            const csvContent = [
                csvHeaders.join(','),
                ...csvRows.map(row => row.join(',')),
                '', // Empty row for spacing
                summaryRow.join(',')
            ].join('\n');

            // Create and download the file
            const blob = new Blob([csvContent], {
                type: 'text/csv;charset=utf-8;'
            });

            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `hypebook-waitlist-${currentDate.toISOString().split('T')[0]}.csv`;
            link.style.display = 'none';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

            // Show success message
            alert(`Successfully exported ${waitlistEmails.length} email addresses to CSV`);
        } catch (error) {
            console.error('Error exporting CSV:', error);
            alert('Failed to export CSV. Please try again.');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-background">
                <Navigation />
                <div className="flex items-center justify-center min-h-screen pt-32">
                    <Card className="w-full max-w-md glass border-primary/20">
                        <CardHeader className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Lock className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
                            <CardDescription>
                                Enter the admin password to view waitlist data
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Input
                                    type="password"
                                    placeholder="Enter admin password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="glass border-primary/20"
                                />
                                {error && (
                                    <p className="text-sm text-red-500">{error}</p>
                                )}
                            </div>
                            <Button
                                onClick={handleLogin}
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                                Login
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Waitlist <span className="text-gradient">Admin</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Manage and view all waitlist registrations
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <Card className="glass border-primary/20">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Total Registrations</p>
                                        <p className="text-2xl font-bold">
                                            {waitlistEmails ? waitlistEmails.length : "..."}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass border-primary/20">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Calendar className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Latest Registration</p>
                                        <p className="text-sm font-semibold">
                                            {waitlistEmails && waitlistEmails.length > 0
                                                ? new Date(waitlistEmails[0].joinedAt).toLocaleDateString()
                                                : "No registrations"}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass border-primary/20">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Download className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Export Data</p>
                                        <Button
                                            onClick={downloadCSV}
                                            variant="outline"
                                            size="sm"
                                            className="mt-1"
                                        >
                                            Download CSV
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Email List */}
                    <Card className="glass border-primary/20">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Waitlist Emails</CardTitle>
                            <CardDescription>
                                All registered email addresses for the waitlist
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {waitlistEmails === undefined ? (
                                <div className="text-center py-8">
                                    <p className="text-muted-foreground">Loading...</p>
                                </div>
                            ) : waitlistEmails.length === 0 ? (
                                <div className="text-center py-8">
                                    <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground">No waitlist registrations yet</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {waitlistEmails.map((entry, index) => (
                                        <div
                                            key={entry._id}
                                            className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <Badge variant="secondary" className="bg-primary/10 text-primary">
                                                    #{index + 1}
                                                </Badge>
                                                <div>
                                                    <p className="font-semibold">{entry.email}</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Joined: {new Date(entry.joinedAt).toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
