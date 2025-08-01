import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ContactoService } from 'src/app/service/contacto.service';
import { ScrollService } from 'src/app/service/scroll.service';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.scss'
})
export class FooterBarComponent implements OnInit {  
  loggedIn: boolean = false;
  secciones: string[] = [];

  mailtoLink:string = "";
  telefono:string = "";
  correo:string = "";

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
    
    this.telefono = this.contactoService.getTelefono()
    this.correo = this.contactoService.getCorreo()
    this.mailtoLink = this.contactoService.getPlantilla()
  }
  
  logOut(): void {
    this.authService.logout()
    window.location.reload()
  }

  irASeccion(id: string) {
    this.scrollService.scrollToSeccion(id);
  }
}
