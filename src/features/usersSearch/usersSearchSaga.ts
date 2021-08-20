/* eslint-disable import/no-cycle */ // due to reduxjs/toolkit implementation https://stackoverflow.com/a/63924400
import { PayloadAction } from '@reduxjs/toolkit';
import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import usersApi from 'api/usersApi';
import { IRepo } from 'models/repo';
import {
  IUserSearchParams,
  IUsersList,
} from 'models/user';

import {
  getUserRepos,
  getUserReposFailed,
  getUserReposSuccess,
  getUsers,
  getUsersFailed,
  getUsersSuccess,
} from 'features/usersSearch/usersSearchSlice';

interface IResponse<T> {
  data: {
    items: T[]
  }
}

export function* fetchUsers(action: PayloadAction<IUserSearchParams>) {
  try {
    const response: IResponse<IUsersList> = yield call(usersApi.getUsers, action.payload);

    yield put(getUsersSuccess(response.data.items));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Failed to fetch users', error);

    yield put(getUsersFailed);
  }
}

export function* fetchUserRepos(action: PayloadAction<string>) {
  try {
    const response: IResponse<IRepo> = yield call(usersApi.getReposByUserLogin, action.payload);

    yield put(getUserReposSuccess({
      login: action.payload,
      repos: response.data.items,
    }));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Failed to fetch repos', error);

    yield put(getUserReposFailed());
  }
}

export default function* searchUsersSaga() {
  yield takeLatest(getUsers, fetchUsers);
  yield takeLatest(getUserRepos, fetchUserRepos);
}
