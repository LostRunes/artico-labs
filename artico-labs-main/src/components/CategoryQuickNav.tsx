import { motion } from "framer-motion";

const categories = [
  { label: "Laptop Skins", href: "#laptop-skins" },
  { label: "Stickers", href: "#stickers" },
  { label: "Cover Tags", href: "#cover-tags" },
  { label: "Trackpads", href: "#trackpad-skins" },
];

export const CategoryQuickNav = () => {
  return (
    <section className="relative z-10">
      <motion.div
        className="section-container flex flex-wrap justify-center gap-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {categories.map((cat, index) => {
          const hoverColor =
            index % 2 === 0
              ? "hover:text-primary hover:border-primary"
              : "hover:text-[hsl(174_60%_55%)] hover:border-[hsl(174_60%_55%)]";

          return (
            <a
              key={cat.label}
              href={cat.href}
              className={`
                px-6 py-3 rounded-full
              
                bg-surface-elevated
                border border-border
                text-sm font-medium
                text-foreground
                transition-all duration-300
                backdrop-blur
                hover:bg-gray-300

                ${hoverColor}
              `}
            >
              {cat.label}
            </a>
          );
        })}
      </motion.div>
    </section>
  );
};
