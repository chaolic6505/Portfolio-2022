import { SiFirebase, SiFastlane, SiGmail } from 'react-icons/si';
import {
    FaJs,
    FaPhp,
    FaJava,
    FaSwift,
    FaGitAlt,
    FaReact,
    FaGithub,
    FaPython,
    FaLinkedin,
} from 'react-icons/fa';
import { DiVisualstudio } from 'react-icons/di';
import { SiTypescript, SiKotlin } from 'react-icons/si';

const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'About Me', route: '/about' },
    // { name: 'Github', route: '/github' },
];

const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Chao-Li Chen. All Rights Reserved.`,
    author: {
        name: 'Chao-Li Chen',
        accounts: [
            {
                type: 'gray',
                name: 'Github',
                icon: <FaGithub />,
                url: 'https://github.com/chaolic6505',
            },
            {
                type: 'linkedin',
                name: 'Linkedin',
                icon: <FaLinkedin />,
                url: 'https://www.linkedin.com/in/chaolic1120/',
            },
            {
                type: 'red',
                name: 'Gmail',
                icon: <SiGmail />,
                url: 'mailto:chaolic6505@gmail.com',
            },
        ],
    },
};

const languages = [
    {
        name: 'Javascript',
        icon: <FaJs fontSize="20px" />,
    },
    {
        name: 'Typescript',
        icon: <SiTypescript fontSize="20px" />,
    },
    {
        name: 'Python',
        icon: <FaPython fontSize="20px" />,
    },
    {
        name: 'PHP',
        icon: <FaPhp fontSize="20px" />,
    },
    {
        name: 'Java',
        icon: <FaJava fontSize="20px" />,
    },
    {
        name: 'Kotlin',
        icon: <SiKotlin fontSize="20px" />,
    },
    {
        name: 'C#',
        icon: <DiVisualstudio fontSize="20px" />,
    },
    {
        name: 'Swift',
        icon: <FaSwift fontSize="20px" />,
    },
];

const techs = [
    {
        name: 'React',
        icon: <FaReact fontSize="20px" />,
        url: 'https://reactnative.dev/',
    },
    {
        name: 'React Native',
        icon: <FaReact fontSize="20px" />,
        url: 'https://reactnative.dev/',
    },

    {
        name: 'Firebase',
        icon: <SiFirebase fontSize="20px" />,
        url: 'https://firebase.google.com/',
    },
    {
        name: 'Github',
        icon: <FaGitAlt fontSize="20px" />,
        url: 'https://www.gitlab.com/',
    },
    {
        name: 'CI/CD - Fastlane',
        icon: <SiFastlane fontSize="20px" />,
        url: 'https://fastlane.tools/',
    },
];

const colors = {
    lighterPink: 'pink.300',
    lightPink: 'pink.500',
    lightBlue: 'blue.300',
    lightSecond: 'gray.500',
    lightGray: 'gray.700',
    darkPrimary: 'pink.700',
};

export { colors, navLinks, languages, siteConfig };
