import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ScrollProgress from '@/components/ui/scroll-progress';
import { useLanguage } from '@/contexts/LanguageContext';

// Project data with images
const projectsData = [
  {
    id: 1,
    title: "Nebula Networks",
    subtitle: "Communications Startup",
    category: "Brand Identity",
    year: "2024",
    client: "Nebula Networks",
    description: "A futuristic brand identity for a cutting-edge communications startup. The design evokes cosmic imagery and interconnected digital networks, reflecting innovation and the vastness of the digital universe.",
    images: [
      "public/SelectedProjects/NebulaNetworks.png",
      "public/ProjectDetails/NebulaNetworks/1.png",
      "public/ProjectDetails/NebulaNetworks/2.png",
    ]
  },
  {
    id: 2,
    title: "Sahara Solar",
    subtitle: "Renewable Energy",
    category: "Brand Identity",
    year: "2024",
    client: "Sahara Solar",
    description: "A dynamic visual identity for a renewable energy company. The design blends modern minimalism with warm, desert-inspired tones, capturing the essence of sustainable energy in a sun-soaked landscape.",
    images: [
      "public/SelectedProjects/SaharaSolar.png",
      "public/ProjectDetails/SaharaSolar/1.png",
      "public/ProjectDetails/SaharaSolar/2.png",
    ]
  },
  {
    id: 3,
    title: "Desert Oasis",
    subtitle: "Luxury Hotel",
    category: "Visual Identity",
    year: "2024",
    client: "Desert Oasis Resorts",
    description: "An inviting and sophisticated visual identity for a luxury boutique hotel set in the desert. The design merges contemporary aesthetics with traditional Arabian elegance, evoking a serene, rejuvenating escape.",
    images: [
      "public/SelectedProjects/DesertOasis.png",
      "public/ProjectDetails/DesertOasis/1.png",
      "public/ProjectDetails/DesertOasis/2.png",
    ]
  },
  {
    id: 4,
    title: "Urban Zenith",
    subtitle: "Architecture Firm",
    category: "Logo Design",
    year: "2024",
    client: "Urban Zenith Architects",
    description: "A sleek and minimalist logo design for an urban architecture firm. It symbolizes upward momentum and modernity, perfectly capturing the firm's focus on sustainable, innovative building design.",
    images: [
      "public/SelectedProjects/UrbanZenith.png",
      "public/ProjectDetails/UrbanZenith/1.png",
      "public/ProjectDetails/UrbanZenith/2.png",
    ]
  },
  {
    id: 5,
    title: "Luminous Legacy",
    subtitle: "Historical Museum",
    category: "Visual Identity",
    year: "2024",
    client: "Luminous Legacy Museum",
    description: "A refined visual identity for a historical museum that combines contemporary design elements with a deep sense of heritage. The project tells a story of legacy through clean, elegant visuals.",
    images: [
      "public/SelectedProjects/LuminousLegacy.png",
      "public/ProjectDetails/LuminousLegacy/1.png",
      "public/ProjectDetails/LuminousLegacy/2.png",
    ]
  },
  {
    id: 6,
    title: "Echo Element",
    subtitle: "Audio Technology",
    category: "Logo Design",
    year: "2024",
    client: "Echo Element Tech",
    description: "A vibrant, abstract logo design for an audio technology startup. The design uses dynamic, flowing shapes to represent sound waves and digital energy, making it both modern and memorable.",
    images: [
      "public/SelectedProjects/EchoElement.png",
      "public/ProjectDetails/EchoElement/1.png",
      "public/ProjectDetails/EchoElement/2.png",
    ]
  },
];

const ProjectDetail: React.FC = () => {
  const { translations, language } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const currentProject = projectsData.find(p => p.id === Number(id));
  const currentIndex = projectsData.findIndex(p => p.id === Number(id));
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];
  
  if (!currentProject) {
    return <div>{translations.projectDetail.notFound}</div>;
  }

  // Get translated project details if available
  const getTranslatedProject = () => {
    if (language === 'en') return currentProject;
    
    const translatedProjects = translations.projectDetail.projects;
    const translatedProject = translatedProjects.find(p => p.id === currentProject.id);
    
    if (!translatedProject) return currentProject;
    
    return {
      ...currentProject,
      subtitle: translatedProject.subtitle || currentProject.subtitle,
      category: translatedProject.category || currentProject.category,
      description: translatedProject.description || currentProject.description,
    };
  };
  
  const project = getTranslatedProject();

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      {/* Go Back Link */}
      <div className="container-custom py-4">
        <Link to="/selected-work/" className="flex items-center text-gray-300 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>{translations.projectDetail.goBack}</span>
        </Link>
      </div>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-sm text-muted-foreground mb-4">{project.category}</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">{project.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium mb-2">{translations.projectDetail.client}</h3>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">{translations.projectDetail.year}</h3>
                  <p className="text-muted-foreground">{project.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-32">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="aspect-[16/9] bg-muted rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${project.title} - ${translations.projectDetail.imageAlt} ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "public/placeholder.svg";
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8">
            <Link
              to={`/project/${prevProject.id}`}
              className="group flex items-start space-x-4"
            >
              <ArrowLeft className="w-6 h-6 mt-1 group-hover:-translate-x-2 transition-transform" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">{translations.projectDetail.previous}</p>
                <h3 className="text-xl font-medium">{prevProject.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? prevProject.subtitle : 
                    translations.projectDetail.projects.find(p => p.id === prevProject.id)?.subtitle || prevProject.subtitle}
                </p>
              </div>
            </Link>
            <Link
              to={`/project/${nextProject.id}`}
              className="group flex items-start justify-end space-x-4"
            >
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">{translations.projectDetail.next}</p>
                <h3 className="text-xl font-medium">{nextProject.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? nextProject.subtitle : 
                    translations.projectDetail.projects.find(p => p.id === nextProject.id)?.subtitle || nextProject.subtitle}
                </p>
              </div>
              <ArrowRight className="w-6 h-6 mt-1 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
