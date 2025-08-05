import { Injectable } from '@angular/core';
import { MedioContacto } from '../Interfaces/MedioContacto';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

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
  listaMedioContacto: MedioContacto[] = [];

  email: string = 'braianespanon@gmail.com';
  telefono:string = '3513510812'
  mensaje:string = 'Hola Braian, vi tu portfolio y quiero contactarte.'
  constructor() { 
    this.listaMedioContacto.push({medio: "Teléfono", dato: this.telefono, icono: faPhoneAlt})
    this.listaMedioContacto.push({medio: "Correo", dato: this.email, icono: faEnvelope})
  }

  getCorreo(){
    return this.email
  }

  getTelefono(){
    return this.telefono
  }

  getListaMedios(){
    return this.listaMedioContacto
  }

  getPlantillaCorreo(){
    const asunto = encodeURIComponent('Contacto desde portfolio');
    const cuerpo = encodeURIComponent(this.mensaje);

    return `mailto:${this.email}?subject=${asunto}&body=${cuerpo}`;
  }
  getPlantillaWhatsApp() {
    const mensaje = encodeURIComponent(this.mensaje);
    const numeroConCodigo = `+549${this.telefono}`;
    return `https://wa.me/${numeroConCodigo}?text=${mensaje}`;
}
}
