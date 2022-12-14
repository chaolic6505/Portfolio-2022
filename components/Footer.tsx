import { motion } from 'framer-motion';
import Link from 'next/link';

const links = [
    {
        id: 1,
        url: '/',
        text: 'HOME',
    },
    {
        id: 2,
        url: '/#about',
        text: 'ABOUT',
    },
    {
        id: 3,
        url: '/#experience',
        text: 'EXPERIENCE',
    },
    {
        id: 4,
        url: '/#skills',
        text: 'SKILLS',
    },
    {
        id: 5,
        url: '/#projects',
        text: 'PROJECTS',
    },
];

export default function Footer() {
    return (
        <footer className="flex w-full prose absolute bottom-0 py-4 lg:px-0 md:px-8 px-8 items-center justify-center">
            <p className="dark:text-zinc-400 text-zinc-700 m-0 text-sm">
                {new Date().getFullYear()}-present &#169;{' '}
                <a
                    className="dark:text-zinc-300 dark:hover:text-zinc-200 text-zinc-800 hover:text-zinc-900 duration-300"
                    href="https://github.com/chaolic6505"
                    target={'_blank'}
                    rel="noreferrer"
                >
                    Chao-Li
                </a>
            </p>

            <div className="flex  items-center justify-around ml-2">
                {links.map((link) => (
                    <Link key={link.id} href={link.url} passHref>
                        <motion.button
                            key={link.id}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <p className="uppercase text-sm text-gray300 mr-2 underline">
                                {link.text}
                            </p>
                        </motion.button>
                    </Link>
                ))}
            </div>
        </footer>
    );
}
