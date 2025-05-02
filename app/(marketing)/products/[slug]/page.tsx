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

    const isOutOfStock = product.stock != null && product.stock <= 0;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="md:w-1/2 pr-0 relative">
                <Link href={"/"} className="flex items-center gap-2">
                    <Image
                        src="/back-to-menu.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="w-5 h-auto"
                    /> 
                    <div >
                        <h1 className="mx-auto text-sm font-light hover:underline">
                            Volver
                        </h1>
                    </div>
                </Link>
            </div>
            <div className="mt-16 md:mt-24"></div>
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto">

                <div className="md:w-1/2 pr-0">
                    <div className={`relative aspect-square w-full overflow-hidden bg-[#f0f0f0] ${isOutOfStock ? "opacity-50" : ""}`}>
                        {product.image && (
                            <Image
                                src={imageUrl(product.image).url()}
                                alt={product.name ?? "Product Image"}
                                fill
                                className="object-contain transition-transform duration-300 p-6"
                            />
                        )}
                        {isOutOfStock && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                                <span className="text-white text-lg">Sin Stock</span>
                            </div>
                        )}
                    </div>
                </div>


                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">

                    <h1 className="uppercase font-sans text-xs font-bold tracking-wide">
                        {product.name}
                    </h1>


                    <div className="mt-4">
                        <p className="font-normal text-xs">${product.price?.toFixed(2)}</p>
                    </div>

                    <div className="border-t border-gray-100 my-4"></div>


                    {product.sizes && product.sizes.length > 0 && (
                        <div className="mt-15">
                            <div className="border-t border-gray-100 my-4"></div>
                            <div className="flex gap-2">
                                {product.sizes.map((size: string) => (
                                    <button
                                        key={size}
                                        className="text-xs font-sans font-medium"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="border-t border-gray-100 my-4"></div>

                    <div className="mt-20 mb-6 mx-auto text-xs font-light hover:underline">
                    <div className="border-t border-gray-100 my-4"></div>
                        <p>Hacemos envios a toda Argentina.</p>
                    </div>
                    <div className="border-t border-gray-100 my-4"></div>
                    {Array.isArray(product.description) && (
                        <div className="prose max-w-none mt-20 mb-6 mx-auto text-xs font-light hover:underline">
                            <PortableText value={product.description} />
                        </div>
                    )}

                    <div className="border-t border-gray-100 my-4"></div>

                    <BuyButton isOutOfStock={isOutOfStock} productName={product.name}  />
                </div>
            </div>
        </div>
    );
}