import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs';
import { Tarjeta } from 'src/app/Interfaces/Tarjeta';
import { TarjetaPerfil } from '../Interfaces/TarjetaPerfil';
import { catchError, tap } from 'rxjs/operators'; 

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
/*
  Servicio de tarjetas.
  Contiene todas las peticions HTTP al servidor backend relacionadas con las tarjetas.
*/
export class TarjetasService {
  //private apiUrl: string = 'https://api.portfolio-braianespanon.com';
  private apiUrl: string = 'http://localhost:8080';
  private tarjetasCache: Tarjeta[] | null = null;
  private tarjetaPerfilCache: TarjetaPerfil | null = null;
  
  constructor(
    private http: HttpClient
  ) { }
  
  getTarjetasInformacion() : Observable<Tarjeta[]> {
    if (this.tarjetasCache) {
      return of(this.tarjetasCache); // devuelve cache
    } else{
      return this.http.get<Tarjeta[]>(this.apiUrl + '/tarjetasInformacion').pipe(
        tap(data => this.tarjetasCache = data)
      );
    }
  }

  getTarjetaPerfil() : Observable<TarjetaPerfil> {
    if (this.tarjetaPerfilCache){
      return of(this.tarjetaPerfilCache);
    } else{
      return this.http.get<TarjetaPerfil>(this.apiUrl + '/tarjetaPerfil').pipe(
        tap(data => this.tarjetaPerfilCache = data)
      );
    }
  }
  
  updateTarjeta(tarjeta: Tarjeta) : Observable<Tarjeta>{
    console.log(tarjeta)
    const url = `${this.apiUrl}/tarjetasInformacion`;
    return this.http.put<Tarjeta>(url, tarjeta, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateTarjetaPerfil(tarjetaPerfil: TarjetaPerfil) : Observable<TarjetaPerfil>{
    const url = `${this.apiUrl}/tarjetaPerfil`;
    return this.http.put<TarjetaPerfil>(url, tarjetaPerfil, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  addTarjeta(nuevaTarjeta: Tarjeta) : Observable<Tarjeta>{
    const url = `${this.apiUrl}/tarjetasInformacion`;
    return this.http.post<Tarjeta>(url, nuevaTarjeta, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteTarjeta(id: Number) {
    const url = `${this.apiUrl}/tarjetasInformacion/${id}`;
    
    return this.http.delete<Tarjeta>(url, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
