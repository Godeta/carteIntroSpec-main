import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'card',
    loadComponent: () => import('./card/card.component').then((m) => m.CardComponent),
  },
  {
    path: 'fun',
    loadComponent: () => import('./ambiance/fun.component').then((m) => m.FunComponent), // Changed from CardComponent to FunComponent
  },
  {
    path: 'enigme',
    loadComponent: () => import('./enigme/enigme.component').then((m) => m.EnigmeComponent),
  },
  {
    path: 'warhammer',
    loadComponent: () => import('./warhammer/war.component').then((m) => m.WarComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];