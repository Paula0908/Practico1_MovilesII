import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'categories',
    loadComponent: () => import('./components/categories/categories.component').then((m) => m.CategoriesComponent),
  },
  {
    path: 'products/:category',
    loadComponent: () => import('./components/products/products.component').then((m) => m.ProductsComponent),
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./components/detail/detail.component').then((m) => m.DetailComponent),
  },
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full',
  },

];
