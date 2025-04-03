import React from 'react'
import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer, imageRevealVariant, textRevealVariant } from '@/lib/animations'
import ScrollProgress from '@/components/ui/scroll-progress';
import { useLanguage } from '@/contexts/LanguageContext';

// Import icons for design tools
import { 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiAdobeindesign, 
  SiAdobeaftereffects, 
  SiFigma, 
  SiSketch, 
  SiInvision, 
  SiCanva, 
  SiAdobexd
} from 'react-icons/si';

const About: React.FC = () => {
  const { translations } = useLanguage();
  
  // Design tools with icons, names, and colors
  const designTools = [
    { 
      name: 'Photoshop', 
      icon: <SiAdobephotoshop />, 
      color: '#31A8FF',
      hoverBackground: 'rgba(49, 168, 255, 0.1)'
    },
    { 
      name: 'Illustrator', 
      icon: <SiAdobeillustrator />, 
      color: '#FF9A00',
      hoverBackground: 'rgba(255, 154, 0, 0.1)'
    },
    { 
      name: 'InDesign', 
      icon: <SiAdobeindesign />, 
      color: '#FF3366',
      hoverBackground: 'rgba(255, 51, 102, 0.1)'
    },
    { 
      name: 'After Effects', 
      icon: <SiAdobeaftereffects />, 
      color: '#9999FF',
      hoverBackground: 'rgba(153, 153, 255, 0.1)'
    },
    { 
      name: 'Figma', 
      icon: <SiFigma />, 
      color: '#F24E1E',
      hoverBackground: 'rgba(242, 78, 30, 0.1)'
    },
    { 
      name: 'Sketch', 
      icon: <SiSketch />, 
      color: '#F7B500',
      hoverBackground: 'rgba(247, 181, 0, 0.1)'
    },
    { 
      name: 'InVision', 
      icon: <SiInvision />, 
      color: '#FF3366',
      hoverBackground: 'rgba(255, 51, 102, 0.1)'
    },
    { 
      name: 'Adobe XD', 
      icon: <SiAdobexd />, 
      color: '#FF61F6',
      hoverBackground: 'rgba(255, 97, 246, 0.1)'
    },
    { 
      name: 'Canva', 
      icon: <SiCanva />, 
      color: '#00C4CC',
      hoverBackground: 'rgba(0, 196, 204, 0.1)'
    }
  ];
  
  return (
    <motion.div 
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <ScrollProgress />
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            variants={textRevealVariant}
            className="overflow-hidden"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {translations.about.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Passionate about creating meaningful visual identities that tell compelling stories.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Portrait Image */}
            <motion.div
              variants={imageRevealVariant}
              className="relative lg:sticky lg:top-32 w-full aspect-[2/3] max-w-xl mx-auto"
            >
              <div className="relative w-full h-full group">
                <img
                  src="src/assets/Portrait/AboutMePortrait.png"
                  alt={translations.about.portraitAlt}
                  className="w-full h-full object-cover rounded-lg transition-all duration-750 grayscale-[0.7] group-hover:grayscale-0 group-hover:brightness-110"
                  style={{ 
                    filter: 'contrast(1.1) sepia(0.2) brightness(0.95) hue-rotate(-5deg)',
                    transition: 'all 0.7s ease-in-out'
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg mix-blend-overlay"
                  whileHover={{ 
                    backgroundColor: ['rgba(0,0,0,0.15)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.15)'],
                    transition: { duration: 2.5, repeat: Infinity }
                  }}
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-700" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div variants={fadeUpVariant}>
                <h2 className="text-3xl font-semibold mb-5 tracking-tight relative inline-block">
                  {translations.about.backgroundTitle}
                  <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {translations.about.backgroundText}
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariant}>
                <h2 className="text-3xl font-semibold mb-5 tracking-tight relative inline-block">
                  {translations.about.philosophyTitle}
                  <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {translations.about.philosophyText}
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariant}>
                <h2 className="text-3xl font-semibold mb-5 tracking-tight relative inline-block">
                  {translations.about.processTitle}
                  <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {translations.about.processText}
                </p>
              </motion.div>

              {/* Tools Section */}
              <motion.div variants={fadeUpVariant}>
                <h2 className="text-3xl font-semibold mb-5 tracking-tight relative inline-block">
                  Tools & Software
                  <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-6">
                  {designTools.map((tool, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center justify-center p-4 rounded-lg border border-border transition-all duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: tool.hoverBackground,
                        borderColor: tool.color,
                        y: -5
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="text-3xl md:text-4xl mb-2" style={{ color: tool.color }}>
                        {tool.icon}
                      </div>
                      <span className="text-sm font-medium text-center">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUpVariant}>
                <h2 className="text-3xl font-semibold mb-5 tracking-tight relative inline-block">
                  {translations.about.servicesTitle}
                  <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-lg">
                  {translations.about.services.map((service: string, index: number) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer>
      </footer>
    </motion.div>
  )
}

export default About