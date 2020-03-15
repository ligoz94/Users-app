import React, {useEffect, useState} from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
// Styles
import * as S from './style';
import variables from '../../../styles/variables';
// Actions
import {GetUsers} from '../../../store/actions';
// Library
import {connect} from 'react-redux';
//Components
import {DynamicList} from '../../../components/atoms';
import {ListItem} from 'react-native-elements';
// Utils
import Config from 'react-native-config';
import {User} from '../../../utils/interfaces';

interface Props {
  users: User[];
  isFetching: boolean;
  hasError: boolean;
  getUsers: (name: string) => void;
  navigation: any;
}

const UsersList: React.FC<Props> = (props: any) => {
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
  }, [props.isFetching, props.users, data]);

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
          row={({item}) => (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('TabScreen', {
                  title: item.login,
                })
              }>
              <ListItem
                leftAvatar={{source: {uri: item.avatar_url}}}
                title={item.login}
                bottomDivider
                chevron={{color: variables.indigo}}
              />
            </TouchableOpacity>
          )}
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList as any) as any;
