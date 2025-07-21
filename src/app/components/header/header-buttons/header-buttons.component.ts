import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header-buttons',
  templateUrl: './header-buttons.component.html',
  styleUrls: ['./header-buttons.component.scss']
})
/*
  Header Buttons es un componente que cambia entre el botón login y logout, según sea necesario.
*/
export class HeaderButtonsComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.loggedIn$.subscribe((isLogged) => {
      this.loggedIn = isLogged;
    });
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.authService.logout()
    window.location.reload()
  }
}
