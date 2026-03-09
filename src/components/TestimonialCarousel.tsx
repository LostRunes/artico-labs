import { motion } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Alex Patel",
    text: "Draggable Infinite Carousel made my portfolio so much more dynamic.",
  },
  {
    name: "Derek Kim",
    text: "Loved how easy it was to connect my cards and customize every detail.",
  },
  {
    name: "Samantha Lin",
    text: "Finally, a carousel that feels smooth and truly endless.",
  },
];

export default function TestimonialCarousel() {
  const carouselRef = useRef(null);

  return (
    <div className="overflow-hidden w-full py-10">
      <motion.div
        ref={carouselRef}
        className="flex gap-6 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -600, right: 0 }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-[350px] bg-white rounded-3xl p-8 shadow-md"
          >
            <p className="text-gray-700 mb-6">"{item.text}"</p>
            <h4 className="font-semibold">{item.name}</h4>
          </div>
        ))}
      </motion.div>
    </div>
  );
}