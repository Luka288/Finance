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
        path: 'crypto',
        loadComponent: () => import('./components/crypto-page/crypto-page.component'),
        title: 'Finance | Crypto'
    },
    {
        path: 'currency-rates',
        loadComponent: () => import('./components/currency-change/currency-change.component'),
        title: 'Finance | Currency rates'
    },
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found.component'),
        title: 'Finance | 404'
    },

];
