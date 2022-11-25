import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TarjetaDetalle } from 'src/app/entity/TarjetaDetalle';


import { MatDialog } from '@angular/material/dialog';
import { AltaModificacionDetalleComponent } from '../alta-modificacion-detalle/alta-modificacion-detalle.component';

import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tarjeta-proyectos',
  templateUrl: './tarjeta-proyectos.component.html',
  styleUrls: ['./tarjeta-proyectos.component.css']
})
export class TarjetaProyectosComponent implements OnInit {
  @Output() onEditDetalle: EventEmitter<TarjetaDetalle> = new EventEmitter();
  @Output() onDeleteDetalle: EventEmitter<TarjetaDetalle> = new EventEmitter();

  @Input() detalle : TarjetaDetalle = {} as TarjetaDetalle;
  @Input() loggedIn : boolean = false;
  
  faPen = faPen;
  faTrash = faTrash;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editar(): void {
    const dialogRef = this.dialog.open(AltaModificacionDetalleComponent, {
      panelClass: 'container-alta-modificacion',
      data:{tipo : "Proyectos",
            id : this.detalle.id,
            titulo : this.detalle.titulo,
            enlace : this.detalle.enlace,
            descripcion : this.detalle.descripcion}
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
