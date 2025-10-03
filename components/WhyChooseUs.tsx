"use client";

import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Why Choose Us</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Unique Selling Points & Advantages
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="group text-center p-6 rounded-3xl border-b-2 border-solid border-blue-500 bg-white/50 backdrop-blur-sm hover:bg-white/20 hover:border-blue-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                Tailored Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                We offer customized services designed to meet the specific
                needs.
              </p>
            </div>
          </div>

          <div className="group text-center p-6 rounded-3xl border-b-2 border-solid border-blue-500 bg-white/50 backdrop-blur-sm hover:bg-white/20 hover:border-blue-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                Customer Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Our dedicated support team is available 24/7, providing
                assistance.
              </p>
            </div>
          </div>

          <div className="group text-center p-6 rounded-3xl border-b-2 border-solid border-blue-500 bg-white/50 backdrop-blur-sm hover:bg-white/20 hover:border-blue-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                Affordable Pricing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Competitive rates with transparent pricing no hidden fees.
              </p>
            </div>
          </div>

          <div className="group text-center p-6 rounded-3xl border-b-2 border-solid border-blue-500 bg-white/50 backdrop-blur-sm hover:bg-white/20 hover:border-blue-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                Scalable Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Our services grow with your business, allowing you to scale up.
              </p>
            </div>
          </div>

          <div className="group text-center p-6 rounded-3xl border-b-2 border-solid border-blue-500 bg-white/50 backdrop-blur-sm hover:bg-white/20 hover:border-blue-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                Expert Team
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Our experienced professionals bring deep industry knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
