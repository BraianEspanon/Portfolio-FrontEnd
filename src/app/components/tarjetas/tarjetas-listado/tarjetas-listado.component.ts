import { Component, OnInit } from '@angular/core';
import { TarjetasService } from 'src/app/service/tarjetas.service';
import { Tarjeta } from 'src/app/Interfaces/Tarjeta';
import { TarjetaDetalle } from 'src/app/Interfaces/TarjetaDetalle';
import { TarjetaPerfil } from 'src/app/Interfaces/TarjetaPerfil';
import { AuthService } from 'src/app/service/auth.service';
import { AgregarTarjetaComponent } from '../agregar-tarjeta/agregar-tarjeta.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from 'src/app/service/token.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarjetas-listado',
  templateUrl: './tarjetas-listado.component.html',
  styleUrls: ['./tarjetas-listado.component.css']
})
/*
  Este componente funciona como el inicio del portfolio.
  El portfolio está compuesto por varias "Secciones" o "Tarjetas". 
  Este componente contiene todas las tarjetas, como si fuera un listado.
  Hay varios tipos de tarjetas, pero las más importantes son la del perfil y la tarjeta genérica/base (Aunque estas cambian según su tipo de detalle).
   
*/
export class TarjetasListadoComponent implements OnInit {
  listaTarjetas: Tarjeta[] = [];
  tarjetaPerfil: TarjetaPerfil = {} as TarjetaPerfil;
  errorMessage: string = "";

  isLoading: boolean = true;
  loggedIn: boolean = true;

  constructor(
    private tarjetasService: TarjetasService,
    private authService: AuthService,
    public dialog: MatDialog,
    private token: TokenService
  )
  {
    this.loggedIn = this.authService.loggedIn
  }

  ngOnInit(): void {
    this.tarjetasService.getTarjetasInformacion().subscribe((tarjetas) => 
    (
      this.listaTarjetas = tarjetas
    ), (error) => {
      this.errorMessage = "¡Error! Ha ocurrido un error al intentar conectar al servidor BackEnd. No se pudieron obtener las tarjetas de información.";
    });

    this.tarjetasService.getTarjetaPerfil().subscribe((tarjetas) => { 
      this.tarjetaPerfil = tarjetas
      this.isLoading = false;
    }, (error) => {
      this.errorMessage = "¡Error! No se pudo conectar al servidor BackEnd. No se pudo obtener la tarjeta del perfil.";
    });
    
  }

  
  onLoaded(): void {
    this.isLoading = false;
  }

  onAddDetalle(tarjeta : Tarjeta){
    this.tarjetasService.updateTarjeta(tarjeta).subscribe(result => {

    }, (error) => {
      this.handleError(error)
    });
  }

  onEditDetalle(tarjetaConDetalleEditado : Tarjeta){
    this.tarjetasService.updateTarjeta(tarjetaConDetalleEditado).subscribe(result => {

    }, (error) => {
      this.handleError(error)
    });
  }
  
  onDeleteDetalle(tarjetaConDetalleEliminado : Tarjeta){
    this.tarjetasService.updateTarjeta(tarjetaConDetalleEliminado).subscribe(result => {

    }, (error) => {
      this.handleError(error)
    });
  }

  onEditPerfil(tarjetaPerfilEditado : TarjetaPerfil){
    this.tarjetasService.updateTarjetaPerfil(tarjetaPerfilEditado).subscribe(result => {

    }, (error) => {
      this.handleError(error)
    });
  }

  onDeleteTarjeta(tarjetaAEliminar: Tarjeta){
    this.tarjetasService.deleteTarjeta(tarjetaAEliminar.idTarjeta).subscribe(result => {
      let nuevaListaTarjetas = this.listaTarjetas.filter(tarjeta => tarjeta.idTarjeta !== tarjetaAEliminar.idTarjeta);
      this.listaTarjetas = nuevaListaTarjetas;
    }, (error) => {
      this.handleError(error)
    });
  }

  onAddTarjeta(tarjetaAAGregar: any){
    this.tarjetasService.addTarjeta(tarjetaAAGregar).subscribe(result => {
      this.listaTarjetas.push(result);
    }, (error) => 
    {
      this.handleError(error)
    });
  }

  handleError(error: HttpErrorResponse){
    if (error.status === 401 || error.status === 403){
      alert("No tienes permiso para esta acción. Por favor inicie sesión nuevamente.");
      this.token.logOut();
    }
  }
}