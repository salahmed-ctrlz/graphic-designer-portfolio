import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, Instagram, X, Globe, Languages } from 'lucide-react';
import { 
  CustomCursor, 
  MobileMenu, 
  InfiniteCarousel,
  Footer
} from '@/components';
import ScrollIndicator from '@/components/ScrollIndicator';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Import logo images with correct paths
// Note: Adjust these paths based on your actual file structure
import logoBlackImg from '../components/LOGOS/TariqLogoBlack.svg';
import logoWhiteImg from '../components/LOGOS/TariqLogoWhite.svg';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, translations, dir, toggleLanguage } = useLanguage();
  const isRTL = dir === 'rtl';
  const [logoLoaded, setLogoLoaded] = useState(false);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Determine which logo to use based on theme
  const logoSrc = theme === 'dark' ? logoWhiteImg : logoBlackImg;

  // Handle logo loading error
  const handleLogoError = () => {
    console.error('Failed to load logo image');
    // You could set a state here to display a fallback
  };

  // Handle logo loading success
  const handleLogoLoad = () => {
    setLogoLoaded(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" dir={dir}>
      <CustomCursor />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <ScrollIndicator />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-[#EBEBEB] dark:border-gray-800">
        <div className="container-custom">
          <div className="flex items-center justify-between h-[72px] mt-2.5">
            {/* Logo - Left */}
            <Link to="/" className="flex items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: logoLoaded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="h-20 w-auto flex items-center justify-center"
              >
                <img 
                  src={logoSrc} 
                  alt="Tariq Al Amin Logo" 
                  className="h-20 w-auto max-w-[220px] object-contain"
                  onError={handleLogoError}
                  onLoad={handleLogoLoad}
                />
              </motion.div>
              
              {/* Fallback if logo doesn't load */}
              {!logoLoaded && (
                <span className="text-xl font-bold">Tariq Al Amin</span>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to="/" 
                className={`text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  location.pathname === '/' ? 'after:scale-x-100' : ''
                }`}
                onClick={scrollToTop}
              >
                {translations.nav.home}
              </Link>
              <Link 
                to="/selected-work"
                className={`text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  location.pathname === '/selected-work' ? 'after:scale-x-100' : ''
                }`}
                onClick={scrollToTop}
              >
                {translations.nav.selectedWork}
              </Link>
              <Link 
                to="/logos"
                className={`text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  location.pathname === '/logos' ? 'after:scale-x-100' : ''
                }`}
                onClick={scrollToTop}
              >
                {translations.nav.logos}
              </Link>
              <Link 
                to="/about"
                className={`text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  location.pathname === '/about' ? 'after:scale-x-100' : ''
                }`}
                onClick={scrollToTop}
              >
                {translations.nav.about}
              </Link>
              <Link 
                to="/contact"
                className={`text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  location.pathname === '/contact' ? 'after:scale-x-100' : ''
                }`}
                onClick={scrollToTop}
              >
                {translations.nav.contact}
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              {/* Social Icons */}
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 flex items-center"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 flex items-center"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                  </svg>
                </a>
              </div>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="p-2 hover:opacity-70 transition-all hover:scale-110 flex items-center gap-1"
                aria-label="Toggle language"
              >
                <Languages className="w-5 h-5" />
                <span className="text-sm font-medium">
                </span>
              </button>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <label className="burger">
                  <input 
                    type="checkbox" 
                    checked={isMobileMenuOpen}
                    onChange={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  />
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>

              {/* Theme Toggle */}
              <label className="switch relative inline-block w-10 h-[24px] cursor-pointer">
                <span className="sun absolute top-[4px] left-[24px] z-[1]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 animate-rotate">
                    <g fill="#ffd43b">
                      <circle r="5" cy="12" cx="12"></circle>
                      <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                    </g>
                  </svg>
                </span>
                <span className="moon absolute top-[4px] left-[4px] z-[1]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 fill-[#73C0FC] animate-tilt">
                    <path d="M223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                  </svg>
                </span>
                <input 
                  type="checkbox" 
                  className="opacity-0 w-0 h-0"
                  checked={theme === 'dark'}
                  onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label="Toggle theme"
                />
                <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#73C0FC] transition-all duration-400 rounded-[20px] before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:rounded-[15px] before:left-[2px] before:bottom-[2px] before:z-[2] before:bg-[#e8e8e8] before:transition-all before:duration-400 dark:bg-[#183153] dark:before:transform dark:before:translate-x-[18px]"></span>
              </label>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-12">
        {children}
      </main>

      {/* Infinite Carousel */}
      <div className="border-t border-[#EBEBEB] dark:border-gray-800">
        <InfiniteCarousel speed={20} className="py-6">
          <div className="flex items-center gap-4 px-4">
            <span className="text-2xl font-medium whitespace-nowrap">{translations.footer.marqueeText}</span>
            <span className="text-2xl">•</span>
          </div>
        </InfiniteCarousel>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;