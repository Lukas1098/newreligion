'use client'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { opacity, background } from '@/data/constants'
import Image from 'next/image'
import Navigation from './navigation'

export function MainNav() {
    const [isActive, setIsActive] = useState(false)

    return (
        <header className="fixed top-0 left-0 z-[100] w-full bg-white box-border p-[10px] sm:p-[20px]">
            <div className="flex justify-center  text-[12px] sm:text-[15px] font-normal relative">

                <div className="flex flex-row items-center justify-start gap-2"> 
                <Link href="#home" className="flex flex-row items-center justify-start gap-1">
                    <Image src="https://cdn.cosmos.so/3ffecc66-d567-467c-9909-5859eeccb1c9?format=jpeg" alt="New Religion" width={1000} height={1000} className="w-10 h-10" />
                    <p className="font-semibold">new religion</p>
                </Link>
                </div>

                <div
                    className="flex items-center justify-center gap-2 sm:gap-[8px] cursor-pointer absolute right-0 top-2.5"
                    onClick={() => setIsActive(!isActive)}
                >

                    <div
                        className={`w-[22.5px] relative pointer-events-none`}
                    />

                    <div className="flex items-center relative uppercase font-semibold">
                        <motion.p
                            variants={opacity}
                            animate={!isActive ? 'open' : 'closed'}
                            className="m-0"
                        >
                            Menu
                        </motion.p>
                        <motion.p
                            variants={opacity}
                            animate={isActive ? 'open' : 'closed'}
                            className="absolute m-0"
                        >
                            Close
                        </motion.p>
                    </div>

                </div>
            </div>

            <motion.div
                variants={background}
                initial="initial"
                animate={isActive ? 'open' : 'closed'}
                className="absolute w-full h-full bg-black/50 top-full left-0 z-[99]"
            />

            <AnimatePresence mode="wait">
                {isActive && <Navigation />}
            </AnimatePresence>
        </header>
    )
}
