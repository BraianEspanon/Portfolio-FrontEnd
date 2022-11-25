import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header-buttons',
  templateUrl: './header-buttons.component.html',
  styleUrls: ['./header-buttons.component.css']
})
export class HeaderButtonsComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private authService: AuthService) {
        this.loggedIn = this.authService.loggedIn
  }

  ngOnInit(): void {
  }
  logOut(): void {
    this.authService.logout()
  }
}
