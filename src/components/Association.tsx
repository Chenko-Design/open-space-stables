import galopLogo from "@/assets/galop-logo.png";

const Association = () => {
  return (
    <section id="association" className="py-24 bg-white">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-[128px] xl:px-[192px] 2xl:px-[256px]">
        <div className="max-w-7xl mx-auto animate-fade-in-up">
          <div className="flex items-center justify-center gap-8 mb-12">
            <img 
              src={galopLogo} 
              alt="לוגו עמותת גאלופ" 
              className="w-[150px] md:w-[160px] h-auto object-contain"
            />
            <h2 className="text-5xl md:text-6xl font-handwriting font-bold text-primary text-center">
              עמותת גאלו"פ
            </h2>
          </div>
          
          <div className="md:flex md:justify-center">
            <div className="md:w-[800px] space-y-6 text-lg md:text-xl text-foreground leading-relaxed text-right font-sans">
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
    </section>
  );
};

export default Association;
