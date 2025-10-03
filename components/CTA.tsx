'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ContactModal from './ContactModal';

const CTA = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/10 rounded-full blur-2xl"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-purple-200/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-blue-100/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-300/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20">
          <div className="relative animate-float">
            <Image
              src="/robot-left.png"
              alt="AI Robot Assistant"
              width={140}
              height={200}
              className="drop-shadow-2xl"
              priority
            />
            <div className="absolute top-4 right-2 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute top-8 left-2 w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-20">
          <div className="relative animate-float" style={{animationDelay: '1s'}}>
            <Image
              src="/robot-right.png"
              alt="AI Robot Assistant"
              width={160}
              height={200}
              className="drop-shadow-2xl"
              priority
            />
            <div className="absolute top-6 left-2 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-10 right-2 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1.2s'}}></div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50/80 via-white/90 to-blue-50/80 backdrop-blur-sm rounded-2xl py-8 sm:py-12 px-6 sm:px-12 lg:px-16 shadow-xl border border-white/30 relative z-10">

          <div className="text-center space-y-4 max-w-2xl mx-auto">

            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Experience Boost</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Ready to Supercharge
                <br />
                Your Customer Experience?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg mx-auto px-4 sm:px-0">
                Start using our AI chatbot today to automate support, boost engagement, and save time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4 px-4 sm:px-0">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="w-full sm:w-auto bg-sky-100 hover:bg-sky-200 text-blue-600 hover:text-blue-700 px-8 py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer min-w-[140px]"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex justify-center mt-8">
          <div className="relative animate-float">
            <Image
              src="/robot-left.png"
              alt="AI Robot Assistant"
              width={120}
              height={140}
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  );
};

export default CTA;
