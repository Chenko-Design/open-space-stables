import { Heart, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
            החווה שלנו
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            החווה הוקמה מתוך חזון ליצור מקום מיוחד שבו כל אדם יכול להיות עצמו, 
            מקום שמאפשר צמיחה אישית דרך הקשר עם הסוסים והטבע.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group glass-card p-8 rounded-3xl shadow-lg hover-lift hover-glow border border-border/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-center text-card-foreground">
                הכלה וקבלה
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                אנחנו מאמינים בכוחו של כל אדם להתפתח ולצמוח. החווה שלנו היא מקום שמקבל כל אחד ואחת כפי שהם, 
                ומעניק מרחב בטוח לביטוי עצמי.
              </p>
            </div>
          </div>

          <div className="group glass-card p-8 rounded-3xl shadow-lg hover-lift hover-glow border border-border/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-center text-card-foreground">
                קהילה מכילה
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                החווה היא בית לקהילה חמה ומכילה, שבה כולם שייכים. 
                אנחנו יוצרים חוויות משותפות שמחזקות קשרים בין אנשים ומעניקות תחושת שייכות.
              </p>
            </div>
          </div>

          <div className="group glass-card p-8 rounded-3xl shadow-lg hover-lift hover-glow border border-border/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-center text-card-foreground">
                צמיחה והתפתחות
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                דרך העבודה עם הסוסים והטבע, אנחנו מסייעים לכל אדם למצוא את הכוחות שלו, 
                לפתח ביטחון עצמי ולצמוח בקצב האישי שלו.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto glass-card p-12 rounded-3xl border border-border/50 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-50" />
          <div className="relative">
            <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">✨ המטרה שלנו</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center text-card-foreground">
              החזון שלנו
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              להעניק לכל ילד, נער ומבוגר מקום שבו הם יכולים להיות עצמם באמת. 
              מקום שבו הם מרגישים בטוחים, נשמעים ומוערכים. 
              דרך הקשר המיוחד עם הסוסים, אנחנו יוצרים חוויות טיפוליות שמשנות חיים ומאפשרות לכל אדם לממש את הפוטנציאל שלו.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
