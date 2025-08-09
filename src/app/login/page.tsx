"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!formData.email || !formData.password) {
      setError("Semua field harus diisi");
      setIsLoading(false);
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Format email tidak valid");
      setIsLoading(false);
      return;
    }

    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        // Redirect will be handled by the auth context and layout
        if (typeof window !== 'undefined') {
          window.location.href = '/dashboard';
        }
      } else {
        setError("Email atau password salah");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat login. Silakan coba lagi.");
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
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to your Dr Uang account</p>
        </div>

        <Card className="bg-gray-800 border-gray-700 shadow-2xl">
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-6 pt-6">
              {error && (
                <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
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
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  disabled={isLoading}
                />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-600 bg-gray-700" />
                  <span className="text-gray-300">Remember me</span>
                </label>
                <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                  Forgot password?
                </Link>
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
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
              
              <div className="text-center text-sm text-gray-400">
                Don't have an account?{" "}
                <Link href="/register" className="text-blue-400 hover:text-blue-300 font-medium">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
