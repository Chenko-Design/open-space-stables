import { Heart, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-muted relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black opacity-5 pointer-events-none whitespace-nowrap">
        החווה
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-20 animate-fade-in-up">
            <div className="inline-block bg-foreground text-background px-6 py-2 font-bold text-sm mb-6">
              אודות
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              החווה שלנו
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl font-medium">
              מקום מיוחד שבו כל אדם יכול להיות עצמו, 
              <br />
              לצמוח דרך הקשר עם הסוסים והטבע.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="group relative animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <div className="bg-background p-8 h-full border-4 border-foreground shadow-brutal hover-brutal">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-2xl font-black mb-4">
                  הכלה וקבלה
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  אנחנו מאמינים בכוחו של כל אדם להתפתח ולצמוח. החווה שלנו היא מקום שמקבל כל אחד ואחת כפי שהם.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary z-[-1]" />
            </div>

            <div className="group relative animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div className="bg-background p-8 h-full border-4 border-foreground shadow-brutal hover-brutal">
                <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-black mb-4">
                  קהילה מכילה
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  החווה היא בית לקהילה חמה ומכילה, שבה כולם שייכים. אנחנו יוצרים חוויות משותפות שמחזקות קשרים.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary z-[-1]" />
            </div>

            <div className="group relative animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              <div className="bg-background p-8 h-full border-4 border-foreground shadow-brutal hover-brutal">
                <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-2xl font-black mb-4">
                  צמיחה והתפתחות
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  דרך העבודה עם הסוסים והטבע, אנחנו מסייעים לכל אדם למצוא את הכוחות שלו ולצמוח בקצב האישי שלו.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent z-[-1]" />
            </div>
          </div>

          {/* Vision statement */}
          <div className="relative">
            <div className="bg-foreground text-background p-12 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-20" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary opacity-20 rounded-full" />
              
              <div className="relative max-w-4xl">
                <div className="inline-block bg-primary text-background px-4 py-2 font-bold text-sm mb-6">
                  החזון שלנו
                </div>
                <h3 className="text-3xl md:text-5xl font-black mb-8">
                  להעניק לכל אדם מקום להיות עצמו באמת
                </h3>
                <p className="text-xl md:text-2xl leading-relaxed opacity-90">
                  מקום שבו מרגישים בטוחים, נשמעים ומוערכים. 
                  דרך הקשר המיוחד עם הסוסים, אנחנו יוצרים חוויות טיפוליות שמשנות חיים ומאפשרות לכל אדם לממש את הפוטנציאל שלו.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-foreground z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
