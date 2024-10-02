import React from "react";

import { getProducts } from "@/services/ML";
import { toLocalePrice } from "@/shared/utils";

import CategoriesList from "./categoriesList";
import { Product } from "@/shared/types";

export default async function ProductGrid({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      <ul className="grid h-min grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8">
        {products.map((product) => {
          return (
            <li
              key={product.id}
              className="brightness-85 relative flex flex-col justify-between overflow-hidden rounded-sm bg-white p-3 text-black"
            >
              <a
                className="absolute inset-0 z-10"
                href={product.permalink}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <h2 className="line-clamp-3 font-bold">{product.title}</h2>
              <img
                className="mx-auto w-full"
                src={product.thumbnail}
                alt={product.title}
              />
              <div className="flex items-end justify-between gap-2">
                <p>{toLocalePrice(product.price, product.currency_id)}</p>
                <p className="text-sm text-neutral-400">
                  {product.available_quantity} en Stock
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
