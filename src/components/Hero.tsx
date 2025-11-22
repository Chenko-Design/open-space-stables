import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";

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
      <div className="absolute inset-0 bg-primary/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.15),transparent_50%)]" />
      
      <div className="absolute top-32 left-10 w-20 h-20 rounded-full bg-accent/10 animate-float" />
      <div className="absolute bottom-32 right-20 w-32 h-32 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-white">
          <span className="inline-block">
            חוות סוסים טיפולית
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-accent max-w-2xl mx-auto font-medium animate-fade-in-up" 
           style={{ animationDelay: '0.2s' }}>
          מקום של הכלה, הקשבה וקבלת השונה
        </p>
        <p className="text-lg md:text-xl mb-12 text-white/85 max-w-3xl mx-auto animate-fade-in-up"
           style={{ animationDelay: '0.3s' }}>
          עוזרים לילדים ונוער עם צרכים מיוחדים לגדול, להתפתח ולצמוח
          <br />
          תוך שילוב טבע, חיות ואווירה פסטורלית מכילה וקהילתית
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
