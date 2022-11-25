import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AltaModificacionDetalleComponent } from '../alta-modificacion-detalle/alta-modificacion-detalle.component';

import { Tarjeta } from 'src/app/entity/Tarjeta'
import { TarjetaDetalle } from 'src/app/entity/TarjetaDetalle'

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tarjeta-base',
  templateUrl: './tarjeta-base.component.html',
  styleUrls: ['./tarjeta-base.component.css']
})
export class TarjetaBaseComponent implements OnInit {
  @Output() onAddDetalle: EventEmitter<Tarjeta> = new EventEmitter();
  @Output() onDeleteDetalle: EventEmitter<Tarjeta> = new EventEmitter();
  @Output() onEditDetalle: EventEmitter<any> = new EventEmitter();

  @Input() tarjeta: Tarjeta = {} as Tarjeta;
  @Input() loggedIn: boolean = false;
  faPlus = faPlus;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  calcularId() : number{
    let maxId : number = 1;
    for (let i = 0; i < this.tarjeta.detalle.length; i++){
      if (this.tarjeta.detalle[i].id >= maxId){
        maxId = this.tarjeta.detalle[i].id
      }
    }
    return maxId + 1;
  }
  
  openDialog(): void{
    // Calcular la ID deberá hacerlo la BD cuando se incluya
    var newId = this.calcularId();
    const dialogRef = this.dialog.open(AltaModificacionDetalleComponent, {
      panelClass: 'container-alta-modificacion',
      data: {
        id: newId,
        tipo : this.tarjeta.tipo}
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.tarjeta.detalle.push(result);
        this.onAddDetalle.emit(this.tarjeta);
      }
    });
  }

  editDetalle(detalleEditado : TarjetaDetalle) {
    let indDetalle = this.tarjeta.detalle.findIndex(x => x.id === detalleEditado.id)
    this.tarjeta.detalle[indDetalle] = detalleEditado
    this.onEditDetalle.emit(this.tarjeta);
  }

  deleteDetalle(detalleAEliminar : TarjetaDetalle){
    let tarjetaConDetalleEliminado = this.tarjeta.detalle.filter(detalle => detalle.id !== detalleAEliminar.id)
    this.tarjeta.detalle = tarjetaConDetalleEliminado;
    this.onDeleteDetalle.emit(this.tarjeta);
  }
}