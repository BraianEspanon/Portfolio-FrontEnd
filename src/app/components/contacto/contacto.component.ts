import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MedioContacto } from 'src/app/Interfaces/MedioContacto';
import { ContactoService } from 'src/app/service/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
/*
  Componente contacto
  Contiene medios de contacto, más allá de las redes sociales.
*/
export class ContactoComponent implements OnInit, AfterViewInit {
  listaMedioContacto: MedioContacto[] = [];

  mailtoLink:string = "";
  whatsappLink:string = "";
  @ViewChildren('descripcion') descripciones!: QueryList<ElementRef>;

  @ViewChild('contenedorContacto') contenedorContacto!: ElementRef;
  isVisible: boolean = false;

  constructor(
    private contactoService: ContactoService
  ) { }

  ngOnInit(): void {
    this.listaMedioContacto = this.contactoService.getListaMedios()
    this.mailtoLink = this.contactoService.getPlantillaCorreo()
    this.whatsappLink = this.contactoService.getPlantillaWhatsApp()
  }
  
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.isVisible = true;
        observer.unobserve(entry.target); // para no seguir observando luego
      }
    });
    }, { threshold: 0.1 });

    if (this.contenedorContacto) {
      observer.observe(this.contenedorContacto.nativeElement);
    }
  }
  seleccionarTexto(index: number) {
    const elemento = this.descripciones.toArray()[index]?.nativeElement;
    if (elemento) {
      const range = document.createRange();
      range.selectNodeContents(elemento);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }

}
