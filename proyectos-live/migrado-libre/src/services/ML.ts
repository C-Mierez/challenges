import { SELLER_ID, API_URL} from '@/shared/env';
import { type Product } from '@/shared/types';

export async function getProducts(category?: string) : Promise<{results: Product[]}> {
    if (!SELLER_ID || !API_URL) {
        throw new Error("Missing environment variables");
    }
   
    const url = new URL(`${API_URL}/sites/MLA/search`);
    url.searchParams.append('seller_id', SELLER_ID);
    if (category) {
        url.searchParams.append('category', category);
    }

    const res = await fetch(url.toString());
    console.log(url)
    const products = await res.json() as Promise<{results: Product[]}>;

    // console.log(products);

    return products;

}