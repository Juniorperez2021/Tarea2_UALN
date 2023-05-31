// formulario.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  precio: number = 0;
  existencia: number = 0;
  fechaVencimiento: Date = new Date ();
  productos: any[] = [];

  agregarProducto() {
    const nuevoProducto = {
      nombre: this.nombre,
      precio: this.precio,
      existencia: this.existencia,
      fechaVencimiento: this.fechaVencimiento
    };

    this.productos.push(nuevoProducto);

    // Limpiar los campos del formulario
    this.nombre = '';
    this.precio = 0;
    this.existencia = 0;
    this.fechaVencimiento = new Date();
  }
}
