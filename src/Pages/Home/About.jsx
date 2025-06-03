import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import caro1 from "../../../Assets/Logos/caro1.webp";
import caro2 from "../../../Assets/Logos/caro2.webp";
import caro3 from "../../../Assets/Logos/caro3.webp";
import caro4 from "../../../Assets/Logos/caro4.webp";
import caro5 from "../../../Assets/Logos/caro5.webp";
import caro6 from "../../../Assets/Logos/caro6.webp";
import caro7 from "../../../Assets/Logos/caro7.webp";
import robo from "../../../Assets/Windroid/wlcmWindroid.webp";
import companyProfile from "../../../Assets/Wixerd company profie.pdf";

const logos = [caro1, caro2, caro3, caro4, caro5, caro6, caro7];

const About = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % logos.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  overflow-hidden">
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
          About Wixerd
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="w-full bg-[#f8e9e9] rounded-3xl aspect-video flex items-center justify-center relative">
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={logos[current]}
              alt={`Logo ${current + 1}`}
              className="h-20 w-auto object-contain transition-all duration-500"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {logos.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === idx ? "bg-red-800" : "bg-red-300"}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to logo ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-12 sm:mt-0">
          <div className="space-y-4 sm:space-y-6 pr-20 sm:pr-24 md:pr-28 lg:pr-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              Welcome, to wixerd.com
            </h2>
            <p className="text-lg sm:text-xl text-black">
              Digital world with ocean of excitements.
            </p>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              We are Innovative digital content creators aiming to bring innovation to software technologies along that introducing huge variety of taste of Art into life of this modern days. Our focus is based on bringing innovation to everyday lives of people, creating newer and efficient technologies which can grasp the reality of individuality evolving our everyday personality into a better experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
              <a
                href={companyProfile}
                download="wixerd-company-profile.pdf"
                className="w-full sm:w-auto text-center px-6 sm:px-8 py-2.5 border-2 border-red-900 text-red-900 rounded-lg hover:bg-red-900 hover:text-white transition-colors font-medium"
              >
                Profile
              </a>
            </div>
          </div>

          <div className="absolute -top-16 sm:-top-4 md:top-0 right-0 pointer-events-none">
            <img
              src={robo}
              alt="Robot"
              className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;