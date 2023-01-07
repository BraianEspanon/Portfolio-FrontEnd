import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header-buttons',
  templateUrl: './header-buttons.component.html',
  styleUrls: ['./header-buttons.component.css']
})
export class HeaderButtonsComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private authService: AuthService,
    private tokenService: TokenService) {
        this.loggedIn = this.authService.loggedIn
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.tokenService.logOut()
  }
}
