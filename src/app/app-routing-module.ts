import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicio } from './productos/pagina-inicio/pagina-inicio';
import { PaginaProductos } from './productos/pagina-productos/pagina-productos';

const routes: Routes = [
  { path: '', component: PaginaInicio },
  { path: 'productos', component: PaginaProductos },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }