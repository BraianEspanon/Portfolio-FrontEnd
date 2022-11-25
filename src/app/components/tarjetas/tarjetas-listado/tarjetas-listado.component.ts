import { Component, OnInit } from '@angular/core';
import { TarjetasService } from 'src/app/service/tarjetas.service';
import { Tarjeta } from 'src/app/entity/Tarjeta';
import { TarjetaDetalle } from 'src/app/entity/TarjetaDetalle';
import { TarjetaPerfil } from 'src/app/entity/TarjetaPerfil';
import { AuthService } from 'src/app/service/auth.service';


import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tarjetas-listado',
  templateUrl: './tarjetas-listado.component.html',
  styleUrls: ['./tarjetas-listado.component.css']
})
export class TarjetasListadoComponent implements OnInit {
  listaTarjetas: Tarjeta[] = [];
  tarjetaPerfil: TarjetaPerfil = {} as TarjetaPerfil;
  
  loggedIn: boolean = false;
  constructor(
    private tarjetasService: TarjetasService,
    private authService: AuthService
  )
  { 
    this.loggedIn = this.authService.loggedIn
  }

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
  onAddDetalle(tarjeta : Tarjeta){
    this.tarjetasService.updateTarjeta(tarjeta).subscribe();
  }

  onEditDetalle(tarjetaConDetalleEditado : Tarjeta){
    this.tarjetasService.updateTarjeta(tarjetaConDetalleEditado).subscribe();
  }
  
  onDeleteDetalle(tarjetaConDetalleEliminado : Tarjeta){
    this.tarjetasService.updateTarjeta(tarjetaConDetalleEliminado).subscribe();
  }

  onEditPerfil(tarjetaPerfilEditado : TarjetaPerfil){
    this.tarjetasService.updateTarjetaPerfil(tarjetaPerfilEditado).subscribe();
  }
}