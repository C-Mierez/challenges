import React from "react";

import ProductGrid from "@/components/productGrid";
import { getProducts } from "@/services/ML";

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const products = await getProducts(params.category);

    return (
        <>
            <ProductGrid products={products.results} />
        </>
    );
}
