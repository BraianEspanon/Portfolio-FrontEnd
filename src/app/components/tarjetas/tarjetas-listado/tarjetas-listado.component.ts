import { Component, OnInit } from '@angular/core';
import { TarjetasService } from 'src/app/service/tarjetas.service';
import { Tarjeta } from 'src/app/entity/Tarjeta';
import { TarjetaPerfil } from 'src/app/entity/TarjetaPerfil';


import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tarjetas-listado',
  templateUrl: './tarjetas-listado.component.html',
  styleUrls: ['./tarjetas-listado.component.css']
})
export class TarjetasListadoComponent implements OnInit {
  listaTarjetas: Tarjeta[] = [];
  tarjetaPerfil: TarjetaPerfil = {} as TarjetaPerfil;
  faTimes = faTimes;
  constructor(
    private tarjetasService: TarjetasService
  ) { }

  ngOnInit(): void {
    this.tarjetasService.getTarjetasInformacion().subscribe((tarjetas) => 
    (
      this.listaTarjetas = tarjetas
    ));

    this.tarjetasService.getTarjetaPerfil().subscribe((tarjetas) => 
    (
      this.tarjetaPerfil = tarjetas
    ));
  }
}