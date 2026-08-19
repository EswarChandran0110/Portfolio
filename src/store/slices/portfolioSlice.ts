import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonalInfo, Skill, Experience, Project } from '@/types';

interface PortfolioState {
    personalInfo: PersonalInfo;
    skills: Skill[];
    experiences: Experience[];
    projects: Project[];
    activeSection: string;
}

const initialState: PortfolioState = {
    personalInfo: {
        name: 'Eswar M',
        title: 'Full Stack Developer',
        email: 'eswarchandran0110@gmail.com',
        phone: '+91 7904305059',
        location: 'India',
        bio: `Full-Stack Engineer with 4+ years of experience designing scalable systems, building microservices, and delivering production-ready applications. I'm passionate about creating reliable, maintainable software that solves real-world problems.`,
        image: '/assets/profile.png',
        resumeUrl: '/assets/resume.pdf',
        socialLinks: {
            github: 'https://github.com/EswarChandran0110',
            linkedin: 'https://www.linkedin.com/in/eswar0110/',
            leetcode: 'https://leetcode.com/u/EswarChandran0110/'
        },
    },
    skills: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'frontend' },
        { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', category: 'frontend' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'frontend' },
        { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', category: 'frontend' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'backend' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'backend' },
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', category: 'backend' },
        { name: 'REST API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', category: 'backend' },
        { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg', category: 'backend' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'database' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'tools' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'tools' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
        { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', category: 'tools' },
        { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', category: 'tools' },
        { name: 'Babel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg', category: 'tools' },
        { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', category: 'frontend' },
        { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', category: 'tools' },
        { name: 'Playwright', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg', category: 'tools' },
        { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', category: 'tools' },
        { name: 'Gradle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg', category: 'tools' },
        { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'tools' },
        { name: 'OpenAPI/Swagger', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg', category: 'tools' },
        { name: 'single-spa', icon: 'https://img.icons8.com/fluency/48/module.png', category: 'frontend' },
        { name: 'HashiCorp Vault', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vault/vault-original.svg', category: 'tools' },
        { name: 'Kiro', icon: 'https://img.icons8.com/fluency/48/artificial-intelligence.png', category: 'ai' },
        { name: 'Kiro CLI', icon: 'https://img.icons8.com/fluency/48/console.png', category: 'ai' },
        { name: 'MCP Servers', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', category: 'ai' },
    ],
    experiences: [
        {
            id: '1',
            company: 'Infor (Formerly Albanero)',
            role: 'Software Engineer',
            duration: 'Oct 2023 - Present',
            description: [
                'Engineered core capabilities across DataMesh Platform, Identity & Access Management, and enterprise frontend platforms, working across distributed microservices and a large-scale micro-frontend architecture. Owned backend services for user provisioning, authentication, authorization, email workflows, validation, and secrets management, alongside frontend systems for IAM, RBAC, permissions, navigation, and governance workflows. Contributed across the engineering lifecycle — from architecture and API design to infrastructure, security, automated testing, CI/CD, and production readiness.',
            ],
            technologies: [
                "Java 21",
                "JavaScript",
                "Spring Boot",
                "REST API",
                "React",
                "single-spa",
                "Webpack",
                "Babel",
                "Material UI",
                "AWS Cedar",
                "HashiCorp Vault",
                "AWS Secrets Manager",
                "Docker",
                "Docker Compose",
                "Jenkins",
                "Playwright",
                "Jest",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Gradle",
                "Bash",
                "Git",
                "OpenAPI/Swagger"
            ],
        },
        {
            id: '2',
            company: 'Concentrix',
            role: 'Web Developer',
            duration: 'Sep 2021 — Jul 2023',
            description: ['Engineering learning management platforms across frontend and backend — building React.js applications, developing Node.js/Express.js REST APIs, and owning API integration and production troubleshooting through structured log and request analysis. Established API documentation and operational runbooks to improve system maintainability and engineering handoff.'],
            technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'REST API'],
        },
    ],
    projects: [
        {
            id: '1',
            title: 'Project One',
            description: 'A full-stack application built with modern technologies.',
            image: '/assets/project1.jpg',
            technologies: ['React', 'Node.js', 'PostgreSQL'],
            liveUrl: 'https://project1.com',
            githubUrl: 'https://github.com/you/project1',
        },
    ],
    activeSection: 'hero',
};

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        setActiveSection(state, action: PayloadAction<string>) {
            state.activeSection = action.payload;
        }
    }
})

export const { setActiveSection } = portfolioSlice.actions;
export default portfolioSlice.reducer;
