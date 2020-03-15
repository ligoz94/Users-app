import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  Linking,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
// Styles
import * as S from './style';
import variables from '../../../styles/variables';
//Components
import {DynamicList} from '../../../components/atoms';
import {Icon} from 'react-native-elements';
// Utils
import {Repo} from '../../../utils/interfaces';
// Library
import RNPickerSelect from 'react-native-picker-select';
// Actions
import {GetUserRepos} from '../../../store/actions';

interface Props {
  username: string;
}

const ReposList: React.FC<Props> = (props: any) => {
  const [data, setData] = useState<Repo[]>([]);
  const [sort, setSort] = useState<string>('full_name');
  const [direction, setDirection] = useState<string>('asc');
  const [loading, setLoading] = useState<boolean>(true);

  const sortItems = [
    {label: 'created', value: 'created'},
    {label: 'full_name', value: 'full_name'},
    {label: 'updated', value: 'updated'},
    {label: 'pushed', value: 'pushed'},
  ];
  const directionItems = [
    {label: 'asc', value: 'asc'},
    {label: 'desc', value: 'desc'},
  ];

  useEffect(() => {
    // If is the first time set data with repos
    setLoading(true);
    if (data && data.length === 0 && props.username) {
      props.getUserRepos(props.username);
      if (props.repos) {
        setData(props.repos);
        setLoading(false);
      }
    }
    // if isFetching change update data
    if (!props.isFetching) {
      setData(props.repos);
      setLoading(false);
    }
  }, [props.isFetching]);

  const onDone = () => {
    // get new repos with filters
    props.getUserRepos({sort: sort, direction: direction});
  };

  return loading ? (
    <ActivityIndicator
      size="large"
      style={{marginVertical: 30}}
      color={variables.blue}
    />
  ) : (
    <S.Container>
      <View style={{backgroundColor: variables.grey}}>
        <S.Filters>
          <S.PickerWrapper>
            <S.FilterTitle style={{fontWeight: '600'}}>Sort</S.FilterTitle>
            <RNPickerSelect
              placeholder={{}}
              value={sort}
              onValueChange={value => setSort(value)}
              items={sortItems}
              onDonePress={() => onDone()}
            />
          </S.PickerWrapper>
          <S.PickerWrapper>
            <S.FilterTitle style={{fontWeight: '600'}}>Order</S.FilterTitle>
            <RNPickerSelect
              placeholder={{}}
              value={direction}
              onValueChange={value => setDirection(value)}
              items={directionItems}
              onDonePress={() => onDone()}
            />
          </S.PickerWrapper>
        </S.Filters>
      </View>
      <DynamicList
        data={data}
        isFetching={props.isFetching}
        row={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => Linking.openURL(item.html_url || '')}>
              <S.Row>
                <Text numberOfLines={1}>{item.full_name}</Text>
                <S.StarWrapper>
                  <Icon name="star" color="#f2d028" size={28} />
                  <Text>({item.stargazers_count})</Text>
                </S.StarWrapper>
              </S.Row>
            </TouchableOpacity>
          );
        }}
      />
    </S.Container>
  );
};
const mapStateToProps = ({UsersReducer}: any) => {
  console.log(UsersReducer.data.repos);
  return {
    repos: UsersReducer && UsersReducer.data && UsersReducer.data.repos,
    isFetching: UsersReducer && UsersReducer.isFetching,
    hasError: UsersReducer && UsersReducer.hasError,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUserRepos: (name: string, sort: string, direction: string) =>
      dispatch(GetUserRepos(name, sort, direction)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReposList);
