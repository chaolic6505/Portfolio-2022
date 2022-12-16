import {
    SiFirebase,
    SiFastlane,
    SiGmail,
    SiFlask,
    SiRedux,
    SiSpringboot,
    SiMysql,
    SiMongodb,
    SiDocker,
    SiGraphql,
} from 'react-icons/si';
import {
    FaJs,
    FaPhp,
    FaJava,
    FaSwift,
    FaReact,
    FaGithub,
    FaPython,
    FaLaravel,
    FaNodeJs,
    FaLinkedin,
    FaAws,
} from 'react-icons/fa';
import { DiVisualstudio } from 'react-icons/di';
import {
    SiKotlin,
    SiDotnet,
    SiXcode,
    SiNextdotjs,
    SiTypescript,
} from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';

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

const frameworks = [
    {
        name: 'Node Js',
        icon: <FaNodeJs fontSize="20px" />,
    },
    {
        name: 'Redux',
        icon: <SiRedux fontSize="20px" />,
    },
    {
        name: 'React Native',
        icon: <FaReact fontSize="20px" />,
    },
    {
        name: 'Next js',
        icon: <SiNextdotjs fontSize="20px" />,
        url: 'https://fastlane.tools/',
    },
    {
        name: 'Laravel',
        icon: <FaLaravel fontSize="20px" />,
    },
    {
        name: 'Flask',
        icon: <SiFlask fontSize="20px" />,
    },
    {
        name: 'Springboot',
        icon: <SiSpringboot fontSize="20px" />,
    },
    {
        name: '.Net',
        icon: <SiDotnet fontSize="20px" />,
    },
];

const tools = [
    {
        name: 'AWS',
        icon: <FaAws fontSize="20px" />,
    },
    {
        name: 'MySQL',
        icon: <SiMysql fontSize="20px" />,
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb fontSize="20px" />,
    },
    {
        name: 'Docker',
        icon: <SiDocker fontSize="20px" />,
    },
    {
        name: 'Firebase',
        icon: <SiFirebase fontSize="20px" />,
    },
    {
        name: 'GraphQL',
        icon: <SiGraphql fontSize="20px" />,
    },
    {
        name: 'Xcode',
        icon: <SiXcode fontSize="20px" />,
    },
    {
        name: 'Figma',
        icon: <FiFigma fontSize="20px" />,
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

export { tools, colors, navLinks, languages, siteConfig, frameworks };
