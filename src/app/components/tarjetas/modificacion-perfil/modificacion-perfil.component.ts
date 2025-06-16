import { Component, OnInit } from '@angular/core';
import { TarjetaPerfil } from 'src/app/Interfaces/TarjetaPerfil';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-modificacion-perfil',
  templateUrl: './modificacion-perfil.component.html',
  styleUrls: ['./modificacion-perfil.component.css']
})
/*
  Componente pensado para ser abierto en forma de MatDialog.
  Contiene un formulario para modificar la TarjetaPerfil.
*/
export class ModificacionPerfilComponent implements OnInit {
  nuevaTarjetaPerfil: TarjetaPerfil = {} as TarjetaPerfil;  

  nombre: string = "";
  urlImgPortada: string = "";
  urlImgPerfil: string = "";
  detalle: string = "";
  lugar: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.nombre = data.nombre;
      this.urlImgPortada = data.urlImgPortada;
      this.urlImgPerfil = data.urlImgPerfil;
      this.detalle = data.detalle;
      this.lugar = data.lugar;
  }

  ngOnInit(): void {
  }
  
  submit(): TarjetaPerfil{
    this.nuevaTarjetaPerfil.nombre = this.nombre; 
    this.nuevaTarjetaPerfil.urlImgPortada = this.urlImgPortada; 
    this.nuevaTarjetaPerfil.urlImgPerfil = this.urlImgPerfil; 
    this.nuevaTarjetaPerfil.detalle = this.detalle; 
    this.nuevaTarjetaPerfil.lugar = this.lugar; 
    
    return this.nuevaTarjetaPerfil;
  }
  cancel():undefined{
    return undefined;
  }
}
