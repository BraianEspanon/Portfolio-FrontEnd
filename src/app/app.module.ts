import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
import { ModificacionPerfilComponent } from './components/tarjetas/modificacion-perfil/modificacion-perfil.component';
import { SubirImagenComponent } from './components/subir-imagen/subir-imagen.component';
import { AgregarTarjetaComponent } from './components/tarjetas/agregar-tarjeta/agregar-tarjeta.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InterceptorService } from 'src/app/service/interceptor.service';



const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/inicio'},
  {path: 'inicio', component: TarjetasListadoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contacto', component: ContactoComponent}
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
    ModificacionPerfilComponent,
    SubirImagenComponent,
    AgregarTarjetaComponent,
    ContactoComponent,
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
    BrowserAnimationsModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  entryComponents:[
    AltaModificacionDetalleComponent, 
    ModificacionPerfilComponent
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
