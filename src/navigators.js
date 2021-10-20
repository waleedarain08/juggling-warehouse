import { Text, View, Image, TouchableOpacity, Modal,Platform } from 'react-native';
import React, {  useState, useEffect  } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import search from './pages/search/search';
import ForgatPassword from './pages/ForgatPassword/ForgatPassword';
import profile from './pages/profile/profile';
import download from './pages/download/download';
import list from './pages/list/list';
import NotificationsScreen from './pages/notificationsScreen/notificationScreen';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import HomeScreen from './pages/home/HomeScreen';
import DetailScreen from './pages/home/DetailScreen';
import EditProfile from './pages/profile/EditProfile';
import CustomDrawer from './CustomDrawer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogin } from './redux/actions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import CustomTabBar from './CustomTabBar';
import LiveNow from './pages/home/LiveNow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VideoPlayer } from './pages/video';
import { getDataFromAsyncStorage, saveDataInAsyncStorage } from './helper/utils';
import auth from '@react-native-firebase/auth'
import CategoryContent from './pages/CategoryContent/CategoryContent';

const useInitialRender = () => {
  const [isInitialRender, setIsInitialRender] = useState(false);

  if (!isInitialRender) {
    setTimeout(() => setIsInitialRender(true), 1);
    return true;
  }
  return false;
};

const toggleDrawer = navigation => {
  navigation.toggleDrawer();
};

const drawerButton = navigation => {
  return (
    <TouchableOpacity onPress={() => toggleDrawer(navigation)}>
      <Image
        source={require('./assets/menu-icon.png')}
        style={{ width: 20, height: 20, resizeMode: 'contain', marginLeft: 12 }}
      />
    </TouchableOpacity>
  );
};

const notificationIcon = navigation => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('LiveNow')}
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: 'red',
          alignItems: 'center',
          padding: 4,
          borderRadius: 3,
          marginRight: 10,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            height: 6,
            width: 6,
            padding: 0,
            borderRadius: 3,
          }}></View>
        <Text
          style={{
            color: '#fff',
            fontSize: 10,
            fontWeight: '800',
            marginLeft: 5,
          }}>
          Live Now
        </Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Icon
          name="notifications-outline"
          size={24}
          style={{ marginRight: 10, color: '#fff' }}
          onPress={() => navigation.navigate('Notifications')}
        />
      </View>
    </View>
  );
};
const profiletionIcon = navigation => {
  goNext = () => {
    navigation.navigate('EditProfile');
  };
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('EditProfile')}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{
            width: 13,
            height: 13,
            resizeMode: 'contain',
            marginRight: 14,
          }}
          source={require('./assets/edit03.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

enableScreens();
//const Stack =createStackNavigator();
const Stack = Platform.OS==="ios"?createNativeStackNavigator():createStackNavigator();
const Drawer = createDrawerNavigator();
const LoginStackNav = createStackNavigator();
const HomeTabAStackNav = createStackNavigator();
const HomeDownloadStackNav = createStackNavigator();
const HomeSearchStackNav = createStackNavigator();
const HomeListStackNav = createStackNavigator();
const HomeTabNav = createBottomTabNavigator();
const HomeProfileStackNav = createStackNavigator();

function LoginStack() {
  return (
    <LoginStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <LoginStackNav.Screen name="Login"  component={Login} />
      <LoginStackNav.Screen name="Signup" component={Signup} />
      <LoginStackNav.Screen name="ForgatPassword" component={ForgatPassword} />
    </LoginStackNav.Navigator>
  );
}

function HomeTabAStack() {
  return (
    <HomeTabAStackNav.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#0e101f',
          shadowOpacity: 0.85,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Raleway-Regular',
          textTransform: 'capitalize'
        },
      }}>
      <HomeTabAStackNav.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
          headerRight: () => notificationIcon(navigation),
        })}
      />
      <HomeTabAStackNav.Screen
        name="Video"
        component={VideoPlayer}
        options={({ navigation }) => ({
          headerLeft: () => <Icon name="arrow-back" color="#fff" size={20} onPress={() => navigation.goBack()} style={{ marginLeft: 12 }} />,
          // headerRight: () => notificationIcon(navigation),
        })}
      />
      <HomeTabAStackNav.Screen
        name="CategoryContent"
        component={CategoryContent}
        options={({ navigation }) => ({
          headerLeft: () => <Icon name="arrow-back" color="#fff" size={20} onPress={() => navigation.goBack()} style={{ marginLeft: 12 }} />,
          // headerRight: () => notificationIcon(navigation),
        })}
      />
      <HomeTabAStackNav.Screen
        name="AboutMotivation"
        component={DetailScreen}
        options={{ title: 'About Motivation' }}
      />
      {/* <HomeTabAStackNav.Screen 
        name="LiveNow" 
        component={LiveNow} 
        options={{ title: 'Live Now' }}
      /> */}
      <HomeTabAStackNav.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <HomeTabAStackNav.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </HomeTabAStackNav.Navigator>
  );
}

