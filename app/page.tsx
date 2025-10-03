import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Statistics from "../components/Statistics";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="statistics">
        <Statistics />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="why-choose-us">
        <WhyChooseUs />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="cta">
        <CTA />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
