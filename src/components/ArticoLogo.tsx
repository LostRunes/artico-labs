import { motion } from "framer-motion";

interface ArticoLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
  animated?: boolean;
}

export const ArticoLogo = ({ className = "", size = "md", animated = true }: ArticoLogoProps) => {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    hero: "w-32 h-32 md:w-40 md:h-40",
  };

  return (
    <motion.div
      className={`relative ${sizes[size]} ${className}`}
      initial={animated ? { scale: 0.8, opacity: 0 } : false}
      animate={animated ? { scale: 1, opacity: 1 } : false}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gold/20"
        animate={animated ? { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] } : undefined}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(20px)" }}
      />
      
      {/* Main ring */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gold ring */}
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="url(#goldGradient)"
          strokeWidth="4"
          fill="none"
        />
        
        {/* Inner dark circle */}
        <circle
          cx="50"
          cy="50"
          r="38"
          className="fill-charcoal"
        />
        
        {/* Left eye */}
        <motion.ellipse
          cx="35"
          cy="45"
          rx="6"
          ry="8"
          className="fill-ice"
          animate={animated ? { opacity: [0.7, 1, 0.7] } : undefined}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "blur(1px)" }}
        />
        <motion.ellipse
          cx="35"
          cy="45"
          rx="4"
          ry="6"
          className="fill-ice-glow"
          animate={animated ? { opacity: [0.8, 1, 0.8] } : undefined}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
        />
        
        {/* Right eye */}
        <motion.ellipse
          cx="65"
          cy="45"
          rx="6"
          ry="8"
          className="fill-ice"
          animate={animated ? { opacity: [0.7, 1, 0.7] } : undefined}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "blur(1px)" }}
        />
        <motion.ellipse
          cx="65"
          cy="45"
          rx="4"
          ry="6"
          className="fill-ice-glow"
          animate={animated ? { opacity: [0.8, 1, 0.8] } : undefined}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
        />
        
        {/* Eye glow effects */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(43 50% 65%)" />
            <stop offset="50%" stopColor="hsl(43 50% 55%)" />
            <stop offset="100%" stopColor="hsl(35 55% 50%)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
};
