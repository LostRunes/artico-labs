import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FilterBar } from "@/components/FilterBar";
import { ProductSection } from "@/components/ProductSection";
import { LaptopPreview } from "@/components/LaptopPreview";
import { CustomSection } from "@/components/CustomSection";
import { FeedbackSection } from "@/components/FeedbackSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

// Import product images
import cyberWolf from "@/assets/products/cyber-wolf.jpg";
import goldenDragon from "@/assets/products/golden-dragon.jpg";
import ghibliForest from "@/assets/products/ghibli-forest.jpg";
import carbonFiber from "@/assets/products/carbon-fiber.jpg";
import ironMan from "@/assets/products/iron-man.jpg";
import darthVader from "@/assets/products/darth-vader.jpg";
import f1Racing from "@/assets/products/f1-racing.jpg";
import animeNaruto from "@/assets/products/anime-naruto.jpg";
import stickerTech from "@/assets/products/sticker-set-tech.jpg";
import stickerAnime from "@/assets/products/sticker-anime.jpg";
import trackpadMandala from "@/assets/products/trackpad-mandala.jpg";
import coverTag from "@/assets/products/cover-tag.jpg";

// Sample product data
const laptopSkins = [
  { id: "1", name: "Cyber Wolf", theme: "Gaming", images: [cyberWolf, goldenDragon] },
  { id: "2", name: "Golden Dragon", theme: "Vibrant", images: [goldenDragon, cyberWolf] },
  { id: "3", name: "Forest Spirit", theme: "Studio Ghibli", images: [ghibliForest, ghibliForest] },
  { id: "4", name: "Carbon Elite", theme: "Carbon Fibre", images: [carbonFiber, trackpadMandala] },
  { id: "5", name: "Arc Reactor", theme: "Marvel", images: [ironMan, darthVader] },
  { id: "6", name: "Dark Side", theme: "Star Wars", images: [darthVader, ironMan] },
  { id: "7", name: "Speed Demon", theme: "F1", images: [f1Racing, f1Racing] },
  { id: "8", name: "Ninja Way", theme: "Anime", images: [animeNaruto, ghibliForest] },
];

const stickers = [
  { id: "s1", name: "Tech Pack", theme: "Plain", images: [stickerTech, stickerAnime] },
  { id: "s2", name: "Anime Collection", theme: "Anime", images: [stickerAnime, stickerTech] },
  { id: "s3", name: "Ninja Way Mini", theme: "Anime", images: [animeNaruto, stickerAnime] },
  { id: "s4", name: "Arc Reactor Badge", theme: "Marvel", images: [ironMan, stickerTech] },
];

const coverTags = [
  { id: "c1", name: "Premium Gold", theme: "Plain", images: [coverTag, trackpadMandala] },
  { id: "c2", name: "Cyber Edition", theme: "Gaming", images: [cyberWolf, coverTag] },
  { id: "c3", name: "Dragon Seal", theme: "Vibrant", images: [goldenDragon, coverTag] },
];

const trackpadSkins = [
  { id: "t1", name: "Mandala Gold", theme: "Vibrant", images: [trackpadMandala, carbonFiber] },
  { id: "t2", name: "Carbon Touch", theme: "Carbon Fibre", images: [carbonFiber, trackpadMandala] },
  { id: "t3", name: "Dragon Touch", theme: "Vibrant", images: [goldenDragon, trackpadMandala] },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTheme, setActiveTheme] = useState("All");
  const [activeSort, setActiveSort] = useState("popular");

  // Filter products based on search and theme
  const filterProducts = (products: typeof laptopSkins) => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.theme.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTheme = activeTheme === "All" || product.theme === activeTheme;
      return matchesSearch && matchesTheme;
    });
  };

  const filteredLaptopSkins = useMemo(() => filterProducts(laptopSkins), [searchQuery, activeTheme]);
  const filteredStickers = useMemo(() => filterProducts(stickers), [searchQuery, activeTheme]);
  const filteredCoverTags = useMemo(() => filterProducts(coverTags), [searchQuery, activeTheme]);
  const filteredTrackpadSkins = useMemo(() => filterProducts(trackpadSkins), [searchQuery, activeTheme]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      {/* Products section */}
      <div id="products">
        <FilterBar
          onSearchChange={setSearchQuery}
          onThemeChange={setActiveTheme}
          onSortChange={setActiveSort}
          activeTheme={activeTheme}
          activeSort={activeSort}
        />

        {filteredLaptopSkins.length > 0 && (
          <ProductSection
            id="laptop-skins"
            title="Laptop Skins"
            description="Transform your laptop into a masterpiece with our premium vinyl skins."
            products={filteredLaptopSkins}
          />
        )}

        {filteredStickers.length > 0 && (
          <ProductSection
            id="stickers"
            title="Stickers"
            description="Express yourself with our high-quality vinyl stickers."
            products={filteredStickers}
          />
        )}

        {filteredCoverTags.length > 0 && (
          <ProductSection
            id="cover-tags"
            title="Cover Tags"
            description="Premium metal tags to personalize your device."
            products={filteredCoverTags}
          />
        )}

        {filteredTrackpadSkins.length > 0 && (
          <ProductSection
            id="trackpad-skins"
            title="Trackpad Skins"
            description="Precision-cut skins for a seamless trackpad experience."
            products={filteredTrackpadSkins}
          />
        )}
      </div>

      <LaptopPreview />
      <CustomSection />
      <FeedbackSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
