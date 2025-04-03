import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import ScrollProgress from '@/components/ui/scroll-progress';
import LazyLoad from '../components/LazyLoad';
import TrustedAgencies from '@/components/TrustedAgencies';
import { useLanguage } from '@/contexts/LanguageContext';

// Sample project data with proper image imports
const projectsData = [
  { id: 1, title: "Nebula Networks", image: "public/SelectedProjects/NebulaNetworks.png", category: "Brand Identity" },
  { id: 2, title: "Sahara Solar", image: "public/SelectedProjects/SaharaSolar.png", category: "Brand Identity" },
  { id: 3, title: "Desert Oasis", image: "public/SelectedProjects/DesertOasis.png", category: "Visual Identity" },
  { id: 4, title: "Urban Zenith", image: "public/SelectedProjects/UrbanZenith.png", category: "Logo Design" },
  { id: 5, title: "Luminous Legacy", image: "public/SelectedProjects/LuminousLegacy.png", category: "Visual Identity" },
  { id: 6, title: "Echo Element", image: "public/SelectedProjects/EchoElement.png", category: "Logo Design" },
];

const Home: React.FC = () => {
  const { translations, language } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      {/* Hero Section */}
      <section className="px-4 mb-16 mt-32">
        <LazyLoad>
          <motion.div 
            className="flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-xl md:text-2xl mb-4 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {translations.home.heroTitle}
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold max-w-5xl mx-auto text-center leading-tight md:leading-tight relative"
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative inline-block">
                {translations.home.heroName}
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <Link 
                to="/selected-work" 
                className="px-8 py-3 rounded-full border border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                {translations.home.exploreButton}
              </Link>
            </motion.div>
          </motion.div>
        </LazyLoad>
      </section>
      
      {/* Featured Projects - Grid layout */}
      <section className="mb-32">
        <LazyLoad>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1"> 
            {projectsData.map((project, index) => (
              <Link to={`/project/${project.id}`} key={project.id} className="block overflow-hidden">
                <motion.div
                  className="aspect-[1/1] relative"
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="w-full h-full flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white">
                      <h3 className="text-xl font-medium">{project.title}</h3>
                      <p className="text-sm opacity-80">{project.category}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </div>
        </LazyLoad>
      </section>

      {/* Trusted Agencies component */}
      <TrustedAgencies />

      {/* Blueprint Section */}
      <section className="mb-32 px-4 bg-secondary py-32">
        <LazyLoad>
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2 
                  className="text-4xl font-bold mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {translations.home.processTitle}
                </motion.h2>
                <motion.p 
                  className="text-lg text-muted-foreground mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {translations.home.processDescription}
                </motion.p>
              </div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="public/LOGOS/LOGOBlueprint.png" 
                  alt="Logo Design Blueprint" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </LazyLoad>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <LazyLoad>
          <div className="container-custom">
            <motion.div 
              className="flex justify-center mb-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold">
                {translations.home.testimonialsTitle}
              </h2>
            </motion.div>
            <Testimonials />
          </div>
        </LazyLoad>
      </section>
    </div>
  );
};

export default Home;