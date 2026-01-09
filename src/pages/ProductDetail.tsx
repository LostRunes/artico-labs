import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import {
  laptopSkins,
  stickers,
  coverTags,
  trackpadSkins,
} from "@/data/products";

import { Check } from "lucide-react";

/* Combine all products in one searchable list */
const allProducts = [
  ...laptopSkins,
  ...stickers,
  ...coverTags,
  ...trackpadSkins,
];

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = allProducts.find((p) => p.id === slug);
  const [activeIndex, setActiveIndex] = useState(0);

  /* Safety: product not found */
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Product not found
      </div>
    );
  }

  
  /* Carousel handlers */
  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % product.images.length);

  const prevImage = () =>
    setActiveIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="section-container">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* LEFT — Images & Carousel */}
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={product.images[activeIndex]}
                  alt={product.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              {/* {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full
                               bg-black/40 backdrop-blur hover:bg-black/60 transition"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full
                               bg-black/40 backdrop-blur hover:bg-black/60 transition"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </>
              )} */}

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-20 h-16 rounded-lg overflow-hidden border transition-all ${
                      index === activeIndex
                        ? "border-primary"
                        : "border-border opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — Product Details */}
          <div>
            <span className="text-xs uppercase tracking-wide text-ice">
              {product.theme}
            </span>

            <h1 className="font-display text-4xl font-bold mt-2">
              {product.name}
            </h1>

            

            <p className="mt-4 text-muted-foreground max-w-xl">
              Premium precision-cut vinyl skin designed to elevate your device.
              Durable, bubble-free, and crafted to make a statement.
            </p>

<span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium
                 bg-primary/10 text-primary capitalize">
  {product.category.replace("-", " ")}
</span>

<div className="mt-4 text-3xl font-bold text-gradient-gold">
  ₹{product.price}
</div>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="btn-hero-primary">
                Add to Cart (soon)
              </button>
              {/* <button className="btn-hero-secondary">
                Try on Your Laptop
              </button> */}
            </div>


            {/* Feature Highlights */}
            {/* <div className="mt-12 grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="p-4 rounded-lg border border-border bg-surface-elevated">
                Bubble-free vinyl
              </div>
              <div className="p-4 rounded-lg border border-border bg-surface-elevated">
                Precision cut
              </div>
              <div className="p-4 rounded-lg border border-border bg-surface-elevated">
                Fade resistant
              </div>
              <div className="p-4 rounded-lg border border-border bg-surface-elevated">
                Residue-free removal
              </div>
            </div> */}
            <div className="mt-12 grid grid-cols-0 gap-4 text-sm text-muted-foreground">
             <div className="space-y-4 p-6 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-2xl">
                            <h3 className="font-bold text-lg text-cyan-400">Product Features</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start space-x-3">
                                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span>Premium bubble-free vinyl material</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span>High-resolution print quality with vibrant colors</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span>Easy application and removal without residue</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span>Scratch and water resistant protection</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span>Precision-cut for perfect fit on your device</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span>Durable material that lasts for years</span>
                                </li>
                            </ul>
                        </div>
                        </div>


                        {product.supportsPreview && (
  <div className="mt-12 p-6 rounded-2xl border border-border bg-surface-elevated">
    <h3 className="font-semibold mb-4 text-foreground">
      Preview on your laptop
    </h3>

    <div className="aspect-video rounded-lg bg-black/40 flex items-center justify-center">
      <span className="text-muted-foreground text-sm">
        Laptop preview coming soon
      </span>
    </div>
  </div>
)}


          </div>
        </div>
      </div>
    </div>
  );
}
