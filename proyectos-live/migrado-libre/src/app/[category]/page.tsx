import ProductGrid from "@/components/productGrid";

export default function CategoryPage( {params}: {params: {category: string}}) {
    return (
        <ProductGrid category={params.category} />
    )

}