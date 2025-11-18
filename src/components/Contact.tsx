import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-muted relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black opacity-5 pointer-events-none whitespace-nowrap">
        צרו קשר
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary opacity-20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-8 border-secondary opacity-20" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block bg-foreground text-background px-6 py-2 font-bold text-sm mb-6">
              בואו נדבר
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              צרו קשר
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              נשמח לענות על כל שאלה ולספק מידע נוסף
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-in-left">
              {/* Phone */}
              <div className="group relative">
                <div className="bg-background p-8 border-4 border-foreground shadow-brutal hover-brutal">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary flex items-center justify-center">
                      <Phone className="w-8 h-8 text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2">טלפון</h3>
                      <a 
                        href="tel:050-1234567" 
                        className="text-2xl font-bold hover:text-primary transition-colors"
                      >
                        050-1234567
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary z-[-1]" />
              </div>

              {/* Email */}
              <div className="group relative">
                <div className="bg-background p-8 border-4 border-foreground shadow-brutal hover-brutal">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-secondary flex items-center justify-center">
                      <Mail className="w-8 h-8 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2">דוא"ל</h3>
                      <a 
                        href="mailto:info@horsefarm.co.il" 
                        className="text-xl font-bold hover:text-primary transition-colors break-all"
                      >
                        info@horsefarm.co.il
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-secondary z-[-1]" />
              </div>

              {/* Location */}
              <div className="group relative">
                <div className="bg-background p-8 border-4 border-foreground shadow-brutal hover-brutal">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-accent flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2">כתובת</h3>
                      <p className="text-lg font-medium text-muted-foreground">
                        החווה ממוקמת באזור מרכזי ונגיש
                        <br />
                        נשמח לארח אתכם לביקור
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-accent z-[-1]" />
              </div>

              {/* Hours */}
              <div className="group relative">
                <div className="bg-foreground text-background p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-background text-foreground flex items-center justify-center">
                      <Clock className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2">שעות פעילות</h3>
                      <p className="text-lg opacity-90">
                        ימים א'-ה' 09:00-18:00
                        <br />
                        יום ו' ומוצ"ש לפי תיאום
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="animate-slide-in-right">
              <div className="sticky top-8 bg-foreground text-background p-12 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary opacity-30" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary opacity-30 rounded-full" />
                
                <div className="relative space-y-8">
                  <div>
                    <div className="inline-block bg-primary text-background px-4 py-2 font-bold text-sm mb-6">
                      התחילו עכשיו
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                      מוכנים להצטרף אלינו?
                    </h3>
                    <p className="text-xl leading-relaxed opacity-90">
                      התקשרו אלינו עכשיו ונשמח לספר לכם יותר על התוכניות שלנו ולתאם ביקור בחווה
                    </p>
                  </div>

                  <Button
                    size="lg"
                    onClick={() => window.location.href = 'tel:050-1234567'}
                    className="w-full bg-background text-foreground hover:bg-background/90 py-8 text-xl font-black shadow-none hover:translate-x-2 transition-transform"
                  >
                    התקשרו עכשיו →
                  </Button>

                  <div className="pt-4 space-y-3 opacity-90">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary" />
                      <span className="text-sm font-bold">תשובה מהירה</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary" />
                      <span className="text-sm font-bold">ייעוץ מקצועי</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent" />
                      <span className="text-sm font-bold">ביקור ללא התחייבות</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
