import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-horses.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_55%_45%_/_0.7),hsl(38_75%_60%_/_0.5),hsl(28_35%_12%_/_0.85))]" />
      </div>
      
      <div className="absolute inset-0 animate-float opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground animate-fade-in-up">
        <div className="inline-block mb-6 px-6 py-2 glass-card rounded-full">
          <span className="text-sm md:text-base font-medium">🌿 חווה טיפולית מובילה</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 drop-shadow-2xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
          חוות סוסים טיפולית
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-6 max-w-3xl mx-auto drop-shadow-xl font-semibold">
          מקום של הכלה והקשבה, של קבלת השונה ושל צמיחה
        </p>
        
        <p className="text-base md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto opacity-95 leading-relaxed">
          מעניקים לילדים ונוער מקום נעים לשהות בו, לגדול, להתפתח ולצמוח
          <br />
          תוך שילוב טבע, חיות ואווירה פסטורלית מכילה וקהילתית
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("programs")}
            className="group bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-[0_20px_60px_hsl(28_65%_65%_/_0.4)] transition-all hover:scale-105"
          >
            <span className="group-hover:scale-110 transition-transform inline-block">הפעילויות שלנו</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="glass-card border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-[0_20px_60px_hsl(0_0%_100%_/_0.2)] transition-all hover:scale-105"
          >
            צרו קשר
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
