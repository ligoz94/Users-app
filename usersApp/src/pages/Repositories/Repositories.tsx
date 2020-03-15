import React from 'react';
import * as S from './style';
// Components
import ReposList from './components/ReposList';

interface Props {}

const Repositories: React.FC<Props> = (props: any) => {
  let username = props.navigation.getParam('title');

  return (
    <S.Container>
      <ReposList username={username}></ReposList>
    </S.Container>
  );
};

export default Repositories;
