import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  theme: string;
  images: string[];
  onClick?: () => void;
}

export const ProductCard = ({ name, theme, images, onClick }: ProductCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovering && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 700);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setCurrentImageIndex(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering, images.length]);

  return (
    <motion.div
      className="card-premium group cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${name} - view ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Image indicators */}
        {images.length > 1 && isHovering && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-primary w-4"
                    : "bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs font-medium text-ice uppercase tracking-wide">{theme}</span>
        <h3 className="font-display text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
      </div>
    </motion.div>
  );
};
