import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8"
          >
            <ArrowRight className="rotate-180" size={20} />
            חזרה לדף הבית
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">
            מדיניות פרטיות
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                כללי
              </h2>
              <p>
                המרחב הפתוח מחויב להגן על פרטיות המשתמשים באתר. מדיניות פרטיות זו 
                מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                איסוף מידע
              </h2>
              <p>
                אנו עשויים לאסוף את סוגי המידע הבאים:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>מידע אישי שמסרת מרצונך (שם, טלפון, דוא"ל)</li>
                <li>מידע טכני (כתובת IP, סוג דפדפן, מערכת הפעלה)</li>
                <li>מידע על השימוש באתר (דפים שצפית בהם, זמן ביקור)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                שימוש במידע
              </h2>
              <p>
                אנו משתמשים במידע שנאסף למטרות הבאות:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>לספק ולשפר את השירותים שלנו</li>
                <li>ליצור קשר עמך בנוגע לפעילויות ואירועים</li>
                <li>לנתח ולשפר את חווית המשתמש באתר</li>
                <li>לשלוח מידע רלוונטי על פעילות העמותה (בהסכמתך)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                שמירת מידע ואבטחה
              </h2>
              <p>
                אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלך מפני גישה 
                לא מורשית, שינוי, גילוי או השמדה. המידע נשמר רק למשך הזמן הנדרש למטרות 
                שלשמן נאסף.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                שיתוף מידע עם צדדים שלישיים
              </h2>
              <p>
                אנו לא נמכור, נחכיר או נשתף את המידע האישי שלך עם צדדים שלישיים, 
                אלא במקרים הבאים:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>בהסכמתך המפורשת</li>
                <li>כאשר הדבר נדרש על פי חוק</li>
                <li>להגנה על זכויותינו או ביטחון משתמשי האתר</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                זכויותיך
              </h2>
              <p>
                יש לך את הזכות:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>לדעת איזה מידע אנו מחזיקים עליך</li>
                <li>לבקש תיקון או מחיקה של מידע אישי</li>
                <li>לבטל את הסכמתך לשימוש במידע בכל עת</li>
                <li>להגיש תלונה לרשות להגנת הפרטיות</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                עדכונים למדיניות
              </h2>
              <p>
                אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת. 
                שינויים יפורסמו באתר עם תאריך העדכון.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                יצירת קשר
              </h2>
              <p>
                לשאלות בנוגע למדיניות הפרטיות ניתן לפנות אלינו:
              </p>
              <div className="space-y-2">
                <p>
                  <strong>טלפון:</strong> <a href="tel:058-6085521" className="text-accent hover:underline">058-6085521</a>
                </p>
                <p>
                  <strong>דוא"ל:</strong> <a href="mailto:office@open-space.co.il" className="text-accent hover:underline">office@open-space.co.il</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                תאריך עדכון אחרון
              </h2>
              <p>מדיניות פרטיות זו עודכנה לאחרונה בתאריך: נובמבר 2025</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
