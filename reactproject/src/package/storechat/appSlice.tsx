import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  funda: '',
  userstate: 5555
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    },
    morganValue: (state, action) => {
        state.funda = action.payload;
      },
    userAction: (state, action) => {
        state.userstate = action.payload;
      },
  },
});

export const { updateValue, morganValue, userAction } = appSlice.actions;
export default appSlice.reducer;
