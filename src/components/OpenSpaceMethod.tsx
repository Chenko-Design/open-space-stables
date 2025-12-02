import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, Heart, Target, Handshake, TrendingUp } from "lucide-react";

const principles = [
  {
    number: 1,
    title: "קהילה כמרחב מרפא",
    icon: Users,
    content: "הלב של השיטה הוא תחושת השייכות. החווה פועלת כקהילה חיה ובה מעגלי תמיכה הולכים ומתרחבים — מהמפגש האינטימי בין המטופל, המטפל והסוס; דרך קבוצת השווים; ועד קהילת החווה הרחבה והמשפחות. תחושת ה\"בית השני\" מעניקה ביטחון, עקביות ומרחב בטוח לצמיחה."
  },
  {
    number: 2,
    title: "חיבור לעוצמות של הטבע ובעלי החיים",
    icon: Heart,
    content: "הכוח של הטבע התנועה של הסוסים והמפגש הפשוט אך המשמעותי עם בעלי החיים יוצרים קשר ישיר לעוצמה ראשונית — כוח שקט המאפשר ויסות, נוכחות, התמסרות וביטחון. העבודה איתם מגבירה הקשבה לעצמי ולסביבה, מפחיתה שיפוטיות ומחברת אל תחושת חיות פנימית."
  },
  {
    number: 3,
    title: "שינוי בתפיסת העצמי ולקיחת אחריות",
    icon: Target,
    content: "השיטה מעודדת שינוי עמוק בתפיסה של המטופל את עצמו ואת יכולותיו. ממי שמקבל למי שגם נותן, זה מתחיל באחריות על בעלי החיים — האכלה, טיפול, הובלה — וממשיך באינטראקציה עם מטופלים אחרים, ממקום של עזרה נתינה חיבור חמלה."
  },
  {
    number: 4,
    title: "קבלה מלאה של האדם ושל השונות",
    icon: Handshake,
    content: "החווה מאפשרת מפגש טבעי בין אנשים מרקעים, גילאים ויכולות שונים, בתוך מרחב שאינו תחרותי ואינו שיפוטי. נוצרת קבלה עמוקה של השונות של האחר ושלי וזה מקדם את היכולת לזהות את האיכות שמעבר לקושי. מתפתחת התחושה אני שווה ואני ראוי."
  },
  {
    number: 5,
    title: "רצף טיפולי ושיקומי ארוך־טווח",
    icon: TrendingUp,
    content: "הגישה מבוססת על תהליך איטי, קשוב ומדורג. היא מאפשרת ללוות ילדים ובוגרים לאורך רצף של טיפול, שיקום, הכשרה ובהמשך — השתלבות במרחבים חברתיים ותעסוקתיים. בזכות הסבלנות והיכולת לראות התקדמות וגם הקטנה ביותר אנחנו מצליחים להגיע ליעדים פורצי גבולות."
  }
];

const OpenSpaceMethod = () => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section ref={ref} id="open-space-method" className="py-24 bg-gradient-to-b from-white to-background/30">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-[128px] xl:px-[192px] 2xl:px-[256px]">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold text-primary text-center mb-12">
            שיטת המרחב הפתוח
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <p className="text-lg md:text-xl text-foreground leading-relaxed text-center mb-16 font-sans">
              שיטת המרחב הפתוח היא גישה טיפולית־קהילתית ייחודית, המשלבת עבודה עם בעלי חיים, אחריות אישית ומעגלי שייכות. השיטה פועלת בכמה עקרונות מרכזיים:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                const delay = index * 100;
                
                return (
                  <div
                    key={principle.number}
                    className={`group transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${delay}ms` }}
                  >
                    <div className="relative h-full bg-card border-2 border-primary/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-primary/60 hover:-translate-y-2 transition-all duration-300">
                      {/* Number badge */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary shadow-lg flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">{principle.number}</span>
                      </div>
                      
                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-10 h-10 text-primary" strokeWidth={2.5} />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 text-center leading-tight">
                        {principle.title}
                      </h3>
                      
                      {/* Content */}
                      <p className="text-base text-foreground/90 leading-relaxed text-right font-sans">
                        {principle.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSpaceMethod;
