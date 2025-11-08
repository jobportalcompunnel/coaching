// ***********Step 1=--***********
// ***********App.tsx***********
// import { Provider } from "react-redux";
// import store from "./package/storechat/store";
            //  <Provider store={store}>
//                 <Nav />
//               </Provider>// 
 ///***********Step 2=***********
    //***********definito sore file***********
// import { configureStore } from '@reduxjs/toolkit';
// import appReducer from './appSlice';
// const store = configureStore({
//   reducer: {
//     app2: appReducer,
//   },
// });
// export default store;
///***********Step 3=***********
    //***********createe slice***********
// import { createSlice } from '@reduxjs/toolkit';
// const initialState = { value: '',funda: ''};
// const appSlice = createSlice({
//   name: 'app',
//   initialState,
//   reducers: {
//     updateValue: (state, action) => {
//       state.value = action.payload;
//     },
//     morganValue: (state, action) => {
//         state.funda = action.payload;
//       },
//   },
// });
// export const { updateValue, morganValue } = appSlice.actions;
// export default appSlice.reducer;
///***********How to use while set=***********
    //*********** Set Value ***********
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { updateValue , morganValue} from './appSlice';
// const FirstComponent = () => {
//   const dispatch = useDispatch();
//   const handleUpdateValue = () => {
//     dispatch(updateValue('new value'));
//   };
//   const handleMorgan = () => {
//     dispatch(morganValue(Math.random()));
//   };
///***********How to use while get=***********
    //*********** Get Value ***********
// import { useSelector } from 'react-redux';
// const SecondComponent = () => {
// const value = useSelector((state: any) => state.app2.value);
// const fundaVal = useSelector((state: any) => state.efined.funda);