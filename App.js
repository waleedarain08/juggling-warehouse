import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import React from 'react';
import RootContainer from './src/navigators';
import store from './src/redux/store';

export default function App() {
  SplashScreen.hide();
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}
