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
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 drop-shadow-lg">
          חוות סוסים טיפולית
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md font-medium">
          מקום של הכלה והקשבה, של קבלת השונה ושל צמיחה
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-95">
          מעניקים לילדים ונוער מקום נעים לשהות בו, לגדול, להתפתח ולצמוח
          <br />
          תוך שילוב טבע, חיות ואווירה פסטורלית מכילה וקהילתית
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("programs")}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            הפעילויות שלנו
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="bg-background/20 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            צרו קשר
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
