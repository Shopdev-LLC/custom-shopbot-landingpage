"use client";

import React, { useState } from "react";
import ContactModal from "./ContactModal";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const faqs = [
    {
      question:
        "What Are the Main Use Cases and Benefits of Using This AI Chatbot?",
      answer:
        "Our AI chatbot helps businesses automate customer support, generate leads, provide 24/7 assistance, reduce response times, and improve customer satisfaction. It can handle multiple conversations simultaneously and learn from interactions to provide better responses over time.",
    },
    {
      question:
        "Is the AI Chatbot Capable of Providing Reliable 24/7 Automated Support?",
      answer:
        "Yes, the chatbot is always on functioning 24 hours a day, 7 days a week, including holidays. It ensures that your customers never have to wait for answers, even outside of regular business hours.",
    },
    {
      question:
        "How Much Can I Customize the Chatbot&apos;s Responses, Design, and Behavior?",
      answer:
        "You have full control over your chatbot&apos;s personality, responses, design, and behavior. You can customize the interface colors, add your branding, train it with your specific content, and define conversation flows that match your business needs.",
    },
    {
      question:
        "Does the Chatbot Support Multiple Languages and Global Audiences?",
      answer:
        "Yes, our chatbot supports multiple languages and can automatically detect and respond in the user&apos;s preferred language. This makes it perfect for businesses serving global audiences and international customers.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative mb-12 h-80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-3xl blur-xl"></div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float">
                <div className="relative">
                  <svg
                    className="w-40 h-40 text-blue-500 drop-shadow-2xl transform rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>

                  <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                    <div className="flex space-x-2">
                      <div className="w-6 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full animate-pulse"></div>
                      <div
                        className="w-4 h-1 bg-gradient-to-r from-blue-300 to-transparent rounded-full animate-pulse"
                        style={{ animationDelay: "0.3s" }}
                      ></div>
                      <div
                        className="w-3 h-1 bg-gradient-to-r from-blue-200 to-transparent rounded-full animate-pulse"
                        style={{ animationDelay: "0.6s" }}
                      ></div>
                    </div>
                  </div>

                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                  <div
                    className="absolute -bottom-3 -left-1 w-2 h-2 bg-blue-300 rounded-full animate-ping"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>

              <div className="absolute top-8 right-12 animate-bounce">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                      <div
                        className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                      <div
                        className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"
                        style={{ animationDelay: "0.8s" }}
                      ></div>
                    </div>
                  </div>

                  <div className="absolute -bottom-2 left-4 w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 transform rotate-45"></div>
                </div>
              </div>

              <div
                className="absolute bottom-12 right-8 animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-pulse"
                        style={{ animationDelay: "0.3s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-pulse"
                        style={{ animationDelay: "0.6s" }}
                      ></div>
                    </div>
                  </div>

                  <div className="absolute -bottom-1 right-3 w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-500 transform rotate-45"></div>
                </div>
              </div>

              <div
                className="absolute top-16 left-8 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">?</span>
                </div>
              </div>

              <div
                className="absolute top-4 right-4 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-200 shadow-lg">
                  <span className="text-blue-600 font-medium text-sm">FAQ</span>
                </div>
              </div>

              <div className="absolute top-6 left-16 w-10 h-10 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl transform rotate-45 animate-pulse shadow-lg"></div>
              <div
                className="absolute bottom-6 left-8 w-8 h-8 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full animate-bounce shadow-lg"
                style={{ animationDelay: "3s" }}
              ></div>
              <div
                className="absolute top-1/3 left-4 w-6 h-6 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg transform rotate-12 animate-pulse shadow-md"
                style={{ animationDelay: "1.5s" }}
              ></div>

              <div className="absolute top-20 left-20 w-16 h-0.5 bg-gradient-to-r from-blue-300 to-transparent animate-pulse transform rotate-45"></div>
              <div
                className="absolute bottom-20 right-20 w-12 h-0.5 bg-gradient-to-l from-purple-300 to-transparent animate-pulse transform -rotate-45"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-4">
                Can&apos;t find the answer you&apos;re looking for? Please chat with our
                friendly team.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-sky-100 hover:bg-sky-200 text-blue-600 hover:text-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>FAQ&apos;s</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200 cursor-pointer"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center transition-transform duration-300 ${
                        openIndex === index
                          ? "rotate-45 bg-blue-500"
                          : "bg-white"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-colors duration-300 ${
                          openIndex === index ? "text-white" : "text-blue-500"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed mt-3">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

export default FAQ;
