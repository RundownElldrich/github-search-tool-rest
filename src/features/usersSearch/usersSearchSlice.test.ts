import usersSearchReducer, {
  initialState,
  selectSearchParams,
  selectIsLoadingUsers,
  selectUsersList,
  getUsers,
  getUsersSuccess,
  getUsersFailed,
  setSearchParams,
  getUserReposSuccess,
} from './usersSearchSlice';

describe('usersSearchSlice', () => {
  describe('reducer, actions and selectors', () => {
    it('should properly set isLoading when fetching users', () => {
      const nextState = usersSearchReducer(initialState, getUsers);
      const rootState = { usersSearch: nextState };

      expect(selectIsLoadingUsers(rootState)).toEqual(true);
    });

    it('should properly set isLoading when fetching users is finished with success', () => {
      const nextState = usersSearchReducer(initialState, getUsersSuccess);
      const rootState = { usersSearch: nextState };

      expect(selectIsLoadingUsers(rootState)).toEqual(false);
    });

    it('should properly set isLoading when fetching users is finished with failure', () => {
      const nextState = usersSearchReducer(initialState, getUsersFailed);
      const rootState = { usersSearch: nextState };

      expect(selectIsLoadingUsers(rootState)).toEqual(false);
    });

    it('should properly set searchParams without per_page parameter', () => {
      const nextState = usersSearchReducer(initialState, setSearchParams({ login: 'test' }));
      const rootState = { usersSearch: nextState };

      expect(selectSearchParams(rootState)).toEqual({ login: 'test', per_page: 5 });
    });

    it('should properly set searchParams with per_page parameter', () => {
      const nextState = usersSearchReducer(initialState, setSearchParams({ login: 'test', per_page: 100 }));
      const rootState = { usersSearch: nextState };

      expect(selectSearchParams(rootState)).toEqual({ login: 'test', per_page: 100 });
    });

    it('should properly set users list when fetching users is finished with success', () => {
      const fakeUser = [{ login: 'test' }];
      const nextState = usersSearchReducer(
        initialState,
        getUsersSuccess(fakeUser),
      );
      const rootState = { usersSearch: nextState };

      expect(selectUsersList(rootState)).toEqual(fakeUser);
    });

    it('should not set isLoading when fetching repos', () => {
      const initialStateWithUsers = {
        list: [{
          id: 1,
          login: 'fakeUser1',
          repos: [],
        }, {
          id: 2,
          login: 'fakeUser2',
          repos: [],
        }],
        isLoadingUsers: false,
        searchParams: {
          login: '',
          per_page: 5,
        },
      };

      const nextUsersListState = [{
        id: 1,
        login: 'fakeUser1',
        repos: [{ name: 'fakeRepo1' }],
      }, {
        id: 2,
        login: 'fakeUser2',
        repos: [],
      }];
      const nextState = usersSearchReducer(initialStateWithUsers, getUserReposSuccess({ login: 'fakeUser1', repos: [{ name: 'fakeRepo1' }] }));
      const rootState = { usersSearch: nextState };

      expect(selectUsersList(rootState)).toEqual(nextUsersListState);
    });
  });
});
