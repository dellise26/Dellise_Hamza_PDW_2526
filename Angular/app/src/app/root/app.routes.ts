import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../security/security.routes').then(r => r.securityRoutes)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.routes').then(r => r.DashboardRoutes)
    }
]
