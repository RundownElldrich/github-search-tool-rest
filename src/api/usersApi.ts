import axios from 'axios';

import {
  IUserSearchParams,
} from 'models/user';
import generateReposSearchByUserLoginQuery from 'utils/generateReposSearchByUserLoginQuery';
import generateUsersSearchByLoginQuery from 'utils/generateUsersSearchByLoginQuery';

export const baseUrl = 'https://api.github.com/search';
export const usersPath = '/users';
export const repositoriesPath = '/repositories';

const usersApi = {
  getUsers(filters: IUserSearchParams) {
    const url = `${baseUrl}${usersPath}${generateUsersSearchByLoginQuery(filters)}`;

    return axios.get(url);
  },
  getReposByUserLogin(login: string) {
    const url = `${baseUrl}${repositoriesPath}${generateReposSearchByUserLoginQuery(login)}`;

    return axios.get(url);
  },
};

export default usersApi;
