import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  const menuItems = [
    { id: "about", label: "מי אנחנו", type: "scroll" as const },
    { id: "founder", label: "דר' עופר קומרובסקי", type: "scroll" as const },
    { id: "association", label: "עמותת גלאופ", type: "scroll" as const },
    { id: "what-we-offer", label: "הפעילויות שלנו", type: "scroll" as const },
    { id: "contact", label: "צור קשר", type: "scroll" as const },
    { id: "accessibility", label: "הצהרת נגישות", type: "link" as const, path: "/accessibility" },
    { id: "privacy", label: "מדיניות פרטיות", type: "link" as const, path: "/privacy" },
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
                      {item.type === "link" ? (
                        <Link
                          to={item.path!}
                          onClick={() => setIsOpen(false)}
                          className="block w-full text-right text-xl font-display text-foreground hover:text-accent transition-colors py-3 px-4 hover:bg-accent/10 rounded-lg"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="w-full text-right text-xl font-display text-foreground hover:text-accent transition-colors py-3 px-4 hover:bg-accent/10 rounded-lg"
                        >
                          {item.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" onClick={handleLogoClick} className="mx-auto">
            <img 
              src={logo} 
              alt="המרחב הפתוח - לוגו החווה" 
              className="h-20 md:h-24 w-auto hover:opacity-80 transition-opacity cursor-pointer"
            />
          </Link>

          <div className="w-12" />
        </div>
      </div>
    </header>
  );
};

export default Header;
