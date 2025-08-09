"use client";

import React from "react";
import Link from "next/link";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import "./globals.css";

function Navigation() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">₹</span>
          </div>
          <span className="text-xl font-bold text-white">Dr Uang</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-medium">
            About
          </Link>
          {user && (
            <>
              <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors font-medium">
                Dashboard
              </Link>
              <Link href="/assessment" className="text-gray-300 hover:text-white transition-colors font-medium">
                Assessment
              </Link>
              <Link href="/profile" className="text-gray-300 hover:text-white transition-colors font-medium">
                Profile
              </Link>
            </>
          )}
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Hi, {user.name}</span>
              <button
                onClick={logout}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="text-gray-300 hover:text-white transition-colors font-medium">
                Login
              </Link>
              <Link href="/register" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-medium">
                Get Started
              </Link>
            </>
          )}
        </nav>
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Dr Uang - Finance Advisor</title>
        <meta name="description" content="AI-powered finance advisor to help manage your financial health" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gray-900 text-white font-sans antialiased" style={{ fontFamily: 'Inter, sans-serif' }}>
        <AuthProvider>
          <Navigation />
          <main className="min-h-screen bg-gray-900">
            {children}
          </main>
          <footer className="bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-6 py-8">
              <div className="text-center text-gray-400">
                <p>&copy; 2024 Dr Uang. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
