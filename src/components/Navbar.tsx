import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import CategoriesDropDown from "./CategoryDropDown";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "Categories", type: "dropdown" },
  { name: "Try On", href: "/#try-on" },
  { name: "Custom", href: "/#custom" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/artico.png"
              alt="Artico"
              className="h-11 w-auto object-contain"
            />


            <span className="font-display text-xl font-bold tracking-wide">
              ARTICO
            </span>
          </a>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.type === "dropdown") return <CategoriesDropDown key="categories-dropdown" />
              return <a
                key={link.name}
                href={link.href}
                className="font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
              >
                {link.name}
              </a>
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Social icons - desktop */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.instagram.com/articopro/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social-icon w-11 h-11 rounded-full bg-surface-elevated ring-1 ring-border flex items-center justify-center relative overflow-hidden transition-all hover:-translate-y-[1px] hover:ring-1 hover:ring-ring hover:ring-offset-0"
              >
                <Instagram className="icon w-5 h-5" />
              </a>
            </div>

            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-surface-elevated transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="section-container py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 font-medium text-lg hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a
                  href="https://www.instagram.com/articopro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
