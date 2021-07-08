import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component, useState } from 'react';
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
import CustomDrawer from './CustomDrawer';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import CustomTabBar from './CustomTabBar';
import LiveNow from './pages/home/LiveNow';


const useInitialRender = () => {
  const [isInitialRender, setIsInitialRender] = useState(false)

  if (!isInitialRender) {
    setTimeout(() => setIsInitialRender(true), 1)
    return true
  }
  return false
}


const drawerButton = navigation => {
  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}>
      <Image
        source={require('./assets/menu-icon.png')}
        style={{ width: 20, height: 20, resizeMode: 'contain', marginLeft: 12 }}
      />
    </TouchableOpacity>
  );
};

const notificationIcon = navigation => {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("LiveNow")} style={{ flex: 1, flexDirection: "row", backgroundColor: "red", alignItems: "center", padding: 4, borderRadius: 3, marginRight: 10 }}>
        <View style={{ backgroundColor: "#fff", height: 6, width: 6, padding: 0, borderRadius: 3 }}></View>
        <Text style={{ color: "#fff", fontSize: 10, fontWeight: '800', marginLeft: 5 }}>Live Now</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Icon
          name="notifications-outline"
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
const HomeTabAStackNav = createStackNavigator();
const HomeDownloadStackNav = createStackNavigator();
const HomeSearchStackNav = createStackNavigator();
const HomeListStackNav = createStackNavigator();
const HomeTabNav = createBottomTabNavigator();
const HomeProfileStackNav = createStackNavigator();


function LoginStack() {
  return (
    <LoginStackNav.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName="Login">
      <LoginStackNav.Screen name="Login" component={Login} />
      <LoginStackNav.Screen name="Signup" component={Signup} />
      <LoginStackNav.Screen name="ForgatPassword" component={ForgatPassword} />
    </LoginStackNav.Navigator>
  );
}

function HomeTabAStack() {
  return (
    <HomeTabAStackNav.Navigator initialRouteName="Home" screenOptions={{
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
      <HomeTabAStackNav.Screen name="LiveNow" component={LiveNow} />
      <HomeTabAStackNav.Screen name="Notifications" component={NotificationsScreen}
     options={({ navigation }) => ({
      headerShown: false
    })}
      />
      <HomeTabAStackNav.Screen name="ChangePassword" component={ChangePassword}  options={({ navigation }) => ({
      headerShown: false
    })}/>
    </HomeTabAStackNav.Navigator>
  );
}

function HomeDownloadStack() {
  return (
    <HomeDownloadStackNav.Navigator initialRouteName="Downloads" screenOptions={{
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
          headerRight: () => notificationIcon(navigation)
        })}
      />
      <HomeTabAStackNav.Screen name="Notifications" component={NotificationsScreen}
     options={({ navigation }) => ({
      headerShown: false
    })}
      />
      {/* <HomeDownloadStackNav.Screen name="TabBDetails" component={TabBDetails} /> */}
    </HomeDownloadStackNav.Navigator>
  );
}

function HomeSearchStack() {
  return (
    <HomeSearchStackNav.Navigator initialRouteName="Search" screenOptions={{
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
          headerRight: () => notificationIcon(navigation)
        })}
      />
      <HomeTabAStackNav.Screen name="Notifications" component={NotificationsScreen}
       options={({ navigation }) => ({
        headerShown: false
      })}
      />
      {/* <HomeSearchStackNav.Screen name="TabBDetails" component={TabBDetails} /> */}
    </HomeSearchStackNav.Navigator>
  );
}

function HomeListStack() {
  return (
    <HomeListStackNav.Navigator initialRouteName="MyList" screenOptions={{
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
        name="MyList"
        component={list}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
          headerRight: () => notificationIcon(navigation)
        })}
      />
      <HomeTabAStackNav.Screen name="Notifications" component={NotificationsScreen}
        options={({ navigation }) => ({
          headerShown: false
        })}
      />
    </HomeListStackNav.Navigator>
  );
}

function HomeProfileStack() {
  return (
    <HomeProfileStackNav.Navigator initialRouteName="MyProfile" screenOptions={{
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
        name="MyProfile"
        component={profile}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
          headerRight: () => profiletionIcon(navigation)
        })}
      />
    </HomeProfileStackNav.Navigator>
  );
}

function HomeTab() {
  return (
    <HomeTabNav.Navigator
      initialRouteName={"Home"}
      tabBar={props => {
        return (
          <View style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0
          }}
          >
            <CustomTabBar {...props} />
          </View>
        )
      }}
    >
      <HomeTabNav.Screen name="Download" component={HomeDownloadStack} />
      <HomeTabNav.Screen name="Search" component={HomeSearchStack} />
      <HomeTabNav.Screen name="Home" component={HomeTabAStack} />
      <HomeTabNav.Screen name="List" component={HomeListStack} />
      <HomeTabNav.Screen name="Profile" component={HomeProfileStack} />
    </HomeTabNav.Navigator>
  );
}

function RootContainer({ user }) {

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      drawerContentOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#aeaeae',
        itemStyle: { marginVertical: 8, marginHorizontal: 8 },
      }}
      initialRouteName="Home"
      drawerStyle={{
        // backgroundColor: '#0e101f',
        opacity: 1
      }}
      drawerType="front"
    >
      <Drawer.Screen name="main">
        {() =>
          user?.loggedin ? HomeTab() : (
              <LoginStack />

            )
        }
      </Drawer.Screen>
    </Drawer.Navigator>
  )

}

const mapStateToProps = state => {
  return { user: state?.user };
};
export default connect(mapStateToProps)(RootContainer);

