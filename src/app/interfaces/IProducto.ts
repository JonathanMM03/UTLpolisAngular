export interface IProducto{
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: Categoria;
    imagen: string;
}

export enum Categoria{
    Hogar = 1,
    Electronica = 2,
    Entretenimiento = 3,
    Otros =4 
}