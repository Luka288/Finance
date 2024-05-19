import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home' || '',
        loadComponent: () => import('./components/home/home.component'),
        title: 'Finance | Home'
    },
    {
        path: '',
        loadComponent: () => import('./components/home/home.component'),
        title: 'Finance | Home'
    },
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found.component'),
        title: 'Finance | 404'
    },

];
