var nn= new Array(3);
//or
// art = [];
// art.length =6
// art;
nn;
//(3) [empty × 3]
nn.fill("w");
nn;
// new way
// [].constructor(5)
//typescript
//numbers: number[] = Array(10).fill(0).map((x, i) => i + 1);
//javascript
kk= Array(10).fill(0).map((x, i) => i + 1);
kk;
//angular
// import { range } from 'rxjs';
// numberRange$ = range(1, 10);
// <tr *ngFor="let num$ | async">
//       <td>{{ num$ }}</td>
//     </tr>