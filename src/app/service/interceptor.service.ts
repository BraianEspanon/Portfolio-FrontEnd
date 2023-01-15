import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { TokenService } from 'src/app/service/token.service';
import {catchError} from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
/*
  Servicio de Interceptor
  Permite añadir el token a las peticiones, logrando autentificar si se tienen permisos para las acciones desde el lado del backend. 
*/
export class InterceptorService implements HttpInterceptor {

  constructor(private token: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = this.token.getToken();

    if (token){
      req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req)
  }
}
