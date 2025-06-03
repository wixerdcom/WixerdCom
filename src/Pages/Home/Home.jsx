import HeroSection from "./HeroSection";
import About from "./About";
import Connection from "./Connection";
import Community from "./Community";
import Dept from "./Dept";


const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto relative">
      <HeroSection />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8">
          <Connection />
          <About />
          <Dept />
          <Community />
        </div>
      </div>
    </div>
  );
};

export default Home;
