import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Association from "@/components/Association";
import OpenSpaceMethod from "@/components/OpenSpaceMethod";
import WhatWeOffer from "@/components/WhatWeOffer";
import VideoSection from "@/components/VideoSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Founder />
      <Association />
      <OpenSpaceMethod />
      <WhatWeOffer />
      <VideoSection />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
