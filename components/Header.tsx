"use client";

import React, { useState } from "react";
import ContactModal from "./ContactModal";

const Header = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactModal = () => {
    setIsContactModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-purple-50 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-blue-100"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-l from-blue-500 to-purple-600 text-transparent bg-clip-text">
              ShopBot
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer"
            >
              Who We Are
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("statistics")}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer"
            >
              Statistics
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer"
            >
              Advantages
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer"
            >
              FAQ's
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("cta")}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer"
            >
              Free Trial
            </button>
            <button
              onClick={handleContactModal}
              className="bg-sky-100 hover:bg-sky-200 text-blue-600 hover:text-blue-700 px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 cursor-pointer p-2"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-gradient-to-br from-white/95 to-purple-50/95 backdrop-blur-xl min-h-screen shadow-2xl border-r border-white/20">
            <div className="flex items-center justify-between px-6 py-6 border-b border-purple-200/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-5 h-5 bg-white rounded-md flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                  ShopBot
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-purple-600 cursor-pointer p-2 hover:bg-purple-100/50 rounded-full transition-all duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col px-6 py-4 space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="group flex items-center space-x-4 text-left text-lg text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 cursor-pointer py-4 px-4 rounded-xl hover:bg-purple-50/80 border border-transparent hover:border-purple-200/50"
              >
                <div className="w-8 h-8 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span>Who We Are</span>
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="group flex items-center space-x-4 text-left text-lg text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 cursor-pointer py-4 px-4 rounded-xl hover:bg-purple-50/80 border border-transparent hover:border-purple-200/50"
              >
                <div className="w-8 h-8 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span>Features</span>
              </button>
              <button
                onClick={() => scrollToSection("statistics")}
                className="group flex items-center space-x-4 text-left text-lg text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 cursor-pointer py-4 px-4 rounded-xl hover:bg-purple-50/80 border border-transparent hover:border-purple-200/50"
              >
                <div className="w-8 h-8 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <span>Statistics</span>
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="group flex items-center space-x-4 text-left text-lg text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 cursor-pointer py-4 px-4 rounded-xl hover:bg-purple-50/80 border border-transparent hover:border-purple-200/50"
              >
                <div className="w-8 h-8 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span>Process</span>
              </button>
              <button
                onClick={() => scrollToSection("why-choose-us")}
                className="group flex items-center space-x-4 text-left text-lg text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 cursor-pointer py-4 px-4 rounded-xl hover:bg-purple-50/80 border border-transparent hover:border-purple-200/50"
              >
                <div className="w-8 h-8 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <span>Advantages</span>
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="group flex items-center space-x-4 text-left text-lg text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 cursor-pointer py-4 px-4 rounded-xl hover:bg-purple-50/80 border border-transparent hover:border-purple-200/50"
              >
                <div className="w-8 h-8 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span>FAQ's</span>
              </button>

              <div className="flex flex-col space-y-3 pt-8 px-2">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent mb-4"></div>
                <button
                  onClick={() => scrollToSection("cta")}
                  className="group flex items-center justify-between text-left text-lg text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 cursor-pointer py-4 px-6 rounded-2xl border-2 border-purple-200 hover:border-purple-300 bg-white/50 hover:bg-purple-50/80 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-blue-100 group-hover:from-purple-200 group-hover:to-blue-200 rounded-xl flex items-center justify-center transition-all duration-200">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span>Try Free Trial</span>
                  </div>
                  <svg
                    className="w-5 h-5 text-purple-400 group-hover:text-purple-600 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleContactModal}
                  className="group flex items-center justify-between bg-sky-100 hover:bg-sky-200 text-blue-600 hover:text-blue-700 px-6 py-4 rounded-2xl font-medium transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center transition-all duration-200">
                      <svg
                        className="w-5 h-5 text-blue-600"
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
                    </div>
                    <span className="text-lg">Contact Us</span>
                  </div>
                  <svg
                    className="w-5 h-5 text-blue-500 group-hover:text-blue-600 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </header>
  );
};

export default Header;
