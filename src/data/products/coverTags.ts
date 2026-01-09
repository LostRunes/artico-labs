import coverTag from "@/assets/products/cover-tag.jpg";
import trackpadMandala from "@/assets/products/trackpad-mandala.jpg";
import cyberWolf from "@/assets/products/cyber-wolf.jpg";
import goldenDragon from "@/assets/products/golden-dragon.jpg";

export const coverTags = [
  {
    id: "premium-gold",
    name: "Premium Gold",
    theme: "Plain",
    category: "cover-tags",
    price: 499,
    supportsPreview: false,
    description:
      "Elegant gold-finished cover tag for a premium minimal look.",
    images: [coverTag, trackpadMandala],
  },

  {
    id: "cyber-edition",
    name: "Cyber Edition",
    theme: "Gaming",
    category: "cover-tags",
    price: 549,
    supportsPreview: false,
    description:
      "Cyberpunk-inspired tag with bold detailing and sharp accents.",
    images: [cyberWolf, coverTag],
  },

  {
    id: "dragon-seal",
    name: "Dragon Seal",
    theme: "Vibrant",
    category: "cover-tags",
    price: 599,
    supportsPreview: false,
    description:
      "Dragon-themed emblem designed to make your device stand out.",
    images: [goldenDragon, coverTag],
  },
];
