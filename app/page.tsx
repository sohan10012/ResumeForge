import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">ResumeForge</span>
          </div>
          <Link href="/login">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="max-w-4xl w-full space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">
            Create Your Professional Resume
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12">
            Build a standout resume in minutes with our easy-to-use builder. 
            Get hired faster with a professional resume that highlights your strengths.
          </p>
          <div className="flex justify-center mb-16 mt-8">
            <Link href="/resume-builder">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-6 text-lg rounded-full transition-all duration-200 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-4">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
            <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white text-center">Easy to Use</h3>
            <p className="text-gray-300 text-center">
              Simple form-based interface that makes resume creation quick and intuitive.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
            <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white text-center">Professional Design</h3>
            <p className="text-gray-300 text-center">
              Clean, professional templates that will impress potential employers.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
            <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white text-center">Instant Download</h3>
            <p className="text-gray-300 text-center">
              Download your finished resume as a PDF with one click.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}