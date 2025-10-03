"use client";

import React, { useState } from "react";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Build Your Agent</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-100 text-green-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Your Requirements, Our ShopBot</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Boost Conversations
                <br />
                with Our Intelligent
                <br />
                <span className="text-purple-500">Chatbot</span> Platform
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Build human-like AI chatbots for websites, apps, and customer
                service in minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="w-half sm:w-auto bg-sky-100 hover:bg-sky-200 text-blue-600 hover:text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Consult With Our Expert
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="relative">
                <div className="bg-blue-50 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
                  <div className="p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 text-center">
                      Shopping Assistant Demo
                    </h3>
                    <div className="relative rounded-xl overflow-hidden">
                      <video
                        className="w-full h-auto rounded-lg"
                        controls
                        autoPlay
                        loop
                        muted
                        preload="metadata"
                        
                      >
                        <source
                          src="https://cdn.prod.website-files.com/68244466af56f93454b89152/68244466af56f93454b89476_shopping-assistant-transcode.webm"
                          type="video/webm"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block absolute -top-4 -left-8 bg-purple-300 text-purple-700 p-2 sm:p-3 rounded-2xl rounded-bl-sm shadow-lg animate-bounce z-20">
                  <p className="text-xs sm:text-sm font-medium">
                    Hey how we can help you?
                  </p>
                </div>

                <div className="hidden lg:block absolute top-1/2 -right-8 xl:-right-12 bg-blue-50 text-purple-500 p-2 sm:p-3 rounded-2xl rounded-br-sm shadow-lg border z-20">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-purple-300 rounded-full"></div>
                    <p className="text-xs sm:text-sm text-purple-700 max-w-[150px]">
                      Can you help me create a task?
                    </p>
                  </div>
                </div>

                <div className="hidden lg:block absolute bottom-4 -left-8 xl:-left-16 bg-blue-100 text-blue-800 p-2 sm:p-3 rounded-2xl shadow-lg z-20">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>

                <div className="hidden lg:block absolute -bottom-4 right-4 w-12 h-12 lg:w-16 lg:h-16 bg-blue-200 rounded-2xl shadow-lg transform rotate-12 animate-pulse"></div>
                <div className="hidden lg:block absolute top-1/2 -right-4 lg:-right-8 w-8 h-8 lg:w-12 lg:h-12 bg-blue-300 rounded-xl shadow-lg transform -rotate-12"></div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <div className="w-8 h-8 border-2 border-orange-400 rounded-full flex items-center justify-center animate-bounce">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
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

export default Hero;
