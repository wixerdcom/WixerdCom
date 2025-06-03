import usericon from "../../../Assets/untilIcons/usericon.webp";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import logo from "../../../Assets/Logos/caro1.webp";

const AutoScrollTags = () => {
  const tags = [
    "#Software Build",
    "#Technology",
    "#Graphic Designing",
    "#Web Development",
    "#UI/UX",
    "#Branding",
    "#Cloud",
    "#AI",
    "#Mobile Apps",
    "#E-Commerce",
  ];

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const animationRef = useRef();

  useEffect(() => {
    const animate = () => {
      setActiveIndex((prev) => (prev + 1) % tags.length);
    };

    animationRef.current = setInterval(animate, 2000);
    return () => clearInterval(animationRef.current);
  }, [tags.length]);

  const getYPosition = (index) => {
    const tagHeight = 28;
    const offset = activeIndex * tagHeight;
    let position = (index * tagHeight - offset) % (tags.length * tagHeight);

    if (position < 0) {
      position += tags.length * tagHeight;
    }

    return position;
  };

  return (
    <div
      ref={containerRef}
      className="relative h-9 sm:h-11 overflow-hidden min-w-[120px] sm:min-w-[180px] ml-2"
    >
      {tags.map((tag, index) => (
        <motion.div
          key={index}
          className={`absolute left-0 right-0 text-center text-xs sm:text-sm font-medium ${
            index === activeIndex ? "text-gray-900 font-bold" : "text-gray-500"
          }`}
          initial={{ y: getYPosition(index), opacity: 0.7 }}
          animate={{
            y: getYPosition(index),
            opacity: index === activeIndex ? 1 : 0.7,
            scale: index === activeIndex ? 1.05 : 1,
          }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          style={{
            height: "28px",
            lineHeight: "28px",
          }}
        >
          {tag}
        </motion.div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/solutions", label: "Solutions" },
    { to: "/support", label: "Support" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed w-full top-0 left-0 z-50">
        <header
          className={`w-full bg-white/80 backdrop-blur-md transition-all duration-300 ${
            scrolled ? "shadow-md border-b border-gray-200" : ""
          }`}
        >
          <nav className="min-h-[80px] sm:min-h-[110px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="w-32 sm:w-44 md:w-56 object-contain"
                  loading="lazy"
                />
              </Link>
              <AutoScrollTags />
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-6 xl:gap-8">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `px-3 py-2 font-bold text-lg xl:text-xl ${
                        isActive
                          ? "text-red-700 border-b-4 border-red-700"
                          : "text-gray-700 hover:text-red-700"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* User icon - visible on all screens */}
            <div className="hidden lg:flex items-center gap-4 sm:gap-6 relative group">
              <div className="relative">
                <img
                  src={usericon}
                  alt="User"
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-200 shadow-md cursor-pointer transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-red-600 border-2 border-white rounded-full shadow-lg"></span>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 px-4 py-2 rounded-lg bg-white text-gray-800 text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 z-20 whitespace-nowrap border border-gray-200">
                <span className="block mb-1">
                  Apologies for inconvenience, our platform is still at beta
                  version, more updates are on the way.
                </span>
                <span className="block font-medium mt-1">Thanks! Wixerd Managing</span>
              </div>
            </div>
          </nav>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200">
              <ul className="flex flex-col py-3">
                {links.map((link) => (
                  <li key={link.to} className="border-b border-gray-100 last:border-0">
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block px-6 py-4 text-lg font-bold ${
                          isActive
                            ? "text-red-700 bg-red-50"
                            : "text-gray-700 hover:text-red-700 hover:bg-gray-50"
                        }`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                <li className="border-b border-gray-100 last:border-0">
                  <div className="flex items-center px-6 py-4 gap-4">
                    <img
                      src={usericon}
                      alt="User"
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 shadow-md"
                    />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Platform in beta version
                      </p>
                      <p className="text-sm font-medium">
                        Thanks! Wixerd Managing
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </header>
      </div>
      <div className="h-[80px] sm:h-[110px]"></div>
    </>
  );
};

export default Navbar;