import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { switchMap} from 'rxjs/operators'; 
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
/*
  Servicio de Interceptor
  Permite añadir el token a las peticiones, logrando autentificar si se tienen permisos para las acciones desde el lado del backend. 
*/
export class InterceptorService implements HttpInterceptor {

  constructor(private authFirebase: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.authFirebase.getToken()).pipe(
      switchMap(token => {
        if (!token) return next.handle(req);
        
        const authReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(authReq);
      })
    )
  }
}
