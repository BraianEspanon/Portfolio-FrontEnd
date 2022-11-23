
import { Component, OnInit, Input } from '@angular/core';
import { TarjetaDetalle } from 'src/app/entity/TarjetaDetalle';

@Component({
  selector: 'app-tarjeta-porcentajes',
  templateUrl: './tarjeta-porcentajes.component.html',
  styleUrls: ['./tarjeta-porcentajes.component.css']
})
export class TarjetaPorcentajesComponent implements OnInit {
  @Input() detalle : TarjetaDetalle = {} as TarjetaDetalle;
  constructor() { }

  ngOnInit(): void {
  }

}
