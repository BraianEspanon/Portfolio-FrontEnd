import { Component, OnInit } from '@angular/core';
import { TarjetasService } from 'src/app/service/tarjetas.service';
import { Tarjeta } from 'src/app/entity/Tarjeta';
import { TarjetaDetalle } from 'src/app/entity/TarjetaDetalle';
import { TarjetaPerfil } from 'src/app/entity/TarjetaPerfil';
import { AuthService } from 'src/app/service/auth.service';
import { AgregarTarjetaComponent } from '../agregar-tarjeta/agregar-tarjeta.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tarjetas-listado',
  templateUrl: './tarjetas-listado.component.html',
  styleUrls: ['./tarjetas-listado.component.css']
})
export class TarjetasListadoComponent implements OnInit {
  listaTarjetas: Tarjeta[] = [];
  tarjetaPerfil: TarjetaPerfil = {} as TarjetaPerfil;

  isLoading: boolean = true;
  loggedIn: boolean = true;
  constructor(
    private tarjetasService: TarjetasService,
    private authService: AuthService,
    public dialog: MatDialog
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
  
  onLoaded(): void {
    this.isLoading = false;
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

  onDeleteTarjeta(tarjetaAEliminar: Tarjeta){
    let nuevaListaTarjetas = this.listaTarjetas.filter(tarjeta => tarjeta.idTarjeta !== tarjetaAEliminar.idTarjeta);
    this.listaTarjetas = nuevaListaTarjetas;

    this.tarjetasService.deleteTarjeta(tarjetaAEliminar).subscribe();
  }

  onAddTarjeta(){
    const dialogRef = this.dialog.open(AgregarTarjetaComponent, {
      panelClass: 'container-alta-modificacion',
      data: {
        listaTipos: this.obtenerListaTipos()
      }
      });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.listaTarjetas.push(result);
        this.tarjetasService.addTarjeta(result).subscribe();
      }
    });
  }

  obtenerListaTipos():string[]{
    let lista = ["Basico", "Porcentaje", "Proyectos"]
    return lista
  }
}