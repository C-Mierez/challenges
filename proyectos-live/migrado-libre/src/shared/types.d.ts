export interface Product {
  id: string;
  title: string;
  permalink: string;
  thumbnail: string;
  category_id: string;
  price: number;
  currency_id: string;
  available_quantity: number;
  official_store_name: string;
}

export interface Category {
  id: string;
  name: string;
  parentCategoryId?: string;
}
