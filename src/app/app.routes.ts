import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },

    {
        path: 'sobre-mi',
        component: About,
    },

    {
        path: 'proyectos',
        component: Projects,
    },

    {
        path: 'contacto',
        component: Contact,
    },
];
