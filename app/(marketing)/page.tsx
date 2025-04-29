import { Hero } from "@/components/hero";
import { Manifest } from "@/components/manifest";
import ProductsView from "@/components/products-cards";
import { fetchAllProducts } from "@/sanity/lib/products/fetchAllProducts";



export default async function Home() {
  const products = await fetchAllProducts();
  return (
    <>
      <Hero />
      <Manifest />
      <ProductsView products={products} />
    </>
  );
}
