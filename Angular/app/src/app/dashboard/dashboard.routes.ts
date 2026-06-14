import { Routes } from '@angular/router';

export const DashboardRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/page/dashboard-home-page/dashboard-home-page').then(c =>
            c.DashboardHomePageComponent)
    }
]