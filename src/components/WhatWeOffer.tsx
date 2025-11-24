import sportRidingIcon from "@/assets/icons/sport-riding.png";
import horseRidingIcon from "@/assets/icons/horse-riding.png";
import heartHandIcon from "@/assets/icons/heart-hand.png";
import volunteeringIcon from "@/assets/icons/volunteering.png";
import rabbitIcon from "@/assets/icons/rabbit.png";
import dogIcon from "@/assets/icons/dog.png";
import therapyHorseIcon from "@/assets/icons/therapy-horse.png";
import sunIcon from "@/assets/icons/sun.png";
import livingTogetherIcon from "@/assets/icons/living-together.png";
import plantIcon from "@/assets/icons/plant.png";
import buddyIcon from "@/assets/icons/buddy.png";
import equalIcon from "@/assets/icons/equal.png";
import friendlyIcon from "@/assets/icons/friendly.png";
import drivingIcon from "@/assets/icons/driving.png";
import teamIcon from "@/assets/icons/team.png";
import shockedIcon from "@/assets/icons/shocked.png";

interface ServiceCard {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const WhatWeOffer = () => {
  const services: ServiceCard[] = [
    {
      title: 'תוכנית "חמכניה"',
      icon: <img src={livingTogetherIcon} alt="חמכניה" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: 'תוכנית "קהילה בצמיחה"',
      icon: <img src={plantIcon} alt="קהילה בצמיחה" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: "מרכז יום לבגירים על הספקטרום",
      icon: <img src={sunIcon} alt="מרכז יום" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: "רכיבה טיפולית",
      icon: <img src={therapyHorseIcon} alt="רכיבה טיפולית" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: "כלבנות טיפולית",
      icon: <img src={dogIcon} alt="כלבנות טיפולית" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: 'טיפול באמצעות בעלי חיים',
      icon: <img src={rabbitIcon} alt="טיפול בבעלי חיים" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: "קהומונה - שנת שירות בחווה",
      icon: <img src={volunteeringIcon} alt="קהומונה" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: "שירות לאומי מיוחד",
      icon: <img src={heartHandIcon} alt="שירות לאומי" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: "רכיבה ספורטיבית מתקדמת",
      icon: <img src={horseRidingIcon} alt="רכיבה ספורטיבית" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: "לימוד רכיבה",
      icon: <img src={sportRidingIcon} alt="לימוד רכיבה" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: "PTSD",
      icon: <img src={shockedIcon} alt="PTSD" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: "נוער בסיכון",
      icon: <img src={buddyIcon} alt="נוער בסיכון" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: "הכשרת קורס מדריכים",
      icon: <img src={drivingIcon} alt="הכשרת מדריכים" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: "קורס בנושא טראומה",
      icon: <img src={equalIcon} alt="קורס טראומה" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: "קורסי הכשרה למדריכים ומטפלים",
      icon: <img src={friendlyIcon} alt="קורסי הכשרה" className="w-16 h-16" />,
      link: "#"
    },
    {
      title: '"הרוכב הצעיר"',
      icon: <img src={teamIcon} alt="הרוכב הצעיר" className="w-16 h-16" />,
      link: "#"
    }
  ];

  return (
    <section id="what-we-offer" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-[128px] xl:px-[192px] 2xl:px-[256px]">
        <div className="animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold mb-4 text-primary text-center">
            מה תמצאו אצלנו
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-12">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="group bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center gap-4 border border-border/50"
              >
                <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
