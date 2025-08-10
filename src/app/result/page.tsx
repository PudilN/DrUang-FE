// ResultPage.tsx

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Data Milestone dari AssessmentPage untuk konsistensi
interface Milestone {
  level: number;
  label: string;
  milestone: string;
}

const milestones: Milestone[] = [
  { level: 1, label: "Level 1", milestone: "Memiliki tabungan minimal 10 Juta" },
  { level: 2, label: "Level 2", milestone: "Melunasi semua hutang kecil" },
  { level: 3, label: "Level 3", milestone: "Membangun dana darurat (3-6 bulan)" },
  { level: 4, label: "Level 4", milestone: "Mulai investasi rutin" },
  { level: 5, label: "Level 5", milestone: "Menyiapkan dana pendidikan anak" },
  { level: 6, label: "Level 6", milestone: "Melunasi aset produktif" },
  { level: 7, label: "Level 7", milestone: "Mencapai kebebasan finansial" }
];

// Data hasil analisis AI yang di-hardcode untuk prototype
const sampleResult = {
  // Misalnya, hasil analisis AI menunjukkan pengguna berada di Level 3
  determinedLevel: 3,
  recommendationText: `Berdasarkan data keuangan Anda, selamat! Anda telah berhasil mencapai Level 3: Dana Darurat Terbentuk. Ini adalah tonggak penting yang menunjukkan Anda memiliki fondasi finansial yang kuat untuk menghadapi keadaan tak terduga. Untuk melangkah ke level berikutnya, fokuslah pada peningkatan alokasi dana untuk investasi. Kami merekomendasikan untuk mulai mengalokasikan 10% dari pendapatan bulanan Anda untuk investasi yang sesuai dengan profil risiko moderat Anda, seperti reksa dana pasar uang atau obligasi.`,
  budgetingPlan: [
    { category: "Pendapatan Bersih", amount: 15000000 },
    { category: "Dana Darurat", amount: 1500000 },
    { category: "Investasi", amount: 1500000 },
    { category: "Kebutuhan Pokok", amount: 7500000 },
    { category: "Gaya Hidup", amount: 3000000 },
    { category: "Tabungan Tujuan", amount: 1500000 },
  ],
};

export default function ResultPage() {
  const currentLevel = milestones.find(m => m.level === sampleResult.determinedLevel);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">✓</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Hasil Analisis Keuangan Anda</h1>
          <p className="text-gray-400">Temukan level Anda dan langkah selanjutnya menuju kemandirian finansial</p>
        </div>

        {/* Level & Milestone Card */}
        <Card className="bg-gray-800 border-green-600 border-2 shadow-2xl mb-8">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-xl font-bold text-white">
              Selamat! Anda berada di
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            {currentLevel && (
              <div className="flex items-center space-x-4">
                <span className="text-6xl font-extrabold text-green-500">
                  {currentLevel.label}
                </span>
                <div className="flex-1">
                  <p className="text-gray-300 text-lg">
                    {currentLevel.milestone}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Rekomendasi AI Card */}
        <Card className="bg-gray-800 border-gray-700 shadow-2xl mb-8">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-xl font-bold text-white">
              Saran Finansial dari AI
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <p className="text-gray-300 text-base leading-relaxed">
              {sampleResult.recommendationText}
            </p>
          </CardContent>
        </Card>

        {/* Budgeting Plan Card */}
        <Card className="bg-gray-800 border-gray-700 shadow-2xl">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-xl font-bold text-white">
              Rencana Pengeluaran Ideal (Contoh)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-4">
            {sampleResult.budgetingPlan.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-gray-300">
                <span className="font-medium">{item.category}</span>
                <span className="font-semibold text-white">
                  Rp {item.amount.toLocaleString('id-ID')}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Footer Buttons */}
        <div className="mt-8 flex justify-center">
          <Link href="/">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
            >
              Mulai Perjalanan Anda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}