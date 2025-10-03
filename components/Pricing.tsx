"use client";

import React, { useState } from "react";
import ContactModal from "./ContactModal";

const Pricing = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Pricing Plans</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Simple, Transparent Pricing for
            <br />
            Every Business
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-blue-50 rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 relative">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Starter Plan
              </h3>
              <p className="text-gray-600 mb-6">
                Get started with our essential chatbot features.
              </p>

              <div className="mb-6">
                <span className="text-gray-500 text-sm">Starting at</span>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-blue-600">$49</span>
                  <span className="text-gray-500 ml-2">/mo</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Basic chatbot functionality
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Limited to 1 website</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Up to 100 conversations/month
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Email support</span>
              </div>
            </div>

            <button
              onClick={() => setIsContactModalOpen(true)}
              className="w-full bg-sky-100 hover:bg-sky-200 text-blue-600 hover:text-blue-700 py-3 px-6 rounded-xl font-semibold transition-colors duration-200"
            >
              Get Started
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
              <p className="text-blue-100 mb-6">
                Unlock full functionality with advanced features and support.
              </p>

              <div className="mb-6">
                <span className="text-blue-200 text-sm">Starting at</span>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-blue-200 ml-2">/mo</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-blue-50">Unlimited conversations</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-blue-50">Custom branding</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-blue-50">Multi-language support</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-blue-50">Analytics dashboard</span>
              </div>
            </div>

            <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200">
              Get Started
            </button>
          </div>

          <div className="bg-blue-50 rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 relative">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprise Plan
              </h3>
              <p className="text-gray-600 mb-6">
                Tailored solutions and priority support for large-scale
                businesses.
              </p>

              <div className="mb-6">
                <span className="text-gray-500 text-sm">Starting at</span>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-blue-600">$199</span>
                  <span className="text-gray-500 ml-2">/mo</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">All Pro features</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Dedicated account manager</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">API access & integrations</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">SLA & priority support</span>
              </div>
            </div>

            <button
              onClick={() => setIsContactModalOpen(true)}
              className="w-full bg-sky-100 hover:bg-sky-200 text-blue-600 hover:text-blue-700 py-3 px-6 rounded-xl font-semibold transition-colors duration-200"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};

export default Pricing;
