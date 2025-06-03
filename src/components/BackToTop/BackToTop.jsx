import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BackToTop = ({ scrollContainerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      if (scrollContainer.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [scrollContainerRef]);

  const scrollToTop = () => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed bottom-6 right-6 bg-red-900 hover:bg-red-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-[9999]"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
      aria-label="Back to top"
    >
      <FaArrowUp size={20} />
    </motion.button>
  );
};

export default BackToTop;