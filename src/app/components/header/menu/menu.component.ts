import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContactoService } from 'src/app/service/contacto.service';
import { ScrollService } from 'src/app/service/scroll.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  @Output() cerrar = new EventEmitter<void>();

  secciones: string[] = [];
  mailtoLink:string = "";
  
  constructor(private contactoService: ContactoService,
    private scrollService: ScrollService
  ) {}


  ngOnInit() {
    this.scrollService.secciones$.subscribe((sec) => {
      this.secciones = sec;
    });
    this.mailtoLink = this.contactoService.getPlantillaCorreo()
  }
  
  irASeccion(id: string) {
    this.scrollService.scrollToSeccion(id);
    this.cerrar.emit();
  }
  
  cerrarMenu() {
    this.cerrar.emit();
  }
}
