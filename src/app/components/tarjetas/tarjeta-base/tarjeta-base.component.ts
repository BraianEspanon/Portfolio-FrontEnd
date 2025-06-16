import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AltaModificacionDetalleComponent } from '../alta-modificacion-detalle/alta-modificacion-detalle.component';

import { Tarjeta } from 'src/app/Interfaces/Tarjeta'
import { TarjetaDetalle } from 'src/app/Interfaces/TarjetaDetalle'

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tarjeta-base',
  templateUrl: './tarjeta-base.component.html',
  styleUrls: ['./tarjeta-base.component.css']
})

/*
  TarjetaBase es un componente genérico que sirve para ser base de los detalles más específicos.
  NOTA: Los nombres de los componentes podrían ser modificados en el futuro, cambiando la palabra tarjeta por detalle.
*/
export class TarjetaBaseComponent implements OnInit {
  @Output() onAddDetalle: EventEmitter<Tarjeta> = new EventEmitter();
  @Output() onDeleteDetalle: EventEmitter<Tarjeta> = new EventEmitter();
  @Output() onDeleteTarjeta: EventEmitter<Tarjeta> = new EventEmitter();
  @Output() onEditDetalle: EventEmitter<any> = new EventEmitter();

  @Input() tarjeta: Tarjeta = {} as Tarjeta;
  @Input() loggedIn: boolean = false;
  
  faPlus = faPlus;
  faTrash = faTrash;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  agregarDetalle(): void{
    const dialogRef = this.dialog.open(AltaModificacionDetalleComponent, {
      panelClass: 'container-alta-modificacion',
      data: {
        tipo : this.tarjeta.tipo}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.tarjeta.detalle.push(result);
        this.onAddDetalle.emit(this.tarjeta);
      }
    });
  }
  eliminarTarjeta():void{
    if(confirm("Estás seguro que quieres eliminar la tarjeta: "+ this.tarjeta.titulo)){
      this.onDeleteTarjeta.emit(this.tarjeta);
    }
  }

  editDetalle(detalleEditado : TarjetaDetalle) {
    let indDetalle = this.tarjeta.detalle.findIndex(x => x.idDetalle === detalleEditado.idDetalle)
    this.tarjeta.detalle[indDetalle] = detalleEditado
    console.log(detalleEditado);
    console.log(indDetalle);
    /*
    console.log(detalleEditado)
    console.log(this.tarjeta.detalle[indDetalle])
    console.log(this.tarjeta.detalle)
    console.log(this.tarjeta)
    */
    this.onEditDetalle.emit(this.tarjeta);
  }

  deleteDetalle(detalleAEliminar : TarjetaDetalle){
    let tarjetaConDetalleEliminado = this.tarjeta.detalle.filter(detalle => detalle.idDetalle !== detalleAEliminar.idDetalle)
    this.tarjeta.detalle = tarjetaConDetalleEliminado;
    this.onDeleteDetalle.emit(this.tarjeta);
  }
}