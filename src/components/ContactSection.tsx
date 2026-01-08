import { motion } from "framer-motion";
import { Instagram, Phone, Mail, MessageCircle } from "lucide-react";
import { ArticoLogo } from "./ArticoLogo";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="section-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient-ice">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to skin your device? Reach out via DM for orders, custom requests, or questions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Instagram - Primary */}
          <motion.a
            href="https://instagram.com/artico"
            target="_blank"
            rel="noopener noreferrer"
            className="card-premium p-8 text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 group-hover:scale-110 transition-transform">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">Instagram</h3>
            <p className="text-muted-foreground text-sm mb-3">Best for orders & updates</p>
            <span className="text-primary font-medium">@artico</span>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="card-premium p-8 text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground text-sm mb-3">Quick responses</p>
            <span className="text-primary font-medium">+91 98765 43210</span>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:hello@artico.in"
            className="card-premium p-8 text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8 }}
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-gold-muted mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground text-sm mb-3">For business inquiries</p>
            <span className="text-primary font-medium">hello@artico.in</span>
          </motion.a>
        </div>

        {/* Order CTA */}
        <motion.div
          className="text-center mt-12 p-8 rounded-2xl bg-card border border-primary/20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-display text-2xl font-bold mb-3">Ready to Order?</h3>
          <p className="text-muted-foreground mb-6">
            DM us on Instagram or WhatsApp with your laptop model and chosen skin. 
            We'll handle the rest!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://instagram.com/artico"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Order via Instagram
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
