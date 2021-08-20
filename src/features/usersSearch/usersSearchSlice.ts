import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
/* eslint-disable-next-line import/no-cycle */ // due to reduxjs/toolkit implementation https://stackoverflow.com/a/63924400
import { RootState } from 'app/store';
import {
  IUser,
  IUserSearchParams,
} from 'models/user';

export interface IUsersState {
  list: IUser[]
  isLoadingUsers: boolean
  searchParams: IUserSearchParams
  error?: Error | string
}

export const initialState: IUsersState = {
  list: [],
  isLoadingUsers: false,
  searchParams: {
    login: '',
    per_page: 5,
  },
};

/* eslint-disable no-param-reassign */ // due to reduxjs/toolkit implementation https://github.com/reduxjs/redux-toolkit/issues/360
export const usersSearchSlice = createSlice({
  name: 'usersSearch',
  initialState,
  reducers: {
    setSearchParams(state, action: PayloadAction<Partial<IUserSearchParams>>) {
      state.searchParams = {
        ...state.searchParams,
        ...action.payload,
      };
    },
    setIsLoadingUsers(state, action: PayloadAction<boolean>) {
      state.isLoadingUsers = action.payload;
    },
    resetSearchParams(state) {
      state.searchParams = initialState.searchParams;
      state.list = [];
    },
    // eslint-disable-next-line no-unused-vars
    getUsers(state, action) {
      state.isLoadingUsers = true;
    },
    getUsersSuccess(state, action) {
      state.isLoadingUsers = false;
      state.list = action.payload;
    },
    getUsersFailed(state) {
      state.isLoadingUsers = false;
    },
    // eslint-disable-next-line no-unused-vars
    getUserRepos(state, action) {},
    getUserReposSuccess(state, action) {
      const {
        login,
        repos,
      } = action.payload;
      const user = state.list
        .find((userInList) => userInList.login === login);

      if (user) {
        user.repos = repos;
      }
    },
    getUserReposFailed() {},
  },
});

export const selectSearchParams = (state: RootState) => state.usersSearch.searchParams;
export const selectUsersList = (state: RootState) => state.usersSearch.list;
export const selectIsLoadingUsers = (state: RootState) => state.usersSearch.isLoadingUsers;
export const errorSelector = (state: RootState) => state.usersSearch.error;

const {
  actions,
  reducer,
} = usersSearchSlice;

export const {
  getUsers,
  getUsersSuccess,
  getUsersFailed,
  getUserRepos,
  getUserReposSuccess,
  getUserReposFailed,
  setIsLoadingUsers,
  setSearchParams,
  resetSearchParams,
} = actions;

export default reducer;
