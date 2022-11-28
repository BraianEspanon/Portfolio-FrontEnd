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
  //Actualmente se hace acá para simular el funcionamiento del backend
  login(email: string, password:string){
    let encontrado = false;
    this.http.get(this.uri + 'authenticate')
      .subscribe((resp: any) => {
        for (let i = 0; i < resp.length; i++) {
          if (resp[i].email === email && resp[i].password === password){
            encontrado = true;
            break;
          }
        }
        if (encontrado){
          //localStorage.setItem('auth_token', resp.token);
          localStorage.setItem('auth_token', resp.email);
          this.router.navigate(["inicio"])
            .then(
              ()=>{window.location.reload()}
            );
        }
        else{
          alert("Usuario o contraseñas incorrectas")
        }
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
