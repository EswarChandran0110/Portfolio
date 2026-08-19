export interface Skill {
    name: string;
    icon: string;
    category: 'frontend' | 'backend' | 'database' | 'tools' | 'ai' | 'other';
}

export interface Experience {
    id:string;
    company:string;
    role:string;
    duration:string;
    description: string[];
    technologies:string[];
}

export interface Project {
    id:string;
    title: string;
    description: string;
    image:string;
    technologies:string[];
    liveUrl?: string;
    githubUrl?:string;
} 

export interface PersonalInfo{
    name:string;
    title:string;
    email:string;
    phone:string;
    location:string;
    bio:string;
    image:string;
    resumeUrl:string;
    socialLinks:{
        github?:string;
        linkedin?:string;
        leetcode?:string;
    }

}
