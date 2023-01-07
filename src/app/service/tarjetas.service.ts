import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Tarjeta } from 'src/app/entity/Tarjeta';
import { TarjetaPerfil } from '../entity/TarjetaPerfil';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

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
    return this.http.put<Tarjeta>(url, tarjeta, httpOptions);
  }

  updateTarjetaPerfil(tarjetaPerfil: TarjetaPerfil) : Observable<TarjetaPerfil>{
    const url = `${this.apiUrl}/tarjetaPerfil`;
    return this.http.put<TarjetaPerfil>(url, tarjetaPerfil, httpOptions);
  }

  addTarjeta(nuevaTarjeta: Tarjeta) : Observable<Tarjeta>{
    const url = `${this.apiUrl}/tarjetasInformacion`;
    return this.http.post<Tarjeta>(url, nuevaTarjeta, httpOptions);
  }

  deleteTarjeta(tarjetaAEliminar: Tarjeta) {
    const url = `${this.apiUrl}/tarjetasInformacion/${tarjetaAEliminar.idTarjeta}`;
    console.log(tarjetaAEliminar)
    return this.http.delete<Tarjeta>(url, httpOptions);
  }
}
