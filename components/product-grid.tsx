"use client"

import type { Product } from "@/sanity.types"
import { AnimatePresence, motion } from "framer-motion"
import ProductThumb from "./product-thumb"

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products?.map((product) => {
        return (
          <AnimatePresence key={product._id}>
            <motion.div 
              layout 
              initial={{ opacity: 0.2 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="p-1"
            >
              <ProductThumb key={product._id} product={product} />
            </motion.div>
          </AnimatePresence>
        )
      })}
    </div>
  )
}