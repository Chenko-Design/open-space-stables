import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-handwriting text-2xl md:text-3xl mb-2">המרחב הפתוח</p>
            <p className="text-primary-foreground/80 text-lg">
              עקבו אחרינו ברשתות
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-6 mb-8">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/9725586085521"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-all hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center text-primary-foreground/70 text-sm">
            <p>© {new Date().getFullYear()} המרחב הפתוח. כל הזכויות שמורות.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
