import { useRef } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  theme: string;
  images: string[];
}

interface ProductSectionProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

export const ProductSection = ({
  id,
  title,
  description,
  products,
}: ProductSectionProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section id={id} className="py-20">
      <div className="section-container">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            →
          </button>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};