import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto-service';
import { IProducto } from '../../interfaces/IProducto';

@Component({
  standalone: false,
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio implements OnInit {
  productos: IProducto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getMasCaros().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error al cargar productos más caros', err)
    });
  }
}