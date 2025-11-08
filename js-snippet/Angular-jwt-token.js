// JWT TOEKN
// ng add @auth0/angular-jwt

// import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { HttpClient } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   constructor(private helper: JwtHelperService, private http: HttpClient) {}

//   login(username: string, password: string) {
//     // Send login request to your backend
//     return this.http.post<any>('/api/login', { username, password }).pipe(
//       map((response) => {
//         localStorage.setItem('token', response.token);
//         return response;
//       })
//     );
//   }
