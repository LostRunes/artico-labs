import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Monitor } from "lucide-react";

const laptopModels = [
  { id: "hp-elitebook", name: "HP EliteBook 845 14\" G11" },
  { id: "lenovo-thinkbook", name: "Lenovo ThinkBook 14s Yoga G2 IAP" },
];

const previewSkins = [
  { id: "1", name: "Cyber Wolf", color: "#1a1a2e", accent: "#4fd1c5" },
  { id: "2", name: "Golden Dragon", color: "#2d2d2d", accent: "#c9a962" },
  { id: "3", name: "Arctic Frost", color: "#1e3a5f", accent: "#6dd5ed" },
  { id: "4", name: "Carbon Elite", color: "#1a1a1a", accent: "#333333" },
  { id: "5", name: "Sakura Dream", color: "#2d1b2d", accent: "#ff6b9d" },
  { id: "6", name: "Neon Circuit", color: "#0a0a0a", accent: "#00ff88" },
];

export const LaptopPreview = () => {
  const [selectedLaptop, setSelectedLaptop] = useState(laptopModels[0]);
  const [selectedSkin, setSelectedSkin] = useState(previewSkins[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section id="try-on" className="py-20 bg-surface">
      <div className="section-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Try on Your <span className="text-gradient-ice">Laptop</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preview how different skins look on your specific laptop model.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Laptop preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Laptop mockup */}
            <div className="relative mx-auto max-w-lg">
              {/* Screen bezel */}
              <div 
                className="relative rounded-t-2xl p-2 transition-all duration-500"
                style={{ backgroundColor: selectedSkin.color }}
              >
                {/* Screen */}
                <div className="aspect-[16/10] rounded-lg bg-charcoal flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedSkin.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${selectedSkin.color} 0%, ${selectedSkin.accent}33 100%)` 
                      }}
                    >
                      <div className="text-center">
                        <Monitor className="w-16 h-16 mx-auto mb-4 opacity-30" style={{ color: selectedSkin.accent }} />
                        <p className="text-sm text-muted-foreground">Screen Preview</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Keyboard base */}
              <div 
                className="h-6 rounded-b-lg transition-all duration-500"
                style={{ 
                  background: `linear-gradient(180deg, ${selectedSkin.color} 0%, ${selectedSkin.accent}22 100%)`,
                  borderTop: `1px solid ${selectedSkin.accent}33`
                }}
              />

              {/* Accent glow */}
              <div 
                className="absolute -inset-4 rounded-2xl -z-10 opacity-30 blur-2xl transition-all duration-500"
                style={{ backgroundColor: selectedSkin.accent }}
              />
            </div>

            {/* Skin name badge */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-card border border-border"
              key={selectedSkin.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-display font-semibold">{selectedSkin.name}</span>
            </motion.div>
          </motion.div>

          {/* Controls */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Laptop selector */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Select Your Laptop
              </label>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors text-left flex items-center justify-between"
                >
                  <span>{selectedLaptop.name}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl overflow-hidden z-10"
                    >
                      {laptopModels.map((model) => (
                        <button
                          key={model.id}
                          onClick={() => {
                            setSelectedLaptop(model);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-surface-elevated transition-colors ${
                            selectedLaptop.id === model.id ? "bg-surface text-primary" : ""
                          }`}
                        >
                          {model.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Skin selector */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-3">
                Choose a Skin
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {previewSkins.map((skin) => (
                  <button
                    key={skin.id}
                    onClick={() => setSelectedSkin(skin)}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedSkin.id === skin.id
                        ? "border-transparent"
                        : "border-border hover:border-primary/50"
                    }`}
                    style={{ backgroundColor: skin.color }}
                  >
                    <div 
                      className="w-full h-8 rounded-lg mb-2"
                      style={{ 
                        background: `linear-gradient(135deg, ${skin.color} 0%, ${skin.accent} 100%)` 
                      }}
                    />
                    <span className="text-sm font-medium text-foreground">{skin.name}</span>
                    
                    {selectedSkin.id === skin.id && (
                      <motion.div
                        layoutId="skin-indicator"
                        className="absolute inset-0 rounded-xl border-2 border-primary"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a 
                href="#contact" 
                className="btn-hero-primary inline-block text-center w-full sm:w-auto"
              >
                Order This Skin via DM
              </a>
              <p className="text-sm text-muted-foreground mt-3">
                Custom designs also available
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
