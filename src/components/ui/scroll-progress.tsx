import { motion, useScroll, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollProgressProps {
  color?: string
  height?: number
  position?: 'top' | 'bottom'
  className?: string
}

const ScrollProgress = ({
  color = 'hsl(var(--primary))',
  height = 4,
  position = 'top',
  className,
}: ScrollProgressProps) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className={cn(
        'fixed left-0 right-0 z-50',
        position === 'top' ? 'top-0' : 'bottom-0',
        className
      )}
      style={{
        height,
        scaleX,
        transformOrigin: 'left',
        backgroundColor: color,
      }}
    />
  )
}

export default ScrollProgress 