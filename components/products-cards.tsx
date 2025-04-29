import type { Product } from "@/sanity.types"
import ProductGrid from "./product-grid"


interface ProductViewProps {
  products: Product[]
}

const ProductsView = ({ products }: ProductViewProps) => {
  return (
    <section className="py-16"> 
      <div className="flex flex-col items-center justify-top p-4">
        
        <div className="w-full max-w-7xl">
          <div className="mb-10 text-center"> 
            {/* <h2 className="text-4xl  mb-3">Nuestros productos</h2> */}
          </div>
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  )
}

export default ProductsView