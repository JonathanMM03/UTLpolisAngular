import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-busqueda-productos',
  templateUrl: './busqueda-productos.html',
  styleUrls: ['./busqueda-productos.css']
})
export class BusquedaProductos {
  nombreFiltro: string = '';
  categoriaFiltro: string = ''; // puedes cambiar a enum o número si quieres

  categorias = [
    { value: '', display: 'Todas' },
    { value: 'Hogar', display: 'Hogar' },
    { value: 'Electronica', display: 'Electrónica' },
    { value: 'Entretenimiento', display: 'Entretenimiento' },
    { value: 'Otros', display: 'Otros' }
  ];
}