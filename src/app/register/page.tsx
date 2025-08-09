"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function RegisterPage() {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError(null);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Semua field harus diisi");
      setIsLoading(false);
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Format email tidak valid");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password minimal 6 karakter");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok");
      setIsLoading(false);
      return;
    }

    try {
      const success = await register(formData.fullName, formData.email, formData.password);
      if (success) {
        // Redirect to dashboard after successful registration
        if (typeof window !== 'undefined') {
          window.location.href = '/dashboard';
        }
      } else {
        setError("Registrasi gagal. Silakan coba lagi.");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat registrasi. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">₹</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Join Dr Uang</h1>
          <p className="text-gray-400">Start your financial journey with AI</p>
        </div>

        <Card className="bg-gray-800 border-gray-700 shadow-2xl">
          <form onSubmit={handleRegister}>
            <CardContent className="space-y-6 pt-6">
              {error && (
                <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  disabled={isLoading}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  disabled={isLoading}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-300">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Minimum 6 characters"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  disabled={isLoading}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-300">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Repeat your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  disabled={isLoading}
                />
              </div>
              
              <div className="flex items-start space-x-2 text-sm">
                <input 
                  type="checkbox" 
                  required 
                  className="mt-1 rounded border-gray-600 bg-gray-700" 
                  disabled={isLoading}
                />
                <span className="text-gray-300 leading-relaxed">
                  I agree to the{" "}
                  <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                    Privacy Policy
                  </Link>
                </span>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating account...</span>
                  </div>
                ) : (
                  "Create Account"
                )}
              </Button>
              
              <div className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>

        {/* Benefits Section */}
        <div className="mt-8 bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
            Why Choose Dr Uang?
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm text-gray-300">AI-powered financial analysis</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm text-gray-300">Personalized investment recommendations</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm text-gray-300">Bank-level security protection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
