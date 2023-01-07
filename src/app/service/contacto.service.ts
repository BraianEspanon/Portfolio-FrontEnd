import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedioContacto } from '../entity/MedioContacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiUrl: string = 'https://portfolio-jcdt.onrender.com';

  constructor(
    private http: HttpClient
  ) { }

  getMedioContacto() : Observable<MedioContacto[]>{
    return this.http.get<MedioContacto[]>(this.apiUrl + '/contacto');
  }
}
