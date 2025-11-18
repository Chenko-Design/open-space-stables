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
          <div className="bg-card p-8 rounded-2xl shadow-lg hover-lift border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-center text-card-foreground">
              הכלה וקבלה
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              אנחנו מאמינים בכוחו של כל אדם להתפתח ולצמוח. החווה שלנו היא מקום שמקבל כל אחד ואחת כפי שהם, 
              ומעניק מרחב בטוח לביטוי עצמי.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-lg hover-lift border border-border">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-center text-card-foreground">
              קהילה מכילה
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              החווה היא בית לקהילה חמה ומכילה, שבה כולם שייכים. 
              אנחנו יוצרים חוויות משותפות שמחזקות קשרים בין אנשים ומעניקות תחושת שייכות.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-lg hover-lift border border-border">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-center text-card-foreground">
              צמיחה והתפתחות
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              דרך העבודה עם הסוסים והטבע, אנחנו מסייעים לכל אדם למצוא את הכוחות שלו, 
              לפתח ביטחון עצמי ולצמוח בקצב האישי שלו.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-card/50 backdrop-blur-sm p-10 rounded-3xl border border-border shadow-lg">
          <h3 className="text-3xl font-display font-bold mb-6 text-center text-card-foreground">
            החזון שלנו
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            להעניק לכל ילד, נער ומבוגר מקום שבו הם יכולים להיות עצמם באמת. 
            מקום שבו הם מרגישים בטוחים, נשמעים ומוערכים. 
            דרך הקשר המיוחד עם הסוסים, אנחנו יוצרים חוויות טיפוליות שמשנות חיים ומאפשרות לכל אדם לממש את הפוטנציאל שלו.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
