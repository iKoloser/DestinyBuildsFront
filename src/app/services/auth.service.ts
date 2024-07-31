import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token'; // Nombre del campo del token en localStorage

  constructor() { }

  private get isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  isAuthenticated(): boolean {
    // Solo ejecuta en el navegador
    if (this.isBrowser) {
      return !!localStorage.getItem(this.tokenKey);
    }
    return false;
  }

  login(token: string): void {
    // Solo ejecuta en el navegador
    if (this.isBrowser) {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  logout(): void {
    // Solo ejecuta en el navegador
    if (this.isBrowser) {
      localStorage.removeItem(this.tokenKey);
    }
  }
}
