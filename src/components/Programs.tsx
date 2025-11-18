import { Card, CardContent } from "@/components/ui/card";
import therapyImage from "@/assets/therapy-session.jpg";
import sportsImage from "@/assets/sports-riding.jpg";
import communityImage from "@/assets/community.jpg";

const Programs = () => {
  const programs = [
    {
      title: "רכיבה טיפולית",
      description: "תוכנית טיפולית מותאמת אישית לילדים ונוער עם צרכים מיוחדים. התוכנית משלבת טיפול בעזרת סוסים (היפותרפיה) עם גישה חינוכית מכילה שמאפשרת לכל משתתף להתקדם בקצב שלו.",
      image: therapyImage,
      highlights: [
        "טיפול אישי ובקבוצות קטנות",
        "מטפלים מוסמכים ומנוסים",
        "מותאם לצרכים הייחודיים של כל משתתף",
        "שילוב של פעילויות טיפוליות וחווייתיות"
      ]
    },
    {
      title: "רכיבה ספורטיבית",
      description: "תוכנית רכיבה ספורטיבית לילדים ונוער המעוניינים לפתח מיומנויות רכיבה ברמה גבוהה. התוכנית כוללת אימונים קבועים, שיפור טכניקה והשתתפות בתחרויות.",
      image: sportsImage,
      highlights: [
        "אימונים מקצועיים עם מדריכים מוסמכים",
        "התאמה לרמה וקצב האישי",
        "הכנה לתחרויות ואירועי רכיבה",
        "פיתוח משמעת, אחריות וביטחון עצמי"
      ]
    },
    {
      title: "פעילויות קהילתיות",
      description: "מפגשים קבוצתיים ופעילויות קהילתיות המחזקות את הקשר עם הסוסים, הטבע והקהילה. פעילויות המתאימות לכל המשפחה ומאפשרות חוויה משותפת מיוחדת.",
      image: communityImage,
      highlights: [
        "ימי הורים וילדים",
        "סדנאות וימי גיבוש",
        "אירועי קהילה מיוחדים",
        "חוויה משפחתית ייחודית"
      ]
    }
  ];

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
            התוכניות והפעילויות שלנו
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            מגוון תוכניות ופעילויות המותאמות לצרכים השונים של המשתתפים
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div key={index} className="group glass-card overflow-hidden border-2 border-border/50 hover-lift hover-glow rounded-3xl shadow-xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover min-h-[350px] group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className={`p-8 md:p-12 flex flex-col justify-center relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full w-fit">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">תוכנית {index + 1}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-card-foreground group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-4">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm mt-0.5 group-hover/item:scale-110 transition-transform">✓</span>
                        <span className="text-muted-foreground group-hover/item:text-card-foreground transition-colors">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
