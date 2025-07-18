import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TarjetaPerfil } from 'src/app/Interfaces/TarjetaPerfil';

import { MatDialog } from '@angular/material/dialog';
import { ModificacionPerfilComponent } from '../modificacion-perfil/modificacion-perfil.component';


import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { AgregarTarjetaComponent } from '../agregar-tarjeta/agregar-tarjeta.component';

@Component({
  selector: 'app-tarjeta-perfil',
  templateUrl: './tarjeta-perfil.component.html',
  styleUrls: ['./tarjeta-perfil.component.css']
})
/*
  TarjetaPerfil es la primera tarjeta a mostrar. Contiene datos personales y una breve descripción.
*/
export class TarjetaPerfilComponent implements OnInit {
  @Output() onEditPerfil: EventEmitter<TarjetaPerfil> = new EventEmitter();
  @Output() onAddTarjeta: EventEmitter<TarjetaPerfil> = new EventEmitter();

  @Input() tarjeta : TarjetaPerfil = {} as TarjetaPerfil;
  @Input() loggedIn : boolean = false;

  faPlus = faPlus;
  faPen = faPen;

  linkCV = "https://drive.google.com/file/d/1k7KJnzUN8_BF5Elet5fzsgnqiNOaqfRy/view?usp=drive_link"
  linkGitHub = "https://github.com/BraianEspanon"
  linkLinkedIn = "https://www.linkedin.com/in/braian-espa%C3%B1on-064501353/"

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  editar(): void {
    const dialogRef = this.dialog.open(ModificacionPerfilComponent, {
      panelClass: 'container-alta-modificacion',
      data: {
        nombre: this.tarjeta.nombre,
        urlImgPortada: this.tarjeta.urlImgPortada,
        urlImgPerfil: this.tarjeta.urlImgPerfil,
        detalle: this.tarjeta.detalle,
        lugar: this.tarjeta.lugar,
    }});

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.tarjeta = result
        this.onEditPerfil.emit(this.tarjeta);
      }
    });
  }
  
  abrirCurriculum(){
      window.open(this.linkCV, '_blank');
  }
  abrirGitHub(){
      window.open(this.linkGitHub, '_blank');
  }
  abrirLinkedIn(){
      window.open(this.linkLinkedIn, '_blank');
  }

  addTarjeta(): void {
    const dialogRef = this.dialog.open(AgregarTarjetaComponent, {
      panelClass: 'container-alta-modificacion',
      });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.onAddTarjeta.emit(result);
      }
    })
  }
}
