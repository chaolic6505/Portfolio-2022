import {
    SiFlask,
    SiGmail,
    SiMysql,
    SiRedux,
    SiDocker,
    SiGraphql,
    SiFirebase,
    SiMongodb,
    SiSpringboot,
} from 'react-icons/si';
import {
    FaJs,
    FaPhp,
    FaAws,
    FaJava,
    FaSwift,
    FaReact,
    FaGithub,
    FaPython,
    FaLaravel,
    FaNodeJs,
    FaLinkedin,
} from 'react-icons/fa';
import {
    SiKotlin,
    SiDotnet,
    SiXcode,
    SiNextdotjs,
    SiTypescript,
} from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import { DiVisualstudio } from 'react-icons/di';

const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'Experiences', route: '/experiences' },
    { name: 'Projects', route: '/projects' },
    {
        name: 'Github',
        route: 'https://github.com/chaolic6505?tab=repositories',
    },
    { name: 'Linkedin', route: 'https://www.linkedin.com/in/chaolic1120/' },
    { name: 'Contact Me', route: 'mailto:chaolic6505@gmail.com' },
];

const accounts = [
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
];

const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Chao-Li Chen. All Rights Reserved.`,
    author: {
        name: 'Chao-Li Chen',
        accounts: accounts,
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

const companies = [
    {
        title: 'Sitemax Ststems',
        alt: 'sitemax image',
        url: 'https://www.sitemaxsystems.com/',
        role: 'Software Developer',
        jobs: [
            'Mobile Development',
            'Full Stack Development',
            'Flex From Development',
        ],
        skills: [
            'IOS',
            'Firebase',
            'AWS',
            'Gatsby.js',
            'PHP',
            'Android',
            'React',
            'Angular.js',
            'React Native',
        ],
        period: 'June 2021 - Present',
        logo: '/sitemax.png',
    },
    {
        title: 'Recruitables',
        alt: 'recruitables image',
        url: 'https://www.linkedin.com/company/recruitableapp/about/',
        role: 'Full Stack Developer - Intern',
        jobs: ['OAuth Integration', 'Front End Development'],
        skills: [
            'AWS',
            'Postgresql',
            'React',
            'Firebase',
            'Node.js',
            'Next.js',
        ],
        period: 'January 2021 - April 2021',
        logo: '/recruitable.png',
    },
];

const educations = [
    {
        title: 'British Columbia Institute of Technology',
        alt: 'bcit image',
        logo: '/bcit.png',
        period: 'Sept 2019 - June 2021',
        role: 'Full-Stack Web Development Diploma',
        url: 'https://www.bcit.ca/programs/full-stack-web-development-diploma-full-time-7540dipma/',
        jobs: [
            'Agile',
            'UX / UI',
            'Entrepreneurship',
            'Front End Development',
            'Back End Development',
        ],
        skills: [],
    },
    {
        title: 'Coquitlam College',
        logo: '/cc.png',
        period: 'Jan 2014 - Jun 2016',
        alt: 'coquitlam college image',
        url: 'https://www.coquitlamcollege.com/programs-courses/university-transfer-program/associate-arts-degree/',
        role: 'Associate of Arts Degree',
        skills: [],
        jobs: [],
    },
];

const projects = [
    {
        title: 'Next  Blog  App',
        alt: 'Next-Blog-App image',
        logo: '/blog.jpeg',
        url: 'https://github.com/chaolic6505/Next-blog-app',
        jobs: [
            'Static Site Generate',
            'Content Management System with Sanity.io',
            'Responsive styles with Tailwindcss',
        ],
        skills: [
            'Sanity,io',
            'React',
            'Zod',
            'Next.js',
            'Typescript',
            'Tailwind CSS',
        ],
    },
    {
        title: 'Next  Postgres  News  App ( Reddit Clone )',
        alt: 'Next-Postgres-News-App image',
        logo: '/reddit.png',
        url: 'https://github.com/chaolic6505/Next-Postgres-News-App',
        jobs: [
            'OAuth with Reddit',
            'Responsive styles with Tailwindcss',
            'User voting system',
            ' OOP concept with Typescript',
        ],
        skills: [
            'Postgresql',
            'React',
            'GraphQL',
            'Next.js',
            'Typescript',
            'Tailwind CSS',
        ],
    },
    {
        title: 'Next-Stripe-Firebase Subscriptions App ( Netflix Clone )',
        alt: 'Next-Stripe-Firebase Subscriptions App image',
        logo: '/netflix.jpeg',
        url: 'https://github.com/chaolic6505/Next-Stripe-Firebase-Subscriptions-App',
        jobs: [
            'Users can explore a different genre',
            ' Each user has a favorite list',
            ' Stripe payment system integrated with Firebase plug-in',
            ' Authentication and Database with Firebase',
        ],
        skills: [
            'Stripe',
            'React',
            'Next.js',
            'Firebase',
            'Typescript',
            'Tailwind CSS',
        ],
    },
    {
        title: 'Music Player App with AWS S3 storage',
        alt: 'Music Player App image',
        logo: '/cds.png',
        url: 'https://github.com/chaolic6505/applemusicCDS',
        jobs: [
            'OOP design',
            'Files upload to AWS S3',
            ' Search songs by title, artist, album',
            ' Support lyrics and album cover',
        ],
        skills: ['Python', 'Flask', 'AWS', 'Postgre SQL'],
    },
    {
        title: 'Dating App',
        alt: 'Dating App image',
        logo: '/sm.png',
        url: 'https://github.com/chaolic6505/Dating-App-Single-Mingle',
        jobs: [
            'OOP design',
            'Files upload to AWS S3',
            ' Search songs by title, artist, album',
            ' Support lyrics and album cover',
        ],
        skills: ['Express', 'Node', 'AWS', 'MongoDB', 'EJS'],
    },
    {
        title: 'Trivia API  Quiz  App',
        alt: 'Trivia API quiz  app image',
        logo: '/trivia.png',
        url: 'https://github.com/chaolic6505/Quiz-App-Trivia-API',
        jobs: ['Screen Navigation', 'Mobile Application', 'OOP Concept'],
        skills: ['Swift', 'SwiftUI', 'Xcode', 'Fetch Rest API'],
    },
];

const colors = {
    lightBlue: 'blue.300',
    lighterPink: 'pink.300',
    lightPink: 'pink.500',
    gray: 'gray.500',
    green: 'green.500',
    lightText: 'white.600',
    darkGray: 'gray.700',
    darkPrimary: 'pink.700',
    darkText: 'white.900',
};

export {
    tools,
    colors,
    projects,
    accounts,
    navLinks,
    siteConfig,
    languages,
    educations,
    companies,
    frameworks,
};
