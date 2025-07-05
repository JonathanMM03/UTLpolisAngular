import { Routes } from '@angular/router';
import { PaginaInicio } from './pagina-inicio/pagina-inicio';
import { PaginaProductos } from './pagina-productos/pagina-productos';
import { Inicio } from './inicio/inicio';

export const productosRoutes: Routes = [
  { path: '', component: PaginaInicio },
  { path: 'productos', component: PaginaProductos },
  { path: 'inicio', component: Inicio }
];