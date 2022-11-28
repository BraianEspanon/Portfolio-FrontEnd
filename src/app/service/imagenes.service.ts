import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  //Servicio a implementar/utilizar cuando se haya hecho el backend
  private apiUrl: string = 'http://192.168.0.2:5000';

  constructor(
    private http: HttpClient
  ) { }

  subirImagen(formularioDeDatos : FormData) : Observable<FormData>{
    const url = `${this.apiUrl}/imagenes/`;
    return this.http.post<FormData>(url, formularioDeDatos, httpOptions)
  }
}
