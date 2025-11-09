
import { put, takeEvery, all, call, delay, takeLatest } from 'redux-saga/effects';
import { userAction  } from '../storechat/appSlice';
import { AxiosResponse } from "axios";
import empAPI from "../../api/employeeAPI";

export interface UserType {
    username: string,
    password: string
  }

function* helloSaga() {
    alert(555)
  console.log('Hello Saga!');
}

// Worker Saga: Will perform the async increment task
function* incrementAsync() {
    try {
        // You can also export the axios call as a function.
        //const response: AxiosResponse<UserType> = yield axios.get(`your-server-url:port/api/users/${id}`);
        const response: AxiosResponse<any> = yield empAPI.getUserDetail(1);
        console.log(response.data, "userdetail")
        yield put(userAction(response.data?.id));
      } catch (error) {
        //yield put(getUserErrorAction(error));
        yield delay(5000);
        yield put(userAction("666"));
      }
  
}

// Watcher saga: Spawns a new incrementAsync task
function* watchIncrementAsync() {
  yield takeLatest(userAction , incrementAsync);
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}