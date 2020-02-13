import { fork } from 'redux-saga/effects';
import usersSaga from './users/saga';
import authSaga from './auth/saga';

export default function* rootSaga() {
  yield fork(usersSaga);
  yield fork(authSaga);
}
