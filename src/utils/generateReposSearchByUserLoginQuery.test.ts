import generateReposSearchByUserLoginQuery from './generateReposSearchByUserLoginQuery';

describe('repos query utility', () => {
  it('generates query with parameter provided', () => {
    expect(generateReposSearchByUserLoginQuery('test')).toEqual('?q=user:test');
  });
});
