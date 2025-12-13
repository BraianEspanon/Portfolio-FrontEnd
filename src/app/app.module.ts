import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header/header-bar/header-bar.component';
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
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';


import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { environment } from '../environments/environment.prod';
import { FooterBarComponent } from './components/footer/footer-bar/footer-bar.component';
import { CargandoComponent } from './components/cargando/cargando.component';
import { MenuComponent } from './components/header/menu/menu.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderBarComponent,
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
        FooterBarComponent,
        CargandoComponent,
        MenuComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FontAwesomeModule,
        MatProgressBarModule,
        FormsModule,
        CommonModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        AppRoutingModule,
        MatButtonModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth())], providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
