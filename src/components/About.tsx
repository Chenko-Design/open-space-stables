import aboutImage from "@/assets/about-child-horse.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const About = () => {
  const {
    ref,
    isVisible
  } = useScrollReveal();
  return <section ref={ref} id="about" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-[128px] xl:px-[192px] 2xl:px-[256px]">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold mb-12 text-primary text-center">
            מי אנחנו
          </h2>
          <div className="md:flex md:items-stretch md:gap-10 lg:gap-12 md:justify-center">
            <div className="group order-last md:order-first md:w-[350px] md:flex-shrink-0 flex items-stretch overflow-hidden rounded-3xl shadow-2xl relative">
              <img src={aboutImage} alt="ילד עם סוס בחווה" className="w-full md:h-full h-auto object-contain mx-auto group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="md:w-[450px] md:flex-shrink-0 flex items-stretch mt-8 md:mt-0 md:pt-3">
              <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed text-right font-sans">
                <p>
                  <span className="font-bold text-primary">המרחב הפתוח</span> הינה חווה קסומה בלב הטבע הפסטורלי של עמק איילון שמציעה מרחב ריפוי וטיפול שקט אך עשיר בגירויים, שבו מתפתחת מוטיבציה פנימית - לרכב, להתמודד, לצמוח.
                </p>
                <p>
                  זהו מקום של <span className="font-bold text-primary">עשיה אמיצה עם אהבה ושמחה</span> - מקום שמזמין התמודדות עם פחדים ושדים והופך אותם לאתגרים. ביחד, מתוך חופש, כבוד, חיבור עמוק והקשבה לסביבה ולעצמנו. כאן תפגשו <span className="font-bold text-primary">צוות מקצועי ואנושי</span>, סוסים וחיות אחרות אבל מעל הכל תרגישו את <span className="font-bold text-primary">הרעיון</span> של המקום - חיבור אנושי מתוך קבלה והכלה, יחס אישי ואכפתי, וכבוד לקצב ולמהות של כל אדם ובעל חיים.
                </p>
                <p>
                  <span className="font-bold text-primary">המרחב הפתוח הוא בית ומשפחה</span> שבו כל אחד ואחת יכול למצוא מקום לנשום, להכיר ולאהוב את הערך שלו - לקחת את המושכות לידיים ולרכב קדימה.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;