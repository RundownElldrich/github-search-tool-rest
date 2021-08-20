import axios from 'axios';
import generateUsersSearchByLoginQuery from 'utils/generateUsersSearchByLoginQuery';
import generateReposSearchByUserLoginQuery from 'utils/generateReposSearchByUserLoginQuery';
import usersApi, { baseUrl, usersPath, repositoriesPath } from './usersApi';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const usersFixture = {
  data: {
    items: [
      {
        login: 'user1',
      },
    ],
  },
};

const filtersFixture = { login: 'test', per_page: 1 };

const reposFixture = {
  data: {
    items: [
      {
        name: 'repo1',
      },
    ],
  },
};

describe('users api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getUsers functionality', () => {
    it('requests users', async () => {
      mockedAxios.get.mockImplementation(() => Promise.resolve(usersFixture));
      const entity = await usersApi.getUsers(filtersFixture);
      const requestUrl = `${baseUrl}${usersPath}${generateUsersSearchByLoginQuery(filtersFixture)}`;

      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(requestUrl);
      expect(entity).toEqual(usersFixture);
    });

    it('requests repos', async () => {
      mockedAxios.get.mockImplementation(() => Promise.resolve(reposFixture));
      const entity = await usersApi.getReposByUserLogin('test');
      const requestUrl = `${baseUrl}${repositoriesPath}${generateReposSearchByUserLoginQuery('test')}`;

      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(requestUrl);
      expect(entity).toEqual(reposFixture);
    });
  });
});
