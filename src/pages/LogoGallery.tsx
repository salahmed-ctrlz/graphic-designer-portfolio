import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollProgress from '@/components/ui/scroll-progress'; // Importing ScrollProgress


const logos = [
  { id: 1, image: 'public/SelectedProjects/DesertOasis.png' },
  { id: 2, image: 'public/SelectedProjects/EchoElement.png' },
  { id: 3, image: 'public/SelectedProjects/LuminousLegacy.png' },
  { id: 4, image: 'public/SelectedProjects/NebulaNetworks.png' },
  { id: 5, image: 'public/SelectedProjects/SaharaSolar.png' },
  { id: 6, image: 'public/SelectedProjects/UrbanZenith.png' },
  { id: 7, image: 'public/SelectedProjects/DesertOasis.png' },
  { id: 8, image: 'public/SelectedProjects/EchoElement.png' },
  { id: 9, image: 'public/SelectedProjects/LuminousLegacy.png' },
  { id: 10, image: 'public/SelectedProjects/NebulaNetworks.png' },
  { id: 11, image: 'public/SelectedProjects/SaharaSolar.png' },
  { id: 12, image: 'public/SelectedProjects/UrbanZenith.png' },
];

const LogoGallery: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-20 px-4">
      <ScrollProgress />
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-helvetica font-bold mb-12 text-center">
          Logo Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: loading ? 0 : 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square relative overflow-hidden rounded-lg bg-muted"
            >
              <motion.img
                src={logo.image}
                alt={`Logo ${logo.id}`}
                className="w-full h-full object-contain p-0 transition-transform duration-300 hover:scale-110 hover:rotate-3"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoGallery
