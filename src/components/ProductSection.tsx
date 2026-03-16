import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  theme: string;
  images: string[];
  price: number;
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
  const carouselRef2 = useRef<HTMLDivElement>(null);

  const [isHoveringRow1, setIsHoveringRow1] = useState(false);
  const [isHoveringRow2, setIsHoveringRow2] = useState(false);

  const speed = 1;
  const enableScroll = products.length >1;

  const displayProducts = enableScroll
    ? [...products, ...products, ...products]
    : products;

  useEffect(() => {
    let frame: number;

    const animate = () => {
      const el = carouselRef.current;

      if (el && !isHoveringRow1 && enableScroll) {
        el.scrollLeft += speed;

        const loopWidth = el.scrollWidth / 3;

        if (el.scrollLeft >= loopWidth) {
          el.scrollLeft -= loopWidth;
        }
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isHoveringRow1, enableScroll]);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      const el = carouselRef2.current;

      if (el && !isHoveringRow2 && enableScroll) {
        el.scrollLeft -= speed;

        const loopWidth = el.scrollWidth / 3;

        if (el.scrollLeft <= 0) {
          el.scrollLeft = loopWidth;
        }
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isHoveringRow2, enableScroll]);

  return (
    <section id={id} className="py-20">

      <div className="section-container">

        <div className="text-center mb-12" data-aos="fade-up">
  <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
    {title}
  </h2>

  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
    {description}
  </p>
</div>

        <div data-aos="fade-up">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >

            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto pb-4 no-scrollbar cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsHoveringRow1(true)}
              onMouseLeave={() => setIsHoveringRow1(false)}
            >
              {displayProducts.map((product, index) => (
                <div
                  key={`row1-${product.id}-${index}`}
                  className="min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] flex-shrink-0"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            <div
              ref={carouselRef2}
              className="flex gap-6 overflow-x-auto pb-4 mt-8 no-scrollbar cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsHoveringRow2(true)}
              onMouseLeave={() => setIsHoveringRow2(false)}
            >
              {displayProducts.map((product, index) => (
                <div
                  key={`row2-${product.id}-${index}`}
                  className="min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] flex-shrink-0"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};