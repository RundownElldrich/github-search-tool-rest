/* eslint-disable import/no-cycle */ // due to reduxjs/toolkit implementation https://stackoverflow.com/a/63924400
import usersSearchSaga from 'features/usersSearch/usersSearchSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([usersSearchSaga()]);
}
