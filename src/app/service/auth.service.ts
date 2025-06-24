import { inject, Injectable } from '@angular/core';

import { BehaviorSubject, from, Observable } from 'rxjs';

import { Auth, onAuthStateChanged, signInWithEmailAndPassword } from '@angular/fire/auth';
import { signOut } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
/*
  Servicio de autenticación.
*/
export class AuthService {
  private firebaseAuth = inject(Auth)
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  public loggedIn$ = this.loggedInSubject.asObservable();
  
  constructor() {
    onAuthStateChanged(this.firebaseAuth, user => {
      this.loggedInSubject.next(!!user);
    });
  }

  login(email: string, password: string): Observable<void>{
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth, 
      email, 
      password
    ).then(() => {})
    return from(promise)
  }
  
  logout():Observable<void> {
    const promise = signOut(this.firebaseAuth)
    return from(promise)
  }

  public isLoggedIn(): boolean {
    return this.firebaseAuth.currentUser !== null;
  }
  
  public getToken(): Promise<string | null> {
    if (this.firebaseAuth.currentUser){
      return this.firebaseAuth.currentUser.getIdToken()
    }
    else{
      return Promise.resolve(null);
    }
  }
}
