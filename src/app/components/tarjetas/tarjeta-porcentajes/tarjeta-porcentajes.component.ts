import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef} from '@angular/core';
import { TarjetaDetalle } from 'src/app/Interfaces/TarjetaDetalle';

import { MatDialog } from '@angular/material/dialog';
import { AltaModificacionDetalleComponent } from '../alta-modificacion-detalle/alta-modificacion-detalle.component';


import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-tarjeta-porcentajes',
    templateUrl: './tarjeta-porcentajes.component.html',
    styleUrls: ['./tarjeta-porcentajes.component.scss'],
    standalone: false
})
/*
  TarjetaPorcentajes se trata de un tipo de detalle.
  Sirve para detalles con cantidades, mostrando una barra debajo del título
*/
export class TarjetaPorcentajesComponent implements AfterViewInit  {
  @Output() onEditDetalle: EventEmitter<TarjetaDetalle> = new EventEmitter();
  @Output() onDeleteDetalle: EventEmitter<TarjetaDetalle> = new EventEmitter();

  @Input() detalle : TarjetaDetalle = {} as TarjetaDetalle;
  @Input() loggedIn : boolean = false;

  faPen = faPen;
  faTrash = faTrash;
  
  animatedValue = 0;

  constructor(public dialog: MatDialog,
    private elRef: ElementRef
  ) { }


  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.animateProgress();
          observer.disconnect(); // solo una vez
        }
      }
    }, { threshold: 0.1 });

    observer.observe(this.elRef.nativeElement);
  }

  animateProgress(): void {
    const duration = 1000; // duración total en milisegundos
    const steps = 15;
    const stepTime = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      this.animatedValue = (this.detalle.cantidad / steps) * currentStep;

      if (currentStep >= steps) {
        this.animatedValue = this.detalle.cantidad;
        clearInterval(interval);
      }
    }, stepTime);
  }

  editar(): void {
    const dialogRef = this.dialog.open(AltaModificacionDetalleComponent, {
      panelClass: 'custom-dialog-container',
      data:{tipo : "Porcentaje",
            idDetalle : this.detalle.idDetalle,
            prioridad : this.detalle.prioridad,
            titulo : this.detalle.titulo,
            cantidad : this.detalle.cantidad}
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
