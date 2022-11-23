import { Component, OnInit, Input } from '@angular/core';
import { Tarjeta } from 'src/app/entity/Tarjeta'

@Component({
  selector: 'app-tarjeta-base',
  templateUrl: './tarjeta-base.component.html',
  styleUrls: ['./tarjeta-base.component.css']
})
export class TarjetaBaseComponent implements OnInit {
  @Input() tarjeta: Tarjeta = {} as Tarjeta;
  
  constructor() { }

  ngOnInit(): void {
  }

}
