import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions';



export default function profile({ navigation }) {
    const [search, setSearch] = useState("");
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ height: 800,backgroundColor:"#0e101f" }}  showsVerticalScrollIndicator={false}>
            <View style={{ flex: 2.5, }}>
                <View style={styles.profilpage}>
                    <Image style={styles.man} source={require('../../assets/02-tile.png')} />
                    <Image style={styles.camera} source={require('../../assets/editcamera02.png')} />
                    <Text style={styles.manname}>Donatella Nobatti</Text>
                    <Text style={styles.city}>Boston,MA 02101</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.myprofile}>
                        <View style={{ flex: 1, }}>
                            <Text style={styles.profiledv}>My Profile</Text>
                            <Text style={styles.totalprofile}>02</Text>
                        </View>
                        <View style={{
                            width:20, marginTop: 13, backgroundColor: "#717171", height: 0.4, transform: [
                                { rotateY: "60deg" },
                                { rotateZ: "90deg" }
                            ]
                        }}></View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.downloaddv}>My Downloads</Text>
                            <Text style={styles.totaldownload}>06</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.profiledetail}>
                <View style={styles.detail}>
                    <View style={styles.mandetail}>
                        <Image style={styles.user} source={require('../../assets/profle06.png')} />
                        <Text style={styles.fullname}>FullName</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Text style={styles.detaildv}>Donatella Nobatti</Text>
                    </View>
                </View>
                <View style={styles.detail}>
                    <View style={styles.mandetail}>
                        <Image style={styles.emailadd} source={require('../../assets/email04.png')} />
                        <Text style={styles.fullname}>Email Address</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Text style={styles.detaildv}>Donatella-Nobatti@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.detail}>
                    <View style={styles.mandetail}>
                        <Image style={styles.user} source={require('../../assets/phone05.png')} />
                        <Text style={styles.fullname}>Phone Number</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Text style={styles.detaildv}>2545426532</Text>
                    </View>
                </View>
                <View style={styles.detail}>
                    <View style={styles.mandetail}>
                        <Image style={styles.user} source={require('../../assets/date01.png')} />
                        <Text style={styles.fullname}>Date of Birth</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Text style={styles.detaildv}>March 08,1987</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
     
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0e101f",
    },
    profilpage: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    myprofile: {
        flexDirection: "row",
    },
    man: {
        width: 90,
        height: 90,
        borderRadius: 8,
        position:"relative",
    },
    camera:{
        width: 20,
        height: 20,
        resizeMode:"contain",
        position:"absolute",
        right:"38%",
        bottom:"39%"
    },
    manname: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 14,
        paddingTop: 15,
        fontFamily:'Raleway-Regular'

    },
    city: {
        color: "#e8e8ea",
        fontSize: 10
    },
    profiledv: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 10,
        fontWeight: "bold",
        fontFamily:'Raleway-Regular'
    },
    totalprofile: {
        color: "#1974ba",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    totaldownload: {
        color: "#1974ba",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    downloaddv: {
        color: "#ffffff",
        fontSize: 10,
        fontWeight: "bold", textAlign: "center",    fontFamily:'Raleway-Regular'

    },
    profiledetail: {
        flex: 2.5, backgroundColor: "#0d0f1c",
        paddingHorizontal: 20,
        borderRadius:12,

        elevation: 5,
    },
    user: {
        width: 13,
        height: 15,
        resizeMode:"contain"
    },
    emailadd:{
        width: 16,
        height: 14, resizeMode:"contain"
    },
    detail: {
        flexDirection: "row"
    },
    mandetail: {
        flexDirection: "row",
        flex: 0,
        paddingVertical: 30,
    },
    detaildv: {
        color: "#ffffff",
        textAlign: "right",
        fontSize: 10,
    },
    fullname: {
        color: "#ffffff",
        fontSize: 10,
        paddingLeft: 8,
        fontFamily:'Raleway-Regular'

    }
})
