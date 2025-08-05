import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TarjetaDetalle } from 'src/app/Interfaces/TarjetaDetalle';


import { MatDialog } from '@angular/material/dialog';
import { AltaModificacionDetalleComponent } from '../alta-modificacion-detalle/alta-modificacion-detalle.component';

import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tarjeta-proyectos',
  templateUrl: './tarjeta-proyectos.component.html',
  styleUrls: ['./tarjeta-proyectos.component.scss']
})
/*
  TarjetaProyecto se trata de un tipo de detalle.
  Permite hacer links a proyectos, mostrando un título, una imagen y una breve descripción.
*/
export class TarjetaProyectosComponent implements OnInit, AfterViewInit {
  @Output() onEditDetalle: EventEmitter<TarjetaDetalle> = new EventEmitter();
  @Output() onDeleteDetalle: EventEmitter<TarjetaDetalle> = new EventEmitter();

  @Input() detalle : TarjetaDetalle = {} as TarjetaDetalle;
  @Input() loggedIn : boolean = false;
  
  faPen = faPen;
  faTrash = faTrash;

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
    const dialogRef = this.dialog.open(AltaModificacionDetalleComponent, {
      panelClass: 'custom-dialog-container',
      data:{tipo : "Proyectos",
            idDetalle : this.detalle.idDetalle,
            prioridad : this.detalle.prioridad,
            titulo : this.detalle.titulo,
            enlace : this.detalle.enlace,
            descripcion : this.detalle.descripcion,
            urlImg : this.detalle.urlImg}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.detalle = result
        this.onEditDetalle.emit(this.detalle)
      }
    });
  }
  
  eliminar(): void {
    if(confirm("Estás seguro que quieres eliminar: "+ this.detalle.titulo)){
      this.onDeleteDetalle.emit(this.detalle);
    }
  }
}
