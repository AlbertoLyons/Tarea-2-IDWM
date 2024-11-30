import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'portfolio',
        pathMatch: 'full',
        loadComponent: () => import('./portfolio/pages/homepage/homepage.component').then(m => m.HomepageComponent)
    },  
    {
        path:'**',
        pathMatch: 'full',
        redirectTo: 'portfolio'
    }
];
