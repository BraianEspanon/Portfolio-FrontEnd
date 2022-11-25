import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.email === "" || this.password === "" ) {
      alert("Agregue un usuario y contraseña");
      return; 
    }
    this.authService.login(this.email, this.password)
  }
}
