import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";

const themes = [
  "All",
  "Anime",
  "Marvel",
  "Transfomer",
  "Stranger Things",
  "DC",
   "Vibrant",
  "Studio Ghibli",
  "F1",
  "Star Wars",
  "Gaming",
  "Carbon Fibre",
  "Plain",

];

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
  const [searchValue, setSearchValue] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange(value);
  };

  return (
    <div className="py-6 sticky top-20 z-40 glass">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search skins..."
              value={searchValue}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition-colors font-body"
            />
            {searchValue && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-3 rounded-xl bg-surface border border-border hover:border-primary transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters</span>
          </button>

          {/* Desktop filters */}
          <div className="hidden lg:flex items-center gap-4 flex-1">
            {/* Theme pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1">
              {themes.map((theme) => (
                <button
                  key={theme}
                  onClick={() => onThemeChange(theme)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeTheme === theme
                      ? "bg-primary text-primary-foreground"
                      : "bg-surface hover:bg-surface-elevated text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>

            {/* Sort dropdown */}
            <select
              value={activeSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-4 py-2 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer font-body"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  Sort: {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile filters expanded */}
        <motion.div
          initial={false}
          animate={{ height: showFilters ? "auto" : 0, opacity: showFilters ? 1 : 0 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="pt-4 space-y-4">
            {/* Theme pills */}
            <div className="flex flex-wrap gap-2">
              {themes.map((theme) => (
                <button
                  key={theme}
                  onClick={() => onThemeChange(theme)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTheme === theme
                      ? "bg-primary text-primary-foreground"
                      : "bg-surface hover:bg-surface-elevated text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={activeSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition-colors font-body"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  Sort: {option.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
