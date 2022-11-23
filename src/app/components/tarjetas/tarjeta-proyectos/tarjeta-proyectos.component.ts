import { Component, OnInit, Input } from '@angular/core';
import { TarjetaDetalle } from 'src/app/entity/TarjetaDetalle';

@Component({
  selector: 'app-tarjeta-proyectos',
  templateUrl: './tarjeta-proyectos.component.html',
  styleUrls: ['./tarjeta-proyectos.component.css']
})
export class TarjetaProyectosComponent implements OnInit {
  @Input() detalle : TarjetaDetalle = {} as TarjetaDetalle;

  constructor() { }

  ngOnInit(): void {
  }

}
