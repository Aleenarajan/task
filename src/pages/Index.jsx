import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ClientLogos from "../components/ClientLogos";
import About from "../components/About";
import OurWork from "../components/OurWork";
import WhatWeDo from "../components/WhatWeDo";
import NewsInsights from "../components/NewsInsights";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ClientLogos />
      <About />
      <OurWork />
      <WhatWeDo />
      <NewsInsights />
      <SocialMedia />
      <Footer />
    </div>
  );
}
