import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { TarjetaDetalle } from 'src/app/entity/TarjetaDetalle';

import { MatDialog } from '@angular/material/dialog';
import { AltaModificacionDetalleComponent } from '../alta-modificacion-detalle/alta-modificacion-detalle.component';

import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tarjeta-basico',
  templateUrl: './tarjeta-basico.component.html',
  styleUrls: ['./tarjeta-basico.component.css']
})
export class TarjetaBasicoComponent implements OnInit {
  @Output() onEditDetalle: EventEmitter<TarjetaDetalle> = new EventEmitter();
  @Output() onDeleteDetalle: EventEmitter<TarjetaDetalle> = new EventEmitter();
  
  @Input() detalle : TarjetaDetalle = {} as TarjetaDetalle;
  @Input() loggedIn : boolean = false;
  
  faPen = faPen;
  faTrash = faTrash;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  editar(): void{
    const dialogRef = this.dialog.open(AltaModificacionDetalleComponent, {
      panelClass: 'container-alta-modificacion',
      data:{tipo : "Basico",
            id : this.detalle.id,
            titulo : this.detalle.titulo,
            urlImg : this.detalle.urlImg,
            descripcion : this.detalle.descripcion,
            periodo : this.detalle.periodo,}
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
