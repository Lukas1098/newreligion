import { motion } from 'framer-motion';
import Link from 'next/link';
import { blur, translate } from '@/data/constants';

interface LinkItem {
    title: string;
    href: string;
}

interface SelectedLink {
    isActive: boolean;
    index: number;
}

interface Props {
    links: LinkItem[]
    selectedLink: SelectedLink
    setSelectedLink: (value: SelectedLink) => void
}

export default function Navlinks({ links, selectedLink, setSelectedLink }: Props) {

    const getChars = (word: string): React.ReactNode[] =>
        word.split("").map((char, i) => (
            <motion.span
                custom={[i * 0.02, (word.length - i) * 0.01]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
                key={char + i}
            >
                {char}
            </motion.span>
        ))

        return (
            <div className="w-full lg:max-w-[1200px] lg:mt-[60px] flex flex-col">
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className="w-full">
                        <motion.p
                            onMouseOver={() => setSelectedLink({ isActive: true, index })}
                            onMouseLeave={() => setSelectedLink({ isActive: false, index })}
                            variants={blur}
                            animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}
                            className="lg:text-[5vw] lg:pr-[2vw]"
                        >
                            {getChars(link.title)}
                        </motion.p>
                    </Link>
                ))}
            </div>
        )
}
