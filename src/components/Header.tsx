import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const menuItems = [
    { id: "about", label: "מי אנחנו" },
    { id: "founder", label: "דר' עופר קומרובסקי" },
    { id: "association", label: "עמותת גלאופ" },
    { id: "what-we-offer", label: "הפעילויות שלנו" },
    { id: "contact", label: "צור קשר" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#003820] border-b border-accent/20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="text-white hover:text-accent transition-colors p-2 hover:bg-white/10 rounded-lg"
                aria-label="תפריט"
              >
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-right text-2xl font-display text-primary">
                  תפריט
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-right text-xl font-display text-foreground hover:text-accent transition-colors py-3 px-4 hover:bg-accent/10 rounded-lg"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>

          <img 
            src={logo} 
            alt="המרחב הפתוח - לוגו החווה" 
            className="h-20 md:h-24 w-auto mx-auto"
          />

          <div className="w-12" />
        </div>
      </div>
    </header>
  );
};

export default Header;
