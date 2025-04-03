import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
  placeholderClassName?: string
  loading?: 'lazy' | 'eager'
}

const OptimizedImage = ({
  src,
  alt,
  className,
  placeholderClassName,
  loading = 'lazy',
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoaded) {
          const img = new Image()
          img.src = src
          img.onload = () => setIsLoaded(true)
          img.onerror = () => setIsError(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [src, isLoaded])

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden', className)}
    >
      {/* Placeholder */}
      <div
        className={cn(
          'absolute inset-0 bg-muted animate-pulse',
          isLoaded && 'hidden',
          placeholderClassName
        )}
      />

      {/* Image */}
      <img
        src={isLoaded ? src : ''}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        loading={loading}
        {...props}
      />

      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-destructive/10">
          <span className="text-destructive text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage 