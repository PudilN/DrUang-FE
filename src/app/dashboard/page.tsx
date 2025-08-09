"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

// Mock data for demonstration
const mockFinancialData = {
  monthlyIncome: 15000000,
  monthlyExpenses: 12000000,
  savings: 50000000,
  debt: 10000000,
  recentTransactions: [
    { id: 1, description: "Gaji Bulanan", amount: 15000000, type: "income", date: "2024-01-15" },
    { id: 2, description: "Belanja Groceries", amount: -500000, type: "expense", date: "2024-01-14" },
    { id: 3, description: "Cicilan Rumah", amount: -5000000, type: "expense", date: "2024-01-10" },
    { id: 4, description: "Investasi Reksa Dana", amount: -2000000, type: "investment", date: "2024-01-08" },
    { id: 5, description: "Freelance Project", amount: 3000000, type: "income", date: "2024-01-05" },
  ]
};

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}

function NoAssessmentPrompt() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Selamat Datang di Dashboard Anda!
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Untuk mendapatkan analisis keuangan yang personal dan akurat, silakan lengkapi assessment keuangan terlebih dahulu.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Mengapa Assessment Penting?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Mendapatkan analisis kondisi keuangan yang akurat</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Rekomendasi investasi yang sesuai dengan profil risiko Anda</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Saran perencanaan keuangan jangka panjang</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Dashboard personal dengan visualisasi data yang mudah dipahami</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <Link href="/assessment">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium rounded-xl">
                Mulai Assessment Sekarang
              </Button>
            </Link>
            <p className="text-gray-400 text-sm">
              Assessment hanya membutuhkan waktu 5-10 menit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardWithData() {
  const { user } = useAuth();
  const data = mockFinancialData;
  
  const netIncome = data.monthlyIncome - data.monthlyExpenses;
  const savingsRate = ((netIncome / data.monthlyIncome) * 100).toFixed(1);
  
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Dashboard Keuangan
          </h1>
          <p className="text-gray-400">
            Selamat datang kembali, {user?.name}! Berikut ringkasan keuangan Anda bulan ini.
          </p>
        </div>

        {/* Financial Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400">Pendapatan Bulanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">
                {formatCurrency(data.monthlyIncome)}
              </div>
              <p className="text-xs text-gray-500 mt-1">+12% dari bulan lalu</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400">Pengeluaran Bulanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-400">
                {formatCurrency(data.monthlyExpenses)}
              </div>
              <p className="text-xs text-gray-500 mt-1">-5% dari bulan lalu</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400">Total Tabungan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">
                {formatCurrency(data.savings)}
              </div>
              <p className="text-xs text-gray-500 mt-1">+8% dari bulan lalu</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400">Tingkat Menabung</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-400">
                {savingsRate}%
              </div>
              <p className="text-xs text-gray-500 mt-1">Target: 20%</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Income vs Expenses Chart */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Pendapatan vs Pengeluaran</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Pendapatan</span>
                    <span className="text-sm text-green-400">{formatCurrency(data.monthlyIncome)}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Pengeluaran</span>
                    <span className="text-sm text-red-400">{formatCurrency(data.monthlyExpenses)}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">Sisa</span>
                    <span className={`text-sm font-bold ${netIncome > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {formatCurrency(netIncome)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Transaksi Terbaru</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        transaction.type === 'income' ? 'bg-green-500' :
                        transaction.type === 'investment' ? 'bg-blue-500' : 'bg-red-500'
                      }`}></div>
                      <div>
                        <p className="text-sm font-medium text-white">{transaction.description}</p>
                        <p className="text-xs text-gray-400">{transaction.date}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-medium ${
                      transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}{formatCurrency(Math.abs(transaction.amount))}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  Lihat Semua Transaksi
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-700/50 mt-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>AI Insights & Rekomendasi</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">💡 Saran Penghematan</h4>
                <p className="text-gray-300 text-sm">
                  Berdasarkan analisis pengeluaran Anda, Anda bisa menghemat sekitar Rp 1.5 juta per bulan dengan mengurangi pengeluaran makan di luar sebesar 30%.
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">📈 Peluang Investasi</h4>
                <p className="text-gray-300 text-sm">
                  Dengan tingkat menabung {savingsRate}%, Anda memiliki potensi untuk meningkatkan investasi bulanan. Pertimbangkan untuk mengalokasikan 10% pendapatan ke reksa dana saham.
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">🎯 Target Keuangan</h4>
                <p className="text-gray-300 text-sm">
                  Anda sedang dalam jalur yang baik untuk mencapai target dana darurat 6 bulan. Diperkirakan akan tercapai dalam 8 bulan dengan tingkat menabung saat ini.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
    return null;
  }

  // Check if user has completed assessment
  if (!user.hasCompletedAssessment) {
    return <NoAssessmentPrompt />;
  }

  return <DashboardWithData />;
}
