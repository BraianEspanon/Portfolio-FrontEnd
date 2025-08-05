import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private seccionesSubject = new BehaviorSubject<string[]>([]);
  secciones$ = this.seccionesSubject.asObservable();
  private pendingScrollId: string | null = null;

  constructor(private router: Router) {
    // Escuchamos la navegación y tratamos de hacer el scroll si hay uno pendiente
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.pendingScrollId) {
          this.hacerScroll(this.pendingScrollId);
          this.pendingScrollId = null;
        }
      });
  }

  setSecciones(nombres: string[]) {
    this.seccionesSubject.next(nombres);
  }

  scrollToSeccion(id: string) {
    const currentUrl = this.router.url;

    if (currentUrl !== "/") {
      this.pendingScrollId = id;
      this.router.navigate(['']);
    } else {
      this.hacerScroll(id);
    }
  }

  private hacerScroll(id: string) {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Regula el delay
  }
  intentarScrollDesdeComponente() {
    if (this.pendingScrollId) {
      this.hacerScroll(this.pendingScrollId);
      this.pendingScrollId = null;
    }
  }
}
