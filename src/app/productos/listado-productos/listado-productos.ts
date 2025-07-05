import { Component } from '@angular/core';
import { ProductoService } from '../producto-service';
import { IProducto, Categoria } from '../../interfaces/IProducto';

@Component({
  selector: 'app-listado-productos',
  standalone: false,
  templateUrl: './listado-productos.html',
  styleUrls: ['./listado-productos.css']
})
export class ListadoProductos {
  nombreFiltro: string = '';
  categoriaFiltro: Categoria | '' = '';

  categorias = [
    { value: '', display: 'Todas' },
    { value: Categoria.Hogar, display: 'Hogar' },
    { value: Categoria.Electronica, display: 'Electrónica' },
    { value: Categoria.Entretenimiento, display: 'Entretenimiento' },
    { value: Categoria.Otros, display: 'Otros' }
  ];

  productos: IProducto[] = [];
  cargando = false;
  error = '';

  constructor(private productoService: ProductoService) {
    this.cargarProductos(); // carga inicial sin filtro
  }

  onFiltroCambio() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.cargando = true;
    this.error = '';

    const categoriaParam = this.categoriaFiltro === '' ? null : this.categoriaFiltro;

    this.productoService.buscarProductos(this.nombreFiltro, categoriaParam).subscribe({
      next: (data) => {
        this.productos = data;
        this.cargando = false;
      },
      error: () => {
        this.error = 'Error al cargar productos';
        this.cargando = false;
      }
    });
  }
}