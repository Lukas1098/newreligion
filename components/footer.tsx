"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { Logo } from "./logo"
import Image from "next/image"

export default function Footer() {
    const isMobile = useMobile()

    return (
        <footer className="w-full py-8 border-t border-gray-100">
            <div className="container mx-auto px-4">
                {isMobile ? (
                    // Mobile Layout
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6 flex flex-col items-center space-y-2">
                            <div className="text-xs font-fold uppercase mb-2 hover:underline">
                                <strong>Tienda</strong>
                            </div>
                            <Link href="#hero" className="text-xs font-light uppercase mb-2 hover:underline">
                                HOME
                            </Link>
                            <Link href="#about" className="text-xs font-light uppercase mb-2 hover:underline">
                                ABOUT
                            </Link>
                            <Link href="#productos" className="text-xs font-light uppercase mb-2 hover:underline">
                                Productos
                            </Link>
                        </div>

                        <div className="mb-6 flex flex-col items-center space-y-4">
                            <Link href="/" aria-label="Go to homepage">
                                <Logo />
                            </Link>
                            <Link href="https://instagram.com" aria-label="Instagram" className="text-black hover:text-gray-600">
                                <Instagram size={10} />
                            </Link>
                        </div>
                    </div>
                ) : (
                    // Desktop Layout with vertical dividers
                    <div className="flex justify-center items-start mb-12 relative">
                        {/* First vertical divider */}
                        <div className="hidden md:block absolute h-40 w-px bg-gray-200 left-1/3 transform -translate-x-8"></div>

                        {/* Second vertical divider */}
                        <div className="hidden md:block absolute h-40 w-px bg-gray-200 right-1/3 transform translate-x-8"></div>


                        <div className="flex flex-col items-end justify-center pr-16 w-1/3 mt-5">
                            <div className="text-xs font-fold uppercase mb-2 hover:underline">
                                <strong>Tienda</strong>
                            </div>
                            <Link href="#hero" className="text-xs font-light uppercase mb-2 hover:underline">
                                HOME
                            </Link>
                            <Link href="#about" className="text-xs font-light uppercase mb-2 hover:underline">
                                ABOUT
                            </Link>
                            <Link href="#productos" className="text-xs font-light uppercase mb-2 hover:underline">
                                Productos
                            </Link>
                        </div>


                        <div className="flex flex-col items-center justify-start space-y-4 w-1/3">
                            <Link href="/" aria-label="Go to homepage">
                                <Logo />
                            </Link>
                            <Link href="https://instagram.com" aria-label="Instagram" className="text-black hover:text-gray-600">
                                <Instagram size={15} />
                            </Link>
                        </div>


                        <div className="w-1/3"></div>
                    </div>
                )}

                <div className="flex justify-center space-x-2 mb-8">
                    <Image
                        src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/flags/ar.png"
                        width={20}
                        height={15}
                        alt="Spanish flag"
                        className="h-4 w-auto"
                    />
                </div>

                <div className="text-center text-xs mb-4">
                    Copyright Santoz Fellas - 2025. All rights reserved.
                    <span className="mx-1">Defensa de las y los consumidores.</span>
                    <Link href="/reclamos" className="underline hover:no-underline">
                        Para reclamos ingrese aquí
                    </Link>
                </div>
            </div>
        </footer>
    )
}