import { imageUrl } from "@/lib/image-url";
import { fetchProductBySlug } from "@/sanity/lib/products/fetchProductBySlug";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import BuyButton from "@/components/buy-button";
import Link from "next/link";

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

    const productImages = product.images || [];
    const hasImages = productImages.length > 0;
    const isOutOfStock = product.stock != null && product.stock <= 0;

    return (
        <div className="container mx-auto px-4 py-8 mb-30">
            <div className="md:w-1/2 pr-0 relative">
                <Link href={"/"} className="flex items-center gap-2 mt-20">
                    <div>
                        <h1 className="mx-auto text-sm font-light hover:underline">
                            Go back
                        </h1>
                    </div>
                </Link>
            </div>
            <div className="mt-16 md:mt-24"></div>
            
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto relative">
                <div className="md:w-1/2 pr-0">
                    <div className="md:hidden">
                        {hasImages ? (
                            <div className="relative">
                                <div className="overflow-x-auto flex snap-x snap-mandatory">
                                    {productImages.map((image, index) => (
                                        <div 
                                            key={index} 
                                            className={`relative aspect-square min-w-full w-full snap-center
                                                       overflow-hidden bg-[#f0f0f0] ${isOutOfStock ? "opacity-50" : ""}`}
                                        >
                                            <Image
                                                src={imageUrl(image).url()}
                                                alt={`${product.name} - image ${index + 1}`}
                                                fill
                                                className="object-contain p-6"
                                            />
                                            {isOutOfStock && index === 0 && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                                                    <span className="text-white text-lg">Out of stock</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center mt-4 gap-1">
                                    {productImages.map((_, index) => (
                                        <div key={index} className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="relative aspect-square w-full overflow-hidden bg-[#f0f0f0]">
                                <div className="flex items-center justify-center h-full">
                                    <span className="text-gray-400">No image available</span>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="hidden md:block">
                        {hasImages ? (
                            <div className="space-y-8 sticky">
                                {productImages.map((image, index) => (
                                    <div 
                                        key={index} 
                                        className={`relative aspect-square w-full overflow-hidden bg-[#f0f0f0] ${isOutOfStock && index === 0 ? "opacity-50" : ""}`}
                                    >
                                        <Image
                                            src={imageUrl(image).url()}
                                            alt={`${product.name} - image ${index + 1}`}
                                            fill
                                            className="object-contain p-6"
                                        />
                                        {isOutOfStock && index === 0 && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                                                <span className="text-white text-lg">Out of stock</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="relative aspect-square w-full overflow-hidden bg-[#f0f0f0]">
                                <div className="flex items-center justify-center h-full">
                                    <span className="text-gray-400">No image available</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 md:sticky md:top-24 md:self-start">
                    <h1 className="uppercase font-sans text-xs font-bold tracking-wide">
                        {product.name}
                    </h1>

                    <div className="mt-4">
                        <p className="font-normal text-xs">${product.price?.toLocaleString("es-AR")}</p>
                    </div>

                    {product.sizes && product.sizes.length > 0 && (
                        <div className="mt-13 mb-10 mx-auto text-xs">
                            <span className="text-xs font-fold block mb-1">
                                <strong>Sizes</strong>
                            </span>
                            
                            <div className="flex gap-2">
                                {product.sizes.map((size: string) => (
                                    <button
                                        key={size}
                                        className="text-xs font-sans font-medium hover:underline"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                  
                    {Array.isArray(product.description) && (
                        <div className="prose max-w-none mt-15 mb-6 mx-auto text-xs font-light">
                            <PortableText value={product.description} />
                        </div>
                    )}

                    <div className="border-t border-gray-100 my-4"></div>

                    <BuyButton isOutOfStock={isOutOfStock} productName={product.name} />
                </div>
            </div>
        </div>
    );
}