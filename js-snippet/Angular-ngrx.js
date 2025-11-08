// //step-1 provider
// //********************
// // app.module.ts
// // import { StoreModule } from '@ngrx/store';
// // import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// // import { appReducer } from './store/app.state';

// // imports: [
// // StoreModule.forRoot(appReducer),
// // import { StoreDevtoolsModule } from '@ngrx/store-devtools';.instrument({
// //   maxAge:25,
// //   logOnly: true
// // })
// //     ]
// //step-2  create state
// //********************
// //store/app.state
// import { counterReducer } from '../ngrxcomponent/state/counter.reducer';
// import { CounterState } from '../ngrxcomponent/state/counter.state';
// import { postReducer } from '../ngrxcomponent/state/poststate/posts.reducer';
// import { PostState } from '../ngrxcomponent/state/poststate/posts.state';

// export interface AppState {
//   rootcounter: CounterState;
//   rootposts: PostState;
// }

// export const appReducer = {
//   rootcounter: counterReducer,
//   rootposts: postReducer,
// };
// //step-3  create reducer
// //********************
// //ngrxcomponent/state/counter.state
// import { createReducer, on } from "@ngrx/store";
// import { initialState } from "./counter.state";
// import { customIncrement, decrement, increment, reset } from "./counter.actions";

// const _counterReducer = createReducer(initialState,
//     on(increment, (state)=>{
//         return {
//             ...state,
//             counter: state.counter+1
//         }
//     }),
//     on(decrement, (state)=>{
//     );
// export function counterReducer(state, action){
//     return _counterReducer(state, action);
// }
// ////step-4  create state
// //********************
// //ngrxcomponent/state/counter.state
        
// // export interface CounterState{
// //   counter: number;
// // }
// // export const initialState: CounterState  = {
// //   counter: 4
// // }
// //step-5  create action
// //********************
// //C:\projects\angular\ssp\src\app\ngrxcomponent\state\counter.actions.ts
// // import { createAction, props } from "@ngrx/store";
// // export const increment = createAction("increment");
// // export const decrement = createAction("decrement");
// // export const reset = createAction("reset");

// // export const customIncrement = createAction("customIncrement",
// // props<{value:number}>()
// // );
// //step-6  create selectors
// //********************
// // import { createFeatureSelector, createSelector } from "@ngrx/store";
// // import { CounterState } from "./counter.state";
// // const getCounterState = createFeatureSelector<CounterState>('rootcounter');
// // export const getCounter = createSelector(getCounterState, (state)=>{
// // return state.counter
// // });
        
// //step-7  dispatch
// //********************
// // // dispatch
// // this.store.dispatch(increment());

// // import { Component, OnInit } from '@angular/core';
// // import { Store } from '@ngrx/store';
// // import { increment } from '../state/counter.actions';
// // import { CounterState } from '../state/counter.state';
// // import { AppState } from 'src/app/store/app.state';

// // @Component({
// //   selector: 'app-counter-buttons',
// //   templateUrl: './counter-buttons.component.html',
// //   styleUrls: ['./counter-buttons.component.scss']
// // })
// // export class CounterButtonsComponent implements OnInit {
// //   constructor(private store : Store<AppState>){
// //   }
// //   callIncrrement (){
// //     this.store.dispatch(increment());
// //   }
// // }

// //step-8  show counter
// //********************
//  // show counter
// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';

// @Component({
//   selector: 'app-counter',
//   templateUrl: './counter.component.html',
//   styleUrls: ['./counter.component.scss'],
// })
// export class CounterComponent implements OnInit {
//   counter: number;

//   constructor(private store: Store<AppState>) {}
//   ngOnInit(): void {
//     this.store.select('rootcounter').subscribe((data) => {
//       this.counter = data.counter;
//     });
//   }
// }
