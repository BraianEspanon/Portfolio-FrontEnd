import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cargando',
  templateUrl: './cargando.component.html',
  styleUrl: './cargando.component.scss'
})
export class CargandoComponent {
  @Input() isLoading: boolean = true;
  @Input() errorMessage: string = "";

}
