import { ArticoLogo } from "./ArticoLogo";
import { Instagram, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex items-center gap-4">
            <ArticoLogo size="sm" animated={false} />
            <div>
              <span className="font-display text-xl font-bold">ARTICO</span>
              <p className="text-sm text-muted-foreground">Skin the Future</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/artico"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface hover:bg-surface-elevated border border-border hover:border-primary/50 transition-all"
            >
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="tel:+919876543210"
              className="p-3 rounded-full bg-surface hover:bg-surface-elevated border border-border hover:border-primary/50 transition-all"
            >
              <Phone className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:hello@artico.in"
              className="p-3 rounded-full bg-surface hover:bg-surface-elevated border border-border hover:border-primary/50 transition-all"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ARTICO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
