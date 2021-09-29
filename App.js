import 'react-native-gesture-handler';
import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import RootContainer from './src/navigators';
import store from './src/redux/store';
import { NavigationContainer , DefaultTheme} from '@react-navigation/native';
import firebase from "@react-native-firebase/app";
import { DeviceEventEmitter } from 'react-native';



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
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
   }else {
      firebase.app(); // if already initialized, use that one
   }
    setTimeout(() => {
      SplashScreen.hide();
    }, 300);
  }


  componentWillUnmount() {
  }

   onStateChange = (state) => {
    //  console.log("state", state)
    let route = state;
    while (route.routes) {
      route = route.routes[route.index];
    }
    DeviceEventEmitter.emit('routeStateChanged', route);
  }
  
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer onStateChange={this.onStateChange} theme={{...DefaultTheme,dark:true,colors:{'background':'#0e101f'}}}>
          <RootContainer />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App
