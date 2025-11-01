import { Hero } from "@/components/hero";
import { Manifest } from "@/components/manifest";
import ProductsView from "@/components/products-cards";
import { fetchAllProducts } from "@/sanity/lib/products/fetchAllProducts";
import { SmoothScroll } from "@/app/providers/smooth-scroll";

export default async function Home() {
  const products = await fetchAllProducts();

  return (
    <>
      <SmoothScroll />
      <Hero/>
      <Manifest />
      <ProductsView products={products} />
    </>
  );
}