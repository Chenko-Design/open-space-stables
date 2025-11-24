import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AccessibilityStatement = () => {
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
            הצהרת נגישות
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                מחויבות לנגישות
              </h2>
              <p>
                המרחב הפתוח מחויב להנגיש את האתר לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות.
                אנו פועלים ליישום הנחיות התקן הישראלי (ת"י 5568) ברמת AA, במטרה להבטיח 
                גישה שוויונית לכל משתמשי האתר.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                הסדרי הנגישות באתר
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>ניווט נוח ונגיש באמצעות מקלדת</li>
                <li>תמיכה בקוראי מסך נפוצים</li>
                <li>ניגודיות צבעים מתאימה לתקן</li>
                <li>גדלי גופנים ברורים וקריאים</li>
                <li>תוכן מסומן בצורה סמנטית</li>
                <li>תיאורי תמונות (Alt Text) מפורטים</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                בעיות נגישות? נשמח לסייע
              </h2>
              <p>
                אנו משקיעים מאמצים רבים בהנגשת האתר, אך אם נתקלתם בבעיית נגישות או 
                תקלה כלשהי, נשמח אם תעדכנו אותנו. נעשה כל שביכולתנו לפתור את הבעיה 
                בהקדם האפשרי.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                פרטי התקשרות
              </h2>
              <div className="space-y-2">
                <p>
                  <strong>רכז נגישות:</strong> דר' עופר קומרובסקי
                </p>
                <p>
                  <strong>טלפון:</strong> <a href="tel:052-8362513" className="text-accent hover:underline">052-8362513</a>
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
              <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך: נובמבר 2025</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccessibilityStatement;
