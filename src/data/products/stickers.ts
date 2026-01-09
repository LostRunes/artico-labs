import stickerTech from "@/assets/products/sticker-set-tech.jpg";
import stickerAnime from "@/assets/products/sticker-anime.jpg";
import animeNaruto from "@/assets/products/anime-naruto.jpg";
import ironMan from "@/assets/products/iron-man.jpg";

export const stickers = [
  {
    id: "tech-pack",
    name: "Tech Pack",
    theme: "Plain",
    category: "stickers",
    price: 299,
    supportsPreview: false,
    description:
      "Minimal tech-inspired vinyl stickers perfect for laptops and accessories.",
    images: [stickerTech, stickerAnime],
  },

  {
    id: "anime-collection",
    name: "Anime Collection",
    theme: "Anime",
    category: "stickers",
    price: 349,
    supportsPreview: false,
    description:
      "A curated anime sticker set with vibrant colors and durable vinyl.",
    images: [stickerAnime, stickerTech],
  },

  {
    id: "ninja-way-mini",
    name: "Ninja Way Mini",
    theme: "Anime",
    category: "stickers",
    price: 249,
    supportsPreview: false,
    description:
      "Compact anime sticker pack inspired by legendary shinobi.",
    images: [animeNaruto, stickerAnime],
  },

  {
    id: "arc-reactor-badge",
    name: "Arc Reactor Badge",
    theme: "Marvel",
    category: "stickers",
    price: 199,
    supportsPreview: false,
    description:
      "Iron Man inspired arc reactor badge with premium vinyl finish.",
    images: [ironMan, stickerTech],
  },
];
