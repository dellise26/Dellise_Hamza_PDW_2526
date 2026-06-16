import { Routes } from '@angular/router';
import { DashboardGuard } from '../dashboard/dashboard.guard';
import { SecurityGuard } from '../security/security.guard';
import { AppNode } from '@shared/routes/enum';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: AppNode.PUBLIC, 
    pathMatch: 'full' 
  },
  {
    path: AppNode.PUBLIC,
    canActivate: [SecurityGuard(AppNode.REDIRECT_TO_AUTHENTICATED)],
    loadChildren: () =>
      import('../security/security.routes').then(r => r.securityRoutes)
  },
  {
    path: AppNode.AUTHENTICATED,
    canActivate: [DashboardGuard()],
    loadChildren: () =>
      import('../dashboard/dashboard.routes').then(r => r.dashboardRoutes)
  },
  { 
    path: AppNode.FALL_BACK, 
    loadComponent: () => 
      import('../shared/routes/global-fall-back-page/global-fall-back-page.component').then(c => c.GlobalFallBackPageComponent) 
  }
];