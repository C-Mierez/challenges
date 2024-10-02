import { SELLER_ID, API_URL } from "@/shared/env";
import { Category, type Product } from "@/shared/types";

export async function getProducts(category?: string): Promise<{ results: Product[] }> {
  if (!SELLER_ID || !API_URL) {
    throw new Error("Missing environment variables");
  }

  const url = new URL(`${API_URL}/sites/MLA/search`);
  url.searchParams.append("seller_id", SELLER_ID);
  if (category) {
    url.searchParams.append("category", category);
  }

  const res = await fetch(url.toString());

  const products = (await res.json()) as Promise<{ results: Product[] }>;

  return products;
}

export async function getCategories(products: Product[]) {
  // Get the unique categories from the list of products
  const uniqueCategoryIds = Array.from(new Set(products.map((product) => product.category_id)));

  const fetchedCategories = uniqueCategoryIds.map(async (category_id) => {
    const url = new URL(`${API_URL}/categories/${category_id}`);
    const res = await fetch(url.toString());
    return res.json() as Promise<{
      path_from_root: {
        id: string;
        name: string;
      }[];
    }>;
  });

  const res = await Promise.all(fetchedCategories);

  // Create a tree structure from the categories
  let categoryTrees = new Map<string, Category>();

  res.forEach((category) => {
    category.path_from_root.forEach((step, index) => {
      const nodeValue = categoryTrees.get(step.id);
      if (!nodeValue) {
        categoryTrees.set(step.id, {
          ...step,
          parentCategoryId: category.path_from_root[index - 1]?.id,
        });
      }
    });
  });

  console.log(categoryTrees.values().toArray())

  return categoryTrees.values().toArray();
}
