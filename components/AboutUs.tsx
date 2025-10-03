"use client";

import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gray-100/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/5] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <div className="text-white">
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
                    <div className="absolute inset-0 bg-black/20">
                      <div className="absolute top-4 left-4 bg-white/90 rounded-full p-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/90 rounded-lg px-3 py-2">
                        <div className="flex space-x-1">
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
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group mt-12">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/5] bg-gradient-to-br from-blue-600 to-purple-800 flex items-center justify-center">
                    <div className="text-white relative">
                      <div className="w-36 h-64 border-4 border-white rounded-2xl flex flex-col items-center justify-center relative">
                        <div className="w-28 h-64 rounded-lg flex items-center justify-center">
                          <div className="text-white">
                            <div className="bg-blue-500 text-white p-2 rounded-lg rounded-bl-sm text-xs m-2">
                              Hi there!
                            </div>
                            <div className="bg-purple-500 text-white p-2 rounded-lg rounded-br-sm text-xs">
                              I&apos;m here to help!
                            </div>
                            <div className="bg-blue-500 text-white p-2 rounded-lg rounded-bl-sm text-xs m-2">
                              Explain the chatbot functionality
                            </div>
                            <div className="bg-purple-500 text-white p-2 rounded-lg rounded-br-sm text-xs">
                              I&apos;ll explain how it works
                            </div>
                            <div className="absolute bottom-0 right-0 rounded-lg px-3 py-2">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-blue-50 rounded-full animate-pulse"></div>
                                <div
                                  className="w-2 h-2 bg-blue-50 rounded-full animate-pulse"
                                  style={{ animationDelay: "0.2s" }}
                                ></div>
                                <div
                                  className="w-2 h-2 bg-blue-50 rounded-full animate-pulse"
                                  style={{ animationDelay: "0.4s" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-3 h-3 bg-white rounded-full mt-2"></div>
                      </div>

                      <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-2">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 left-1/2 w-8 h-8 bg-blue-200 rounded-lg transform rotate-45 animate-pulse"></div>
            <div className="absolute -bottom-4 right-8 w-6 h-6 bg-blue-300 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 -left-4 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>About Us</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Real Conversations
                <br />
                with Human-Like AI
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  We&apos;re on a mission to revolutionize how businesses
                  communicate. Our AI chatbots are designed to be fast,
                  intuitive, and incredibly lifelike —empowering teams to
                  provide 24/7 support and scale effortlessly.
                </p>

                <p className="text-lg">
                  Whether you&apos;re a startup or a global brand, we make AI
                  accessible, practical, and impactful.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Launch your AI chatbot in minutes no coding or technical
                  expertise required
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Fully customizable to match your brand voice, workflows, and
                  customer needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
