import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
    TouchableOpacity
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Switch } from 'react-native-elements';
import {userLogout}  from './redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


function CustomDrawer({navigation,userLogout}) {
    const BASE_PATH =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
    const proileImage = 'react_logo.png';
    const [toggle, setToggle] = useState(false);
    const [wifi, setWifi] = useState(true);
    const [smart, setSmart] = useState(false);
    const [quality, setQuality] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingLeft: 14 }}>
                <Text style={styles.setting}>SETTINGS</Text>
                <View style={{ borderBottomWidth: 2, borderBottomColor: "#666670", paddingTop: 4, width: 22, }}></View>
            </View>
            <DrawerContentScrollView >
                {/* <DrawerItemList {...props} />
                <DrawerItem
                    label=" "
                    onPress={() => Linking.openURL('https://aboutreact.com/')}
                >        </DrawerItem> */}

                <View style={styles.customItem}>
                    <View style={{ flexDirection: "row", alignItems: 'center', paddingVertical: 5 }}>
                        <View style={{ flex: 0.5 }}>
                            <Image style={styles.iconlogo1} source={require('./assets/notification03.png')} />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold"}}
                                onPress={() => {
                                    navigation.navigate("Notifications")
                                }}>
                                Notification
                  </Text>
                        </View>
                        <View style={{ flex: 0.7 }}>
                            <Switch style={{ transform: [{ scaleX: .6 }, { scaleY: .6 }] }} onValueChange={() => setToggle(!toggle)} value={!toggle} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center', paddingVertical: 10 }}>
                        <View style={{ flex: 0.5 }}>
                            <Image style={styles.iconlogo1} source={require('./assets/wifi.png')} />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "bold", }}>
                                Wi-fi Only
                  </Text>
                        </View>
                        <View style={{ flex: 0.7 }}>
                            <Switch style={{ transform: [{ scaleX: .6 }, { scaleY: .6 }] }} onValueChange={() => setWifi(!wifi)} value={!wifi} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center', paddingVertical: 10 }}>
                        <View style={{ flex: 0.5 }}>
                            <Image style={styles.iconlogo} source={require('./assets/signal02.png')} />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "bold", }}>
                                Smart Wifi
                  </Text>
                            <Text style={styles.para}>Complete episodes will be deleted and replaced with the next episodes, only Wi-fi</Text>
                        </View>
                        <View style={{ flex: 0.7 }}>
                            <Switch style={{ transform: [{ scaleX: .6 }, { scaleY: .6 }] }} onValueChange={() => setSmart(!smart)} value={!smart} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center', paddingVertical: 10 }}>
                        <View style={{ flex: 0.5 }}>
                            <Image style={styles.iconlogo} source={require('./assets/videoquality04.png')} />
                        </View>
                        <View style={{ flex: 3, }}>
                            <View>
                                <Text style={{ color: "#fff", fontSize: 12, fontWeight: "bold", }}>
                                    Video Quality</Text>
                                <Text style={{ color: "#b2b2b4", fontSize: 12, }}>Standard</Text></View>

                        </View>

                        <View style={{ flex: 0.4 }}>
                            <TouchableOpacity onPress={() => setQuality(!quality)}>
                                <Image style={quality?styles.dropdown:styles.transform} source={require('./assets/dropdown01.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {quality &&
                        <View >
                            <Text style={styles.standard}>Standard</Text>
                            <Text style={styles.storage}>Download faster and user less storage</Text>
                            <View style={{ paddingVertical: 8, }}>
                                <Text style={styles.standard}>Standard</Text>
                                <Text style={styles.storage}>User more storage</Text>
                            </View>
                        </View>
                    }
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#282a37", paddingTop: 8 }}></View>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={styles.deletelogo} source={require('./assets/delete02.png')} />
                        <Text style={styles.delete}>Delete All Downloads</Text>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#282a37", paddingTop: 4 }}></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.password}>Change Password</Text>
                        <Image style={styles.dropdownright} source={require('./assets/dropdown01.png')} />
                    </View>
                </View>
            </DrawerContentScrollView>
            <View style={{ paddingLeft: 14, }}>
                <View style={{ borderBottomWidth: 2, borderBottomColor: "#666670", width: 22, marginBottom: 4 }}></View>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>userLogout()} style={{ flexDirection: "row", }}>
                    <Image style={styles.logout} source={require('./assets/logout05.png')} />
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'grey',
                            paddingVertical: 6,
                            marginBottom: 15,
                            fontFamily: 'Raleway-Regular',
                            paddingLeft: 6
                        }}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        paddingHorizontal:14,
        paddingVertical:10,
    },
    para: {
        color: "#b2b2b4",
        fontSize: 9,
        fontFamily: 'Raleway-Regular'
    },
    setting: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "bold",
        paddingTop: 20,
        fontFamily: 'Raleway-Regular',
    },
    line: {
        color: "#ffffff",
        height: 10
    },
    standard: {
        color: "#ffffff",
        paddingLeft: "14%",
        fontSize: 12,
        fontFamily: 'Raleway-Regular'

    },
    storage: {
        color: "#7a7b80",
        paddingLeft: "14%",
        fontSize: 10,
        fontFamily: 'Raleway-Regular'
    },
    delete: {
        color: "#ffffff",
        fontSize: 12,
        fontWeight: "bold",
        paddingVertical: 18,
        fontFamily: 'Raleway-Regular',
        paddingLeft: 10
    },
    password: {
        color: "#ffffff",
        fontSize: 12,
        fontWeight: "bold",
        paddingVertical: 20,
        fontFamily: 'Raleway-Regular'
    },
    iconlogo: {
        width: 15,
        height: 15,
        resizeMode: "contain",
    },
    iconlogo1: {
        width: 18,
        height: 16,
        resizeMode: "contain",
    },
    logout: {
        width: 22,
        height: 22,
        marginTop: 8
    },
    dropdown: {
        width: 8,
        height: 12,
        transform: [{ rotate: '90deg' }]
    },
    transform: {
        width: 8,
        height: 12,
        //transform: [{ rotate: '90deg' }]
    },
    dropdownright: {
        width: 8,
        height: 12,
        marginVertical: 25,
        marginRight: 18
    },
    deletelogo: {
        width: 10,
        height: 16,
        marginVertical: 16,
        resizeMode:"contain",
    }
});

const mapStateToProps = state => {
    return { userInfo: state?.userInfo };
  };
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({ userLogout }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);