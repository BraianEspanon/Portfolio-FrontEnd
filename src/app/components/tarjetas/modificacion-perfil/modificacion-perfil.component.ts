import { Component, OnInit } from '@angular/core';
import { TarjetaPerfil } from 'src/app/Interfaces/TarjetaPerfil';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-modificacion-perfil',
    templateUrl: './modificacion-perfil.component.html',
    styleUrls: ['./modificacion-perfil.component.scss'],
    standalone: true,
    imports: [MatDialogModule, FormsModule]
})
/*
  Componente pensado para ser abierto en forma de MatDialog.
  Contiene un formulario para modificar la TarjetaPerfil.
*/
export class ModificacionPerfilComponent implements OnInit {
  nuevaTarjetaPerfil: TarjetaPerfil = {} as TarjetaPerfil;  

  nombre: string = "";
  urlImgPerfil: string = "";
  detalle: string = "";
  lugar: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.nombre = data.nombre;
      this.urlImgPerfil = data.urlImgPerfil;
      this.detalle = data.detalle;
      this.lugar = data.lugar;
  }

  ngOnInit(): void {
  }
  
  submit(): TarjetaPerfil{
    this.nuevaTarjetaPerfil.nombre = this.nombre; 
    this.nuevaTarjetaPerfil.urlImgPerfil = this.urlImgPerfil; 
    this.nuevaTarjetaPerfil.detalle = this.detalle; 
    this.nuevaTarjetaPerfil.lugar = this.lugar; 
    
    return this.nuevaTarjetaPerfil;
  }
  cancel():undefined{
    return undefined;
  }
}
