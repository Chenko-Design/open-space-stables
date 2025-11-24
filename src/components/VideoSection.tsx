import { useScrollReveal } from "@/hooks/useScrollReveal";

const VideoSection = () => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-[128px] xl:px-[192px] 2xl:px-[256px]">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="md:flex md:justify-center">
            <div className="md:w-[800px]">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-3xl shadow-2xl"
                  src="https://www.youtube.com/embed/6JDAtAd6myc?autoplay=1&mute=1&loop=1&playlist=6JDAtAd6myc&controls=0&modestbranding=1"
                  title="סרטון המרחב הפתוח"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
