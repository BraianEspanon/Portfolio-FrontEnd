import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TarjetaDetalle } from 'src/app/entity/TarjetaDetalle';
import { Tarjeta } from 'src/app/entity/Tarjeta';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-agregar-tarjeta',
  templateUrl: './agregar-tarjeta.component.html',
  styleUrls: ['./agregar-tarjeta.component.css']
})
export class AgregarTarjetaComponent implements OnInit {
  nuevaTarjeta: Tarjeta = {} as Tarjeta;  

  idTarjeta: number = {} as number;
  titulo: string = "";
  tipoSeleccionado: string = "";
  detalle: TarjetaDetalle[] = [];
  listaTipos: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.idTarjeta = data.idTarjeta;
    this.listaTipos = data.listaTipos;
   }

  ngOnInit(): void {
  }
  
  submit(): Tarjeta{
    this.nuevaTarjeta.idTarjeta = this.idTarjeta;
    this.nuevaTarjeta.titulo = this.titulo;
    this.nuevaTarjeta.tipo = this.tipoSeleccionado;
    this.nuevaTarjeta.detalle = this.detalle;

    return this.nuevaTarjeta;
  }
  cancel():undefined{
    return undefined;
  }
}
