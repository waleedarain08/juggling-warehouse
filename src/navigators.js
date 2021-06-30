import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TabB, TabBDetails } from './pages/home/tabB';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import search from './pages/search/search';
import profile from './pages/profile/profile';
import download from './pages/download/download';
import list from './pages/list/list';
import { NavigationContainer } from '@react-navigation/native';
import NotificationsScreen from './pages/notificationsScreen/notificationScreen';
import React from 'react';
import HomeScreen from './pages/home/HomeScreen';
import DetailScreen from './pages/home/DetailScreen';
import CustomDrawer from './CustomDrawer';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { bindActionCreators } from 'redux';
import { userLogout } from '../../redux/actions';

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

const notificationIcon = navigation => {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <View style={{ flex: 1, flexDirection: "row", backgroundColor: "red", alignItems: "center", padding: 4, borderRadius: 3, marginRight: 10 }}>
        <View style={{ backgroundColor: "#fff", height: 6, width: 6, padding: 0, borderRadius: 3 }}></View>
        <Text style={{ color: "#fff", fontSize: 10, fontWeight: '800', marginLeft: 5 }}>Live Now</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Icon
          name="notifications"
          size={24}
          style={{ marginRight: 10, color: "#fff" }}
          onPress={() => navigation.navigate("Notifications")}
        />
      </View>
    </View>
  );
};
const profiletionIcon = navigation => {
  return (
    <TouchableOpacity>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image style={{ width: 13, height: 13, resizeMode: "contain", marginRight: 14 }} source={require('./assets/edit03.png')} />
      </View>
    </TouchableOpacity>
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
        fontFamily: 'Raleway-Regular'
      },
    }}>
      <HomeTabAStackNav.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
          headerRight: () => notificationIcon(navigation)
        })}
      />
      <HomeTabAStackNav.Screen name="About Motivation" component={DetailScreen} />
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
        fontFamily: 'Raleway-Regular'
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
        fontFamily: 'Raleway-Regular'
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
        fontFamily: 'Raleway-Regular'
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

const HomeProfileStackNav = createStackNavigator();
function HomeProfileStack() {
  return (
    <HomeProfileStackNav.Navigator initialRouteName="Profile" screenOptions={{
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
        fontFamily: 'Raleway-Regular'
      },
    }}>
      <HomeProfileStackNav.Screen
        name="My Profile"
        component={profile}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
          headerRight: () => profiletionIcon(navigation)
        })}
      />
    </HomeProfileStackNav.Navigator>
  );
}


const HomeTabNav = createBottomTabNavigator();

function HomeTab() {
  return (
    <HomeTabNav.Navigator
      initialRouteName={"Home"}
      tabBarOptions={
        {
          showLabel: false,
          tabStyle: {
            paddingVertical: 3,
            borderRadius: 8,
          },
          style: {
            borderWidth:1,
            borderTopColor:"#fff",
            backgroundColor: '#0e101f',
            position: 'absolute',
            borderTopWidth: 0.1,
            elevation: 0,

          },
          activeTintColor: "#fff",
          inactiveTintColor: 'gray',
          //activeBackgroundColor: '#1a72b9',
          ///inactiveBackgroundColor: '#0e101f',
        }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Download':
              return <View style={focused ? styles.focusedTab : styles.notFocusedTab}><Image style={{ height: 18, width: 18, resizeMode: "contain" }} source={require('./assets/downloadicon.png')} /></View>
            case 'Search':
              return <View style={focused ? styles.focusedTab : styles.notFocusedTab}><Image style={{ height: 18, width: 18, resizeMode: "contain" }} source={require('./assets/search.png')} /></View>
              break;
            case 'Home':
              return <View style={focused ? styles.focusedTab : styles.notFocusedTab}><Image style={{ height: 18, width: 18, resizeMode: "contain" }} source={require('./assets/homeicon.png')} /></View>
              break;
            case 'List':
              return <View style={focused ? styles.focusedTab : styles.notFocusedTab}><Image style={{ height: 18, width: 18, resizeMode: "contain" }} source={require('./assets/playlisticon.png')} /></View>
              break;
            case 'Profile':
              return <View style={focused ? styles.focusedTab : styles.notFocusedTab}><Image style={{ height: 18, width: 18, resizeMode: "contain" }} source={require('./assets/profileicon.png')} /></View>
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
      <HomeTabNav.Screen name="Profile" component={HomeProfileStack} />

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
        <Drawer.Navigator
          drawerContent={props => <CustomDrawer {...props} />}
          drawerContentOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: '#aeaeae',
            itemStyle: { marginVertical: 8, marginHorizontal: 8 },
          }}
          initialRouteName="Home"
          drawerStyle={{
            backgroundColor: '#0e101f',
            opacity: 0.9,
            width: 300,
            color: "#fff",
          }}>
          <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Home" component={HomeTab} />
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

const styles = StyleSheet.create({
  focusedTab: {
    width: 60,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a72b9",
    borderRadius: 6,
    //borderWidth: 0.2,
    //borderColor: "#aeaeae",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.27,
    shadowRadius: 0.65,

    elevation: 6,
  },
  notFocusedTab: {

  }
});