import 'react-native-gesture-handler';
import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import RootContainer from './src/navigators';
import store from './src/redux/store';
import { NavigationContainer , DefaultTheme} from '@react-navigation/native';
import firebase from "@react-native-firebase/app";



var firebaseConfig = {
  apiKey: "AIzaSyBtXxgKam45yRIfDXNfECkoeuzv-MNfg5M",
  authDomain: "jugglingwherehouse-126be.firebaseapp.com",
  databaseURL: "",
  projectId: "jugglingwherehouse-126be",
  storageBucket: "",
  messagingSenderId: "349391099954",
  appId: "1:349391099954:ios:1235103ffd355a225d842b",
  measurementId: "",
};




export class App extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }
  
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer theme={{...DefaultTheme,dark:true,colors:{'background':'#0e101f'}}}>
          <RootContainer />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App
