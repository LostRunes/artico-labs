import { Category } from "./category.interface";
import { SubCategory } from "./sub-category.interface";

export interface Product {
    _id: string;
    name: string;
    tagline: string;
    productFeatures: string[];
    price: number;
    images: string[];
    categories: Category[];
    sub_categories: SubCategory[];
    priority: number;
    createdAt: string;
    updatedAt: string;
    slug: string;
    __v: number;
}