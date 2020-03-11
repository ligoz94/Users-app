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

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <AppContainer
        renderLoadingExperimental={() => <ActivityIndicator size="large" />}
      />
    </SafeAreaView>
  );
};

export default App;
