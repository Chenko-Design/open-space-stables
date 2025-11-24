import galopLogo from "@/assets/galop-logo.png";

const Association = () => {
  return (
    <section id="association" className="py-24 bg-muted">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-[128px] xl:px-[192px] 2xl:px-[256px]">
        <div className="max-w-7xl mx-auto animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold mb-12 text-primary text-center">
            עמותת גאלו"פ
          </h2>
          <div className="md:flex md:items-start md:gap-10 lg:gap-12 md:justify-center">
            <div className="md:w-[350px] md:flex-shrink-0 flex items-start">
              <img 
                src={galopLogo} 
                alt="לוגו עמותת גאלופ" 
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
            <div className="md:w-[450px] md:flex-shrink-0 flex items-stretch mt-8 md:mt-0">
              <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed text-right font-sans">
                <p>
                  <span className="font-bold text-primary">עמותת גאלו"פ – גשר לאהבה ולפתיחות</span> בשנת 2003 חברנו יחד, קבוצה של יוצאי יחידות מובחרות בצה"ל ובכירים במשק הישראלי, ונרתמנו לעשייה חברתית מיוחדת במינה:
                </p>
                <p>
                  שיקומם וקידומם של ילדים ובוגרים המתקשים להשתלב בזרם המרכזי והמהיר של החברה, בשאיפה לחולל שינוי משמעותי בחייהם, למנף את יכולותיהם ולסייע להם ברכישת מיומנויות לקיום אורח חיים עצמאי ותורם בחברה.
                </p>
                <p>
                  חזון זה הוליד את עמותת גלאו"פ - גשר לאהבה ופתיחות. פעילותה של עמותת גלאו"פ מתקיימת בחוות סוסים טיפולית בכפר שמואל והיא מבוססת על שיטת <span className="font-bold text-primary">"המרחב הפתוח"</span>, שיטה פורצת דרך פרי פיתוחו של ד"ר עופר קומרובסקי, וטרינר, המשלבת רכיבה טיפולית, טיפול בבעלי חיים ופעילויות טיפוליות נוספות.
                </p>
                <p>
                  שיטת הטיפול הייחודית של "המרחב הפתוח" רשמה הצלחות רבות בטיפול באנשים בעלי קשיים מגוונים, וחוללה בחייהם שינוי של ממש אשר אפשר להם לממש את הפוטנציאל הגלום בהם, הוציאם ממצב של תלות, חוסר תקשורת וניתוק חברתי, העמיד אותם על רגליהם וסייע בהשתלבותם בשוק העבודה ובחברה הישראלית.
                </p>
                <p className="italic border-r-4 border-primary pr-4">
                  "הרצון היה ליצור מקום של חיבור בין אנשים לבעלי חיים, מקום של שלווה וניתוק מהחיים התחרותיים, החומריים וההישגיים. זה מקום של שמחה ואהבה אבל של עבודה קשה ושאיפה להתקדמות, מקום שמגלה את הנשמה היתרה שבכל אחד מאיתנו, וזה היה הרעיון הבסיסי שעליו פועלת החווה עד היום."
                  <span className="block mt-2 font-bold text-primary">ד"ר עופר קומרובסקי</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Association;
