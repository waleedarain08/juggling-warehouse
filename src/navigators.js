import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TabB, TabBDetails } from './pages/home/tabB';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import search from './pages/search/search';
// import profile from './pages/profile/profile';
import download from './pages/download/download';
import  list  from './pages/list/list';
import { NavigationContainer } from '@react-navigation/native';
import NotificationsScreen from './pages/notificationsScreen/notificationScreen';
import React from 'react';
import HomeScreen from './pages/home/HomeScreen';
import DetailScreen from './pages/home/DetailScreen';
import TabADetails from './pages/home/tabADetails';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const drawerButton = navigation => {
  return (
    <Icon
      name="menu"
      size={24}
      style={{ marginLeft: 10, color: "#fff" }}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

const Drawer = createDrawerNavigator();

const LoginStackNav = createStackNavigator();
function LoginStack() {
  return (
    <LoginStackNav.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName="Login">
      <LoginStackNav.Screen name="Login" component={Login} />
      <LoginStackNav.Screen name="Signup" component={Signup} />
    </LoginStackNav.Navigator>
  );
}

const HomeTabAStackNav = createStackNavigator();
function HomeTabAStack() {
  return (
    <HomeTabAStackNav.Navigator initialRouteName="HomeScreen" screenOptions={{
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
      },
    }}>
      <HomeTabAStackNav.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation)
        })}
      />
      <HomeTabAStackNav.Screen name="DetailScreen" component={DetailScreen} />
    </HomeTabAStackNav.Navigator>
  );
}

const HomeDownloadStackNav = createStackNavigator();
function HomeDownloadStack() {
  return (
    <HomeDownloadStackNav.Navigator initialRouteName="download" screenOptions={{
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
      },
    }}>
      
      <HomeDownloadStackNav.Screen
        name="Downloads"
        component={download}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
        })}
      />
      {/* <HomeDownloadStackNav.Screen name="TabBDetails" component={TabBDetails} /> */}
    </HomeDownloadStackNav.Navigator>
  );
}

const HomeSearchStackNav = createStackNavigator();
function HomeSearchStack() {
  return (
    <HomeSearchStackNav.Navigator initialRouteName="search" screenOptions={{
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
      },
    }}>
      <HomeSearchStackNav.Screen
        name="Search"
        component={search}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
        })}
      />
      {/* <HomeSearchStackNav.Screen name="TabBDetails" component={TabBDetails} /> */}
    </HomeSearchStackNav.Navigator>
  );
}
const HomeListStackNav = createStackNavigator();
function HomeListStack() {
  return (
    <HomeListStackNav.Navigator initialRouteName="list" screenOptions={{
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
      },
    }}>
      <HomeListStackNav.Screen
        name="My List"
        component={list}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
        })}
      />
    </HomeListStackNav.Navigator>
  );
}


const HomeTabNav = createBottomTabNavigator();

function HomeTab() {
  return (
    <HomeTabNav.Navigator
    initialRouteName={"Home"}
      tabBarOptions={{
        tabStyle:{ 
          paddingVertical:3,
          borderRadius:8
      },
        style: {
          backgroundColor: '#0e101f98',
          position: 'absolute',
          borderTopWidth: 0.1,
          elevation: 0,
         
        },
          activeTintColor: "#fff",
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#1a72b9',
          inactiveBackgroundColor: '#0e101f',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Download':
              return   <Image style={{height:18,width:18,resizeMode:"contain"}} source={require('./assets/downloadicon.png')} />
            case 'Search':
              return   <Image style={{height:18,width:18,resizeMode:"contain"}} source={require('./assets/Search.png')} />
              break;
            case 'Home':
              return   <Image style={{height:18,width:18,resizeMode:"contain"}} source={require('./assets/homeicon.png')} />
              break;
            case 'List':
              return   <Image style={{height:18,width:18,resizeMode:"contain"}} source={require('./assets/Play-List.png')} />
              break;
            case 'Profile':
              return   <Image style={{height:18,width:18,resizeMode:"contain"}} source={require('./assets/Profile.png')} />
              break;
            default:
              break;
          }
          // return <Icon name={iconName} size={size} color={color} />;  
        },
      })}>
      <HomeTabNav.Screen name="Download" component={HomeDownloadStack} />
      <HomeTabNav.Screen name="Search" component={HomeSearchStack} />
      <HomeTabNav.Screen name="Home" component={HomeTabAStack} />
      <HomeTabNav.Screen name="List" component={HomeListStack} />
      <HomeTabNav.Screen name="Profile" component={HomeSearchStack} />

    </HomeTabNav.Navigator>
  );
}

const NotificationStackNav = createStackNavigator();
function NotificationsStack() {
  return (
    <NotificationStackNav.Navigator screenOptions={{
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
      },
    }}>
      <NotificationStackNav.Screen
        name="Notfications"
        component={NotificationsScreen}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
        })}
      />
    </NotificationStackNav.Navigator>
  );
}

function RootContainer({ user }) {
  if (user?.loggedin)
    return (
      <NavigationContainer>
        <Drawer.Navigator    drawerContentOptions={{
                activeTintColor: '#fff',
                inactiveTintColor:'#aeaeae',
                itemStyle: { marginVertical: 8, marginHorizontal: 8 },
            }} initialRouteName="Home" drawerStyle={{
          backgroundColor: '#0e101f',
          width: 280,
          color:"#fff",
        }}>
          <Drawer.Screen options={{ activeTintColor:"#fff" }} name="Home" component={HomeTab} />
          <Drawer.Screen name="Notifications" component={NotificationsStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  else
    return (
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    );
}

const mapStateToProps = state => {
  return { user: state?.user };
};
export default connect(mapStateToProps)(RootContainer);
