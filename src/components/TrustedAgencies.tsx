import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Updated agency data with proper image paths
const agencies = [
  { id: 1, name: 'Creative Minds', logoLight: 'src/assets/LOGOS/CreativeMindsBlack.svg', logoDark: 'src/assets/LOGOS/CreativeMindsWhite.svg' },
  { id: 2, name: 'Digital Bridge', logoLight: 'src/assets/LOGOS/DigitalBridgeBlack.svg', logoDark: 'src/assets/LOGOS/DigitalBridgeWhite.svg' },
  { id: 3, name: 'Global Vision', logoLight: 'src/assets/LOGOS/GlobalVisionBlack.svg', logoDark: 'src/assets/LOGOS/GlobalVisionWhite.svg' },
  { id: 4, name: 'Urban Design', logoLight: 'src/assets/LOGOS/UrbanDesignBlack.svg', logoDark: 'src/assets/LOGOS/UrbanDesignWhite.svg' },
];

const TrustedAgencies = () => {
  const { theme } = useTheme();
  const { translations, dir } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % agencies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const calculatePosition = (index: number) => {
    const radius = isMobile ? 120 : 250; // Smaller radius for mobile
    const angleStep = (2 * Math.PI) / agencies.length;
    const currentAngle = (currentIndex * angleStep);
    const itemAngle = (index * angleStep) - currentAngle;
    
    // Adjust direction for RTL
    const directionMultiplier = dir === 'rtl' ? -1 : 1;
    
    return {
      x: Math.sin(itemAngle) * radius * directionMultiplier,
      z: Math.cos(itemAngle) * radius - radius,
      scale: isMobile 
        ? (Math.cos(itemAngle) * 0.3 + 0.7) // Less scale difference on mobile
        : (Math.cos(itemAngle) * 0.5 + 0.5),
      opacity: Math.cos(itemAngle) * 0.5 + 0.5,
    };
  };

  return (
    <section className="py-10 md:py-20 relative overflow-hidden">
      {/* Blurred Background */}
      <div className="absolute inset-0 backdrop-blur-xl bg-gray-50/30 dark:bg-gray-900/30" />
      
      <div className="container-custom relative z-20">
        {/* Section Title */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {translations.trustedAgencies.title}
        </motion.h2>

        {/* 3D Carousel Container */}
        <div 
          className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[400px] perspective-1000"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {agencies.map((agency, index) => {
              const position = calculatePosition(index);
              return (
                <motion.div
                  key={agency.id}
                  className="absolute"
                  animate={{
                    x: position.x,
                    z: position.z,
                    scale: position.scale,
                    opacity: position.opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 1,
                  }}
                  style={{
                    zIndex: Math.round(position.scale * 100),
                    transform: `translateX(-50%) translateZ(${position.z}px)`,
                  }}
                >
                  <img
                    src={theme === 'dark' ? agency.logoDark : agency.logoLight}
                    alt={agency.name}
                    className={`h-24 md:h-40 w-auto object-contain transition-all duration-300
                      ${index === currentIndex ? 'filter-none' : 'blur-[1px]'}
                      ${isMobile ? 'max-w-[160px]' : 'max-w-[280px]'}`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
            {agencies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPaused(true);
                }}
                className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-foreground w-4 md:w-8' 
                    : 'bg-muted'
                }`}
                aria-label={`${translations.trustedAgencies.goToSlide} ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Description */}
        <motion.p 
          className="text-center text-muted-foreground max-w-2xl mx-auto mt-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {translations.trustedAgencies.description}
        </motion.p>
      </div>
    </section>
  );
};

export default TrustedAgencies;