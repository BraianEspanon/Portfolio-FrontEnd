import { Component, OnInit } from '@angular/core';
import { TarjetaDetalle } from 'src/app/Interfaces/TarjetaDetalle';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-alta-modificacion-detalle',
  templateUrl: './alta-modificacion-detalle.component.html',
  styleUrls: ['./alta-modificacion-detalle.component.scss']
})
/*
  Componente pensado para ser abierto en forma de MatDialog.
  Contiene un formulario para modificar o crear el detalle de una tarjeta.
  Según el tipo de tarjeta, será los campos que deje rellenar.
*/
export class AltaModificacionDetalleComponent implements OnInit {
  nuevaTarjetaDetalle : TarjetaDetalle = {} as TarjetaDetalle
  tipo: string = "";

  idDetalle: number = {} as number;
  titulo: string = "";
  urlImg: string = "";
  descripcion: string = "";
  periodo: string = "";
  cantidad: number = {} as number;
  enlace: string = "";
  prioridad: number = {} as number;

  tipoBasico: boolean = false;
  tipoPorcentaje: boolean = false;
  tipoProyecto: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
      this.idDetalle = data.idDetalle;
      this.titulo = data.titulo;
      this.urlImg = data.urlImg;
      this.descripcion = data.descripcion;
      this.periodo = data.periodo;
      this.cantidad = data.cantidad;
      this.enlace = data.enlace;
      this.prioridad = data.prioridad;
   }

  ngOnInit(): void {
    this.tipo = this.data.tipo;
    if (this.tipo === "Basico") {
      this.tipoBasico = true;
    }
    else if (this.tipo === "Porcentaje") {
      this.tipoPorcentaje = true;
    }
    else if (this.tipo === "Proyectos") {
      this.tipoProyecto = true;
    }
    else{
      alert("Error al obtener el tipo de tarjeta");
    }
  }
  submit(): TarjetaDetalle{
    this.nuevaTarjetaDetalle.idDetalle = this.idDetalle; 
    this.nuevaTarjetaDetalle.titulo = this.titulo;
    this.nuevaTarjetaDetalle.urlImg = this.urlImg;
    this.nuevaTarjetaDetalle.descripcion = this.descripcion;
    this.nuevaTarjetaDetalle.periodo = this.periodo;
    this.nuevaTarjetaDetalle.cantidad = this.cantidad;
    this.nuevaTarjetaDetalle.enlace = this.enlace;
    this.nuevaTarjetaDetalle.prioridad = this.prioridad;
    
    return this.nuevaTarjetaDetalle;
  }
  cancel():undefined{
    return undefined;
  }
}
