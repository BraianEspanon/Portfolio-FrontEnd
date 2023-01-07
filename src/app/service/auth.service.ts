import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { NuevoUsuario } from '../model/nuevo-usuario';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://portfolio-jcdt.onrender.com/auth';

  
  constructor(private http: HttpClient,
    private router: Router,
    private tokenService: TokenService) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.http.post<any>(this.authURL + "/nuevo", nuevoUsuario)
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.http.post<JwtDto>(this.authURL + "/login", loginUsuario)
  }
  
  public get loggedIn(): boolean {
    return (sessionStorage.getItem('AuthToken') !== null)
  }
}
