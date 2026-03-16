import { Category } from "@/interfaces/category.interface";
import { motion } from "framer-motion";

export interface ExtendedCategory extends Category {
  href: string;
}

interface CategoryQuickNavProps {
  categories: Category[];
}

export const CategoryQuickNav = ({ categories }: CategoryQuickNavProps) => {
  const handleCategoryClick = (categoryId: string) => {
    const el = document.getElementById(categoryId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const extendedCategories: ExtendedCategory[] = categories.map((cat) => ({
    ...cat,
    href: "#" + cat.name.toLowerCase().split(/\s+/g).join("-"),
  }));

  return (
    <section className="relative z-10">
      <motion.div
        className="section-container flex flex-wrap justify-center gap-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {extendedCategories.map((cat, index) => {
          const hoverColor =
            index % 2 === 0
              ? "hover:text-primary hover:border-primary"
              : "hover:text-[hsl(174_60%_55%)] hover:border-[hsl(174_60%_55%)]";

          return (
            <a
              key={cat._id}
              href={cat.href} 
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick(cat.href.slice(1));
              }}
              className={`
                px-6 py-3 rounded-full
                bg-surface-elevated
                border border-border
                text-sm font-medium
                text-foreground
                transition-all duration-300
                backdrop-blur
                ${hoverColor}
              `}
            >
              {cat.name}
            </a>
          );
        })}
      </motion.div>
    </section>
  );
};