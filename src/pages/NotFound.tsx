import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollProgress from '@/components/ui/scroll-progress';
const NotFound = () => {
  return (
    <>
      <section className="min-h-[80vh] flex items-center justify-center">
        <ScrollProgress />
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Page not found
            </p>
            <Link
              to="/"
              className="inline-block px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default NotFound
