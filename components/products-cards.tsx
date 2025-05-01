import type { Product } from "@/sanity.types"
import ProductGrid from "./product-grid"


interface ProductViewProps {
  products: Product[]
}

const ProductsView = ({ products }: ProductViewProps) => {
  return (
    <section id="productos" className="py-16"> 
      <div className="flex flex-col items-center justify-top p-4">
        
        <div className="w-full max-w-7xl">
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  )
}

export default ProductsView