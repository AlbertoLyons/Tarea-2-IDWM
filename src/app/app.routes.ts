import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'portfolio',
        pathMatch: 'full',
        loadComponent: () => import('./portfolio/pages/homepage/homepage.component').then(m => m.HomepageComponent)
    },  
    {
        path: 'portfolio/contact',
        pathMatch: 'full',
        loadComponent: () => import('./portfolio/pages/contact-form/contact-form.component').then(m => m.ContactFormComponent)
    },
    {
        path:'**',
        pathMatch: 'full',
        redirectTo: 'portfolio'
    }
];
