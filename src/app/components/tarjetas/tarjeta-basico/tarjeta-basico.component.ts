import { Component, OnInit, Input } from '@angular/core';
import { TarjetaDetalle } from 'src/app/entity/TarjetaDetalle';

@Component({
  selector: 'app-tarjeta-basico',
  templateUrl: './tarjeta-basico.component.html',
  styleUrls: ['./tarjeta-basico.component.css']
})
export class TarjetaBasicoComponent implements OnInit {
  @Input() detalle : TarjetaDetalle = {} as TarjetaDetalle;

  constructor() { }

  ngOnInit(): void {
  }

}
