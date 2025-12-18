import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
api = 'http://localhost:5000';
  user: any = null;
  constructor(private http : HttpClient) { }
    login(username: string, password: string) {
    return this.http
      .get<any[]>(`${this.api}/users?username=${username}&password=${password}`)
      .pipe(
        tap((res) => {
          this.user = res[0];
          localStorage.setItem('user', JSON.stringify(this.user));
        })
      );
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  isAdmin() {
    return this.getUser()?.role === 'admin';
  }

  isUser() {
    return this.getUser()?.role === 'user';
  }

  isLoggedIn() {
    return this.getUser() !== null;
  }

}
