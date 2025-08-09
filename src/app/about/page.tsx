"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About Dr Uang
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Kami menghadirkan solusi keuangan cerdas melalui teknologi AI terdepan
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Misi Kami</h2>
              <p className="text-gray-300 leading-relaxed">
                Mengoptimalkan kesehatan finansial pengguna dengan memberikan saran yang tepat, akurat, 
                dan mudah dipahami berdasarkan analisis mendalam terhadap data income dan expenses mereka.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Visi Kami</h2>
              <p className="text-gray-300 leading-relaxed">
                Menjadi platform finance advisor berbasis AI terdepan di Indonesia yang membantu jutaan orang 
                mencapai kebebasan finansial melalui keputusan keuangan yang cerdas dan terukur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              AI Technology
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Dr Uang menggunakan algoritma machine learning canggih yang terus belajar dari pola keuangan pengguna
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto"></div>
              <p className="text-gray-300">Analisis pola pengeluaran real-time</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mx-auto"></div>
              <p className="text-gray-300">Prediksi kebutuhan finansial masa depan</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mx-auto"></div>
              <p className="text-gray-300">Rekomendasi investasi yang dipersonalisasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Transparency</h3>
              <p className="text-gray-400">
                Selalu transparan dalam setiap rekomendasi dan analisis yang diberikan
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Security</h3>
              <p className="text-gray-400">
                Data keuangan Anda adalah prioritas utama dengan sistem keamanan berlapis
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Innovation</h3>
              <p className="text-gray-400">
                Terus berinovasi untuk memberikan solusi keuangan terbaik dengan teknologi terdepan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