function HomeDownloadStack() {
  return (
    <HomeDownloadStackNav.Navigator
      initialRouteName="Downloads"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0e101f',
          shadowOpacity: 0.85,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Raleway-Regular',
        },
      }}>
      <HomeDownloadStackNav.Screen
        name="Downloads"
        component={download}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
          headerRight: () => notificationIcon(navigation),
        })}
      />
      <HomeDownloadStackNav.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      {/* <HomeDownloadStackNav.Screen name="TabBDetails" component={TabBDetails} /> */}
    </HomeDownloadStackNav.Navigator>
  );
}

function HomeSearchStack() {
  return (
    <HomeSearchStackNav.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0e101f',
          shadowOpacity: 0.85,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Raleway-Regular',
        },
      }}>
      <HomeSearchStackNav.Screen
        name="Search"
        component={search}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
          headerRight: () => notificationIcon(navigation),
        })}
      />
      <HomeSearchStackNav.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      {/* <HomeSearchStackNav.Screen name="TabBDetails" component={TabBDetails} /> */}
    </HomeSearchStackNav.Navigator>
  );
}

function HomeListStack() {
  return (
    <HomeListStackNav.Navigator
      initialRouteName="MyList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0e101f',
          shadowOpacity: 0.85,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Raleway-Regular',
        },
      }}>
      <HomeListStackNav.Screen
        name="MyList"
        component={list}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
          headerRight: () => notificationIcon(navigation),
        })}
      />
      <HomeListStackNav.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </HomeListStackNav.Navigator>
  );
}

function HomeProfileStack() {
  return (
    <HomeProfileStackNav.Navigator
      initialRouteName="MyProfile"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0e101f',
          shadowOpacity: 0.85,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Raleway-Regular',
        },
      }}>
      <HomeProfileStackNav.Screen
        name="MyProfile"
        component={profile}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
          headerRight: () => profiletionIcon(navigation),
        })}
      />
      <HomeProfileStackNav.Screen
        name="EditProfile"
        component={EditProfile}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </HomeProfileStackNav.Navigator>
  );
}

function HomeTab() {
  // alert(isDrawerOpen);
  return (
    <HomeTabNav.Navigator
      initialRouteName={'Home'}
      tabBar={props => {
        return (
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            <CustomTabBar {...props} />
          </View>
        );
      }}>
      {/* <HomeTabNav.Screen name="LiveNow" component={LiveNow}  /> */}
      <HomeTabNav.Screen name="Download" component={HomeDownloadStack} />
      <HomeTabNav.Screen name="Search" component={HomeSearchStack} />
      <HomeTabNav.Screen name="Home" component={HomeTabAStack} />
      <HomeTabNav.Screen name="List" component={HomeListStack} />
      <HomeTabNav.Screen name="Profile" component={HomeProfileStack} />
    </HomeTabNav.Navigator>
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      drawerContentOptions={{
        itemStyle: { marginVertical: 8, marginHorizontal: 8 },
      }}
      initialRouteName="Home"
      overlayColor="transparent"
      drawerType="front">
      <Drawer.Screen 
        options={({ navigation }) => ({
          activeTintColor: "#fff", 
          headerShown: true, 
          headerTitleStyle:{color: "#fff"},
          title: 'Live Now',
          headerLeft: () => <Icon name="arrow-back" color="#fff" size={20} onPress={() => navigation.goBack()} style={{ marginLeft: 12 }} />,
        })}
        name="LiveNow" component={LiveNow} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Home" component={HomeTab} />
    </Drawer.Navigator>
  )
}

function RootContainer({ user,userLogin }) {
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      auth().onIdTokenChanged(async (user) => {
        const idToken = await user.getIdToken(true)
        var data = {
          user: user, 
          token: idToken
        }
        saveDataInAsyncStorage("token", JSON.stringify(data))
      })

      var token = await getDataFromAsyncStorage('token')

      if (token !== null) {
        setTimeout(() => {
          userLogin(token);
        }, 500);
      } else {
        
      }
    };
    bootstrapAsync();
  }, []);
  return (
    <Stack.Navigator  initialRouteName="Login"  screenOptions={{headerShown:false}} sdetachInactiveScreens={true}>
      {user.loggedin ? <Stack.Screen name="MainDrawer" component={MainDrawer} /> : <Stack.Screen name="Login" component={LoginStack} />}
    </Stack.Navigator>
  );
}

const mapStateToProps = state => {
  return { user: state?.user };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogin }, dispatch);
  export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
