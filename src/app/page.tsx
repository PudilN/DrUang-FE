"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

// Component for logged-out users
function LandingPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Dr Uang
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              AI-powered finance advisor yang membantu mengoptimalkan kesehatan keuangan Anda
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/register">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium rounded-xl">
                Get Started
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-xl">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fitur Utama Dr Uang
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Teknologi AI terdepan untuk analisis keuangan yang akurat dan personal
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Analisis AI Mendalam</h3>
              <p className="text-gray-400 leading-relaxed">
                Sistem AI menganalisis pola keuangan Anda dan memberikan insight yang akurat untuk pengambilan keputusan finansial yang lebih baik
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Saran Personal</h3>
              <p className="text-gray-400 leading-relaxed">
                Rekomendasi finansial yang disesuaikan dengan profil, tujuan, dan kondisi keuangan Anda secara personal
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Keamanan Terjamin</h3>
              <p className="text-gray-400 leading-relaxed">
                Data keuangan Anda dilindungi dengan enkripsi tingkat bank dan standar keamanan tertinggi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tanya Jawab Umum (FAQ)
            </h2>
            <p className="text-gray-400 text-lg">
              Pertanyaan yang sering diajukan tentang Dr Uang
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Apa itu Dr Uang dan bagaimana cara kerjanya?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Dr Uang adalah aplikasi finance advisor berbasis AI yang membantu Anda mengelola keuangan dengan lebih baik. Aplikasi ini menganalisis data keuangan Anda dan memberikan saran personal untuk mencapai tujuan finansial.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Apakah data keuangan saya aman?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Ya, keamanan data adalah prioritas utama kami. Semua data dienkripsi dengan standar keamanan tingkat bank dan tidak akan dibagikan kepada pihak ketiga tanpa persetujuan Anda.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Berapa biaya menggunakan Dr Uang?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Dr Uang menawarkan paket gratis dengan fitur dasar, serta paket premium dengan fitur analisis mendalam dan konsultasi personal. Anda dapat memulai dengan paket gratis terlebih dahulu.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Bagaimana AI memberikan saran keuangan?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  AI kami menganalisis pola pengeluaran, pendapatan, dan tujuan keuangan Anda, kemudian membandingkannya dengan data agregat untuk memberikan rekomendasi yang dipersonalisasi dan berbasis data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Siap Mengoptimalkan Keuangan Anda?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pengguna yang telah merasakan manfaat Dr Uang dalam mengelola keuangan mereka
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                Mulai Gratis Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component for logged-in users (redirect to dashboard)
function LoggedInHome() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
          <span className="text-white font-bold text-2xl">₹</span>
        </div>
        <h1 className="text-2xl font-bold text-white">Redirecting to Dashboard...</h1>
        <p className="text-gray-400">Please wait while we redirect you to your dashboard.</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // If user is logged in, redirect to dashboard
  if (user) {
    if (typeof window !== 'undefined') {
      window.location.href = '/dashboard';
    }
    return <LoggedInHome />;
  }

  // Show landing page for non-logged-in users
  return <LandingPage />;
}
