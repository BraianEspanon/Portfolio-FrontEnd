import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header/header-bar/header-bar.component';
import { HeaderButtonsComponent } from './components/header/header-buttons/header-buttons.component';
import { TarjetaBaseComponent } from './components/tarjetas/tarjeta-base/tarjeta-base.component';
import { TarjetasListadoComponent } from './components/tarjetas/tarjetas-listado/tarjetas-listado.component';
import { TarjetaPerfilComponent } from './components/tarjetas/tarjeta-perfil/tarjeta-perfil.component';
import { TarjetaBasicoComponent } from './components/tarjetas/tarjeta-basico/tarjeta-basico.component';
import { TarjetaPorcentajesComponent } from './components/tarjetas/tarjeta-porcentajes/tarjeta-porcentajes.component';
import { TarjetaProyectosComponent } from './components/tarjetas/tarjeta-proyectos/tarjeta-proyectos.component';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/inicio'},
  {path: 'inicio', component: TarjetasListadoComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HeaderButtonsComponent,
    TarjetaBaseComponent,
    TarjetasListadoComponent,
    TarjetaPerfilComponent,
    TarjetaBasicoComponent,
    TarjetaPorcentajesComponent,
    TarjetaProyectosComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,  
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
