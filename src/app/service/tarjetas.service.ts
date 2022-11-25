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
  private apiUrl: string = 'http://192.168.0.2:5000';

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
    const url = `${this.apiUrl}/tarjetasInformacion/${tarjeta.id}`;
    return this.http.put<Tarjeta>(url, tarjeta, httpOptions);
  }
}
