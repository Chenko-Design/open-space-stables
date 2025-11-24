import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section ref={ref} id="contact" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="glass-card shadow-2xl border-2 border-border/50 rounded-3xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-5xl md:text-6xl font-handwriting font-bold text-primary">
                  צרו קשר
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
                <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/5 transition-all">
                  <div className="bg-secondary p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-all">
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
                  <a 
                    href="https://wa.me/9725586085521"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-all"
                  >
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-card-foreground">WhatsApp</h3>
                    <a href="https://wa.me/9725586085521" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">
                      058-6085521
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/5 transition-all">
                  <div className="bg-secondary p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-all">
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
                  <div className="bg-secondary p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-all">
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
              </div>

              <div className="pt-8 border-t border-border mt-8">
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
