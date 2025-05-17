"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { MainNav } from "./navigation/main-nav";

const backgrounds = [
    {
        type: "image",
        src: "/hero1_gif.gif"
    },
    {
        type: "image",
        src: "/hero3_gif.gif"
    },
    {
        type: "image",
        src: "/hero4_gif.gif"
    },
    {
        type: "image",
        src: "/hero5_gif.gif"
    },
];

export function Hero() {
    const [currentBgIndex, setCurrentBgIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const interval = setInterval(() => {
            setCurrentBgIndex(prev => (prev + 1) % backgrounds.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="overflow-x-hidden pb-12 md:pb-24">
            <MainNav />
            <section id='hero' className="min-h-screen relative">
                <div className="relative w-full h-screen overflow-hidden">
                    {backgrounds.map((bg, index) => (
                        <div
                            key={bg.src}
                            className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${!isMounted ? (index === 0 ? "opacity-100" : "opacity-0") :
                                    (index === currentBgIndex ? "opacity-100" : "opacity-0")
                                }`}
                        >
                            <Image
                                src={bg.src}
                                alt="Background"
                                fill
                                className="object-cover theme-preserve-video opacity-50 dark:opacity-35"
                                priority={index === 0}
                                unoptimized={true}
                            />
                        </div>
                    ))}
                    <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
                        <Image
                            src="/Hero-logo.png"
                            alt="SDFM 2520"
                            width={350}
                            height={350}
                            className="object-contain mb-4"
                        />
                        <p className="mx-6 sm:mx-8 md:mx-auto mt-4 max-w-lg text-center text-base font-normal hero-text px-4 sm:px-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}