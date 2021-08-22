import { useState, useEffect } from 'react';

import { useAppSelector } from 'app/hooks';
import { IUser } from 'models/user';

import { selectUsersList, selectIsLoadingUsers, selectSearchParams } from 'features/usersSearch/usersSearchSlice';
import UsersSearchForm from 'features/usersSearch/components/UsersSearchForm/UsersSearchForm';
import UserItem from 'features/usersSearch/components/UserItem/UserItem';
import Loader from 'common/components/Loader/Loader';

import { Card, ResultsLabel, Wrapper } from './styled';

export default function UsersSearch() {
  const usersList = useAppSelector(selectUsersList);
  const isLoading = useAppSelector(selectIsLoadingUsers);
  const searchParams = useAppSelector(selectSearchParams);
  const [login, setLogin] = useState('');

  useEffect(() => {
    setLogin(searchParams.login);
  }, [usersList]);

  return (
    <Wrapper>
      {isLoading && <Loader message="Loading users" />}
      <Card>
        <UsersSearchForm />
        {!!usersList.length && (
        <ResultsLabel>
          Showing users for
          &quot;
          {login}
          &quot;
        </ResultsLabel>
        )}
        {usersList.map((user: IUser) => (
          <UserItem key={user.id} content={user} />
        ))}
      </Card>
    </Wrapper>
  );
}
