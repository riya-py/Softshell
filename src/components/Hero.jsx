import React from 'react'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-indigo-600 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-700 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="flex-1 text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium mb-6">
              Trusted by 10,000+ customers worldwide
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Sell Unused Software Licenses 
              <span className="text-indigo-400"> with Confidence</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-8 text-gray-300">
              SoftShell is your trusted resale platform for turning inactive software into real value. Fast, easy and 100% secure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-indigo-600 hover:bg-indigo-500 transition-all text-white font-semibold py-3 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2">
                Get instant quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="bg-white text-gray-900 hover:bg-gray-100 transition-all font-semibold py-3 px-8 rounded-xl shadow-lg">
                Learn more
              </button>
            </div>
            
            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-indigo-900/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium">100% Secure Transactions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-indigo-900/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium">Verified Authenticity</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-indigo-900/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium">Fast Payouts</span>
              </div>
            </div>
          </div>
          
          {/* Right image/feature section */}
          <div className="flex-1 w-full">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
              <div className="bg-indigo-600/10 p-8 rounded-xl border border-indigo-500/20 mb-4">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span className="font-semibold text-gray-300">Adobe Creative Cloud</span>
                    <span className="text-indigo-400 font-bold text-xl">$423</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span className="font-semibold text-gray-300">Microsoft 365</span>
                    <span className="text-indigo-400 font-bold text-xl">$189</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-300">Autodesk Maya</span>
                    <span className="text-indigo-400 font-bold text-xl">$567</span>
                  </div>
                </div>
              </div>
              <div className="text-center p-4 bg-indigo-600/20 rounded-lg">
                <p className="text-lg font-medium text-gray-300">Average customer earnings</p>
                <p className="text-3xl font-bold text-white mt-1">$350+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero