import { IRepo } from 'models/repo';

export interface IUser {
  login: string
  id: number
  repos: IRepo[]
}

export interface IUsersList {
  items: IUser[]
}

export interface IUserSearchParams {
  login: string
  // eslint-disable-next-line camelcase
  per_page?: number
}
