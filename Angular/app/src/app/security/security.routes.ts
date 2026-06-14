import { Routes } from '@angular/router';
import { SignInPageComponent } from './page/sign-in-page/sign-in-page';

export const securityRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./page/sign-in-page/sign-in-page').then(c => c.SignInPageComponent)
  }
];