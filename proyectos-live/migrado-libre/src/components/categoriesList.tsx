import { getCategories, getProducts } from "@/services/ML";

import { CategoriesRoot } from "./categoriesRoot";

export default async function CategoriesList() {
  const categories = await getCategories((await getProducts()).results);

  return (
    <aside className="sticky left-0 top-6 h-min bg-neutral-900 py-3">
      <CategoriesRoot categories={categories} />
    </aside>
  );
}
