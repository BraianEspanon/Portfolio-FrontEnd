import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})

/*
  Componente barra del header.
*/

export class HeaderBarComponent implements OnInit {
  //argentinaProgramaLogo: string = "/assets/images/ArgentinaPrograma_logo.png";
  faGithub = faGithub
  faLinkedin = faLinkedin

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redireccionar(): void {
    this.router.navigate(["inicio"]).then(()=> {
      window.location.reload()
    });
  }
}
