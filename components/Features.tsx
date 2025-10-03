"use client";

import React from "react";

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Amazing Features</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI That Understands, Learns
            <br />& Engages
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Conversational AI
              </h3>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-45 group-hover:rotate-90 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-white transform -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Respond intelligently with GPT-powered natural language
              understanding
            </p>

            <div className="relative h-48 flex items-center justify-center">
              <div className="relative">
                <div className="absolute left-0 top-0 w-24 h-40 bg-gray-900 rounded-2xl shadow-lg transform -rotate-12 z-10">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-700 rounded-full"></div>
                  <div className="p-3 pt-6 space-y-2">
                    <div className="bg-blue-500 text-white p-2 rounded-lg rounded-bl-sm text-xs">
                      Hi there!
                    </div>
                    <div className="bg-gray-200 p-2 rounded-lg rounded-br-sm text-xs">
                      How can I help?
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 top-4 w-24 h-40 bg-gray-900 rounded-2xl shadow-lg transform rotate-12 z-20">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-700 rounded-full"></div>
                  <div className="p-3 pt-6 space-y-2">
                    <div className="bg-gray-200 p-2 rounded-lg rounded-bl-sm text-xs">
                      Need support
                    </div>
                    <div className="bg-blue-500 text-white p-2 rounded-lg rounded-br-sm text-xs">
                      I'm here to help!
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-2 rounded-xl rounded-bl-sm shadow-lg z-30">
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    <div
                      className="w-1 h-1 bg-white rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-1 h-1 bg-white rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Multi-Platform
              </h3>
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center transform rotate-45 group-hover:rotate-90 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-white transform -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Integrate with websites, apps, Facebook, WhatsApp & more
            </p>

            <div className="relative h-48 flex items-center justify-center">
              <div className="relative z-20">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-6 bg-gray-800 rounded-lg border-2 border-blue-400 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-blue-400 rounded-full">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>

              <div className="absolute top-4 left-8 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold text-sm">f</span>
              </div>

              <div
                className="absolute bottom-8 right-4 w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </div>

              <div
                className="absolute top-12 right-8 w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-white font-bold text-sm">in</span>
              </div>

              <div
                className="absolute bottom-4 left-4 w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>

              <div
                className="absolute top-8 left-16 w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "0.8s" }}
              >
                <span className="text-white font-bold text-xs">♪</span>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Real-Time Analytics
              </h3>
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center transform rotate-45 group-hover:rotate-90 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-white transform -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Monitor chatbot performance and user behavior in real time
            </p>

            <div className="relative h-48 flex items-center justify-center">
              <div className="w-40 h-32 bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-3 transform rotate-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs font-semibold text-gray-700">
                    Analytics
                  </div>
                </div>

                <div className="flex items-end justify-between space-x-1 mb-2">
                  <div className="w-3 h-8 bg-blue-400 rounded-t"></div>
                  <div className="w-3 h-12 bg-blue-500 rounded-t"></div>
                  <div className="w-3 h-6 bg-blue-300 rounded-t"></div>
                  <div className="w-3 h-10 bg-blue-600 rounded-t"></div>
                  <div className="w-3 h-14 bg-blue-500 rounded-t"></div>
                  <div className="w-3 h-4 bg-blue-400 rounded-t"></div>
                </div>

                <div className="flex justify-between text-xs">
                  <div className="text-gray-500">Users</div>
                  <div className="text-green-600 font-semibold">+24%</div>
                </div>
              </div>

              <div className="absolute -right-4 top-4 w-16 h-24 bg-gray-900 rounded-xl p-2 transform -rotate-6">
                <div className="space-y-1">
                  <div className="w-full h-1 bg-gray-700 rounded"></div>
                  <div className="w-3/4 h-1 bg-gray-600 rounded"></div>
                  <div className="w-full h-1 bg-gray-700 rounded"></div>
                  <div className="w-1/2 h-1 bg-gray-600 rounded"></div>
                </div>
                <div className="mt-2 flex justify-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-2 -left-4 bg-white rounded-lg shadow-lg p-2 border animate-pulse">
                <div className="text-xs font-semibold text-gray-700">
                  Live Users
                </div>
                <div className="text-lg font-bold text-blue-600">1,247</div>
              </div>

              <div className="absolute -bottom-2 right-8 bg-green-100 rounded-lg p-2 animate-bounce">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="text-xs font-semibold text-green-700">
                    Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
