import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold mb-6 text-primary">
            צרו קשר
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            נשמח לענות על כל שאלה ולספק מידע נוסף על התוכניות שלנו
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card shadow-2xl border-2 border-border/50 rounded-3xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Phone className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-card-foreground">טלפון</h3>
                      <a href="tel:050-1234567" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">
                        050-1234567
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/5 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Mail className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-card-foreground">דוא"ל</h3>
                      <a href="mailto:info@horsefarm.co.il" className="text-muted-foreground hover:text-primary transition-colors break-all">
                        info@horsefarm.co.il
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-accent/5 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <MapPin className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-card-foreground">כתובת</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        החווה ממוקמת באזור מרכזי ונגיש
                        <br />
                        נשמח לארח אתכם לביקור
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative p-8 rounded-3xl flex flex-col justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
                  <div className="relative">
                    <div className="mb-4 inline-block px-4 py-1 bg-primary/10 rounded-full">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">🌟 בואו נדבר</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-card-foreground">
                      מעוניינים לקבל מידע נוסף?
                    </h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      צרו איתנו קשר ונשמח לספר לכם יותר על התוכניות שלנו, לענות על שאלות ולתאם ביקור בחווה.
                    </p>
                    <Button 
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground w-full rounded-full shadow-lg hover:shadow-[0_10px_40px_hsl(142_55%_45%_/_0.3)] hover:scale-105 transition-all text-lg py-6"
                      onClick={() => window.location.href = 'tel:050-1234567'}
                    >
                      <Phone className="ml-2 h-5 w-5" />
                      התקשרו עכשיו
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground text-sm md:text-base">
                  🕐 שעות פעילות: ימים א'-ה' 09:00-18:00 | יום ו' ומוצ"ש לפי תיאום
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
