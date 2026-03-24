import { useState, useEffect } from "react";
import { FilterBar } from "@/components/FilterBar";
import { ProductSection } from "@/components/ProductSection";
import axiosInstance from "@/api/axios";
import { Product } from "@/interfaces/product.interface";
import { Category } from "@/interfaces/category.interface";
import { SubCategory } from "@/interfaces/sub-category.interface";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
  const [activeSort, setActiveSort] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  // Fetch category details
  const fetchCategory = async () => {
    try {
      const res = await axiosInstance.get(`/categories/${categoryId}`);
      setCategory(res.data.data);
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };

  // Fetch subcategories
  const fetchSubCategories = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/sub-categories");
      setSubCategories(res.data.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products by category
  const fetchProducts = async () => {
    if (!category?.name) return;

    setLoading(true);
    try {
      const params: Record<string, any> = {
        categories: category.name,
      };

      if (selectedSubCategories.length) {
        params.sub_categories = selectedSubCategories.join(",");
      }

      const res = await axiosInstance.get("/stickers", { params });
      setProducts(res.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!categoryId) return;

    fetchCategory();
    fetchSubCategories();
  }, [categoryId]);

  useEffect(() => {
    if (category) {
      fetchProducts();
    }
  }, [category, selectedSubCategories]);

  const handleSubCategoryFilter = (subCats: string[]) => {
    setSelectedSubCategories(subCats);
  };

  // Search filter (client-side)
  const filteredProducts = (items: Product[]) => {
    if (!searchQuery) return items;

    return items.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categories.some((c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        p.sub_categories.some((sc) =>
          sc.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  };

  const finalProducts = filteredProducts(products);

  return (
    <div className="min-h-screen bg-background">
      {loading && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </div>
      )}
      {!loading &&
        <div id="products">
          <FilterBar
            themes={subCategories}
            onSearchChange={setSearchQuery}
            onThemeChange={handleSubCategoryFilter}
            onSortChange={setActiveSort}
            activeSort={activeSort}
          />

          <div className="mt-12">
            {category && (
              <ProductSection
                id={category.name.toLowerCase().replace(/\s+/g, "-")}
                title={category.name}
                description={category.tagline}
                products={finalProducts}
              />
            )}
          </div>
        </div>
      }
    </div>
  );
};

export default ProductsPage;