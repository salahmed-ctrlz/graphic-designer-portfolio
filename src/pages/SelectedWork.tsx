import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollProgress from '@/components/ui/scroll-progress';
import { useLanguage } from '@/contexts/LanguageContext';

// Extended project data with case studies - these will be translated through the language context
const projectsData = [
  {
    id: 1,
    title: "Nebula Networks",
    subtitle: "Communications Startup",
    category: "Brand Identity",
    year: "2024",
    client: "Nebula Networks",
    services: ["Brand Strategy", "Visual Identity", "Logo Design"],
    image: "src/assets/SelectedProjects/NebulaNetworks.png",
    description: "A futuristic brand identity for a cutting-edge communications startup.",
    challenge: "Create a brand identity that evokes cosmic imagery and interconnected digital networks.",
    solution: "Developed a design that reflects innovation and the vastness of the digital universe.",
    impact: "Increased brand recognition and customer engagement by 45% within the first quarter.",
  },
  {
    id: 2,
    title: "Sahara Solar",
    subtitle: "Renewable Energy",
    category: "Brand Identity",
    year: "2024",
    client: "Sahara Solar",
    services: ["Brand Strategy", "Visual Identity", "Website Design"],
    image: "src/assets/SelectedProjects/SaharaSolar.png",
    description: "A dynamic visual identity for a renewable energy company.",
    challenge: "Create a brand that blends modern minimalism with warm, desert-inspired tones.",
    solution: "Developed a visual identity that captures the essence of sustainable energy in a sun-soaked landscape.",
    impact: "Achieved a 60% increase in client acquisition within the first six months.",
  },
  {
    id: 3,
    title: "Desert Oasis",
    subtitle: "Luxury Boutique Hotel",
    category: "Visual Identity",
    year: "2024",
    client: "Desert Oasis Resorts",
    services: ["Brand Identity", "Visual System", "Brand Guidelines"],
    image: "src/assets/SelectedProjects/DesertOasis.png",
    description: "An inviting and sophisticated visual identity for a luxury boutique hotel set in the desert.",
    challenge: "Create a brand that merges contemporary aesthetics with traditional Arabian elegance.",
    solution: "Designed a visual identity that evokes a serene, rejuvenating escape.",
    impact: "Bookings increased by 75% following the rebrand launch.",
  },
  {
    id: 4,
    title: "Urban Zenith",
    subtitle: "Architecture Firm",
    category: "Logo Design",
    year: "2024",
    client: "Urban Zenith Architects",
    services: ["Logo Design", "Brand Identity", "Web Design"],
    image: "src/assets/SelectedProjects/UrbanZenith.png",
    description: "A sleek and minimalist logo design for an urban architecture firm.",
    challenge: "Design a logo that symbolizes upward momentum and modernity.",
    solution: "Created a logo that perfectly captures the firm's focus on sustainable, innovative building design.",
    impact: "Helped secure three major city development projects within months of the rebrand.",
  },
  {
    id: 5,
    title: "Luminous Legacy",
    subtitle: "Historical Museum",
    category: "Visual Identity",
    year: "2024",
    client: "Luminous Legacy Museum",
    services: ["Brand Strategy", "Visual Identity", "Exhibition Design"],
    image: "src/assets/SelectedProjects/LuminousLegacy.png",
    description: "A refined visual identity for a historical museum that combines contemporary design elements with a deep sense of heritage.",
    challenge: "Create a brand that honors history while feeling fresh and engaging to modern audiences.",
    solution: "Developed a visual system that tells a story of legacy through clean, elegant visuals.",
    impact: "Museum attendance increased by 40% year-over-year following the rebrand.",
  },
  {
    id: 6,
    title: "Echo Element",
    subtitle: "Audio Technology",
    category: "Logo Design",
    year: "2024",
    client: "Echo Element Technologies",
    services: ["Logo Design", "Brand Strategy", "Product Design"],
    image: "src/assets/SelectedProjects/EchoElement.png",
    description: "A vibrant, abstract logo design for an audio technology startup.",
    challenge: "Design a logo that represents sound waves and digital energy.",
    solution: "Created a dynamic, flowing design that makes the brand both modern and memorable.",
    impact: "Startup secured $2.5M in venture funding within three months of the rebrand.",
  },
];

const SelectedWork: React.FC = () => {
  const { translations } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              {translations.selectedWork.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              {translations.selectedWork.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="space-y-32">
            {projectsData.map((project, index) => (
              <Link 
                key={project.id} 
                to={`/project/${project.id}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-16 group"
                >
                  <div className="flex items-center">
                    <div>
                      <h2 className="text-6xl md:text-8xl font-bold mb-4 group-hover:opacity-60 transition-opacity">
                        {project.title}
                      </h2>
                      <p className="text-xl text-muted-foreground">
                        {translations.language === 'en' ? project.subtitle : translations.selectedWork.projects[index]?.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="aspect-square rounded-lg overflow-hidden flex items-center justify-center p-0">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations.selectedWork.ctaTitle}</h2>
          <p className="text-xl mb-8 opacity-80 max-w-2xl mx-auto">
            {translations.selectedWork.ctaText}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-lg border px-8 py-3 rounded-full hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            <span>{translations.selectedWork.ctaButton}</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default SelectedWork
