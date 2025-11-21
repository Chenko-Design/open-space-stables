import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#003820] border-b border-accent/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <img 
            src={logo} 
            alt="המרחב הפתוח - לוגו החווה" 
            className="h-16 md:h-20 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
