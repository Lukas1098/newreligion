"use client"

import Link from "next/link"

interface LinkItem {
    id: number;
    title: string;
    href: string;
}

interface Props {
    links: LinkItem[]
}

export default function FooterContent({ links }: Props) {
    return (
        <footer className='bg-black py-8 px-12 h-full w-full flex flex-col justify-between md:-pb-7'>
            <div className="flex shrink-0 gap-20">
                <div className="flex flex-col gap-2 text-white">
                    <h3 className="mb-2 uppercase">Links</h3>
                    {
                        links.map((link) =>
                            <Link href={link.href} key={link.id}>
                                <p>{link.title}</p>
                            </Link>
                        )
                    }
                </div>
            </div>

            <div className='flex justify-between items-end'>
                <h1 className='text-[14vw] leading-[0.8] lg:mb-6'>New Religion</h1>
                <p className="px-5">©{new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}