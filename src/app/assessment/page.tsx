"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Milestone {
  level: number;
  finalHeight: string;
  label: string;
  milestone: string;
}

const milestones: Milestone[] = [
  { level: 1, finalHeight: "20%", label: "Level 1", milestone: "Cari 10 Juta" },
  { level: 2, finalHeight: "30%", label: "Level 2", milestone: "Membayar semua hutang" },
  { level: 3, finalHeight: "40%", label: "Level 3", milestone: "Dana darurat sebesar 3 bulan biaya hidup" },
  { level: 4, finalHeight: "50%", label: "Level 4", milestone: "Investasi 20 % dari pendapatan" },
  { level: 5, finalHeight: "60%", label: "Level 5", milestone: "Buat dana pendidikan anak" },
  { level: 6, finalHeight: "70%", label: "Level 6", milestone: "Melunasi KPR" },
  { level: 7, finalHeight: "80%", label: "Level 7", milestone: "Berbagi" }
];

export default function AssessmentPage() {
  const router = useRouter();
  const [showIntro, setShowIntro] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    // Page 1: Profil Keuangan Dasar
    savings: "",
    debt: "",
    houseLoan: "",
    // Page 2: Pendapatan dan Pengeluaran
    monthlyIncome: "",
    monthlyExpenses: "",
    emergencyFund: "",
    // Page 3: Investasi dan Aset
    currentInvestments: "",
    investmentExperience: "",
    riskTolerance: "",
    // Page 4: Tujuan Keuangan
    financialGoals: "",
    timeHorizon: "",
    priorityGoal: "",
    // Page 5: Gaya Hidup dan Preferensi
    spendingHabits: "",
    financialKnowledge: "",
    advisorPreference: ""
  });

  useEffect(() => {
    if (showIntro) {
      // Trigger animation on mount
      const animationTimer = setTimeout(() => {
        setAnimate(true);
      }, 500);

      return () => clearTimeout(animationTimer);
    }
  }, [showIntro]);

  const startAssessment = () => {
    setShowIntro(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextPage = () => {
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Assessment completed:", formData);
    const simulatedResult = {
      determinedLevel: 3,
      recommendationText: `Berdasarkan data keuangan Anda, selamat! Anda telah berhasil mencapai Level 3: Dana Darurat Terbentuk. Untuk melangkah ke level berikutnya, fokuslah pada peningkatan alokasi dana untuk investasi. Kami merekomendasikan untuk mulai mengalokasikan 10% dari pendapatan bulanan Anda.`,
      budgetingPlan: [
        { category: "Pendapatan Bersih", amount: 15000000 },
        { category: "Dana Darurat", amount: 1500000 },
        { category: "Investasi", amount: 1500000 },
        { category: "Kebutuhan Pokok", amount: 7500000 },
        { category: "Gaya Hidup", amount: 3000000 },
        { category: "Tabungan Tujuan", amount: 1500000 },
      ],
    };

    // Menyimpan hasil simulasi di sessionStorage agar bisa diakses oleh ResultPage
    sessionStorage.setItem('assessmentResult', JSON.stringify(simulatedResult));

    // Navigasi ke halaman hasil
    router.push('/result');
  };

  // 7 Levels Intro Component
  if (showIntro) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            7 Levels Keuangan
          </h1>
          <p className="text-gray-300 text-lg">
            Perjalanan menuju kebebasan finansial
          </p>
        </div>

        {/* Bars Container */}
        <div className="flex justify-center items-end space-x-2 md:space-x-4 h-96 w-full max-w-4xl overflow-x-auto">
          {milestones.map((milestone, index) => (
            <div key={milestone.level} className="flex flex-col items-center min-w-0 flex-1 max-w-32">
              {/* Bar */}
              <div
                className="w-12 md:w-16 bg-gradient-to-t from-green-700 to-green-400 rounded-t-lg flex items-end justify-center pb-2 px-1 transition-all duration-1000 ease-out relative"
                style={{
                  height: animate ? milestone.finalHeight : "0",
                  transitionDelay: `${index * 0.2}s`
                }}
              >
                {/* Milestone text inside bar */}
                <div className="text-white text-xs md:text-sm font-medium text-center leading-tight">
                  {animate && (
                    <span 
                      className="opacity-0 animate-fade-in"
                      style={{
                        animationDelay: `${(index * 0.2) + 0.8}s`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      {milestone.milestone}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Level label below bar */}
              <span className="text-white mt-3 text-sm md:text-base font-semibold">
                {milestone.label}
              </span>
            </div>
          ))}
        </div>

        {/* Start Button */}
        <div className="text-center mt-12">
          <div 
            className="opacity-0 animate-fade-in"
            style={{
              animationDelay: '3s',
              animationFillMode: 'forwards'
            }}
          >
            <p className="text-gray-300 text-lg mb-6">
              Siap untuk mengetahui level keuangan Anda saat ini?
            </p>
            <Button
              onClick={startAssessment}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
            >
              Mulai Assessment
            </Button>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
        `}</style>
      </div>
    );
  }

  // Assessment Form Pages
  const renderPage1 = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Profil Keuangan Dasar</h2>
        <p className="text-gray-400">Mari mulai dengan memahami kondisi keuangan dasar Anda</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Berapa total uang kamu di tabungan?
          </label>
          <Input
            type="text"
            placeholder="Contoh: Rp 50,000,000"
            value={formData.savings}
            onChange={(e) => handleInputChange("savings", e.target.value)}
            className="h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Berapa hutang yang kamu punya?
          </label>
          <Input
            type="text"
            placeholder="Contoh: Rp 10,000,000"
            value={formData.debt}
            onChange={(e) => handleInputChange("debt", e.target.value)}
            className="h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Jika sedang mencicil rumah, berapa cicilan rumah per bulan?
          </label>
          <Input
            type="text"
            placeholder="Contoh: Rp 5,000,000 (kosongkan jika tidak ada)"
            value={formData.houseLoan}
            onChange={(e) => handleInputChange("houseLoan", e.target.value)}
            className="h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );

  const renderPage2 = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Pendapatan dan Pengeluaran</h2>
        <p className="text-gray-400">Ceritakan tentang arus kas bulanan Anda</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Berapa pendapatan bulanan Anda?
          </label>
          <Input
            type="text"
            placeholder="Contoh: Rp 15,000,000"
            value={formData.monthlyIncome}
            onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
            className="h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Berapa total pengeluaran bulanan Anda?
          </label>
          <Input
            type="text"
            placeholder="Contoh: Rp 12,000,000"
            value={formData.monthlyExpenses}
            onChange={(e) => handleInputChange("monthlyExpenses", e.target.value)}
            className="h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Apakah Anda memiliki dana darurat?
          </label>
          <select
            value={formData.emergencyFund}
            onChange={(e) => handleInputChange("emergencyFund", e.target.value)}
            className="h-12 w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 focus:border-blue-500"
          >
            <option value="">Pilih jawaban</option>
            <option value="none">Tidak ada</option>
            <option value="1-3months">1-3 bulan pengeluaran</option>
            <option value="3-6months">3-6 bulan pengeluaran</option>
            <option value="6+months">Lebih dari 6 bulan pengeluaran</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderPage3 = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Investasi dan Aset</h2>
        <p className="text-gray-400">Bagaimana pengalaman investasi Anda?</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Apakah Anda sudah memiliki investasi saat ini?
          </label>
          <select
            value={formData.currentInvestments}
            onChange={(e) => handleInputChange("currentInvestments", e.target.value)}
            className="h-12 w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 focus:border-blue-500"
          >
            <option value="">Pilih jawaban</option>
            <option value="none">Belum ada</option>
            <option value="savings">Hanya tabungan/deposito</option>
            <option value="mutual-funds">Reksa dana</option>
            <option value="stocks">Saham</option>
            <option value="mixed">Campuran (saham, reksa dana, dll)</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Bagaimana pengalaman investasi Anda?
          </label>
          <select
            value={formData.investmentExperience}
            onChange={(e) => handleInputChange("investmentExperience", e.target.value)}
            className="h-12 w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 focus:border-blue-500"
          >
            <option value="">Pilih jawaban</option>
            <option value="beginner">Pemula (kurang dari 1 tahun)</option>
            <option value="intermediate">Menengah (1-3 tahun)</option>
            <option value="experienced">Berpengalaman (lebih dari 3 tahun)</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Seberapa besar toleransi risiko Anda?
          </label>
          <select
            value={formData.riskTolerance}
            onChange={(e) => handleInputChange("riskTolerance", e.target.value)}
            className="h-12 w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 focus:border-blue-500"
          >
            <option value="">Pilih jawaban</option>
            <option value="conservative">Konservatif (tidak suka risiko)</option>
            <option value="moderate">Moderat (risiko sedang)</option>
            <option value="aggressive">Agresif (siap dengan risiko tinggi)</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderPage4 = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Tujuan Keuangan</h2>
        <p className="text-gray-400">Apa yang ingin Anda capai secara finansial?</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Apa tujuan keuangan utama Anda?
          </label>
          <select
            value={formData.financialGoals}
            onChange={(e) => handleInputChange("financialGoals", e.target.value)}
            className="h-12 w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 focus:border-blue-500"
          >
            <option value="">Pilih jawaban</option>
            <option value="emergency-fund">Membangun dana darurat</option>
            <option value="house">Membeli rumah</option>
            <option value="retirement">Persiapan pensiun</option>
            <option value="education">Dana pendidikan anak</option>
            <option value="investment">Mengembangkan investasi</option>
            <option value="business">Modal usaha</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Dalam berapa lama Anda ingin mencapai tujuan utama?
          </label>
          <select
            value={formData.timeHorizon}
            onChange={(e) => handleInputChange("timeHorizon", e.target.value)}
            className="h-12 w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 focus:border-blue-500"
          >
            <option value="">Pilih jawaban</option>
            <option value="1year">Kurang dari 1 tahun</option>
            <option value="1-3years">1-3 tahun</option>
            <option value="3-5years">3-5 tahun</option>
            <option value="5-10years">5-10 tahun</option>
            <option value="10+years">Lebih dari 10 tahun</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Apa prioritas keuangan Anda saat ini?
          </label>
          <select
            value={formData.priorityGoal}
            onChange={(e) => handleInputChange("priorityGoal", e.target.value)}
            className="h-12 w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 focus:border-blue-500"
          >
            <option value="">Pilih jawaban</option>
            <option value="save-more">Menabung lebih banyak</option>
            <option value="reduce-debt">Mengurangi hutang</option>
            <option value="increase-income">Meningkatkan pendapatan</option>
            <option value="start-investing">Mulai berinvestasi</option>
            <option value="financial-planning">Perencanaan keuangan menyeluruh</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderPage5 = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Gaya Hidup dan Preferensi</h2>
        <p className="text-gray-400">Terakhir, ceritakan tentang preferensi Anda</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Bagaimana kebiasaan pengeluaran Anda?
          </label>
          <select
            value={formData.spendingHabits}
            onChange={(e) => handleInputChange("spendingHabits", e.target.value)}
            className="h-12 w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 focus:border-blue-500"
          >
            <option value="">Pilih jawaban</option>
            <option value="very-careful">Sangat hati-hati dengan pengeluaran</option>
            <option value="planned">Berbelanja sesuai rencana</option>
            <option value="occasional-splurge">Kadang boros untuk hal yang diinginkan</option>
            <option value="impulsive">Sering belanja impulsif</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Seberapa baik pengetahuan keuangan Anda?
          </label>
          <select
            value={formData.financialKnowledge}
            onChange={(e) => handleInputChange("financialKnowledge", e.target.value)}
            className="h-12 w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 focus:border-blue-500"
          >
            <option value="">Pilih jawaban</option>
            <option value="basic">Dasar (tahu menabung dan budgeting)</option>
            <option value="intermediate">Menengah (paham investasi dasar)</option>
            <option value="advanced">Lanjutan (paham berbagai instrumen keuangan)</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Bagaimana Anda lebih suka mendapat saran keuangan?
          </label>
          <select
            value={formData.advisorPreference}
            onChange={(e) => handleInputChange("advisorPreference", e.target.value)}
            className="h-12 w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 focus:border-blue-500"
          >
            <option value="">Pilih jawaban</option>
            <option value="ai-automated">Otomatis dari AI</option>
            <option value="ai-with-human">AI dengan konsultasi manusia</option>
            <option value="human-advisor">Konsultasi langsung dengan advisor</option>
          </select>
        </div>
      </div>
    </div>
  );

  const getCurrentPageContent = () => {
    switch (currentPage) {
      case 1: return renderPage1();
      case 2: return renderPage2();
      case 3: return renderPage3();
      case 4: return renderPage4();
      case 5: return renderPage5();
      default: return renderPage1();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">₹</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Financial Assessment</h1>
          <p className="text-gray-400">Help us understand your financial situation better</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Progress</span>
            <span className="text-sm text-gray-400">{currentPage}/5</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentPage / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Card */}
        <Card className="bg-gray-800 border-gray-700 shadow-2xl">
          <CardContent className="p-8">
            {getCurrentPageContent()}
          </CardContent>
          
          <CardFooter className="flex justify-between p-8 pt-0">
            <Button
              onClick={prevPage}
              disabled={currentPage === 1}
              variant="outline"
              className="px-6 py-3 border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
            >
              Previous
            </Button>
            
            {currentPage === 5 ? (
              <Button
                onClick={handleSubmit}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                Complete Assessment
              </Button>
            ) : (
              <Button
                onClick={nextPage}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                Next
              </Button>
            )}
          </CardFooter>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
