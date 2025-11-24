import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";
import heroTitle from "@/assets/hero-title.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      <div className="absolute top-32 left-10 w-20 h-20 rounded-full bg-accent/10 animate-float" />
      <div className="absolute bottom-32 right-20 w-32 h-32 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <img 
          src={heroTitle} 
          alt="חוות סוסים טיפולית" 
          className="w-full max-w-md mx-auto mb-6 animate-fade-in-up"
        />
        <p className="font-handwriting text-2xl md:text-3xl text-primary mb-12 animate-fade-in-up" 
           style={{ animationDelay: '0.2s' }}>
          להיות מרחב לכל אדם באשר הוא
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
             style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => scrollToSection('programs')}
            className="group px-8 py-4 bg-accent text-primary font-display text-lg rounded-xl hover-lift hover:shadow-[0_0_30px_rgba(232,181,77,0.4)] transition-all duration-300 hover:scale-105"
          >
            הפעילויות שלנו
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 bg-white/10 text-white backdrop-blur-sm border-2 border-accent/50 font-display text-lg rounded-xl hover-lift hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 hover:scale-105"
          >
            צרו קשר
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
