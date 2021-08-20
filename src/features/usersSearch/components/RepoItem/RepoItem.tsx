import { IRepo } from 'models/repo';

import {
  Wrapper,
  DetailsRow,
  NameLabel,
  Description,
  StarCounter,
} from './styled';

interface IRepoItemProps {
  content: IRepo
}

/* eslint-disable camelcase */
export default function RepoItem({ content }: IRepoItemProps) {
  const {
    name,
    stargazers_count,
    description,
    html_url,
  } = content;
  return (
    <Wrapper>
      <DetailsRow>
        <NameLabel
          as="a"
          href={html_url}
          rel="noreferrer"
          target="_blank"
        >
          {name}

        </NameLabel>
        <StarCounter>
          {stargazers_count}
          &nbsp;
        </StarCounter>
      </DetailsRow>
      <Description>{description}</Description>
    </Wrapper>
  );
}
