import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card shadow-2xl border-2 border-border/50 rounded-3xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-5xl md:text-6xl font-handwriting font-bold text-primary">
                  צרו קשר
                </h2>
              </div>
              <div className="space-y-8 max-w-xl mx-auto">
                <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/5 transition-all">
                  <div className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-all">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-card-foreground">טלפון</h3>
                    <a href="tel:058-6085521" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">
                      058-6085521
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/5 transition-all">
                  <div className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-all">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-card-foreground">דוא"ל</h3>
                    <a href="mailto:office@open-space.co.il" className="text-muted-foreground hover:text-primary transition-colors break-all">
                      office@open-space.co.il
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/5 transition-all">
                  <div className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-all">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-card-foreground">כתובת</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      חוות המרחב הפתוח
                      <br />
                      התירוש 13, כפר שמואל
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-bold text-lg mb-4 text-card-foreground text-center">עקבו אחרינו ברשתות</h3>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://www.facebook.com/openspacehorses"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-all hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6 text-primary" />
                    </a>
                    <a
                      href="https://www.instagram.com/openspacestables/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-all hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-primary" />
                    </a>
                    <a
                      href="https://wa.me/9725586085521"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-all hover:scale-110"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </a>
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
