import { SiFirebase, SiFastlane, SiGmail } from 'react-icons/si';
import { FaJs, FaGitAlt, FaReact, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

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
                url: 'https://github.com/chaolic6505',
                icon: <FaGithub />,
                name: 'Github',
                type: 'gray',
            },
            {
                url: 'https://www.linkedin.com/in/chaolic1120/',
                icon: <FaLinkedin />,
                name: 'Linkedin',
                type: 'linkedin',
            },
            {
                url: 'mailto:chaolic6505@gmail.com',
                icon: <SiGmail />,
                name: 'Gmail',
                type: 'red',
            },
        ],
    },
};

const languages = [
    {
        name: 'Javascript',
        icon: <FaJs fontSize="20px" />,
        url: 'https://www.javascript.com/',
    },
    {
        name: 'Typescript',
        icon: <SiTypescript fontSize="20px" />,
        url: 'https://www.javascript.com/',
    },
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
        name: 'Github & GitLab',
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
    lightPink: 'pink.500',
    lightSecond: 'gray.500',
    lightGray: 'gray.700',
    darkPrimary: 'pink.700',
};

export { colors, navLinks, languages, siteConfig };
