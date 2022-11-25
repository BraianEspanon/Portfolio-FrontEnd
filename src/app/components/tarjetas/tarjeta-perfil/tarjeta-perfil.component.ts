import { Component, OnInit, Input } from '@angular/core';
import { TarjetaPerfil } from 'src/app/entity/TarjetaPerfil';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tarjeta-perfil',
  templateUrl: './tarjeta-perfil.component.html',
  styleUrls: ['./tarjeta-perfil.component.css']
})
export class TarjetaPerfilComponent implements OnInit {
  @Input() tarjeta : TarjetaPerfil = {} as TarjetaPerfil;
  @Input() loggedIn : boolean = false;
  faPen = faPen;
  constructor() { }

  ngOnInit(): void {
  }
}
