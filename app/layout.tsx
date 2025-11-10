import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShopBot - AI Chatbot Platform",
  description: "Build human-like AI chatbots for websites, apps, and customer service in minutes. Boost conversations with our intelligent chatbot platform.",
  icons: {
    icon: [
      {
        url: "/robot-left.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: {
      url: "/robot-left.png",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
   
        {children}
      </body>
    </html>
  );
}
