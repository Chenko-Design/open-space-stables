import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
