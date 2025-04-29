"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

const backgrounds = [
    {
        type: "video",
        src: "https://yhxagirrbrqtcqer.public.blob.vercel-storage.com/12279551_3840_2160_60fps-DHnKDNhSKEAnrUNc9jd1QKzR9ZM2sB.mp4"
    },
    {
        type: "image",
        src: "https://yhxagirrbrqtcqer.public.blob.vercel-storage.com/tumblr_db8472cfbb89a155148003b053d5f3de_158142e8_400-bZnFkLIw4KtPpDM3cpYTJaHKNymPTw.gif" // Reemplaza con la URL de tu GIF
    }
];

export function Hero() {
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex(prev => (prev + 1) % backgrounds.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="overflow-x-hidden pb-12 md:pb-24">
            <section id='hero' className="min-h-screen relative">
                <div className="relative w-full h-screen overflow-hidden">
                    {backgrounds.map((bg, index) => (
                        <div
                            key={bg.src}
                            className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${index === currentBgIndex ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            {bg.type === "video" ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="size-full -scale-x-100 object-cover theme-preserve-video opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                                    src={bg.src}
                                />
                            ) : (
                                <Image
                                    src={bg.src}
                                    alt="Background"
                                    fill
                                    className="object-cover theme-preserve-video opacity-50 dark:opacity-35"
                                />
                            )}
                        </div>
                    ))}

                    <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
                        <Image
                            src="https://yhxagirrbrqtcqer.public.blob.vercel-storage.com/Santoz-Fella%27s-Png-ExCCnzHjLAeJM8HTE8oESBbOuERJTo.png"
                            alt="SDFM 2520"
                            width={350}
                            height={350}
                            className="object-contain mb-4"
                        />
                        <p className="mx-6 sm:mx-8 md:mx-auto mt-4 max-w-lg text-center text-base font-normal hero-text px-4 sm:px-0">
                            No nos conformamos con tu mirada fugaz.
                            Esta colección desgarra las normas de lo aceptable.
                            Vístete para ofender el buen gusto.
                            O viste como todos los demás.
                            Tú decides.
                            Nacidos en las sombras de la ciudad.
                            Creando piezas que definen la contracultura.
                            Donde la moda encuentra su lado oscuro.
                            EST 2025
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}