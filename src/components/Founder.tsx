import founderImage from "@/assets/ofer-komrovsky.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const Founder = () => {
  const {
    ref,
    isVisible
  } = useScrollReveal();
  return <section ref={ref} id="founder" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-[128px] xl:px-[192px] 2xl:px-[256px]">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold mb-12 text-primary text-center">על היזם - ד״ר עופר קומרובסקי</h2>
          <div className="md:flex md:items-stretch md:gap-10 lg:gap-12 md:justify-center mb-8">
            <div className="group order-last md:order-first md:w-[350px] md:flex-shrink-0 flex items-stretch overflow-hidden rounded-3xl shadow-2xl relative">
              <img src={founderImage} alt="ד״ר עופר קומרובסקי" className="w-full md:h-full h-auto object-contain mx-auto group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="md:w-[450px] md:flex-shrink-0 flex items-stretch mt-8 md:mt-0 md:pt-3">
              <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed text-right font-sans">
                <p>
                  המרחב הפתוח הוקם <span className="font-bold text-primary">בחזונו של עופר קומרובסקי</span> וממשיך לצמוח ולהתפתח בהובלתו. הקשר של עופר עם סוסים החל בילדותו במטעי השקדים של אביו בקיבוץ נגבה ולאחר מכן כנער גידל סוסים בשדות כפר אזר. לאחר שירותו הצבאי למד וטרינריה והתמחה ברפואת סוסים.
                </p>
                <p>
                  במהלך הטיפולים בסוסים, נחשף עופר לקסם של הרכיבה הטיפולית ובשנת 1998 הקים את המרחב הפתוח. בהמשך, בעזרת חברים ייסד את <span className="font-bold text-primary">עמותת גלאופ</span> - גשר לאהבה ופתיחות. המרחב הפתוח הוקמה על מנת למנף את הקשר המעצים עם סוסים ושאר בעלי חיים ככלי טיפולי ושיקומי.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:flex md:justify-center">
            <div className="md:w-[800px] space-y-6 text-lg md:text-xl text-foreground leading-relaxed text-right font-sans">
              <p>
                המפגש המקרי בחווה עם ילדים על הספקטרום, הציף אותו בתחושת סקרנות ויצירתיות מצד אחד ובתחושת שליחות מצד שני. בהשראתם, נסחף עופר במסירות לעולם של צרכים מיוחדים והחזון התפתח ל<span className="font-bold text-primary">שיטת המרחב הפתוח</span>.
              </p>
              <p>
                <span className="font-bold text-primary">גישה טיפולית פורצת דרך</span> שיש לה חלק בהובלת השינוי בגישה להתמודדות ושילוב בקהילה. דרך שיש בה הגשמה למרות ועם המגבלה. עופר ממשיך כל הזמן להיות מונע בתחושת שליחות, לפרוץ עוד גבולות לקדם ולהפיץ את הרעיון.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Founder;