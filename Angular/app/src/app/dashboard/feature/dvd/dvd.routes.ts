import { Routes } from '@angular/router';

export const dvdRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./page/dvd-list-page/dvd-list-page')
      .then(c => c.DvdListPageComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./page/dvd-create-page/dvd-create-page')
      .then(c => c.DvdCreatePageComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./page/dvd-edit-page/dvd-edit-page')
      .then(c => c.DvdEditPageComponent)
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./page/dvd-detail-page/dvd-detail-page')
      .then(c => c.DvdDetailPageComponent)
  }
];
