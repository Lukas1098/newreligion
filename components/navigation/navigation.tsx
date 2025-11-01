"use client"
import { height } from '@/data/constants';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navlinks from './nav-links';
import { navItems } from '@/data/data';

export default function Navigation() {
    const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

    return (
        <motion.div
            className="overflow-hidden"
            variants={height}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <div className="flex gap-[50px] mb-[80px] lg:mb-0 lg:justify-between px-4 sm:px-6 lg:px-0">
                <div className="flex flex-col justify-between w-full">
                    <Navlinks links={navItems} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
                </div>
            </div>
        </motion.div>

    )
}