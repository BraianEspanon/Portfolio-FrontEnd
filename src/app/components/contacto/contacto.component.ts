import { Component, OnInit } from '@angular/core';
import { MedioContacto } from 'src/app/entity/MedioContacto';
import { ContactoService } from 'src/app/service/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  listaMedioContacto: MedioContacto[] = [];
  constructor(
    private contactoService: ContactoService
  ) { }

  ngOnInit(): void {
    this.listaMedioContacto.push({medio: "Teléfono:", contacto: "+54 9 3513510812"})
    this.listaMedioContacto.push({medio: "Email:", contacto: "braianespanon@gmail.com"})
    /*
    Evaluar si implementar o no
    this.contactoService.getMedioContacto().subscribe((medios) => {
      this.listaMedioContacto = medios;
    })
    */
  }
}
