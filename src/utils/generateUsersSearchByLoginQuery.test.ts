import generateUsersSearchByLoginQuery from './generateUsersSearchByLoginQuery';

describe('search query utility', () => {
  it('generates query - two parameters provided', () => {
    const filters = {
      login: 'test',
      per_page: 100,
    };
    expect(generateUsersSearchByLoginQuery(filters)).toEqual('?q=test+in:login&per_page=100');
  });
  it('generates query - only required parameter provided', () => {
    const filters = {
      login: 'test',
    };
    expect(generateUsersSearchByLoginQuery(filters)).toEqual('?q=test+in:login&per_page=10');
  });
});
