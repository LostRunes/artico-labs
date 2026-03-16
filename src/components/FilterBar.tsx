import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { SubCategory } from "@/interfaces/sub-category.interface";
import axiosInstance from "@/api/axios";

// const themes = [
//   "All",
//   "Anime",
//   "Marvel",
//   "Transfomer",
//   "Stranger Things",
//   "DC",
//   "Vibrant",
//   "Studio Ghibli",
//   "F1",
//   "Star Wars",
//   "Gaming",
//   "Carbon Fibre",
//   "Plain",

// ];

const sortOptions = [
  { value: "popular", label: "Popular" },
  { value: "new", label: "New" },
  { value: "theme", label: "Theme" },
];

interface FilterBarProps {
  onSearchChange: (value: string) => void;
  onThemeChange: (theme: string) => void;
  onSortChange: (sort: string) => void;
  activeTheme: string;
  activeSort: string;
}

export const FilterBar = ({
  onSearchChange,
  onThemeChange,
  onSortChange,
  activeTheme,
  activeSort,
}: FilterBarProps) => {
  const [themes, setThemes] = useState<SubCategory[]>([]);

  const [searchValue, setSearchValue] = useState("");
  const [showSort, setShowSort] = useState(false);
  const [showFilters, setShowFilters] = useState(false);


  useEffect(() => {
    getSubCategories();
  }, [])

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange(value);
  };

  const getSubCategories = async (): Promise<void> => {
    const response = await axiosInstance.get("/sub-categories");

    const data = await response.data.data;
    setThemes(data);
  }

  return (
    <div className="py-6 sticky top-20 z-40 glass">
      <div className="section-container space-y-4 relative">

        <div className="flex items-center gap-3">

          <div className="relative flex-1">

            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search skins..."
              value={searchValue}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-12 pr-14 py-3 rounded-full bg-surface border border-border focus:border-primary focus:outline-none transition-colors font-body"
            />

            {searchValue && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute right-12 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => setShowSort(!showSort)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>

            {showSort && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 top-14 w-44 bg-surface border border-border rounded-xl shadow-xl z-50"
              >
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSortChange(option.value);
                      setShowSort(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${
                      activeSort === option.value
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-black"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </motion.div>
            )}
          </div>



          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden px-5 py-3 rounded-full bg-surface border border-border hover:border-primary transition-colors"
          >
            Filters
            </button>

        </div>
      


        {/* THEME PILLS */}
        <motion.div
          className={`${showFilters ? "flex flex-wrap" : "hidden"} lg:flex lg:flex-nowrap lg:overflow-x-auto lg:no-scrollbar flex-wrap gap-2 pb-1`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <button
              onClick={() => onThemeChange("All")}
              className={`theme-border-anim px-4 py-[9px] flex items-center justify-center rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 bg-transparent relative overflow-hidden ${
                activeTheme === "All"
                  ? "active text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              All

              <svg viewBox="0 -3 103 40" preserveAspectRatio="none">
                <rect
                  x="1.8"
                  y="2.5"
                  width="99"
                  height="28"
                  rx="20"
                  ry="20"
                  pathLength="0.9"
                />
              </svg>
            </button>
          {themes.map((theme) => (
            <button
              key={theme._id}
              onClick={() => onThemeChange(theme.name)}
              className={`theme-border-anim px-4 py-[9px] flex items-center justify-center rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 bg-transparent relative overflow-hidden ${
                activeTheme === theme.name
                  ? "active text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {theme.name}

              <svg viewBox="0 -3 103 40" preserveAspectRatio="none">
                <rect
                  x="1.8"
                  y="2.5"
                  width="99"
                  height="28"
                  rx="20"
                  ry="20"
                  pathLength="0.9"
                />
              </svg>
            </button>
          ))}
        </motion.div>

      </div>
    </div>
  );
};