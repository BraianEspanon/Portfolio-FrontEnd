import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Tarjeta } from 'src/app/entity/Tarjeta';
import { TarjetaPerfil } from '../entity/TarjetaPerfil';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {
  private apiUrl: string = 'http://localhost:5000/';

  constructor(
    private http: HttpClient
  ) { }
  
  getTarjetasInformacion() : Observable<Tarjeta[]> {
    return this.http.get<Tarjeta[]>(this.apiUrl + 'tarjetasInformacion');
  }
  getTarjetaPerfil() : Observable<TarjetaPerfil> {
    return this.http.get<TarjetaPerfil>(this.apiUrl + 'tarjetaPerfil');
  }
}
