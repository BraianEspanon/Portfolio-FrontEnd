import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TarjetaPerfil } from 'src/app/Interfaces/TarjetaPerfil';
import { Tarjeta } from 'src/app/Interfaces/Tarjeta';

import { MatDialog } from '@angular/material/dialog';
import { ModificacionPerfilComponent } from '../modificacion-perfil/modificacion-perfil.component';


import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { AgregarTarjetaComponent } from '../agregar-tarjeta/agregar-tarjeta.component';

@Component({
  selector: 'app-tarjeta-perfil',
  templateUrl: './tarjeta-perfil.component.html',
  styleUrls: ['./tarjeta-perfil.component.scss']
})
/*
  TarjetaPerfil es la primera tarjeta a mostrar. Contiene datos personales y una breve descripción.
*/
export class TarjetaPerfilComponent implements OnInit, AfterViewInit {
  @Output() onEditPerfil: EventEmitter<TarjetaPerfil> = new EventEmitter();
  @Output() onAddTarjeta: EventEmitter<TarjetaPerfil> = new EventEmitter();

  @Input() tarjeta : TarjetaPerfil = {} as TarjetaPerfil;
  @Input() loggedIn : boolean = false;

  faPlus = faPlus;
  faPen = faPen;


  @ViewChild('imgElement') imgElement!: ElementRef;
  isVisible: boolean = false;
  imgLoaded: boolean = false;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.unobserve(entry.target); // dejar de observar después del primer fade-in
        }
      });
    }, { threshold: 0.1 });

    if (this.imgElement) {
      observer.observe(this.imgElement.nativeElement);
    }
  }
  onImgLoad() {
    this.imgLoaded = true;
  }

  editar(): void {
    const dialogRef = this.dialog.open(ModificacionPerfilComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        nombre: this.tarjeta.nombre,
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
  
  addTarjeta(): void {
    const dialogRef = this.dialog.open(AgregarTarjetaComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        tarjeta: {} as Tarjeta
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.onAddTarjeta.emit(result);
      }
    })
  }
}
