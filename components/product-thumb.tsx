import { imageUrl } from "@/lib/image-url"
import type { Product } from "@/sanity.types"
import Image from "next/image"
import Link from "next/link"

export default function ProductThumb({ product }: { product: Product }) {
  const isOutOfStock = product?.stock === 0

  return (
    <Link href={`/products/${product.slug?.current}`} className="group flex flex-col transition-all duration-200">
      <div className={`relative aspect-square w-full overflow-hidden bg-[#f0f0f0] ${isOutOfStock ? "opacity-30" : ""}`}>
        {product.image && (
          <Image
            className="object-contain transition-transform duration-300 p-1
                        group-hover:scale-105"
            src={imageUrl(product.image).url() || "/placeholder.svg"}
            alt={product.name || "Product Image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <span className="text-white text-lg font-sans font-medium">Sin Stock</span>
          </div>
        )}
      </div>

      <div className="pt-3 pb-1 flex flex-col">
        <h2 className="uppercase font-sans text-xs font-stretch-75% tracking-wide">
          {product.name || "Product Name"}
        </h2>

        <div className="flex items-center justify-between mt-1 w-full">
          <p className="font-normal text-sm">${product.price?.toLocaleString("es-AR")}</p>

          {product.sizes && product.sizes.length > 0 && (
            <div className="text-xs">
              <div className="flex flex-wrap gap-1">
                {product.sizes.map((size: string) => (
                  <span
                    key={size}
                    className="text-xs font-sans font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}