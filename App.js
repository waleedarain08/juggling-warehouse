import 'react-native-gesture-handler';
import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import RootContainer from './src/navigators';
import store from './src/redux/store';
import { NavigationContainer , DefaultTheme} from '@react-navigation/native';
// export default function App() {
//   SplashScreen.hide();
//   return (
//     <Provider store={store}>
//       <RootContainer />
//     </Provider>
//   );
// }

export class App extends Component {
  componentDidMount() {
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
