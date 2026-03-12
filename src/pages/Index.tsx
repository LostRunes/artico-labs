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
import { CategoryQuickNav } from "@/components/CategoryQuickNav";


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


import {
  laptopSkins,
  stickers,
  coverTags,
  trackpadSkins,
} from "@/data/products";

// Sample product data
// const laptopSkins = [
//   { id: "1", name: "Cyber Wolf", theme: "Gaming", images: [cyberWolf, goldenDragon] },
//   { id: "2", name: "Limitless Astro", theme: "Vibrant", images: ['https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760387722_3742725948023485918_77564775231%20(1).webp', 'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760387722_3742725947746667863_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760387722_3742725947763457539_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760387722_3742725947880859714_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760387723_3742725948031856679_77564775231.webp',] },
//   { id: "3", name: "Kakashi Neon", theme: "Studio Ghibli", images: ['https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760607118_3744566366902071639_77564775231.webp', 'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760607117_3744566366759424517_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760607117_3744566366776200648_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760607118_3744566366893665969_77564775231%20(1).webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760607118_3744566367086597594_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760607118_3744566367136945747_77564775231.webp',] },
//   { id: "4", name: "Optimus Dawn", theme: "Carbon Fibre", images: ['https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1761547767_3752457106495796175_77564775231%20(1).webp','https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1761547767_3752457106487384717_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1761547767_3752457106504181062_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1761547767_3752457106663566437_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1761547767_3752457106772628918_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1761547767_3752457106789378546_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1761547767_3752457106495824080_77564775231.webp'] },
//   { id: "5", name: "Digi Bloom", theme: "Marvel", images: ['https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760609360_3744585179278271039_77564775231.webp', 'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760609360_3744585179412461273_77564775231%20(1).webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760609360_3744585179412489013_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760609360_3744585179580217675_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/articopro_1760609360_3744585179613812517_77564775231.webp'] },
//   { id: "6", name: "Super Rosé", theme: "Star Wars", images: ['https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/Untitled%20folder/articopro_1760438431_3743151318782579411_77564775231%20(1).webp', 'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/Untitled%20folder/articopro_1760438431_3743151318497365794_77564775231.webp',
//           'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/Untitled%20folder/articopro_1760438431_3743151318497412291_77564775231.webp',
//           'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/Untitled%20folder/articopro_1760438431_3743151318623221416_77564775231.webp',
//           'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/Untitled%20folder/articopro_1760438431_3743151318631609372_77564775231.webp',
//           'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/Untitled%20folder/articopro_1760438431_3743151318874875920_77564775231.webp'] },
//   { id: "7", name: "Sage Mode Naruto", theme: "F1", images: ['https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/Sage%20Mode%20Naruto/articopro_1760392118_3742762818514122500_77564775231.webp','https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/Sage%20Mode%20Naruto/articopro_1760392118_3742762818514103864_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/Sage%20Mode%20Naruto/articopro_1760392118_3742762818799302835_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/Sage%20Mode%20Naruto/articopro_1760392118_3742762818891549973_77564775231.webp'] },
//   { id: "8", name: "Rizzy Graffiti", theme: "Anime", images: ['https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/Rizzy%20Graffiti/articopro_1761548780_3752465608517748563_77564775231.webp', 'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/Rizzy%20Graffiti/articopro_1761548780_3752465608400363769_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/Rizzy%20Graffiti/articopro_1761548780_3752465608668800952_77564775231.webp',
//             'https://uexhvdjarllzpmbxfplh.supabase.co/storage/v1/object/public/product-images/Rizzy%20Graffiti/articopro_1761548781_3752465608777820931_77564775231.webp',
//             ] },
// ];

// const stickers = [
//   { id: "s1", name: "Tech Pack", theme: "Plain", images: [stickerTech, stickerAnime] },
//   { id: "s2", name: "Anime Collection", theme: "Anime", images: [stickerAnime, stickerTech] },
//   { id: "s3", name: "Ninja Way Mini", theme: "Anime", images: [animeNaruto, stickerAnime] },
//   { id: "s4", name: "Arc Reactor Badge", theme: "Marvel", images: [ironMan, stickerTech] },
// ];

// const coverTags = [
//   { id: "c1", name: "Premium Gold", theme: "Plain", images: [coverTag, trackpadMandala] },
//   { id: "c2", name: "Cyber Edition", theme: "Gaming", images: [cyberWolf, coverTag] },
//   { id: "c3", name: "Dragon Seal", theme: "Vibrant", images: [goldenDragon, coverTag] },
// ];

// const trackpadSkins = [
//   { id: "t1", name: "Mandala Gold", theme: "Vibrant", images: [trackpadMandala, carbonFiber] },
//   { id: "t2", name: "Carbon Touch", theme: "Carbon Fibre", images: [carbonFiber, trackpadMandala] },
//   { id: "t3", name: "Dragon Touch", theme: "Vibrant", images: [goldenDragon, trackpadMandala] },
// ];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTheme, setActiveTheme] = useState("All");
  const [activeSort, setActiveSort] = useState("popular");

  // Original filtering logic (kept intact)
  const filterProducts = (products: typeof laptopSkins) => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.theme.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTheme =
        activeTheme === "All" || product.theme === activeTheme;

      return matchesSearch && matchesTheme;
    });
  };

  const processProducts = (products: typeof laptopSkins) => {
    let result = filterProducts(products);

    if (activeSort === "new") {
      result = [...result].reverse();
    }

    if (activeSort === "theme") {
      result = [...result].sort((a, b) =>
        a.theme.localeCompare(b.theme)
      );
    }

    if (activeSort === "popular") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  };

  const filteredLaptopSkins = useMemo(
    () => processProducts(laptopSkins),
    [searchQuery, activeTheme, activeSort]
  );

  const filteredStickers = useMemo(
    () => processProducts(stickers),
    [searchQuery, activeTheme, activeSort]
  );

  const filteredCoverTags = useMemo(
    () => processProducts(coverTags),
    [searchQuery, activeTheme, activeSort]
  );

  const filteredTrackpadSkins = useMemo(
    () => processProducts(trackpadSkins),
    [searchQuery, activeTheme, activeSort]
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <CategoryQuickNav />

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
