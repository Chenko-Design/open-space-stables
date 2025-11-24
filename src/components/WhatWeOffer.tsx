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
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ServiceCard {
  title: string | React.ReactNode;
  icon: React.ReactNode;
}

const WhatWeOffer = () => {
  const { ref, isVisible } = useScrollReveal();
  
  const services: ServiceCard[] = [
    // שורה 1
    {
      title: "רכיבה טיפולית",
      icon: <img src={therapyHorseIcon} alt="רכיבה טיפולית" className="w-16 h-16" />
    },
    {
      title: (
        <>
          מרכז יום לבוגרים
          <br />
          על הספקטרום
        </>
      ),
      icon: <img src={sunIcon} alt="מרכז יום" className="w-16 h-16" />
    },
    {
      title: (
        <>
          תוכנית
          <br />
          "קהילה בצמיחה"
        </>
      ),
      icon: <img src={plantIcon} alt="קהילה בצמיחה" className="w-16 h-16" />
    },
    {
      title: (
        <>
          תוכנית
          <br />
          "המכינה"
        </>
      ),
      icon: <img src={livingTogetherIcon} alt="חמכניה" className="w-16 h-16" />
    },
    // שורה 2 - הפוך
    {
      title: "שירות לאומי מיוחד",
      icon: <img src={heartHandIcon} alt="שירות לאומי" className="w-16 h-16" />
    },
    {
      title: (
        <>
          קומונה - שנת
          <br />
          שירות בחווה
        </>
      ),
      icon: <img src={volunteeringIcon} alt="קהומונה" className="w-16 h-16" />
    },
    {
      title: (
        <>
          טיפול באמצעות
          <br />
          בעלי חיים
        </>
      ),
      icon: <img src={rabbitIcon} alt="טיפול בבעלי חיים" className="w-16 h-16" />
    },
    {
      title: "רכיבה ספורטיבית מתקדמת",
      icon: <img src={horseRidingIcon} alt="רכיבה ספורטיבית" className="w-16 h-16" />
    },
    // שורה 3 - הפוך
    {
      title: "PTSD",
      icon: <img src={shockedIcon} alt="PTSD" className="w-16 h-16" />
    },
    {
      title: "לימוד רכיבה",
      icon: <img src={sportRidingIcon} alt="לימוד רכיבה" className="w-16 h-16" />
    },
    {
      title: "נוער בסיכון",
      icon: <img src={teamIcon} alt="נוער בסיכון" className="w-16 h-16" />
    },
    {
      title: "כלבנות טיפולית",
      icon: <img src={dogIcon} alt="כלבנות טיפולית" className="w-16 h-16" />
    },
    // שורה 4 - הפוך
    {
      title: '"הרוכב הצעיר"',
      icon: <img src={buddyIcon} alt="הרוכב הצעיר" className="w-16 h-16" />
    },
    {
      title: "קורסי הכשרה למדריכים ומטפלים",
      icon: <img src={friendlyIcon} alt="קורסי הכשרה" className="w-16 h-16" />
    },
    {
      title: (
        <>
          קורס בנושא
          <br />
          טראומה
        </>
      ),
      icon: <img src={equalIcon} alt="קורס טראומה" className="w-16 h-16" />
    },
    {
      title: (
        <>
          הכשרת קורס
          <br />
          מדריכים
        </>
      ),
      icon: <img src={drivingIcon} alt="הכשרת מדריכים" className="w-16 h-16" />
    }
  ];

  return (
    <section ref={ref} id="what-we-offer" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-[128px] xl:px-[192px] 2xl:px-[256px]">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-5xl md:text-6xl font-handwriting font-bold mb-4 text-primary text-center">
            מה תמצאו אצלנו
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-12" dir="rtl">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center gap-4 border border-border/50 h-[180px]"
              >
                <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
