# ShopBot - AI Chatbot Landing Page

A modern, responsive landing page for ShopBot, an intelligent AI chatbot platform designed to enhance customer experience through automated support, engagement, and seamless interactions.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Dynamic FAQ sections, contact modals, and smooth scrolling navigation
- **Performance Optimized**: Built with Next.js 15 and Turbopack for lightning-fast development and production builds
- **TypeScript**: Fully typed for better development experience and code reliability
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: React 19.1.0
- **Build Tool**: Turbopack (Next.js built-in)
- **Linting**: ESLint with Next.js configuration

## 📁 Project Structure

```
custom-shopbot/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Global styles and custom animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   ├── AboutUs.tsx          # About section with company information
│   ├── CTA.tsx              # Call-to-action section
│   ├── ContactModal.tsx     # Contact form modal component
│   ├── FAQ.tsx              # Frequently asked questions section
│   ├── Features.tsx         # Product features showcase
│   ├── Footer.tsx           # Footer with links and social media
│   ├── Header.tsx           # Navigation header with mobile menu
│   ├── Hero.tsx             # Hero section with main value proposition
│   ├── HowItWorks.tsx       # Process explanation section
│   ├── Pricing.tsx          # Pricing plans and packages
│   ├── ScrollToTop.tsx      # Scroll to top button
│   ├── Statistics.tsx       # Performance statistics display
│   └── WhyChooseUs.tsx      # Competitive advantages section
├── public/
│   ├── chat-interface.png   # UI mockup images
│   ├── how-it-works.png
│   ├── robot-left.png       # Robot illustrations
│   ├── robot-right.png
│   └── robot.png
└── README.md
```

## 🎨 Key Components

### Header
- Responsive navigation with mobile hamburger menu
- Smooth scroll navigation to different sections
- Contact modal integration
- Modern glassmorphism design for mobile menu

### Hero Section
- Compelling headline and value proposition
- Interactive video demonstration
- "Consult With Our Expert" CTA button
- Animated chat bubbles and floating elements

### Contact Modal
- Professional contact form with validation
- Company contact information
- Social media links (Instagram, Facebook, LinkedIn)
- Responsive design with backdrop blur

### Features & Benefits
- **AboutUs**: Company story and mission
- **Statistics**: Performance metrics and achievements
- **Features**: Product capabilities and benefits
- **HowItWorks**: Step-by-step process explanation
- **WhyChooseUs**: Competitive advantages
- **FAQ**: Common questions with expandable answers
- **Pricing**: Flexible pricing plans (Starter, Pro, Enterprise)

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd custom-shopbot
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality checks

## 🎯 Key Features Implemented

### User Experience
- **Smooth Scrolling Navigation**: Seamless navigation between sections
- **Mobile-First Design**: Optimized for all device sizes
- **Interactive Elements**: Hover effects, animations, and micro-interactions
- **Contact Integration**: Multiple contact points throughout the site

### Performance
- **Next.js 15**: Latest framework features and optimizations
- **Turbopack**: Ultra-fast bundler for development and production
- **Image Optimization**: Automatic image optimization with Next.js Image component
- **Code Splitting**: Automatic code splitting for optimal loading

### Design System
- **Consistent Color Palette**: Blue and purple gradient theme
- **Typography**: Professional font hierarchy
- **Spacing**: Consistent spacing using Tailwind utilities
- **Components**: Reusable, modular component architecture

## 🎨 Customization

### Colors
The application uses a blue-purple color scheme defined in Tailwind CSS:
- Primary: Blue (sky-100, blue-600, blue-700)
- Secondary: Purple (purple-500, purple-600)
- Accent: Green for success states

### Animations
Custom animations are defined in `app/globals.css`:
- `float`: Floating animation for decorative elements
- `pulse-glow`: Glowing pulse effect
- `fadeIn`: Smooth fade-in transitions

### Content
Update content by modifying the respective component files in the `components/` directory. Each component is self-contained and easy to customize.


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary. All rights reserved.



---
