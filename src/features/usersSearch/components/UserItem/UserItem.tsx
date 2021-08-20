/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

import { getUserRepos } from 'features/usersSearch/usersSearchSlice';
import RepoItem from 'features/usersSearch/components/RepoItem/RepoItem';
import Loader from 'common/components/Loader/Loader';

import { useAppDispatch } from 'app/hooks';
import { IUser } from 'models/user';

import {
  ArrowIcon,
  LoginLabel,
  Wrapper,
} from './styled';

interface IUserItemProps {
  content: IUser
}

export default function UserItem({ content }: IUserItemProps) {
  const [showRepos, setShowRepos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const {
    login,
    repos,
  } = content;

  const handleUserItemClick = () => {
    if (!repos && !showRepos) {
      dispatch(getUserRepos(login));
      setIsLoading(true);
    }
    setShowRepos(!showRepos);
    setIsLoading(false);
  };

  return (
    <>
      <Wrapper onClick={handleUserItemClick}>
        <LoginLabel>{login}</LoginLabel>
        <ArrowIcon dir={showRepos ? 'up' : 'down'} />
      </Wrapper>
      {!repos && showRepos && <Loader message="Loading repos" />}
      {!isLoading && showRepos && repos && (
        <>
          {repos?.map((repo) => (
            <RepoItem key={repo.id} content={repo} />
          ))}
        </>
      )}
    </>
  );
}
