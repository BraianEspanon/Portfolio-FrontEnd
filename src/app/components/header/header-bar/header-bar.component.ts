import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ContactoService } from 'src/app/service/contacto.service';
import { ScrollService } from 'src/app/service/scroll.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})

/*
  Componente barra del header.
*/

export class HeaderBarComponent implements OnInit{
  //argentinaProgramaLogo: string = "/assets/images/ArgentinaPrograma_logo.png";
  faGithub = faGithub
  faLinkedin = faLinkedin
  faBars = faBars;

  menuVisible = false;

  secciones: string[] = [];
  mailtoLink:string = "";

  constructor(private router: Router, 
    private scrollService: ScrollService,
    private contactoService: ContactoService) { }


  ngOnInit() {
    this.scrollService.secciones$.subscribe((sec) => {
      this.secciones = sec;
    });
    this.mailtoLink = this.contactoService.getPlantilla()
  }

  redireccionar(): void {
    this.router.navigate(["inicio"]);
  }
  
  abrirCurriculum(){
      window.open("https://api.portfolio-braianespanon.com/imagenes/CVBraian.pdf", '_blank');
  }
  
  irASeccion(id: string) {
    this.scrollService.scrollToSeccion(id);
  }
  
  mostrarMenu() {
    this.menuVisible = true;
    document.body.classList.add('no-scroll');
  }

  ocultarMenu() {
    this.menuVisible = false;
    document.body.classList.remove('no-scroll');
  }
}
