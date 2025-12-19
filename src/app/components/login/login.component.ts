import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [FormsModule]
})
/*
  Componente Login.
  Utiliza los servicios Token y Auth para el inicio de sesión.
*/
export class LoginComponent implements OnInit, AfterViewInit {
  isLogged = false;
  isLogginFail = false;
  email!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  @ViewChild('contenedorLogin') contenedorLogin!: ElementRef;
  isVisible: boolean = false;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Si ingreso a login, pero ya estoy logueado, me redirecciona al inicio
    this.authService.loggedIn$.subscribe((isLogged) => {
      if (isLogged){
        this.router.navigate(['inicio'])
      }
    });
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

    if (this.contenedorLogin) {
      observer.observe(this.contenedorLogin.nativeElement);
    }
  }
  onLogin(){
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['inicio']).then( () => 
        {window.location.reload()})

      },
      error: (err:FirebaseError) => {
        let mensajeError:string = "Error al intentar inicio de sesión";

        switch (err.code) {
          case "auth/missing-email":
            mensajeError = "Ingrese un correo";
            break;
          case "auth/invalid-email":
            mensajeError = "El correo ingresado no es válido";
            break;
          case "auth/too-many-requests":
            mensajeError = "Demasiados intentos. Espere un momento e intente de nuevo";
            break;
          case "auth/missing-password":
            mensajeError = "Debe ingresar una contraseña";
            break;
          case "auth/invalid-credential":
            mensajeError = "Usuario o contraseña incorrecto";
            break;

          default:
            console.log("Error.");
            break;
        }
        alert(mensajeError)
      }
    })
  }
}
