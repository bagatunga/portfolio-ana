import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
    {
        slug: 'activa-la-mancha',
        title: 'ActivaLaMancha',
        category: 'Full Stack',
        summary:
            'Plataforma para dar visibilidad a comercios, servicios y eventos de Castilla-La Mancha.',
        description:
            'Proyecto final desarrollado como aplicación web completa, con enfoque en promoción local, gestión de contenido y experiencia de usuario.',
        technologies: ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'MySQL'],
        learningPoints: [
            'Estructura de una aplicación full stack',
            'Comunicación entre frontend y backend',
            'Organización de componentes y servicios',
        ],
        repositoryUrl: '',
        demoUrl: '',
        featured: true,
    },
    {
        slug: 'ejercicios-dom',
        title: 'Ejercicios DOM',
        category: 'JavaScript',
        summary:
            'Colección de ejercicios prácticos centrados en manipulación del DOM con JavaScript vanilla.',
        description:
            'Ejercicios realizados para practicar eventos, selección de elementos, modificación dinámica del HTML y lógica básica de interacción.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        learningPoints: [
            'Manipulación del DOM',
            'Eventos en JavaScript',
            'Separación entre estructura, estilos y lógica',
        ],
        repositoryUrl: '',
        demoUrl: '',
        featured: true,
    },
    {
        slug: 'api-rest',
        title: 'API REST',
        category: 'Backend',
        summary:
            'Proyecto backend orientado a la creación de endpoints, gestión de datos y operaciones CRUD.',
        description:
            'Aplicación desarrollada para practicar arquitectura backend, rutas, controladores, modelos y conexión con base de datos.',
        technologies: ['Java', 'Spring Boot', 'MySQL'],
        learningPoints: [
            'Diseño de endpoints REST',
            'Operaciones CRUD',
            'Organización del backend',
        ],
        repositoryUrl: '',
        demoUrl: '',
        featured: false,
    },
];