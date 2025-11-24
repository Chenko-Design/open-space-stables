import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Association from "@/components/Association";
import WhatWeOffer from "@/components/WhatWeOffer";
import VideoSection from "@/components/VideoSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-32 left-10 w-20 h-20 rounded-full bg-accent/10 animate-float z-0 pointer-events-none" />
      <div className="fixed bottom-32 right-20 w-32 h-32 rounded-full bg-accent/10 animate-float z-0 pointer-events-none" style={{ animationDelay: '1s' }} />
      <Header />
      <Hero />
      <About />
      <Founder />
      <Association />
      <WhatWeOffer />
      <VideoSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
