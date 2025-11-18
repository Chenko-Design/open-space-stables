import therapyImage from "@/assets/therapy-session.jpg";
import sportsImage from "@/assets/sports-riding.jpg";
import communityImage from "@/assets/community.jpg";
import { Check } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "רכיבה טיפולית",
      description: "תוכנית טיפולית מותאמת אישית לילדים ונוער עם צרכים מיוחדים",
      image: therapyImage,
      color: "primary",
      highlights: [
        "טיפול אישי ובקבוצות קטנות",
        "מטפלים מוסמכים ומנוסים",
        "מותאם לצרכים הייחודיים",
        "פעילויות טיפוליות וחווייתיות"
      ]
    },
    {
      title: "רכיבה ספורטיבית",
      description: "תוכנית רכיבה ספורטיבית לפיתוח מיומנויות ברמה גבוהה",
      image: sportsImage,
      color: "secondary",
      highlights: [
        "אימונים מקצועיים מוסמכים",
        "התאמה לרמה האישית",
        "הכנה לתחרויות",
        "פיתוח משמעת וביטחון עצמי"
      ]
    },
    {
      title: "פעילויות קהילתיות",
      description: "מפגשים קבוצתיים המחזקים את הקשר עם הסוסים והקהילה",
      image: communityImage,
      color: "accent",
      highlights: [
        "ימי הורים וילדים",
        "סדנאות וימי גיבוש",
        "אירועי קהילה מיוחדים",
        "חוויה משפחתית ייחודית"
      ]
    }
  ];

  return (
    <section id="programs" className="py-32 bg-background relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 border-4 border-foreground opacity-10" />
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-primary opacity-10 rotate-45" />

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-20 text-center animate-fade-in-up">
            <div className="inline-block bg-foreground text-background px-6 py-2 font-bold text-sm mb-6">
              מה אנחנו מציעים
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              התוכניות שלנו
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              מגוון תוכניות המותאמות לצרכים השונים של המשתתפים
            </p>
          </div>

          {/* Programs */}
          <div className="space-y-32">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Image */}
                <div 
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-in-${index % 2 === 0 ? 'right' : 'left'}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-4 border-foreground shadow-brutal">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-6 -${index % 2 === 0 ? 'right' : 'left'}-6 w-full h-full bg-${program.color} z-[-1]`} />
                  
                  {/* Number badge */}
                  <div className={`absolute -top-8 -${index % 2 === 0 ? 'left' : 'right'}-8 w-24 h-24 bg-foreground text-background flex items-center justify-center shadow-brutal`}>
                    <span className="text-4xl font-black">0{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="space-y-6">
                    <h3 className="text-4xl md:text-6xl font-black leading-tight">
                      {program.title}
                    </h3>
                    
                    <p className="text-xl md:text-2xl font-medium">
                      {program.description}
                    </p>

                    <div className="pt-4 space-y-4">
                      {program.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-4 group">
                          <div className={`flex-shrink-0 w-8 h-8 bg-${program.color} flex items-center justify-center`}>
                            <Check className="w-5 h-5 text-background" />
                          </div>
                          <span className="text-lg font-medium pt-1">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6">
                      <div className={`inline-block bg-${program.color} text-background px-8 py-4 font-bold text-lg hover:translate-x-2 transition-transform cursor-pointer`}>
                        למידע נוסף ←
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
