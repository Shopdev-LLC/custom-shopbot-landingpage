"use client";

import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative flex items-center justify-center px-4 sm:px-8 lg:px-0">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="bg-blue-50 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
                  <div className="p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg lg:text-xl text-center font-semibold text-gray-900 mb-3 sm:mb-4">
                      See Our AI Chatbot in Action
                    </h3>
                    <div className="relative rounded-xl overflow-hidden">
                      <video
                        className="w-full h-auto rounded-lg"
                        controls
                        preload="metadata"
                        autoPlay
                        loop
                        muted
                        // poster="/robot.png"
                      >
                        <source
                          src="https://cdn.prod.website-files.com/68244466af56f93454b89152/68244466af56f93454b89478_salesbot-transcode.webm"
                          type="video/webm"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>

                <div className="hidden xl:block absolute -left-20 top-1/2 transform -translate-y-1/2 z-20">
                  <div className="relative animate-float">
                    <Image
                      src="/robot.png"
                      alt="3D ChatBot Robot"
                      width={160}
                      height={200}
                      className="drop-shadow-2xl"
                    />
                  </div>
                </div>

                <div className="hidden lg:block absolute -top-6 left-4 lg:-top-8 lg:left-8 bg-purple-500 text-white p-2 sm:p-3 rounded-2xl rounded-bl-sm shadow-lg animate-bounce z-30">
                  <p className="text-xs sm:text-sm font-medium">
                    Your AI Assistant
                  </p>
                </div>

                <div className="hidden lg:block absolute -bottom-4 right-4 lg:right-8 w-10 h-10 lg:w-12 lg:h-12 bg-blue-200 rounded-2xl shadow-lg transform rotate-12 animate-pulse"></div>
                <div className="hidden lg:block absolute top-6 lg:top-8 -right-4 lg:-right-6 w-6 h-6 lg:w-8 lg:h-8 bg-blue-300 rounded-xl shadow-lg transform -rotate-12"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>How It Works</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                How Our Advanced
                <br />
                AI Chatbot Works
              </h2>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center lg:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-base sm:text-lg mx-auto sm:mx-0">
                  01
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Build with Ease
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Build your chatbot using our intuitive drag-and-drop
                    interface — no coding needed.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center lg:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-base sm:text-lg mx-auto sm:mx-0">
                  02
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Train with Your Content
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Train your AI using documents, FAQs, or URLs to create
                    accurate, personalized responses.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center lg:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-base sm:text-lg mx-auto sm:mx-0">
                  03
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Deploy Anywhere
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Launch on your website, mobile app, or messaging platforms
                    in just a few clicks.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute bottom-8 right-8">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-500 rounded-2xl flex items-center justify-center transform rotate-12 animate-pulse">
                <svg
                  className="w-6 h-6 lg:w-8 lg:h-8 text-white"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
