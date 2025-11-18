import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
            צרו קשר
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            נשמח לענות על כל שאלה ולספק מידע נוסף על התוכניות שלנו
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-2">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">טלפון</h3>
                      <a href="tel:050-1234567" className="text-muted-foreground hover:text-primary transition-colors">
                        050-1234567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">דוא"ל</h3>
                      <a href="mailto:info@horsefarm.co.il" className="text-muted-foreground hover:text-primary transition-colors">
                        info@horsefarm.co.il
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">כתובת</h3>
                      <p className="text-muted-foreground">
                        החווה ממוקמת באזור מרכזי ונגיש
                        <br />
                        נשמח לארח אתכם לביקור
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-8 rounded-2xl flex flex-col justify-center">
                  <h3 className="text-2xl font-display font-bold mb-4 text-card-foreground">
                    מעוניינים לקבל מידע נוסף?
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    צרו איתנו קשר ונשמח לספר לכם יותר על התוכניות שלנו, לענות על שאלות ולתאם ביקור בחווה.
                  </p>
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full rounded-full"
                    onClick={() => window.location.href = 'tel:050-1234567'}
                  >
                    התקשרו עכשיו
                  </Button>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground">
                  שעות פעילות: ימים א'-ה' 09:00-18:00 | יום ו' ומוצ"ש לפי תיאום
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
