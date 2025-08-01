import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedioContacto } from '../Interfaces/MedioContacto';

@Injectable({
  providedIn: 'root'
})
/*
  Servicio resignificado.
  Se usa para que los componentes sepan la información de contacto.
  Previamente:
  Se planeaba obtener los medios de contacto mediante el backend.
  Debido a que no lo consideré necesario en el momento, este servicio no está siendo utilizado.
  Se mantiene por posible cambios en el futuro.
*/
export class ContactoService {

  email: string = 'braianespanon@gmail.com';
  telefono:string = '3513510812'

  constructor() { }

  getCorreo(){
    return this.email
  }

  getTelefono(){
    return this.telefono
  }

  getPlantilla(){
    const asunto = encodeURIComponent('Contacto desde portfolio');
    const cuerpo = encodeURIComponent('Hola Braian, me gustaria contactarte porque...');

    return `mailto:${this.email}?subject=${asunto}&body=${cuerpo}`;
  }
}
