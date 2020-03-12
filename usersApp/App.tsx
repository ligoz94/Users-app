/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
//Navigation
import AppContainer from './src/navigator/appContainer';
// State management
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <AppContainer
          renderLoadingExperimental={() => <ActivityIndicator size="large" />}
        />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
