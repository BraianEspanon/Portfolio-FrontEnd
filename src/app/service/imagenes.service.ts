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
/*
  Servicio pensado para facilitar la selección, subida y actualización de las imágenes.
  Será implementado en futuras versiones.
*/
export class ImagenesService {
  private apiUrl: string = 'http://192.168.0.2:5000';

  constructor(
    private http: HttpClient
  ) { }

  subirImagen(formularioDeDatos : FormData) : Observable<FormData>{
    const url = `${this.apiUrl}/imagenes/`;
    return this.http.post<FormData>(url, formularioDeDatos, httpOptions)
  }
}
