/* eslint-disable camelcase */
import { IUserSearchParams } from 'models/user';

export default function generateUsersSearchByLoginQuery(filters: IUserSearchParams) {
  const { login, per_page = 10 } = filters;
  let query = `?q=${login}+in:login`;

  if (per_page) {
    query += `&per_page=${per_page}`;
  }

  return query;
}
