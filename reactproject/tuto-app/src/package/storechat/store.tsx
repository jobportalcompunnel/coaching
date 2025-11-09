import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "@redux-saga/core";
import appReducer from './appSlice';
import rootSaga from '../saga/saga';
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    app: appReducer,
    // Add other reducers here
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
