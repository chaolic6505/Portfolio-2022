export interface Company {
    jobs: string[];
    title: string;
    alt: string;
    url: string;
    role: string;
    skills: string[];
    period: string;
    logo: string;
}

export interface Language {
    name: string;
    icon: Element;
}

export interface Social {
    url: string;
    icon: any;
    name: string;
}

export interface skill {
    name: string;
    icon: any;
    url?: string;
}
