import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TarjetaDetalle } from 'src/app/Interfaces/TarjetaDetalle';
import { Tarjeta } from 'src/app/Interfaces/Tarjeta';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-agregar-tarjeta',
  templateUrl: './agregar-tarjeta.component.html',
  styleUrls: ['./agregar-tarjeta.component.scss']
})
/*
  Componente pensado para ser abierto en forma de MatDialog.
  Contiene un formulario para crear una nueva tarjeta. Eligiendo su tipo de detalle.
*/
export class AgregarTarjetaComponent implements OnInit {
  nuevaTarjeta: Tarjeta = {} as Tarjeta;  

  titulo: string = "";
  tipoSeleccionado: string = "";
  detalle: TarjetaDetalle[] = [];
  listaTipos: string[] = ["Basico", "Porcentaje", "Proyectos"];

  constructor() { }

  ngOnInit(): void {
  }
  
  submit(): Tarjeta{
    this.nuevaTarjeta.titulo = this.titulo;
    this.nuevaTarjeta.tipo = this.tipoSeleccionado;
    this.nuevaTarjeta.detalle = this.detalle;

    return this.nuevaTarjeta;
  }
  cancel():undefined{
    return undefined;
  }
}
