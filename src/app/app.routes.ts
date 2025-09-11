import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./main-container/main-container').then((m) => m.MainContainer),
  },
];
