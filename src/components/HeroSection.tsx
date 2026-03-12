import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ArticoLogo } from "./ArticoLogo";
import { ParallaxBackground } from "./ParallaxBackground";
import { useState, useEffect } from "react";

export const HeroSection = () => {

  const words = ["laptops.", "trackpads.", "& more."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParallaxBackground />
            
            {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="section-container relative z-10 text-center py-20">

        {/* Logo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* <ArticoLogo size="hero" /> */}


          <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.2, duration: 0.6 },
              y: { delay: 4, duration: 2, repeat: Infinity }
            }}
          >
            <img
              src="/artico.png"
              alt="Artico"
              className="h-auto w-40 object-contain "/>
              
          </motion.div>


        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-gradient-gold">Skin</span>{" "}
          <span className="text-foreground">the Future</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Premium custom skins for{" "}
          
            <span className="inline-block relative h-[1.4em] min-w-[120px] overflow-hidden align-bottom text-ice font-semibold">            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute left-0"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>

          
          <br />

          <span className="text-ice">Your device. Reforged.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href="#products" className="btn-hero-primary">
            Explore Skins
          </a>

          <a href="#try-on" className="btn-hero-secondary">
            Try on Your Laptop
          </a>
        </motion.div>

        {/* KIIT discount badge */}
        {/* <motion.div
          className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-primary/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className="text-lg">🎓</span>
          <span className="text-sm font-medium text-muted-foreground">
            <span className="text-primary">10% off</span> for KIIT students
          </span>
        </motion.div> */}

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.6 },
          y: { delay: 1.5, duration: 2, repeat: Infinity }
        }}
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </motion.div>

    </section>
  );
};
