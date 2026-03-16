import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Check } from "lucide-react";

import axiosInstance from "@/api/axios";
import { Product } from "@/interfaces/product.interface";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [slug]);

  const fetchProduct = async () => {
    try {
      const res = await axiosInstance.get(`/stickers/${slug}`);
      setProduct(res.data.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Product not found
      </div>
    );
  }

  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % product.images.length);

  const prevImage = () =>
    setActiveIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="section-container">

        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* LEFT — Images */}
          <div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400/40 via-amber-300/30 to-yellow-400/40 blur-xl opacity-70" />

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

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>

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

          {/* RIGHT — Details */}
          <div>

            <span className="text-xs uppercase tracking-wide text-ice">
              {product.categories.map((c) => c.name).join(" • ")}
            </span>

            <h1 className="font-display text-4xl font-bold mt-2">
              {product.name}
            </h1>

            <p className="mt-4 text-muted-foreground max-w-xl">
              {product.tagline}
            </p>

            <div className="mt-4 text-3xl font-bold text-gradient-gold">
              ₹{product.price}
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="btn-hero-primary">
                Add to Cart (soon)
              </button>
            </div>

            {/* Product Features */}
            <div className="mt-12 grid grid-cols-1 gap-4 text-sm text-muted-foreground">
              <div className="space-y-4 p-6 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-2xl">
                <h3 className="font-bold text-lg text-cyan-400">
                  Product Features
                </h3>

                <ul className="space-y-3 text-gray-300">
                  {product.productFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}