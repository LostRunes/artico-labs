import trackpadMandala from "@/assets/products/trackpad-mandala.jpg";
import carbonFiber from "@/assets/products/carbon-fiber.jpg";
import goldenDragon from "@/assets/products/golden-dragon.jpg";

export const trackpadSkins = [
  {
    id: "mandala-gold",
    name: "Mandala Gold",
    theme: "Vibrant",
    category: "trackpad-skins",
    price: 399,
    supportsPreview: true,
    description:
      "Elegant mandala design with golden accents for your trackpad.",
    images: [trackpadMandala, carbonFiber],
  },

  {
    id: "carbon-touch",
    name: "Carbon Touch",
    theme: "Carbon Fibre",
    category: "trackpad-skins",
    price: 449,
    supportsPreview: true,
    description:
      "Sleek carbon fibre texture for a modern, professional finish.",
    images: [carbonFiber, trackpadMandala],
  },

  {
    id: "dragon-touch",
    name: "Dragon Touch",
    theme: "Vibrant",
    category: "trackpad-skins",
    price: 499,
    supportsPreview: true,
    description:
      "Dragon-inspired trackpad skin with striking detail.",
    images: [goldenDragon, trackpadMandala],
  },
];
