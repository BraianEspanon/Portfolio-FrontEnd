import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { TarjetasListadoComponent } from './components/tarjetas/tarjetas-listado/tarjetas-listado.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/inicio'},
  {path: 'inicio', component: TarjetasListadoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contacto', component: ContactoComponent},
  { path: '**', redirectTo: '/inicio' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
