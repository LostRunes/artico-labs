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
              href="https://www.instagram.com/articopro/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon group"
            >
              <Instagram className="icon w-5 h-5" />
              </a>

            <a
              href="tel:+918455894907"
              className="social-icon group"
            >
              <Phone className="icon w-5 h-5" />
            </a>

            <a
              href="mailto:articopro.team@gmail.com"
              className="social-icon group"
            >
              <Mail className="icon w-5 h-5" />
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
