"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const products = [
    {
        url: "https://cdn.cosmos.so/0648fc2a-ace3-4bf8-89f3-2ad62813d906?format=jpeg",
        position: [-3.5, 0.5, 0] as [number, number, number],
        rotation: -0.15,
        floatSpeed: 1.2,
    },
    {
        url: "https://cdn.cosmos.so/cf50a12b-c017-4795-8407-9b71c703c4a3?format=jpeg",
        position: [-2.0, -0.8, 0] as [number, number, number],
        rotation: -0.08,
        floatSpeed: 1.5,
    },
    {
        url: "https://cdn.cosmos.so/e2d52568-b2ac-4809-9b39-369dcbe1372e?format=jpeg",
        position: [2.0, -0.8, 0] as [number, number, number],
        rotation: 0.08,
        floatSpeed: 1.8,
    },
    {
        url: "https://cdn.cosmos.so/9e72358b-b467-4c6a-b608-bae9dd89749e?format=jpeg",
        position: [3.5, 0.5, 0] as [number, number, number],
        rotation: 0.15,
        floatSpeed: 1.4,
    },
]

function ProductCard({ url, position, rotation, floatSpeed }: {
    url: string
    position: [number, number, number]
    rotation: number
    floatSpeed: number
}) {
    const texture = useTexture(url)
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame(({ mouse }) => {
        if (!meshRef.current) return
        meshRef.current.rotation.y += (mouse.x * 0.15 - meshRef.current.rotation.y) * 0.05
        meshRef.current.rotation.x += (-mouse.y * 0.1 - meshRef.current.rotation.x) * 0.05
    })

    return (
        <Float speed={floatSpeed} floatIntensity={0.4} rotationIntensity={0.1}>
            <mesh ref={meshRef} position={position} rotation={[0, 0, rotation]}>
                <planeGeometry args={[1.2, 1.5]} />
                <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide} />
            </mesh>
        </Float>
    )
}

function Scene() {
    return (
        <>
            <ambientLight intensity={1.5} />
            {products.map((p, i) => (
                <ProductCard key={i} {...p} />
            ))}
        </>
    )
}

export function Hero() {
    return (
        <main className="overflow-x-hidden" id="home">
            <section id='home' className="min-h-screen relative">
                <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
                    <Image
                        src="https://cdn.cosmos.so/cafd9092-ad66-4add-8fe3-c3e710790d63?format=jpeg"
                        alt="New Religion Studio"
                        width={1000}
                        height={1000}
                        className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
                        priority
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 0.5 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeIn", delay: 0.40 } }}
                        className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
                        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
                            <Suspense fallback={null}>
                                <Scene />
                            </Suspense>
                        </Canvas>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 0.5 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeIn", delay: 0.10 } }}
                        className="text-center text-white font-bold uppercase text-5xl sm:text-6xl lg:text-9xl z-20 px-4 w-full"
                    >
                        Renaissance <br className="hidden md:block" /> Edition
                    </motion.p>
                    
                    <motion.button
                        initial={{ opacity: 0, y: 0.5 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeIn", delay: 0.30 } }}
                        className="cursor-pointer mt-6 z-20 bg-white uppercase font-bold transition-colors px-5 py-2.5 text-sm text-neutral-900 border border-neutral-200 hover:bg-neutral-100"
                    >
                        <Link href="#products">
                            New collection
                        </Link>
                    </motion.button>
                </div>
            </section>
        </main>
    );
}