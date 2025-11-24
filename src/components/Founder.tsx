import founderImage from "@/assets/ofer-komrovsky.jpg";

const Founder = () => {
  return (
    <section id="founder" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-[128px] xl:px-[192px] 2xl:px-[256px]">
        <div className="max-w-7xl mx-auto animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold mb-12 text-primary text-center">
            ד״ר עופר קומרובסקי
          </h2>
          <div className="md:flex md:items-stretch md:gap-10 lg:gap-12 md:justify-center">
            <div className="order-last md:order-first md:w-[350px] md:flex-shrink-0 flex items-stretch">
              <img 
                src={founderImage} 
                alt="ד״ר עופר קומרובסקי" 
                className="w-full md:h-full h-auto object-contain rounded-3xl shadow-2xl mx-auto"
              />
            </div>
            <div className="md:w-[450px] md:flex-shrink-0 flex items-stretch mt-8 md:mt-0 md:pt-3">
              <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed text-right font-sans">
                <p>
                  המרחב הפתוח הוקם בחזונו של עופר קומרובסקי וממשיך לצמוח ולהתפתח בהובלתו. הקשר של עופר עם סוסים החל בילדותו במטעי השקדים של אביו בקיבוץ נגבה ולאחר מכן כנער גידל סוסים בשדות כפר אזר. לאחר שירותו הצבאי למד וטרינריה והתמחה ברפואת סוסים.
                </p>
                <p>
                  במהלך הטיפולים בסוסים, נחשף עופר לקסם של הרכיבה טיפולית ובשנת 1998 הקים את המרחב הפתוח. בהמשך, בעזרת חברים ייסד את עמותת גלאופ - גשר לאהבה ופתיחות. המרחב הפתוח הוקמה על מנת להנגיש לאוכלוסיות מיוחדות בעיקר ילדים את הקשר המעצים עם סוסים ושאר בעלי חיים.
                </p>
                <p>
                  המפגש המקרי בחווה עם ילדים על הספקטרום, הציף אותו בתחושת סקרנות ויצירתיות מצד אחד ובתחושת שליחות מצד שני. בהשראתם, נסחף עופר במסירות לעולם של צרכים מיוחדים והחזון התפתח לשיטת המרחב הפתוח.
                </p>
                <p>
                  גישה טיפולית פורצת דרך שיש לה חלק בהובלת השינוי בגישה להתמודדות ושילוב בקהילה. דרך שיש בה הגשמה למרות ועם המגבלה. עופר ממשיך כל הזמן להיות מונע בתחושת שליחות, לפרוץ עוד גבולות לקדם ולהפיץ את הרעיון.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
