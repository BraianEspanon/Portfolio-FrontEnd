import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ContactoService } from 'src/app/service/contacto.service';
import { ScrollService } from 'src/app/service/scroll.service';
import { MedioContacto } from 'src/app/Interfaces/MedioContacto';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.scss'
})
export class FooterBarComponent implements OnInit {  
  loggedIn: boolean = false;
  secciones: string[] = [];

  listaMedioContacto: MedioContacto[] = []

  @ViewChildren('descripcion') descripciones!: QueryList<ElementRef>;
  
  constructor(private authService: AuthService, 
      private scrollService: ScrollService,
      private contactoService: ContactoService) 
  {
    this.authService.loggedIn$.subscribe((isLogged) => {
      this.loggedIn = isLogged;
    });
  }

  ngOnInit(): void {
    this.scrollService.secciones$.subscribe((sec) => {
      this.secciones = sec;
    });
    
    this.listaMedioContacto = this.contactoService.getListaMedios()
  }
  
  logOut(): void {
    this.authService.logout()
    window.location.reload()
  }

  irASeccion(id: string) {
    this.scrollService.scrollToSeccion(id);
  }
  seleccionarTexto(index: number) {
    const elemento = this.descripciones.toArray()[index]?.nativeElement;
    if (elemento) {
      const range = document.createRange();
      range.selectNodeContents(elemento);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }
}
