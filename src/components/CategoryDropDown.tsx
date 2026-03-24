import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useCategories } from "@/hooks/useCategories";

const CategoriesDropDown = () => {
  const { categories, loading } = useCategories();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 font-medium text-muted-foreground hover:text-foreground transition-colors">
        Categories
        <ChevronDown className="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[220px] p-2">
        {loading ? (
          <DropdownMenuItem disabled>Loading...</DropdownMenuItem>
        ) : (
          categories.map((cat) => (
            <DropdownMenuItem key={cat._id} className="px-3 py-2 cursor-pointer">
              <Link to={`/products/${cat._id}`}>{cat.name}</Link>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoriesDropDown;