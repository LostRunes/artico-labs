import axiosInstance from "@/api/axios";
import { Category } from "@/interfaces/category.interface";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// const categories = [
//   { label: "Laptop Skins", href: "#laptop-skins" },
//   { label: "Stickers", href: "#stickers" },
//   { label: "Cover Tags", href: "#cover-tags" },
//   { label: "Trackpads", href: "#trackpad-skins" },
// ];

export interface ExtendedCategory extends Category {
  href: string;
}

export const CategoryQuickNav = () => {
  const [categories, setCategories] = useState<ExtendedCategory[]>([]);

  useEffect(() => {
    getCategories();
  }, [])

  const getCategories = async (): Promise<void> => {
    const response = await axiosInstance.get("/categories");
    const data = await response.data.data;

    const addedHrefs = data.map((data: ExtendedCategory) => {
      data.href = "#" + data.name.toLowerCase().split(/ /g).join("-");
      return data;
    })
    
    setCategories(addedHrefs);
  }

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
              key={cat.name}
              href={cat.href}
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
