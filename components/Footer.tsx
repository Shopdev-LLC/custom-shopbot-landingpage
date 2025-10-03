"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-50 to-blue-500"></div>

      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-300/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-50 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-l from-blue-500 to-purple-600 text-transparent bg-clip-text">
                  ShopBot
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We're passionate about making conversations smoother and smarter
                with AI technology...
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 group cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 text-blue-400 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 group cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 text-blue-400 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 group cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 text-blue-400 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#features"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#statistics"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                  >
                    Statistics
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                  >
                    Process
                  </a>
                </li>
                <li>
                  <a
                    href="#why-choose-us"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                  >
                    Advantages
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-300">+1-123-456-7890</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-300">info@shopdev.co</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-300">
                    001 East Street
                    <br />
                    New York 10001
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                Newsletter Signup
              </h3>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200 cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="privacy-policy"
                    className="text-sm text-gray-300 cursor-pointer"
                  >
                    I agree to the Privacy Policy
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 ShopBot. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-500/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-blue-300/30 rounded-full animate-ping"></div>
      </div>
    </footer>
  );
};

export default Footer;
