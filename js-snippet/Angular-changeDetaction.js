// <h2 class="title">Hello {{ name }}</h2>
// <table>
//   <tr *ngFor="let x of arr">
//     <td *ngFor="let y of arr">
//       <button
//         type="button"
//         [ngClass]="{ colorset: counterPrime(loopIncrement()) }"
//       >
//         {{ testc }}
//       </button>
//     </td>
//   </tr>
// </table>
// ////////////////////////////////////
// import {
//   AfterViewInit,
//   ChangeDetectorRef,
//   Component,
//   VERSION,
// } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
 //  styles:['.kkbk {background-color: green; }']
// })
// export class AppComponent implements AfterViewInit {
//   name = 'Angular ' + VERSION.full;
//   looping: number = 6;
//   testc: number = 0;
//   arr = [];
//   constructor(private cdr: ChangeDetectorRef) {}
//   counterPrime(num) {
//     let sq = Math.sqrt(num);
//     let isRound = Math.round(num);
//     if (num <= 3) {
//       if (num > 1) {
//         return true;
//       } else {
//         return false;
//       }
//     } else if (num % 2 === 0 || num % 3 === 0) {
//       return false;
//     } else if (num > 9 && (num % 5 === 0 || num % 7 === 0 || num % 9 === 0)) {
//       return false;
//     }
//     return true;
//   }

//   loopIncrement(): number {
//     return ++this.testc;
//   }

//   ngAfterViewInit() {
//     this.arr = Array(this.looping)
//       .fill(0)
//       .map((x, i) => i + 1);
//     // this.cdr.detach();
//     // this.cdr.detectChanges();
//     // this.cdr.reattach();
//   }
// }
