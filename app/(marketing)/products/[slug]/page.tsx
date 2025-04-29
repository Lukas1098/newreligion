import { imageUrl } from "@/lib/image-url";
import { fetchProductBySlug } from "@/sanity/lib/products/fetchProductBySlug";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductPage({
    params
}: {
    params: Promise<{
        slug: string
    }>;
}) {
    const { slug } = await params;
    const product = await fetchProductBySlug(slug);

    if (!product) {
        return notFound();
    }

    const isOutOfStock = product.stock != null && product.stock <= 0;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mt-16 md:mt-24"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={`relative aspect-square overflow-hidden rounded-lg 
                shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}>
                    {product.image && (
                        <Image
                            src={imageUrl(product.image).url()}
                            alt={product.name ?? "Product Image"}
                            fill
                            className="object-contain transition-transform duration-300
                            hover:scale-105"
                        />
                    )}
                    {isOutOfStock && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                            <span className="text-white text-lg">Sin Stock</span>
                        </div>
                    )}
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="product-card__title-link leading-[14px] desktop:leading-[16.5px] uppercase font-500 default-focus">
                            {product.name}
                        </h1>
                        <div className="text-sm mt-3">
                            ${product.price?.toFixed(2)}
                        </div>
                        <div className="prose max-none mb-6 mt-3">
                            {Array.isArray(product.description) && (
                                <PortableText value={product.description} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}