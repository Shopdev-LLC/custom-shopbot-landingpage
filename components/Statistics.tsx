"use client";

import React from "react";

const Statistics = () => {
  const stats = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-500"
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
      ),
      value: "95%",
      label: "Faster Response Time",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      value: "24/7",
      label: "Global Availability",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      value: "+40%",
      label: "Increases Engagement",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      value: "10,000+",
      label: "Conversations Daily",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-100/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Statistics</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Trusted by Teams,
                <br />
                Built for Scale
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                From growing startups to enterprise-level organizations, our AI
                chatbots are trusted to handle thousands of conversations every
                day. Designed for speed, reliability, and flexibility, our
                platform empowers teams to deliver seamless customer experiences
                no matter the size or scale of their operations.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-blue-50 backdrop-blur-sm rounded-3xl border-b-2 border-solid border-blue-500 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                        {stat.icon}
                      </div>
                    </div>

                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {stat.value}
                    </div>

                    <div className="text-gray-600 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>

                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                  <div
                    className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              ))}
            </div>

            <div className="absolute -top-4 left-1/2 w-6 h-6 bg-blue-200 rounded-lg transform rotate-45 animate-pulse"></div>
            <div className="absolute -bottom-4 right-8 w-8 h-8 bg-blue-300 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 -left-4 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
            <div
              className="absolute top-8 -right-2 w-5 h-5 bg-blue-100 rounded-lg transform -rotate-12 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
