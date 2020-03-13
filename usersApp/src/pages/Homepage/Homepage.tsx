import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
// Styles
import * as S from './style';
// Actions
import {GetUsers, GetSingleUser} from '../../store/actions';
// Library
import {connect} from 'react-redux';
//Components
import {DynamicList} from '../../components/atoms';
// Utils
import Config from 'react-native-config';
import {User} from '../../utils/interfaces';

const Homepage = (props: any) => {
  const [search, setSearch] = useState<string>('');
  const [offset, setOffest] = useState<number>(2);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [data, setData] = useState<User[]>([]);
  const [isLoadMore, setIsLoadMore] = useState(false);

  //On click of load more button call Api
  const onLoadMore = () => {
    setIsLoadMore(true);
    fetch(`${Config.REACT_APP_API_URL}/users?since=${offset}&per_page=30`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token c3084f98d18b73480290cd299348af1aee5a9296`,
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        setOffest(offset + 1);
        setData([...data, ...responseJson]);
        setIsLoadMore(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // On refresh reset data and offset
  const onRefresh = () => {
    setOffest(2);
    setRefreshing(true);
    setData([]);
  };

  // On change input call api with written text
  const onChangeSearchBar = (text: string) => {
    setSearch(text);
    props.getUsers(text);
  };

  useEffect(() => {
    //  If is the first time set data with user
    if (data && data.length === 0) {
      props.getUsers();
      if (props.users) {
        setData(props.users);
      }
    }
    //every time the isFetching props changes, updates data with new users
    if (!props.isFetching && !isLoadMore) {
      setData(props.users);
      setRefreshing(false);
    }
  }, [props.isFetching, data]);

  return (
    <S.Container>
      <S.TextInput
        placeholder="Search for users"
        onChangeText={(text: string) => onChangeSearchBar(text)}
        value={search}
        clearButtonMode="always"
      />
      {props.isFetching ? (
        <ActivityIndicator size="large" />
      ) : (
        <DynamicList
          data={data}
          isFetching={props.isFetching}
          onLoadMore={onLoadMore}
          isLoadMore={isLoadMore}
          onClickItem={user =>
            props.navigation.navigate('TabScreen', {
              title: user.login,
            })
          }
          onRefresh={onRefresh}
          refreshing={refreshing}
        />
      )}
    </S.Container>
  );
};

const mapStateToProps = ({UsersReducer}: any) => {
  return {
    users: UsersReducer && UsersReducer.data && UsersReducer.data.users,
    isFetching: UsersReducer && UsersReducer.isFetching,
    hasError: UsersReducer && UsersReducer.hasError,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUsers: (name: string) => dispatch(GetUsers(name)),
    getSingleUser: (id: number) => dispatch(GetSingleUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
