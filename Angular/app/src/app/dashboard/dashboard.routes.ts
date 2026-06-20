import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./router/dashboard-router/dashboard-router')
      .then(c => c.DashboardRouterComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./page/dashboard-home-page/dashboard-home-page')
          .then(c => c.DashboardHomePageComponent)
      },
      {
        path: 'member',
        loadChildren: () => import('./feature/member/member.routes')
          .then(r => r.memberRoutes)
      },
      {
        path: 'dvd',
        loadChildren: () => import('./feature/dvd/dvd.routes')
          .then(r => r.dvdRoutes)
      }
    ]
  }
];
