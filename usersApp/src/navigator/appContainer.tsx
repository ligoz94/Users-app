// Navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
// Pages
import {HomePage, Profile, Repositories} from '../pages';
// Variables
import variables from '../styles/variables';

const TabScreen = createMaterialTopTabNavigator(
  {
    Profile: {screen: Profile},
    Repositories: {screen: Repositories},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: variables.blue,
      inactiveTintColor: variables.blue,
      style: {
        backgroundColor: variables.white,
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: variables.blue,
        borderBottomWidth: 2,
      },
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    TabScreen: {
      screen: TabScreen,
      navigationOptions: ({navigation}) => {
        let title =
          navigation &&
          navigation.state &&
          navigation.state.params &&
          navigation.state.params.title;
        return {
          headerStyle: {
            backgroundColor: variables.indigo,
            height: 60,
          },
          headerTintColor: variables.white,
          title: title,
        };
      },
    },
    HomePage: {
      screen: HomePage,
    },
  },
  {
    initialRouteName: 'HomePage',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
