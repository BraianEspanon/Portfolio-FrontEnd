import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  argentinaProgramaLogo: string = "/assets/images/ArgentinaPrograma_logo.png"
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redireccionar(): void {
    this.router.navigate(["inicio"]);
  }
}
