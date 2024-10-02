import React from "react";

import { getProducts } from "@/services/ML";
import { toLocalePrice } from "@/shared/utils";

import CategoriesList from "./categoriesList";
import { Product } from "@/shared/types";

export default async function ProductGrid({ products }: { products: Product[] }) {
    return (
        <>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8">
                {products.map((product) => {
                    return (
                        <li key={product.id} className="aspect-square relative">
                            <a href={product.permalink} target="_blank" rel="noopener noreferrer">
                                <h2>{product.title}</h2>
                                <img className="mx-auto my-2" src={product.thumbnail} alt={product.title} />
                                <p>{toLocalePrice(product.price, product.currency_id)}</p>
                                <p>{product.available_quantity} en Stock</p>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
