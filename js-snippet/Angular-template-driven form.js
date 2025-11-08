// // import { FormsModule } from '@angular/forms';
// // @NgModule({
// //   imports: [
// //     BrowserModule,
// //     FormsModule,

// *****************************************************
// *****************************************************

// <form id="loginForm" (ngSubmit)="onSubmit(loginForm.value, loginForm)" #loginForm="ngForm">
//   <p>
//     <input id="username" name="username" [(ngModel)]="username" required maxlength="88" 
//     minlength="7" />
//   </p>
//   <p>
//     <button type="submit" [disabled]="loginForm.invalid"> Save </button>
//   </p>

// </form>


// *****************************************************
// *****************************************************

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   isShowErrors: boolean;
//   username: string;
//   constructor() { }
//   ngOnInit() {
//   }
//    onSubmit(formData, formObj) {
//     if (formObj.form.invalid) {
//       this.isShowErrors = true;
//       return false;
//     }
//     const data = { username: formData.username};
//     alert(data.username)
//    }

// }
