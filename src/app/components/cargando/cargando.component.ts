import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-cargando',
    templateUrl: './cargando.component.html',
    styleUrl: './cargando.component.scss',
    standalone: true,
    imports: [MatProgressSpinnerModule, CommonModule]
})
export class CargandoComponent {
  @Input() isLoading: boolean = true;
  @Input() errorMessage: string = "";

}
