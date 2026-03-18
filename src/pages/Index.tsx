import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FilterBar } from "@/components/FilterBar";
import { ProductSection } from "@/components/ProductSection";
import { LaptopPreview } from "@/components/LaptopPreview";
import { CustomSection } from "@/components/CustomSection";
import { FeedbackSection } from "@/components/FeedbackSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import axiosInstance from "@/api/axios";
import { Product } from "@/interfaces/product.interface";
import { Category } from "@/interfaces/category.interface";
import { SubCategory } from "@/interfaces/sub-category.interface";

const Index = () => {
  const [stickers, setStickers] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
  const [activeSort, setActiveSort] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get("/categories");
      setCategories(res.data?.data || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Fetch sub-categories
  const fetchSubCategories = async () => {
    try {
      const res = await axiosInstance.get("/sub-categories");
      setSubCategories(res.data?.data || []);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  // Fetch stickers with filters
  const fetchStickers = async () => {
    try {
      setLoading(true);
      const params: Record<string, string> = {};

      if (selectedCategories.length)
        params.categories = selectedCategories.join(",");

      if (selectedSubCategories.length)
        params.sub_categories = selectedSubCategories.join(",");

      const res = await axiosInstance.get("/stickers", { params });
      setStickers(res.data?.data || []);
    } catch (error) {
      console.error("Error fetching stickers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchSubCategories();
  }, []);

  useEffect(() => {
    fetchStickers();
  }, [selectedCategories, selectedSubCategories]);

  const handleCategoryFilter = (cats: string[]) => {
    setSelectedCategories(cats);
  };

  const handleSubCategoryFilter = (subCats: string[]) => {
    setSelectedSubCategories(subCats);
  };

  const filteredBySearch = (products: Product[]) => {
    if (!searchQuery) return products;

    return products.filter(
      (p) =>
        p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categories?.some((c) =>
          c.name?.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        p.sub_categories?.some((sc) =>
          sc.name?.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  };

  const getProductsByCategory = (categoryName: string) =>
    filteredBySearch(stickers || []).filter((p) =>
      p.categories?.some((c) => c.name === categoryName)
    );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <div id="products">
        <FilterBar
          themes={subCategories || []}
          onSearchChange={setSearchQuery}
          onThemeChange={handleSubCategoryFilter}
          onSortChange={setActiveSort}
          activeSort={activeSort}
        />

        {categories?.map((category) => {
          const categoryProducts = getProductsByCategory(category.name);

          return (
            <ProductSection
              key={category._id}
              id={category.name.toLowerCase().replace(/\s+/g, "-")}
              title={category.name}
              description={category.tagline}
              products={categoryProducts || []}
            />
          );
        })}
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