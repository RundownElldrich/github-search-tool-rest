import { useForm } from 'react-hook-form';

import {
  useAppDispatch,
  useAppSelector,
} from 'app/hooks';
import {
  getUsers,
  selectIsLoadingUsers,
  selectSearchParams,
  setSearchParams,
} from 'features/usersSearch/usersSearchSlice';

import {
  Error, Form, Input, SubmitButton,
} from './styled';

type FormData = {
  login: string;
};

export default function UsersSearchForm() {
  const dispatch = useAppDispatch();
  const isLoadingUsers = useAppSelector(selectIsLoadingUsers);
  const searchParams = useAppSelector(selectSearchParams);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const login = register('login', { required: true });
  const onSubmitClick = handleSubmit(() => dispatch(getUsers(searchParams)));

  return (
    <Form onSubmit={onSubmitClick} data-testid="form">
      <Input
        data-testid="input"
        placeholder="Enter username"
        type="text"
          // eslint-disable-next-line react/jsx-props-no-spreading
        {...login}
        onChange={(e) => {
          login.onChange(e);
          dispatch(setSearchParams({ login: e.target.value }));
        }}
      />
      {errors.login && <Error data-testid="error">This field is required ☝️</Error>}
      <SubmitButton
        data-testid="submit"
        disabled={isLoadingUsers}
        type="submit"
        value="Search"
      />
    </Form>
  );
}
