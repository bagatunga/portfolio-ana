export interface Project {
    slug: string;
    title: string;
    category: string;
    summary: string;
    description: string;
    technologies: string[];
    learningPoints: string[];
    imageUrl?: string;
    repositoryUrl?: string;
    demoUrl?: string;
    featured?: boolean;
}