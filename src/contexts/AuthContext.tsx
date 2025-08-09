"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  hasCompletedAssessment: boolean;
  assessmentData?: any;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  updateAssessmentData: (data: any) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('dr-uang-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock login - in real app, this would call your API
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email: email,
      hasCompletedAssessment: false
    };
    
    setUser(mockUser);
    localStorage.setItem('dr-uang-user', JSON.stringify(mockUser));
    return true;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock registration
    const mockUser: User = {
      id: '1',
      name: name,
      email: email,
      hasCompletedAssessment: false
    };
    
    setUser(mockUser);
    localStorage.setItem('dr-uang-user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('dr-uang-user');
  };

  const updateAssessmentData = (data: any) => {
    if (user) {
      const updatedUser = {
        ...user,
        hasCompletedAssessment: true,
        assessmentData: data
      };
      setUser(updatedUser);
      localStorage.setItem('dr-uang-user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      register,
      updateAssessmentData,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
