import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header/header-bar/header-bar.component';
import { HeaderButtonsComponent } from './components/header/header-buttons/header-buttons.component';
import { TarjetaBaseComponent } from './components/tarjetas/tarjeta-base/tarjeta-base.component';
import { TarjetasListadoComponent } from './components/tarjetas/tarjetas-listado/tarjetas-listado.component';
import { TarjetaPerfilComponent } from './components/tarjetas/tarjeta-perfil/tarjeta-perfil.component';
import { TarjetaBasicoComponent } from './components/tarjetas/tarjeta-basico/tarjeta-basico.component';
import { TarjetaPorcentajesComponent } from './components/tarjetas/tarjeta-porcentajes/tarjeta-porcentajes.component';
import { TarjetaProyectosComponent } from './components/tarjetas/tarjeta-proyectos/tarjeta-proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { AltaModificacionDetalleComponent } from './components/tarjetas/alta-modificacion-detalle/alta-modificacion-detalle.component';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/inicio'},
  {path: 'inicio', component: TarjetasListadoComponent},
  {path: 'login', component: LoginComponent}
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
    TarjetaProyectosComponent,
    LoginComponent,
    AltaModificacionDetalleComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,  
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    MatProgressBarModule,
    FormsModule,
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents:[AltaModificacionDetalleComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
