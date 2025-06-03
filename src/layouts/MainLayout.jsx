import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
import BackToTop from '../components/BackToTop/BackToTop';

const MainLayout = () => {
  const location = useLocation();
  const scrollContainerRef = useRef(null);

  return (
      <div className="relative h-screen overflow-auto" ref={scrollContainerRef}>
        <Navbar />
        <div className="min-h-screen pt-[7px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
        <Footer />
        <BackToTop scrollContainerRef={scrollContainerRef} />
      </div>
  );
};

export default MainLayout;