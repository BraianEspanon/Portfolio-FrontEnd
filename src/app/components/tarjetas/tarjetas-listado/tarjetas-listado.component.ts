import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TarjetasService } from 'src/app/service/tarjetas.service';
import { Tarjeta } from 'src/app/Interfaces/Tarjeta';
import { TarjetaPerfil } from 'src/app/Interfaces/TarjetaPerfil';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { ScrollService } from 'src/app/service/scroll.service';

@Component({
  selector: 'app-tarjetas-listado',
  templateUrl: './tarjetas-listado.component.html',
  styleUrls: ['./tarjetas-listado.component.scss']
})
/*
  Este componente funciona como el inicio del portfolio.
  El portfolio está compuesto por varias "Secciones" o "Tarjetas". 
  Este componente contiene todas las tarjetas, como si fuera un listado.
  Hay varios tipos de tarjetas, pero las más importantes son la del perfil y la tarjeta genérica/base (Aunque estas cambian según su tipo de detalle).
   
*/
export class TarjetasListadoComponent implements OnInit, AfterViewInit {
  listaTarjetas: Tarjeta[] = [];
  tarjetasPorcentaje: Tarjeta[] = [];
  otrasTarjetas: Tarjeta[] = [];

  
  tarjetaPerfil: TarjetaPerfil = {} as TarjetaPerfil;
  errorMessage: string = "";

  isLoading: boolean = true;
  loggedIn: boolean = true;

  @ViewChild('contenedorPerfil') contenedorPerfil!: ElementRef;
  isVisiblePerfil: boolean = false;

  @ViewChildren('fadeTarjetas') fadeTarjetas!: QueryList<ElementRef>;
  @ViewChildren('fadeTarjetasPorcentaje') fadeTarjetasPorcentaje!: QueryList<ElementRef>;


  constructor(
    private tarjetasService: TarjetasService,
    private authService: AuthService,
    public dialog: MatDialog,
    private scrollService: ScrollService
  ) { }

  ngOnInit(): void {
    this.tarjetasService.getTarjetasInformacion().subscribe((tarjetas) => 
    {
      this.listaTarjetas = tarjetas.map(t => ({ ...t, visible: false }));
      this.tarjetasPorcentaje = this.listaTarjetas.filter(t => t.tipo === 'Porcentaje');
      this.otrasTarjetas = this.listaTarjetas.filter(t => t.tipo !== 'Porcentaje');

      
      const nombres = this.otrasTarjetas.map(t => this.idFromNombre(t.titulo));
      this.scrollService.setSecciones(nombres);
    }, (error) => {
      this.errorMessage = "¡Error! Ha ocurrido un error al intentar conectar al servidor BackEnd. No se pudieron obtener las tarjetas de información.";
    });

    this.tarjetasService.getTarjetaPerfil().subscribe((tarjetas) => { 
      this.tarjetaPerfil = tarjetas
      this.isLoading = false;
    }, (error) => {
      this.errorMessage = "¡Error! No se pudo conectar al servidor BackEnd. No se pudo obtener la tarjeta del perfil.";
    });
    this.authService.loggedIn$.subscribe((isLogged) => {
      this.loggedIn = isLogged;
    });

  }

  
  ngAfterViewInit(): void {
    // Intentamos realizar el scroll si hay uno pendiente
    this.scrollService['intentarScrollDesdeComponente']?.();

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === this.contenedorPerfil.nativeElement) {
          this.isVisiblePerfil = true;
        }

        // Buscar la tarjeta en la lista y marcar como visible
        const index = this.fadeTarjetas.toArray().findIndex(el => el.nativeElement === entry.target);
        if (index !== -1) {
          this.otrasTarjetas[index].visible = true;
        }
        
        // Buscar tarjeta porcentaje
        const indexPorc = this.fadeTarjetasPorcentaje.toArray().findIndex(el => el.nativeElement === entry.target);
        if (indexPorc !== -1) {
          this.tarjetasPorcentaje[indexPorc].visible = true;
        }

        observer.unobserve(entry.target); // para no seguir observando luego
      }
    });
    }, { threshold: 0.1 });

    // Observar perfil
    if (this.contenedorPerfil) {
      observer.observe(this.contenedorPerfil.nativeElement);
    }
    
    // Observar cada tarjeta genérica
    this.fadeTarjetas.changes.subscribe((tarjetas: QueryList<ElementRef>) => {
      tarjetas.forEach((tarjeta) => observer.observe(tarjeta.nativeElement));
    });
    this.fadeTarjetas.forEach((tarjeta) => observer.observe(tarjeta.nativeElement));
    
    
    // Observar porcentaje
    this.fadeTarjetasPorcentaje.changes.subscribe((tarjetas: QueryList<ElementRef>) => {
      tarjetas.forEach((tarjeta) => observer.observe(tarjeta.nativeElement));
    });
    this.fadeTarjetasPorcentaje.forEach((tarjeta) => observer.observe(tarjeta.nativeElement));
  }
  
  idFromNombre(nombre: string): string {
    return nombre.toLowerCase().replace(/\s/g, '-');
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
  onEditTarjeta(tarjetaAEditar: any){
    this.tarjetasService.updateTarjeta(tarjetaAEditar).subscribe(result => {

    }, (error) => {
      this.handleError(error)
    });
  }

  handleError(error: HttpErrorResponse){
    if (error.status === 401 || error.status === 403){
      alert("No tienes permiso para esta acción. Por favor inicie sesión nuevamente.");
      this.authService.logout();
      window.location.reload();
    }
  }
}