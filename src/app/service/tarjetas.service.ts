import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs';
import { Tarjeta } from 'src/app/Interfaces/Tarjeta';
import { TarjetaPerfil } from '../Interfaces/TarjetaPerfil';
import { catchError } from 'rxjs/operators'; 

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
  private apiUrl: string = 'https://portfolio-jcdt.onrender.com';
  
  constructor(
    private http: HttpClient
  ) { }
  
  getTarjetasInformacion() : Observable<Tarjeta[]> {
    return this.http.get<Tarjeta[]>(this.apiUrl + '/tarjetasInformacion');
  }

  getTarjetaPerfil() : Observable<TarjetaPerfil> {
    return this.http.get<TarjetaPerfil>(this.apiUrl + '/tarjetaPerfil');
  }
  
  updateTarjeta(tarjeta: Tarjeta) : Observable<Tarjeta>{
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
