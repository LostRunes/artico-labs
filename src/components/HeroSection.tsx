import { motion, AnimatePresence,useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ArticoLogo } from "./ArticoLogo";
import { ParallaxBackground } from "./ParallaxBackground";
import { useState, useEffect } from "react";

export const HeroSection = () => {

  const words = ["laptops.", "trackpads.", "& more."];
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 120]);
  const y2 = useTransform(scrollY, [0, 500], [0, 180]);
  const y3 = useTransform(scrollY, [0, 500], [0, 90]);
  const y4 = useTransform(scrollY, [0, 500], [0, 140]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">

      <motion.div
      style={{ y: y1 }} 
      className="absolute inset-0 z-0"
    >
    <div
      className="w-full h-[120%] bg-cover bg-center"
      style={{
      backgroundImage: "url('/hero-bg.png')",
     opacity: 0.3, 
    }}
  />
    </motion.div>

      <ParallaxBackground />

      <motion.img
      src="/anime-naruto.jpg"
      alt="naruto"
      style={{ y: y1 }}
      className="hero-floating float-1 pointer-events-none"
    />

    <motion.img
      src="/cyber-wolf.jpg"
      alt="wolf"
      style={{ y: y2 }}
      className="hero-floating float-2 pointer-events-none"
    />

    <motion.img
    src="/f1-racing.jpg"
    alt="f1"
    style={{ y: y3 }}
    className="hero-floating float-3 pointer-events-none"
    />

    <motion.img
      src="/iron-man.jpg"
      alt="ironman"
      style={{ y: y4 }}
      className="hero-floating float-4 pointer-events-none"
    />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none z-10" />

      <div className="section-container relative z-20 text-center py-20 scale-90">

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
          className="font-display text-6xl md:text-8xl lg:text-[6.5rem] font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-gradient-gold">Skin</span>{" "}
          <span className="text-foreground">the Future</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Premium custom skins for{" "}
          
          <span className="inline-block relative h-[1.2em] min-w-[160px] overflow-hidden align-bottom text-ice font-semibold">
            <AnimatePresence mode="wait">
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
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
  className="absolute bottom-8 inset-x-0 flex justify-center z-20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, y: [0, 10, 0] }}
  transition={{
    opacity: { delay: 1.2, duration: 0.6 },
    y: { delay: 1.5, duration: 2, repeat: Infinity }
  }}
>
    <ChevronDown className="w-8 h-8 text-muted-foreground -translate-x-1" />
  </motion.div>
  <div className="absolute bottom-0 left-0 w-full flex justify-center pb-12 z-20">
  <div className="flex flex-wrap justify-center gap-4">
    {[
      { label: "Laptop Skins", href: "#laptop-skins" },
      { label: "Stickers", href: "#stickers" },
      { label: "Cover Tags", href: "#cover-tags" },
      { label: "Trackpads", href: "#trackpad-skins" },
    ].map((cat, index) => {
      const hoverColor =
        index % 2 === 0
          ? "hover:text-primary hover:border-primary"
          : "hover:text-[hsl(174_60%_55%)] hover:border-[hsl(174_60%_55%)]";

      return (
        <a
          key={cat.label}
          href={cat.href}
          className={`px-6 py-3 rounded-full bg-surface-elevated border border-border text-sm font-medium text-foreground transition-all duration-300 backdrop-blur ${hoverColor}`}
        >
          {cat.label}
        </a>
      );
    })}
  </div>
</div>
    </section>
  );
};