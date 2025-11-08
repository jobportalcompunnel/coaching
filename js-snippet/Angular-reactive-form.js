// import { ReactiveFormsModule } from '@angular/forms';
// @NgModule({
//   imports: [
//     BrowserModule,
//     ReactiveFormsModule,
//   ],

// *********************************************************
// *********************************************************
// <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
//   <div class="form-group">
//     <label for="firstName">First Name:</label>
//     <input
//       type="text"
//       matInput
//       class="form-control"
//       id="username"
//       formControlName="username"
//     />
//     <div *ngIf="myForm.get('username').hasError('required') && isSubmitted">
//       First name is required!
//     </div>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>

// *********************************************************
// *********************************************************

// import { Component, OnInit } from '@angular/core';
// //import { Router } from '@angular/router';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// @Component({
//   selector: 'app-user-profile',
//   templateUrl: './user-profile.component.html',
//   styleUrls: ['./user-profile.component.css']
// })
// export class UserProfileComponent implements OnInit {
//   isSubmitted: boolean = false;
//   myForm: FormGroup;
//   constructor(
//     //private router: Router
//     ) { }

//   ngOnInit() {
//     this.myForm = new FormGroup({
//       username: new FormControl('', Validators.required),
//       password: new FormControl(''),
//       email: new FormControl(''),
//     });
//   }
//   onSubmit() {
//     this.isSubmitted = this.myForm.invalid;
//     if (this.myForm.valid) {
//       console.log(this.myForm.value);
//       const data = {
//         username: this.myForm.value.username,
//         password: this.myForm.value.password,
//       };
//       alert(data.username)
//       //this.router.navigateByUrl('/');
//     }
//   }

// }
