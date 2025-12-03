import galopLogo from "@/assets/galop-logo.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const Association = () => {
  const {
    ref,
    isVisible
  } = useScrollReveal();
  return <section ref={ref} id="association" className="py-24 bg-white">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-[128px] xl:px-[192px] 2xl:px-[256px]">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
            <img src={galopLogo} alt="לוגו עמותת גאלופ" className="w-[120px] md:w-[160px] h-auto object-contain" />
            <h2 className="text-5xl md:text-6xl font-handwriting font-bold text-primary text-center">עמותת גאלו"פ - <br className="md:hidden" />גשר לאהבה ופתיחות</h2>
          </div>
          
          <div className="md:flex md:justify-center">
            <div className="md:w-[800px] space-y-6 text-lg md:text-xl text-foreground leading-relaxed text-right font-sans">
            <p>עמותת גלאו"פ הוקמה מתוך שליחות חברתית עמוקה: לאפשר לילדים, לנוער ולבוגרים המתמודדים עם קשיים מורכבים למצוא מקום שמאמין ביכולתם ובערכם. קבוצת מייסדי העמותה, יוצאי יחידות מובחרות ובכירים במשק, חברו לד"ר עופר קומרובסקי בשנת 2003 ונרתמו לעשייה חברתית.<span className="font-bold text-primary">עמותת גלאו"פ</span> הוקמה מתוך שליחות חברתית עמוקה: לאפשר לילדים, לנוער ולבוגרים המתמודדים עם קשיים מורכבים למצוא מקום שמאמין ביכולתם ובערכם. קבוצת מייסדי העמותה — יוצאי יחידות מובחרות ובכירים במשק — חברו לד"ר עופר קומרובסקי בשנת 2003 ונרתמו לעשייה חברתית.
            </p>
            <p>מטרותיה המרכזיות של העמותה הן לפתח ולקדם שיטות טיפול חדשניות בחווה טיפולית הפועלת בתוך הטבע, ולספק מימון ותמיכה לאנשים ולמשפחות שיכולים להפיק תועלת משמעותית מהטיפול - אך אינם יכולים לשאת בעלויותיו בעצמם.<span className="font-bold text-primary">שיטות טיפול חדשניות</span> בחווה טיפולית הפועלת בתוך הטבע, ולספק מימון ותמיכה לאנשים ולמשפחות שיכולים להפיק תועלת משמעותית מהטיפול — אך אינם יכולים לשאת בעלויותיו בעצמם.
            </p>
            <p>
              לאורך השנים רשמה העמותה הצלחות רבות עם מתמודדי נפש, אוטיזם, פוסט-טראומה, נפגעי פעולות איבה, נערים ונערות בסיכון ועוד, ועזרה לרבים לשנות את מהלך חייהם לטובה, ולפתוח עבורם אפשרויות חדשות לצמיחה והגשמה.
            </p>
            <p className="italic border-r-4 border-primary pr-4">
              "הרצון היה ליצור מקום של חיבור בין אנשים לבעלי חיים, מקום של שלווה וניתוק מהחיים התחרותיים, החומריים וההישגיים. זה מקום של שמחה ואהבה אבל של עבודה קשה ושאיפה להתקדמות, מקום שמגלה את הנשמה היתרה שבכל אחד מאיתנו, וזה היה הרעיון הבסיסי שעליו פועלת החווה עד היום."
              <span className="block mt-2 font-bold text-primary">ד"ר עופר קומרובסקי</span>
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Association;