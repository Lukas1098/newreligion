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

    const hasImages = product.images && product.images.length > 0;

    const isOutOfStock = product.stock != null && product.stock <= 0;

    return (
        <div className="container mx-auto px-4 py-8 mb-30">
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
                    {hasImages ? (
                        <div className="space-y-4">
                            {/* Mostrar la imagen principal más grande */}
                            <div className={`relative aspect-square w-full overflow-hidden bg-[#f0f0f0] ${isOutOfStock ? "opacity-50" : ""}`}>
                                <Image
                                    src={hasImages ? imageUrl(product.images![0]).url() : "/placeholder.svg"}
                                    alt={product.name ?? "Product Image"}
                                    fill
                                    className="object-contain transition-transform duration-300 p-6"
                                />
                                {isOutOfStock && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                                        <span className="text-white text-lg">Sin Stock</span>
                                    </div>
                                )}
                            </div>

                            {/* Para las miniaturas adicionales */}
                            {hasImages && product.images!.length > 1 && (
                                <div className="flex overflow-x-auto gap-2 mt-2">
                                    {product.images!.map((image, index) => (
                                        <div key={index} className="relative w-20 h-20 flex-shrink-0 cursor-pointer">
                                            <Image
                                                src={imageUrl(image).url()}
                                                alt={`${product.name} - image ${index + 1}`}
                                                fill
                                                className="object-contain p-1"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="relative aspect-square w-full overflow-hidden bg-[#f0f0f0]">
                            <div className="flex items-center justify-center h-full">
                                <span className="text-gray-400">No image available</span>
                            </div>
                        </div>
                    )}
                </div>


                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">

                    <h1 className="uppercase font-sans text-xs font-bold tracking-wide">
                        {product.name}
                    </h1>


                    <div className="mt-4">
                        <p className="font-normal text-xs">${product.price?.toLocaleString("es-AR")}</p>
                    </div>

                    <div className="border-t border-gray-100 my-4"></div>


                    {product.sizes && product.sizes.length > 0 && (
                        <div className="mt-13 mb-10 mx-auto text-xs">
                            <span className="text-xs font-fold block mb-1">
                                <strong>Talles disponibles</strong>
                            </span>
                            <div className="border-t border-gray-100 mt-1 mb-3"></div>
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

                    <div className="border-t border-gray-100 my-4"></div>

                    <div className="mt-13 mb-10 mx-auto text-xs">
                        <span className="text-xs font-fold block mb-1">
                            <strong>Envios</strong>
                        </span>
                        <div className="border-t border-gray-100 mt-1 mb-3"></div>
                        <p className="hover:underline">Hacemos envios a toda Argentina por Andreani.</p>
                    </div>

                    <div className="border-t border-gray-100 my-4"></div>
                    {Array.isArray(product.description) && (
                        <div className="prose max-w-none mt-20 mb-6 mx-auto text-xs font-light hover:underline">
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