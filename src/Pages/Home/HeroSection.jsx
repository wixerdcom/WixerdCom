import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion, AnimatePresence } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";
import ThinkHead from "../../../Assets/Windroid/thinkHead.webp";
import SofNova from "../../../Assets/Logos/sfonova logo.webp";
import Artistry from "../../../Assets/Logos/artistry logo.webp";
import Wixact from "../../../assets/Logos/wixact logo.webp";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShouldReduceMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  const slides = [
    {
      id: 0,
      type: "welcome",
    },
    {
      id: 1,
      title: "SofNova",
      description: "Mega library filled with inspiring and creative wonders, by Wizard",
      linkText: "link to section",
      icon: SofNova,
    },
    {
      id: 2,
      title: "Artistry",
      description: "Expertly building virtuals for you, by Wizard",
      linkText: "link to section",
      icon: Artistry,
    },
    {
      id: 3,
      title: "Wixact",
      description: "Complete Social media and Ads solution for you, by Wizard",
      linkText: "link to section",
      icon: Wixact,
    },
  ];

  const services = [
    {
      id: 1,
      title: "SofNova",
      subtitle: "Digital space for you with creativity & professionalism",
      icon: SofNova,
      hasText: true,
    },
    {
      id: 2,
      title: "Artistry",
      subtitle: "Aspiration to innovate and bring the exploration to arts",
      icon: Artistry,
      hasText: true,
    },
    {
      id: 3,
      title: "Wixact",
      subtitle: "Complete Social media and Ads solution for you, by Wizard",
      icon: Wixact,
      hasText: true,
    },
  ];

  useEffect(() => {
    let interval;
    if (isAutoRotating) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoRotating, slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const handleServiceClick = (id) => {
    setCurrentSlide(id);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  return (
    <div className="overflow-hidden  md:pt-5">
      <section className="container mx-auto px-5 sm:px-6 lg:px-8 mt-4 sm:mt-0">
        <motion.div
          className={`relative h-[85vh] sm:h-[75vh] md:h-[60vh] lg:h-[50vh] max-h-[800px] min-h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg ${
            slides[currentSlide].title === "Artistry"
              ? "bg-[#0e1733]"
              : slides[currentSlide].title === "SofNova"
              ? "bg-[#a3905d]"
              : slides[currentSlide].title === "Wixact"
              ? "bg-[#341731]"
              : "bg-gradient-to-r from-[#0d0b1f] via-[#311010] to-[#5a1a1a]"
          }`}
          initial={shouldReduceMotion ? {} : { opacity: 0.9, scale: 0.98 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
          transition={shouldReduceMotion ? {} : { duration: 0.6, ease: "easeOut" }}
          onHoverStart={() => setIsAutoRotating(false)}
          onHoverEnd={() => setIsAutoRotating(true)}
        >
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-12 z-10 py-4 sm:py-8"> 
            <AnimatePresence mode="wait">
              {slides[currentSlide].type === "welcome" ? (
                <motion.div
                  key="welcome"
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? {} : { opacity: 0, y: -20 }}
                  transition={shouldReduceMotion ? {} : { duration: 0.5 }}
                  className="w-full max-w-4xl text-left px-4 sm:px-8 py-4 sm:py-6"
                >
                  <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4">
                    Welcome to <span className="text-red-600">Wixard</span>
                  </h1>
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mb-6 sm:mb-8">
                    Your Gateway to Digital Excellence. Unlock limitless potential with our
                    cutting-edge solutions designed for businesses and creatives alike.
                  </p>
                  <button
                    className="px-8 py-3 sm:px-8 sm:py-3 text-base sm:text-base font-medium bg-red-600 hover:bg-red-500 text-white rounded-md transition-all duration-300 hover:scale-105"
                    onClick={() => navigate("/solutions")}
                  >
                    Explore Features
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={slides[currentSlide].id}
                  className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 px-4 sm:px-6 h-full"
                >
                  <div className="flex-1 flex flex-col justify-center text-left py-4 md:py-0 space-y-4">
                    {slides[currentSlide].title === "SofNova" && (
                      <>
                        <span className="text-white text-lg sm:text-xl font-semibold">Wixard Developer Features</span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                          Build<br />
                          professional<br />
                          Websites
                        </h2>
                        <div className="space-y-2">
                          <p className="text-base sm:text-lg text-white font-medium">
                            We are building professional websites over 15+ categories.
                          </p>
                          <p className="text-base sm:text-lg text-white font-medium">
                            Get started to make your digital Presence
                          </p>
                        </div>
                        <button
                          className="bg-white text-black text-lg sm:text-xl font-medium rounded-xl px-8 py-3 w-fit hover:bg-gray-100 transition mt-4"
                          onClick={() => navigate("/solutions/SofNova")}
                        >
                          Explore
                        </button>
                      </>
                    )}
                    {slides[currentSlide].title === "Artistry" && (
                      <>
                        <span className="text-white text-lg sm:text-xl font-semibold">Wixard Creative Features</span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                          Stunning<br />
                          Visuals &<br />
                          Graphics
                        </h2>
                        <div className="space-y-2">
                          <p className="text-base sm:text-lg text-white font-medium">
                            Elevate your brand with unique, creative designs.
                          </p>
                          <p className="text-base sm:text-lg text-white font-medium">
                            Unlock your imagination with Artistry by Wizard.
                          </p>
                        </div>
                        <button
                          className="bg-white text-black text-lg sm:text-xl font-medium rounded-xl px-8 py-3 w-fit hover:bg-gray-100 transition mt-4"
                          onClick={() => navigate("/solutions/Artistry")}
                        >
                          Explore
                        </button>
                      </>
                    )}
                    {slides[currentSlide].title === "Wixact" && (
                      <>
                        <span className="text-white text-lg sm:text-xl font-semibold">Wixard Marketing Suite</span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                          Grow Your<br />
                          Social<br />
                          Presence
                        </h2>
                        <div className="space-y-2">
                          <p className="text-base sm:text-lg text-white font-medium">
                            Complete social media and ads solution.
                          </p>
                          <p className="text-base sm:text-lg text-white font-medium">
                            Reach more customers with Wixact by Wizard.
                          </p>
                        </div>
                        <button
                          className="bg-white text-black text-lg sm:text-xl font-medium rounded-xl px-8 py-3 w-fit hover:bg-gray-100 transition mt-4"
                          onClick={() => navigate("/solutions/Wixact")}
                        >
                          Explore
                        </button>
                      </>
                    )}
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center h-full">
                    <div className="bg-white rounded-full shadow-lg flex items-center justify-center p-4 sm:p-6 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]">
                      <LazyLoadImage
                        src={slides[currentSlide].icon}
                        alt={slides[currentSlide].title}
                        effect="opacity"
                        className="w-full h-full object-contain"
                        style={{ filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.10))" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index}`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-5 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full">
          {services.map((service, index) => {
            const isActive = service.id === currentSlide;
            let activeBg = "bg-white text-[#8a3a3a]";
            if (service.title === "Artistry") activeBg = "bg-[#0e1733] text-white border-[#0e1733]";
            if (service.title === "SofNova") activeBg = "bg-[#a3905d] text-white border-[#a3905d]";
            if (service.title === "Wixact") activeBg = "bg-[#341731] text-white border-[#341731]";
            
            return (
              <motion.div
                key={service.title}
                className={`
                  flex flex-col justify-center items-center
                  rounded-xl sm:rounded-2xl p-5 sm:p-6 cursor-pointer
                  transition-all duration-300 h-full
                  ${isActive
                    ? `${activeBg} shadow-lg scale-[1.02] sm:scale-[1.04] border-2`
                    : "bg-[#6B2B2B] text-white hover:bg-[#7c3232]"}
                `}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? {} : { delay: index * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: isActive ? 0 : -5 }}
                onClick={() => handleServiceClick(service.id)}
                style={{ minHeight: "100%" }}
              >
                <div className="flex flex-col items-center w-full h-full">
                  <div className="flex items-center justify-center mb-2 flex-shrink-0">
                    <span className={`font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-wide uppercase transition-colors duration-300`}>
                      {service.title}
                    </span>
                  </div>
                  <div className="text-center flex-1 flex flex-col justify-center w-full">
                    <p className={`text-xs sm:text-sm mt-1 font-medium transition-colors duration-300`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between rounded-2xl bg-gradient-to-r from-[#601a19] to-[#8a2323] px-6 py-6 sm:px-8 sm:py-8 my-8">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-7xl">
              Let's get scheduled!
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <button
              className="bg-white text-[#8a2323] font-bold text-base sm:text-lg px-8 py-3 rounded-xl shadow-lg transition-all hover:bg-gray-100 hover:scale-105 whitespace-nowrap"
              onClick={() => navigate("/support#schedule")}
            >
              Book an appointment?
            </button>

            <div className="relative flex items-end h-[90px] w-[130px] min-w-[110px]">
              <img
                src={ThinkHead}
                alt="Thinking character"
                className="absolute top-9 bottom-0 right-0 w-[120px] h-[100px] object-contain rounded-b-[2rem] rounded-tl-[2rem] z-10" 
                loading="lazy"
                draggable={false}
              />
              <span className="absolute right-7 top-3 text-[#8a2323] text-3xl font-extrabold select-none leading-none">!</span>
              <span className="absolute right-6 top-10 w-2 h-2 bg-white rounded-full"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;