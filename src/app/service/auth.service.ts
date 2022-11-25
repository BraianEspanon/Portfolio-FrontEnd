import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'http://192.168.0.2:5000/';

  constructor(private http: HttpClient, private router: Router) { }
  //Toda la logica de aunteticacion debera ser cambiada cuando se incluya el backend
  //Actualmente cualquier mail y contraseña es correcto
  login(email: string, password:string){
    this.http.post(this.uri + 'authenticate', {email: email, password: password})
      .subscribe((resp: any) => {
        //localStorage.setItem('auth_token', resp.token);
        localStorage.setItem('auth_token', resp.email);
        this.router.navigate(["inicio"])
          .then(
            ()=>{window.location.reload()}
          );
      }
    )
  }
  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(["inicio"])
      .then(
        ()=>{window.location.reload()}
      );
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('auth_token') !== null)
  }
}
