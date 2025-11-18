import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Heart } from "lucide-react";
import heroImage from "@/assets/hero-horses.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rotate-45 opacity-20" />
      <div className="absolute bottom-32 right-20 w-40 h-40 border-8 border-primary opacity-30" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent rounded-full opacity-20" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative z-10 space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <div className="flex items-center gap-3 bg-foreground text-background px-6 py-3 font-bold text-sm tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>חוות טיפולית מובילה</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-hero font-black leading-none">
              <span className="block">מקום</span>
              <span className="block text-outline my-2">של צמיחה</span>
              <span className="block">והקשבה</span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-bold max-w-xl">
                חוות סוסים שמעניקה לילדים ונוער מקום לגדול, להתפתח ולצמוח
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                שילוב ייחודי של טבע, חיות ואווירה קהילתית מכילה ומקבלת
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("programs")}
                className="bg-foreground hover:bg-foreground/90 text-background px-8 py-6 text-lg font-bold shadow-brutal hover-brutal"
              >
                הפעילויות שלנו
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-4 border-foreground hover:bg-foreground hover:text-background px-8 py-6 text-lg font-bold transition-all"
              >
                צרו קשר
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-8">
              <div className="flex items-center gap-2 text-sm font-bold">
                <Heart className="w-5 h-5 text-primary fill-primary" />
                <span>הכלה וקבלה</span>
              </div>
              <div className="w-2 h-2 bg-foreground rounded-full" />
              <div className="text-sm font-bold">קהילה מכילה</div>
              <div className="w-2 h-2 bg-foreground rounded-full" />
              <div className="text-sm font-bold">צמיחה אישית</div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden shadow-brutal">
                <img
                  src={heroImage}
                  alt="חוות סוסים טיפולית"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                
                {/* Floating stats */}
                <div className="absolute bottom-8 right-8 bg-background p-6 shadow-brutal">
                  <div className="text-4xl font-black">10+</div>
                  <div className="text-sm font-bold mt-1">שנות ניסיון</div>
                </div>
              </div>
            </div>
            
            {/* Side decoration */}
            <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 rotate-text text-sm font-bold tracking-widest opacity-60">
              THERAPEUTIC HORSE FARM
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm font-bold hover:text-primary transition-colors animate-bounce"
      >
        <span>גלה עוד</span>
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
};

export default Hero;
