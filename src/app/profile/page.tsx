"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function ProfilePage() {
  const { user, isLoading, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    dateOfBirth: "",
    occupation: "",
    monthlyIncome: "",
  });

  if (isLoading) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-400">Loading profile...</p>
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // In a real app, this would save to the backend
    console.log("Saving profile data:", formData);
    setIsEditing(false);
    alert("Profile updated successfully! (Demo mode)");
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      phone: "",
      dateOfBirth: "",
      occupation: "",
      monthlyIncome: "",
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Profil Pengguna
          </h1>
          <p className="text-gray-400">
            Kelola informasi pribadi dan pengaturan akun Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Picture & Basic Info */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-1">{user.name}</h2>
                <p className="text-gray-400 mb-4">{user.email}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${user.hasCompletedAssessment ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    <span className="text-sm text-gray-300">
                      {user.hasCompletedAssessment ? 'Assessment Completed' : 'Assessment Pending'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-300">Premium Member</span>
                  </div>
                </div>

                <Button
                  onClick={() => setIsEditing(!isEditing)}
                  className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-800 border-gray-700 mt-6">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  Download Data
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  Privacy Settings
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-red-600 text-red-400 hover:bg-red-900/20"
                  onClick={logout}
                >
                  Logout
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Full Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      disabled={!isEditing}
                      className="bg-gray-700 border-gray-600 text-white disabled:opacity-60"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <Input
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      disabled={!isEditing}
                      className="bg-gray-700 border-gray-600 text-white disabled:opacity-60"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Phone Number</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      disabled={!isEditing}
                      placeholder="Enter phone number"
                      className="bg-gray-700 border-gray-600 text-white disabled:opacity-60"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Date of Birth</label>
                    <Input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      disabled={!isEditing}
                      className="bg-gray-700 border-gray-600 text-white disabled:opacity-60"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Occupation</label>
                    <Input
                      value={formData.occupation}
                      onChange={(e) => handleInputChange("occupation", e.target.value)}
                      disabled={!isEditing}
                      placeholder="Enter your occupation"
                      className="bg-gray-700 border-gray-600 text-white disabled:opacity-60"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Monthly Income</label>
                    <Input
                      value={formData.monthlyIncome}
                      onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
                      disabled={!isEditing}
                      placeholder="Enter monthly income"
                      className="bg-gray-700 border-gray-600 text-white disabled:opacity-60"
                    />
                  </div>
                </div>

                {isEditing && (
                  <div className="flex space-x-4 pt-4">
                    <Button
                      onClick={handleSave}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    >
                      Save Changes
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Assessment Status */}
            <Card className="bg-gray-800 border-gray-700 mt-6">
              <CardHeader>
                <CardTitle className="text-white">Assessment Status</CardTitle>
              </CardHeader>
              <CardContent>
                {user.hasCompletedAssessment ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">Assessment Completed</p>
                        <p className="text-gray-400 text-sm">Your financial profile has been analyzed</p>
                      </div>
                    </div>
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      Retake Assessment
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">Assessment Pending</p>
                        <p className="text-gray-400 text-sm">Complete your assessment to unlock personalized insights</p>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      Complete Assessment
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="bg-gray-800 border-gray-700 mt-6">
              <CardHeader>
                <CardTitle className="text-white">Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Two-Factor Authentication</p>
                    <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                  </div>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    Enable
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Change Password</p>
                    <p className="text-gray-400 text-sm">Update your account password</p>
                  </div>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    Change
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Login History</p>
                    <p className="text-gray-400 text-sm">View recent login activity</p>
                  </div>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
