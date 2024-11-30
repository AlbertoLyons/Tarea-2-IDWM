import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'portfolio',
        pathMatch: 'full',
        loadComponent: () => import('./portfolio/components/homepage/homepage.component').then(m => m.HomepageComponent)
    },  
    {
        path:'**',
        pathMatch: 'full',
        redirectTo: 'portfolio'
    }
];
