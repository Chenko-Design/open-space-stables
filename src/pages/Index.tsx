import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Association from "@/components/Association";
import Programs from "@/components/Programs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Founder />
      <Association />
      <Programs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
