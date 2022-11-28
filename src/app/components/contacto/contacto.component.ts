import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  listaMedioContacto: MedioContacto[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listaMedioContacto.push({titulo: "Teléfono:", descripcion: "+54 9 3513510812"})
    this.listaMedioContacto.push({titulo: "Email:", descripcion: "braianespanon@gmail.com"})
  }
}
interface MedioContacto {
  titulo: string;
  descripcion: string;
}