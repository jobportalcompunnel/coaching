// // In app.module.ts:
// // TypeScript
// // providers: [
// //   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
// // ]


// **************
// import { Observable } from 'rxjs';
// @Injectable()
// export class AuthInterceptor implements  HttpInterceptor
// {
//   constructor(private authService: AuthService) {}
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = this.authService.getToken();
//     if (token) {
//       request = request.clone({
//         setHeaders: { Authorization: `Bearer ${token}` }
//       });
//     }
