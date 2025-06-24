import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedioContacto } from '../Interfaces/MedioContacto';

@Injectable({
  providedIn: 'root'
})
/*
  Servicio en desuso.
  Se planeaba obtener los medios de contacto mediante el backend.
  Debido a que no lo consideré necesario en el momento, este servicio no está siendo utilizado.
  Se mantiene por posible cambios en el futuro.
*/
export class ContactoService {
  //private apiUrl: string = 'https://portfolio-jcdt.onrender.com';
  private apiUrl: string = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  getMedioContacto() : Observable<MedioContacto[]>{
    return this.http.get<MedioContacto[]>(this.apiUrl + '/contacto');
  }
}
