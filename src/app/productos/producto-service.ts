import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto, Categoria } from '../interfaces/IProducto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'https://localhost:7060/api/productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(this.apiUrl);
  }

  getProducto(id: number): Observable<IProducto> {
    return this.http.get<IProducto>(`${this.apiUrl}/${id}`);
  }

  crearProducto(producto: IProducto): Observable<IProducto> {
    return this.http.post<IProducto>(this.apiUrl, producto);
  }

  actualizarProducto(id: number, producto: IProducto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getMasCaros(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(`${this.apiUrl}/mascaros`);
  }

  buscarProductos(nombre?: string, categoria?: Categoria | null): Observable<IProducto[]> {
    let params = new HttpParams();

    if (nombre) {
      params = params.set('nombre', nombre);
    }
    if (categoria !== undefined && categoria !== null) {
      params = params.set('categoria', categoria.toString());
    }

    return this.http.get<IProducto[]>(`${this.apiUrl}/buscar`, { params });
  }
}