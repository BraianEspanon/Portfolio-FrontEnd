import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { TokenService } from 'src/app/service/token.service';
import {catchError} from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
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

    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401 || error.status === 403){
          alert("No tienes permiso para esta acción. Por favor inicie sesión nuevamente.");
          this.token.logOut();
        }
        return throwError(error)
      })
    );
  }
}
