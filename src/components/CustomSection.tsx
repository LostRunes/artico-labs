import { motion } from "framer-motion";
import { Palette, Upload, MessageCircle } from "lucide-react";

export const CustomSection = () => {
  return (
    <section id="custom" className="py-20" data-aos="fade-up">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal to-background border border-border">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-ice/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 p-8 md:p-16">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Palette className="w-4 h-4" />
                Custom Designs
              </span>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Your Vision.
                <br />
                <span className="text-gradient-gold">Our Craft.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
                Can't find what you're looking for? We create custom skins from your designs, 
                ideas, or favorite images. Your laptop, your rules.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">Upload Your Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Send us your artwork, photo, or concept
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-ice/10">
                    <MessageCircle className="w-6 h-6 text-ice" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">Describe Your Idea</h3>
                    <p className="text-sm text-muted-foreground">
                      Tell us what you want, we'll bring it to life
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                className="btn-hero-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Custom Skin
                <Palette className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
