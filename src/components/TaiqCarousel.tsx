import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Project data for carousel
const carouselProjects = [
  { id: 1, title: "Nebula Networks", image: "/SelectedProjects/NebulaNetworks.png", category: "Brand Identity" },
  { id: 2, title: "Sahara Solar", image: "/SelectedProjects/SaharaSolar.png", category: "Brand Identity" },
  { id: 3, title: "Desert Oasis", image: "/SelectedProjects/DesertOasis.png", category: "Visual Identity" },
  { id: 4, title: "Urban Zenith", image: "/SelectedProjects/UrbanZenith.png", category: "Logo Design" },
  { id: 5, title: "Luminous Legacy", image: "/SelectedProjects/LuminousLegacy.png", category: "Visual Identity" },
  { id: 6, title: "Echo Element", image: "/SelectedProjects/EchoElement.png", category: "Logo Design" },
];

const TariqCarousel: React.FC = () => {
  const { dir } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselProjects.length);
      }, 4000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselProjects.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselProjects.length) % carouselProjects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-[50vh] md:h-[70vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <img
                src={carouselProjects[currentIndex].image}
                alt={carouselProjects[currentIndex].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-4xl md:text-6xl font-bold mb-4 text-center"
                >
                  {carouselProjects[currentIndex].title}
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-xl opacity-80"
                >
                  {carouselProjects[currentIndex].category}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {carouselProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        {dir === 'rtl' ? '→' : '←'}
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        {dir === 'rtl' ? '←' : '→'}
      </button>
    </div>
  );
};

export default TariqCarousel;