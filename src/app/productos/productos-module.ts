import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { productosRoutes } from './productos.routes';
import { IProducto, Categoria } from '../interfaces/IProducto';
import { ProductoService } from './producto-service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaginaInicio } from './pagina-inicio/pagina-inicio';
import { ListadoProductos } from './listado-productos/listado-productos';
import { Cabezera } from './cabezera/cabezera';
import { Footer } from './footer/footer';
import { Inicio } from './inicio/inicio';
import { BusquedaProductos } from './busqueda-productos/busqueda-productos';
import { PaginaProductos } from './pagina-productos/pagina-productos';

@NgModule({
  declarations: [
    PaginaInicio,
    ListadoProductos,
    Cabezera,
    Footer,
    Inicio,
    BusquedaProductos,
    PaginaProductos
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(productosRoutes)
  ],
  providers: [ProductoService]
})
export class ProductosModule { }