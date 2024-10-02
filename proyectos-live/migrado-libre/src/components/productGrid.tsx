import { getProducts } from "@/services/ML";
import { toLocalePrice } from "@/shared/utils";

export default async function  ProductGrid({ category }: { category: string }) {

    const products = await getProducts(category);

    return (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8">
          {
            products.results.map(product => {
              return (
                <li key={product.id} className="aspect-square relative">
                  <h2>{product.title}</h2>
                  <img className="mx-auto my-2" src={product.thumbnail} alt={product.title} />
                  <p>{toLocalePrice(product.price, product.currency_id)}</p>
                  <p>{product.available_quantity} en Stock</p>
                </li>
              )
            })
          }
        </ul>
    );
}