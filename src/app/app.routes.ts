import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./productos/productos-module').then(m => m.ProductosModule)
  }
];