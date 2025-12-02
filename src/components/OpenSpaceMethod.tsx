import { useScrollReveal } from "@/hooks/useScrollReveal";

const OpenSpaceMethod = () => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section ref={ref} id="open-space-method" className="py-24 bg-gradient-to-b from-white to-background/30">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-[128px] xl:px-[192px] 2xl:px-[256px]">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold text-primary text-center mb-12">
            שיטת המרחב הפתוח
          </h2>
          
          <div className="md:flex md:justify-center">
            <div className="md:w-[800px] space-y-8 text-lg md:text-xl text-foreground leading-relaxed text-right font-sans">
              <p>
                שיטת המרחב הפתוח היא גישה טיפולית־קהילתית ייחודית, המשלבת עבודה עם בעלי חיים, אחריות אישית ומעגלי שייכות. השיטה פועלת בכמה עקרונות מרכזיים:
              </p>
              
              <div className="space-y-6">
                <div className="border-r-4 border-primary pr-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">1. קהילה כמרחב מרפא</h3>
                  <p>
                    הלב של השיטה הוא תחושת השייכות. החווה פועלת כקהילה חיה ובה מעגלי תמיכה הולכים ומתרחבים — מהמפגש האינטימי בין המטופל, המטפל והסוס; דרך קבוצת השווים; ועד קהילת החווה הרחבה והמשפחות. תחושת ה"בית השני" מעניקה ביטחון, עקביות ומרחב בטוח לצמיחה.
                  </p>
                </div>
                
                <div className="border-r-4 border-primary pr-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">2. חיבור לעוצמות של הטבע ובעלי החיים</h3>
                  <p>
                    הכוח של הטבע התנועה של הסוסים והמפגש הפשוט אך המשמעותי עם בעלי החיים יוצרים קשר ישיר לעוצמה ראשונית — כוח שקט המאפשר ויסות, נוכחות, התמסרות וביטחון. העבודה איתם מגבירה הקשבה לעצמי ולסביבה, מפחיתה שיפוטיות ומחברת אל תחושת חיות פנימית.
                  </p>
                </div>
                
                <div className="border-r-4 border-primary pr-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">3. שינוי בתפיסת העצמי ולקיחת אחריות</h3>
                  <p>
                    השיטה מעודדת שינוי עמוק בתפיסה של המטופל את עצמו ואת יכולותיו. ממי שמקבל למי שגם נותן, זה מתחיל באחריות על בעלי החיים — האכלה, טיפול, הובלה — וממשיך באינטראקציה עם מטופלים אחרים, ממקום של עזרה נתינה חיבור חמלה.
                  </p>
                </div>
                
                <div className="border-r-4 border-primary pr-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">4. קבלה מלאה של האדם ושל השונות</h3>
                  <p>
                    החווה מאפשרת מפגש טבעי בין אנשים מרקעים, גילאים ויכולות שונים, בתוך מרחב שאינו תחרותי ואינו שיפוטי. נוצרת קבלה עמוקה של השונות של האחר ושלי וזה מקדם את היכולת לזהות את האיכות שמעבר לקושי. מתפתחת התחושה אני שווה ואני ראוי.
                  </p>
                </div>
                
                <div className="border-r-4 border-primary pr-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">5. רצף טיפולי ושיקומי ארוך־טווח</h3>
                  <p>
                    הגישה מבוססת על תהליך איטי, קשוב ומדורג. היא מאפשרת ללוות ילדים ובוגרים לאורך רצף של טיפול, שיקום, הכשרה ובהמשך — השתלבות במרחבים חברתיים ותעסוקתיים. בזכות הסבלנות והיכולת לראות התקדמות וגם הקטנה ביותר אנחנו מצליחים להגיע ליעדים פורצי גבולות.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSpaceMethod;
