import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TarjetaDetalle } from 'src/app/Interfaces/TarjetaDetalle';
import { Tarjeta } from 'src/app/Interfaces/Tarjeta';
import { Inject } from '@angular/core';

@Component({
    selector: 'app-agregar-tarjeta',
    templateUrl: './agregar-tarjeta.component.html',
    styleUrls: ['./agregar-tarjeta.component.scss'],
    standalone: false
})
/*
  Componente pensado para ser abierto en forma de MatDialog.
  Contiene un formulario para crear una nueva tarjeta. Eligiendo su tipo de detalle.
*/
export class AgregarTarjetaComponent implements OnInit {
  nuevaTarjeta: Tarjeta = {} as Tarjeta;  

  idTarjeta: number = {} as number;
  titulo: string = "";
  tipoSeleccionado: string = "";
  prioridad: number = {} as number;
  detalle: TarjetaDetalle[] = [];
  listaTipos: string[] = ["Basico", "Porcentaje", "Proyectos"];

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
      this.idTarjeta = data.tarjeta.idTarjeta;
      this.titulo = data.tarjeta.titulo;
      this.tipoSeleccionado = data.tarjeta.tipo;
      this.prioridad = data.tarjeta.prioridad;
      this.detalle = data.tarjeta.detalle;
   }

  ngOnInit(): void {
  }
  
  submit(): Tarjeta{
    this.nuevaTarjeta.idTarjeta = this.idTarjeta
    this.nuevaTarjeta.titulo = this.titulo;
    this.nuevaTarjeta.tipo = this.tipoSeleccionado;
    this.nuevaTarjeta.detalle = this.detalle;
    this.nuevaTarjeta.prioridad = this.prioridad;
    
    return this.nuevaTarjeta;
  }
  cancel():undefined{
    return undefined;
  }
}
