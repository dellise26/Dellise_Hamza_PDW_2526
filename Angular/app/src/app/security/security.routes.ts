import { Routes } from '@angular/router';

export const securityRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./page/sign-in-page/sign-in-page').then(m => m.SignInPageComponent)
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./page/sign-up-page/sign-up-page').then(m => m.SignUpPageComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page/security-fall-back-page/security-fall-back-page').then(m => m.SecurityFallBackPageComponent)
  }
];