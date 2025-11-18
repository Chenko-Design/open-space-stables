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
            <Card key={index} className="overflow-hidden border-2 hover:shadow-xl transition-shadow duration-300">
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </div>
                <CardContent className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-3xl font-display font-bold mb-4 text-card-foreground">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-3">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
